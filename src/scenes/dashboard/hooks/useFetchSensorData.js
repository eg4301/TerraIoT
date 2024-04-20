import { useEffect, useState } from 'react';
import { sensorService } from '../../../shared/services/sensor.service';
import { useSearchParams } from 'react-router-dom';
import { DatasetEnum } from '../../../shared/enums/dataset.enum';

export const useFetchSensorData = () => {
  const [searcParams] = useSearchParams();
  const dataset = searcParams.get('dataset') || DatasetEnum.HYDROPONICS;
  const soilMAC = searcParams.get('MAC') || 3;
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const atmTemperatureSeries = sensorService.generateAtmTemperatureSeries(
    dataset,
    records
  );
  const co2Series = sensorService.generateCO2Series(dataset, records);
  const o2Series = sensorService.generateO2Series(dataset, records);
  const humiditySeries = sensorService.generateHumiditySeries(dataset, records);
  const waterSeries = sensorService.generateWaterSeries(dataset, records);
  const conductivitySeries = sensorService.generateConductivitySeries(
    dataset,
    records
  );
  const pHSeries = sensorService.generatePHSeries(dataset, records);

  useEffect(() => {
    if (dataset === DatasetEnum.SOIL) {
      setLoading(true);
      Promise.all([
        sensorService.getSoilSensorsData(
          soilMAC,
          dateRange.startDate,
          dateRange.endDate
        ),
      ])
        .then((res) => {
          const [records] = res;
          setRecords(records);
        })
        .catch((error) => {
          const errMsg = error?.message || 'Something went wrong!';
          console.error(error);
          setError(errMsg);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [dateRange, dataset, setRecords, soilMAC]);

  useEffect(() => {
    if (dataset === DatasetEnum.HYDROPONICS) {
      setLoading(true);
      Promise.all([
        sensorService.getHydroponicsSensorsData(
          1,
          dateRange.startDate,
          dateRange.endDate
        ),
        sensorService.getHydroponicsSensorsData(
          2,
          dateRange.startDate,
          dateRange.endDate
        ),
      ])
        .then((res) => {
          const [mac1Records, mac2Records] = res;
          setRecords([...mac1Records, ...mac2Records]);
        })
        .catch((error) => {
          const errMsg = error?.message || 'Something went wrong!';
          console.error(error);
          setError(errMsg);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [dateRange, dataset]);

  const handleOnDateRangeChange = (startDate, endDate) => {
    setDateRange({
      startDate,
      endDate,
    });
  };

  return {
    loading,
    records,
    error,
    atmTemperatureSeries,
    co2Series,
    o2Series,
    humiditySeries,
    waterSeries,
    conductivitySeries,
    pHSeries,
    handleOnDateRangeChange,
  };
};
