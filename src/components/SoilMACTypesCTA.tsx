import { Box, Button, useTheme } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { tokens } from '../theme';
import { DatasetEnum } from '../shared/enums/dataset.enum';
import { SoilMACTypes } from '../shared/services/sensor.service';

export const SoilMACTypesCTA = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [searchParams] = useSearchParams();
  const dataset = searchParams.get('dataset') || DatasetEnum.HYDROPONICS;
  const MAC = searchParams.get('MAC') || 3;

  const handleMACTypeClick = (MAC: SoilMACTypes) => () => {
    window.location.search = new URLSearchParams({
      dataset,
      MAC: `${MAC}`,
    }).toString();
  };

  if (dataset === DatasetEnum.HYDROPONICS) {
    return null;
  }

  return (
    <Box
      color="white"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '7px',
        border: `1px solid ${colors.grey[100]}`,
        borderRadius: '10px',
        padding: '8px 5px',
        position: 'relative',
        top: '10px',
        fontSize: '12px',
      }}
    >
      <Button
        sx={{
          fontSize: 'inherit',
        }}
        variant="text"
        color={+MAC === 3 ? 'secondary' : 'inherit'}
        onClick={handleMACTypeClick(3)}
      >
        MAC3
      </Button>
      <Box sx={{ width: '2px', height: '25px', bgcolor: colors.grey[100] }} />
      <Button
        sx={{
          fontSize: 'inherit',
        }}
        variant="text"
        color={+MAC === 4 ? 'secondary' : 'inherit'}
        onClick={handleMACTypeClick(4)}
      >
        MAC4
      </Button>
      <Box sx={{ width: '2px', height: '25px', bgcolor: colors.grey[100] }} />
      <Button
        sx={{
          fontSize: 'inherit',
        }}
        variant="text"
        color={+MAC === 5 ? 'secondary' : 'inherit'}
        onClick={handleMACTypeClick(5)}
      >
        MAC5
      </Button>
      <Box sx={{ width: '2px', height: '25px', bgcolor: colors.grey[100] }} />
      <Button
        sx={{
          fontSize: 'inherit',
        }}
        variant="text"
        color={+MAC === 6 ? 'secondary' : 'inherit'}
        onClick={handleMACTypeClick(6)}
      >
        MAC6
      </Button>
    </Box>
  );
};
