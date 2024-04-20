import React, { useCallback, useEffect, useRef, useState } from 'react';
import { sensorService } from '../../../shared/services';
import { useSearchParams } from 'react-router-dom';
import { DatasetEnum } from '../../../shared/enums/dataset.enum';

const initialFormState = {
  CO2: undefined,
  O2: undefined,
  atm_temperature: undefined,
  conductivity: undefined,
  humidity: undefined,
  pH: undefined,
  temperature: undefined,
};

export const useActuationMinMax = () => {
  const [searchParams] = useSearchParams();
  const dataset = searchParams.get('dataset') || DatasetEnum.HYDROPONICS;
  const isDirectyRef = useRef(false);
  const [loading, setIsLoading] = useState(false);
  const [actuations, setActuations] = useState([]);
  const [state, setState] = useState({
    min: initialFormState,
    max: initialFormState,
  });

  const fetchRecords = useCallback(async () => {
    try {
      setIsLoading(true);
      const Setup = dataset === DatasetEnum.HYDROPONICS ? 'RAC 1' : 'Soil 1';
      const actuationMinData = await sensorService.getActuationMinData(Setup);
      const actuationMaxData = await sensorService.getActuationMaxData(Setup);
      const data = sensorService.mergeActuationMinMax(
        actuationMinData,
        actuationMaxData
      );
      setActuations(data);
      for (let actuation of actuationMinData) {
        setState((prev) => ({
          ...prev,
          min: {
            ...prev.min,
            [actuation.Variable]: actuation.Min,
          },
        }));
      }
      for (let actuation of actuationMaxData) {
        setState((prev) => ({
          ...prev,
          max: {
            ...prev.max,
            [actuation.Variable]: actuation.Max,
          },
        }));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [dataset]);

  useEffect(() => {
    fetchRecords();
  }, [fetchRecords]);

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prev) => ({
      ...prev,
      min: {
        ...prev.min,
        [name]: value,
      },
    }));
    isDirectyRef.current = true;
  };
  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prev) => ({
      ...prev,
      max: {
        ...prev.max,
        [name]: value,
      },
    }));
    isDirectyRef.current = true;
  };

  const handleSaveChanges = async () => {
    if (!isDirectyRef.current) {
      return;
    }
    const minActuationPromises = [];
    for (let key in state.min) {
      const actuation = actuations.find(
        (actuation) => actuation.Variable === key
      );
      minActuationPromises.push(
        sensorService.updateActuationMinRecord({
          Setup: actuation.Setup,
          Variable: actuation.Variable,
          Min: state.min[key] as number,
        })
      );
    }
    const maxActuationPromises = [];
    for (let key in state.max) {
      const actuation = actuations.find(
        (actuation) => actuation.Variable === key
      );
      minActuationPromises.push(
        sensorService.updateActuationMaxRecord({
          Setup: actuation.Setup,
          Variable: actuation.Variable,
          Max: state.max[key] as number,
        })
      );
    }

    await Promise.all(minActuationPromises);
    await Promise.all(maxActuationPromises);
    await fetchRecords();
    isDirectyRef.current = false;
  };

  return {
    actuations,
    loading,
    formState: state,
    handleMinChange,
    handleMaxChange,
    handleSaveChanges,
  };
};
