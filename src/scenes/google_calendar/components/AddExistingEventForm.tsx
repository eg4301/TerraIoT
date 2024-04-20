import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { parseISO, addDays } from 'date-fns';
import {
  Backdrop,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  useTheme,
} from '@mui/material';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import React, { useEffect, useState } from 'react';
import { useGoogleCalendarContext } from '../../../context/GoogleCalendarProvider';
import { eventTemplateService } from '../../../shared/services/event-template.service';
import { EventTemplate } from '../../../API';
import { tokens } from '../../../theme';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const addExistingEventTemplateSchema = z.object({
  eventTemplates: z.array(
    z.object({
      selectedTemplate: z
        .string({
          required_error: 'Event Name is required',
        })
        .min(1, 'Event Name is required'),
      eventName: z
        .string({
          required_error: 'Event Name is required',
        })
        .min(1, 'Event Name is required'),
      description: z
        .string({
          required_error: 'Description is required',
        })
        .min(1, 'Description is required'),
      duration: z
        .string({
          required_error: 'Duration is required',
        })
        .min(1, 'Duration is required'),
      startDate: z.date(),
      calendarId: z
        .string({
          required_error: 'CalendarId is required',
        })
        .min(1, 'CalendarId is required'),
    })
  ),
});

export type EventTemplateInputType = z.infer<
  typeof addExistingEventTemplateSchema
>['eventTemplates'][number];
export type EventTemplatesInputType = z.infer<
  typeof addExistingEventTemplateSchema
>;

export const AddExistingEventForm = () => {
  const { user } = useAuthenticator();
  const {
    calendarId,
    googleSession,
    handleAddNewEvent,
    hideEventForm,
    clearGoogleSession,
  } = useGoogleCalendarContext();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isLoading, setIsLoading] = useState(false);
  const [templates, setTemplates] = useState<EventTemplate[]>([]);
  const { handleSubmit, setValue, register, control, watch } =
    useForm<EventTemplatesInputType>({
      mode: 'onSubmit',
      resolver: zodResolver(addExistingEventTemplateSchema),
      defaultValues: {
        eventTemplates: [
          {
            selectedTemplate: '',
            eventName: '',
            description: '',
            duration: '',
            startDate: new Date(),
            calendarId,
          },
        ],
      },
    });
  console.log(watch('eventTemplates'));
  const { fields: eventTemplates, append } = useFieldArray({
    name: 'eventTemplates',
    control,
  });

  useEffect(() => {
    if (user?.userId) {
      setIsLoading(true);
      eventTemplateService
        .getEventTemplatesByUserId(user.userId)
        .then((templates) => {
          setTemplates(templates);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [user]);

  const handleDateChange = (elementIndex: number) => (newValue) => {
    setValue(`eventTemplates.${elementIndex}.startDate`, newValue);
  };

  const onSubmit = async (values: EventTemplatesInputType) => {
    try {
      console.log(values);
      const promises = values.eventTemplates.map(async (event) => {
        const response = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${event.calendarId}/events`,
          {
            method: 'POST',
            headers: {
              Authorization: 'Bearer ' + googleSession.access_token,
            },
            body: JSON.stringify({
              summary: event.eventName,
              description: event.description,
              end: {
                dateTime: addDays(
                  event.startDate,
                  +event.duration
                ).toISOString(),
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
              },
              start: {
                dateTime: event.startDate.toISOString(),
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
              },
            }),
          }
        );
        return response.json();
      });

      const events = await Promise.all(promises);
      const isError = events.find(
        (event) =>
          event?.error?.code === 401 &&
          event?.error?.status === 'UNAUTHENTICATED'
      );

      if (isError) {
        clearGoogleSession();
        return;
      }
      for (const event of events) {
        handleAddNewEvent({
          title: event.summary,
          start: parseISO(event.start.dateTime),
          end: parseISO(event.end.dateTime),
          allDay: false,
        });
      }

      hideEventForm();
    } catch (error) {
      clearGoogleSession();
      console.error(error);
    }
  };

  const handleSelectExistingEvent =
    (elementIndex: number) => (event: SelectChangeEvent) => {
      const eventTemplateId = event.target.value;
      if (eventTemplateId) {
        const eventTemplate = templates.find(
          (template) => template.id === eventTemplateId
        );
        setValue(
          `eventTemplates.${elementIndex}.selectedTemplate`,
          eventTemplate.id
        );
        setValue(
          `eventTemplates.${elementIndex}.eventName`,
          eventTemplate.eventName
        );
        setValue(
          `eventTemplates.${elementIndex}.description`,
          eventTemplate.description
        );
        setValue(
          `eventTemplates.${elementIndex}.duration`,
          eventTemplate.duration.toString()
        );
      }
    };

  const handleEventEvent = () => {
    append({
      selectedTemplate: '',
      eventName: '',
      description: '',
      duration: '',
      startDate: new Date(),
      calendarId,
    });
  };

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          gap={2}
        >
          <Typography variant="h3" mb={2}>
            Add Existing Crop Cycle
          </Typography>
          <Button
            variant="outlined"
            color="info"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px',
            }}
            onClick={handleEventEvent}
          >
            <AddCircleOutlineOutlinedIcon color="info" />
            <span>Add Event</span>
          </Button>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            {eventTemplates.map((field, index) => (
              <>
                {/* <Grid item xs={12} md={6}>
                  <TextField
                    required
                    autoComplete="off"
                    id={`eventTemplates.${index}.calendarId`}
                    fullWidth
                    label="Calendar Id"
                    variant="outlined"
                    {...register(`eventTemplates.${index}.calendarId`)}
                    sx={{
                      '& fieldset': {
                        border: `1px solid ${colors.grey[100]} !important`,
                      },
                      '& label': {
                        color: `${colors.grey[100]} !important`,
                      },
                    }}
                  />
                </Grid> */}

                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel
                      sx={{ color: `${colors.grey[100]} !important` }}
                      id="demo-simple-select-label"
                    >
                      Crop Cycle
                    </InputLabel>

                    <Select
                      labelId="demo-simple-select-label"
                      id={`eventTemplates.${index}.selectedTemplate`}
                      label="Event"
                      {...register(`eventTemplates.${index}.selectedTemplate`)}
                      sx={{
                        '& fieldset': {
                          border: `1px solid ${colors.grey[100]} !important`,
                        },
                        '& label': {
                          color: `${colors.grey[100]} !important`,
                        },
                      }}
                      onChange={handleSelectExistingEvent(index)}
                    >
                      {templates.map((template) => (
                        <MenuItem value={template.id}>
                          {template.eventName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                {/* <Grid item xs={12} md={6}>
                  <TextField
                    autoComplete="off"
                    name="description"
                    fullWidth
                    label="Description"
                    variant="outlined"
                    id={`eventTemplates.${index}.description`}
                    {...register(`eventTemplates.${index}.description`)}
                    sx={{
                      '& fieldset': {
                        border: `1px solid ${colors.grey[100]} !important`,
                      },
                      '& label': {
                        color: `${colors.grey[100]} !important`,
                      },
                    }}
                  />
                </Grid> */}

                <Grid item xs={12} md={6}>
                  <MobileDateTimePicker
                    label="Start Date"
                    sx={{
                      width: '100%',
                      '& fieldset': {
                        border: `1px solid ${colors.grey[100]} !important`,
                      },
                      '& label': {
                        color: `${colors.grey[100]} !important`,
                      },
                    }}
                    name={`eventTemplates.${index}.startDate`}
                    {...register(`eventTemplates.${index}.startDate`)}
                    onChange={handleDateChange(index)}
                  />
                </Grid>
              </>
            ))}

            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  textTransform: 'unset',
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: colors.greenAccent[700],
                  },
                }}
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={hideEventForm}
                fullWidth
                type="button"
                variant="contained"
                sx={{
                  backgroundColor: colors.blueAccent[500],
                  textTransform: 'unset',
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: colors.blueAccent[700],
                  },
                }}
              >
                Back
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};
