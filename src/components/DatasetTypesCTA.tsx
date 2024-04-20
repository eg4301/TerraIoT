import { Box, Button, useTheme } from '@mui/material';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { tokens } from '../theme';
import { DatasetEnum } from '../shared/enums/dataset.enum';
import GrassIcon from '@mui/icons-material/Grass';

export const DatasetTypesCTA = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [searchParams] = useSearchParams();
  const dataset = searchParams.get('dataset') || DatasetEnum.HYDROPONICS;

  const handleDatasetTypeClick = (dataset: DatasetEnum) => () => {
    window.location.search = new URLSearchParams({
      dataset,
    }).toString();
  };

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
        color={dataset === DatasetEnum.SOIL ? 'secondary' : 'inherit'}
        onClick={handleDatasetTypeClick(DatasetEnum.SOIL)}
      >
        Soil
      </Button>
      <Box sx={{ width: '2px', height: '25px', bgcolor: colors.grey[100] }} />
      <Button
        sx={{
          fontSize: 'inherit',
        }}
        variant="text"
        color={dataset === DatasetEnum.HYDROPONICS ? 'secondary' : 'inherit'}
        onClick={handleDatasetTypeClick(DatasetEnum.HYDROPONICS)}
      >
        Hydroponics
      </Button>
    </Box>
  );
};
