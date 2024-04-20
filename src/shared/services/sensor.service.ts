import {
  ActuationMax,
  ActuationMin,
  UpdateActuationMaxInput,
  UpdateActuationMinInput,
} from '../../API';
import {
  listRACMAC1Sensors,
  listRACMAC2Sensors,
  listSoilMACSensors,
} from '../../graphql/custom-queries';
import {
  updateActuationMax,
  updateActuationMin,
} from '../../graphql/mutations';
import { listActuationMins, listActuationMaxes } from '../../graphql/queries';
import { DatasetEnum } from '../enums/dataset.enum';
import { execute } from '../utils/api';
import { TimeSeries } from 'pondjs';

export type HydroponicsMACTypes = 1 | 2;
export type SoilMACTypes = 3 | 4 | 5 | 6;

class SernsorService {
  async getActuationMinData(Setup: string) {
    const response = await execute(
      {
        statement: listActuationMins,
        name: 'listActuationMins',
      },
      {
        Setup,
      }
    );

    return response.items || [];
  }
  async getActuationMaxData(Setup: string) {
    const response = await execute(
      {
        statement: listActuationMaxes,
        name: 'listActuationMaxes',
      },
      { Setup }
    );

    return response.items || [];
  }

  mergeActuationMinMax(
    actuationMin: ActuationMin[],
    actuationMax: ActuationMax[]
  ) {
    if (actuationMin.length && actuationMax.length) {
      return actuationMin.map((objMin) => {
        const maxActuation = actuationMax.find(
          (objMax) => objMax.Variable === objMin.Variable
        );
        Object.assign(objMin, maxActuation);
        return objMin;
      });
    }

    return [];
  }

  async updateActuationMinRecord(input: UpdateActuationMinInput) {
    await execute(
      {
        statement: updateActuationMin,
        name: 'updateActuationMin',
      },
      {
        input,
      }
    );
  }
  async updateActuationMaxRecord(input: UpdateActuationMaxInput) {
    await execute(
      {
        statement: updateActuationMax,
        name: 'updateActuationMax',
      },
      {
        input,
      }
    );
  }

  async getHydroponicsSensorsData(
    MAC: HydroponicsMACTypes,
    startDate: Date | null,
    endDate: Date | null
  ) {
    const params: Record<string, any> = {
      MAC,
      limit: 2000,
      sortDirection: 'DESC',
    };

    if (startDate && endDate) {
      params.timestamp = {
        between: [startDate.toISOString(), endDate.toISOString()],
      };
    }
    let query: Record<string, any> = {};

    if (MAC === 1) {
      query.query = listRACMAC1Sensors;
      query.name = 'listRACSensors';
    }

    if (MAC === 2) {
      query.query = listRACMAC2Sensors;
      query.name = 'listRACSensors';
    }

    const response = await execute(
      {
        statement: query.query,
        name: query.name,
      },
      params
    );

    const items = response.items;
    return items.sort(
      (a, b) =>
        new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );
  }

  async getSoilSensorsData(
    MAC: SoilMACTypes,
    startDate: Date | null,
    endDate: Date | null
  ) {
    const params: Record<string, any> = {
      MAC,
      limit: 2000,
      sortDirection: 'DESC',
    };

    if (startDate && endDate) {
      params.timestamp = {
        between: [startDate.toISOString(), endDate.toISOString()],
      };
    }

    const response = await execute(
      {
        statement: listSoilMACSensors,
        name: 'listSoilSensors',
      },
      params
    );

    const items = response.items;
    return items.sort(
      (a, b) =>
        new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );
  }

  generateAtmTemperatureSeries(dataset: DatasetEnum, data: any) {
    if (data?.length) {
      let records = data;
      if (dataset === DatasetEnum.HYDROPONICS) {
        const mac2Records = data.filter((record) => record.MAC === 2);
        records = mac2Records;
      }

      if (dataset === DatasetEnum.SOIL) {
        records = data;
      }

      const points = records.map((obj) => [
        new Date(obj.timestamp).getTime(),
        obj.atm_temperature,
      ]);

      const series = new TimeSeries({
        name: 'Timestamp_vs_Atm_Temperature',
        columns: ['time', 'value'],
        points,
      });
      return series;
    }

    return null;
  }
  generateCO2Series(dataset: DatasetEnum, data: any) {
    if (data?.length) {
      let records = data;
      if (dataset === DatasetEnum.HYDROPONICS) {
        const mac2Records = data.filter((record) => record.MAC === 2);
        records = mac2Records;
      }

      if (dataset === DatasetEnum.SOIL) {
        records = data;
      }

      const points = records.map((obj) => [
        new Date(obj.timestamp).getTime(),
        obj.CO2,
      ]);

      const series = new TimeSeries({
        name: 'Timestamp_vs_CO2',
        columns: ['time', 'value'],
        points,
      });
      return series;
    }

    return null;
  }
  generateO2Series(dataset: DatasetEnum, data: any) {
    if (data?.length) {
      let records = data;
      if (dataset === DatasetEnum.HYDROPONICS) {
        const mac2Records = data.filter((record) => record.MAC === 2);
        records = mac2Records;
      }

      if (dataset === DatasetEnum.SOIL) {
        records = data;
      }
      const calculatedData = records.map((record) => ({
        ...record,
        O2: record.O2 * 10000,
      }));

      const points = calculatedData.map((obj) => [
        new Date(obj.timestamp).getTime(),
        obj.O2,
      ]);

      const series = new TimeSeries({
        name: 'Timestamp_vs_CO2',
        columns: ['time', 'value'],
        points,
      });
      return series;
    }

    return null;
  }
  generateHumiditySeries(dataset: DatasetEnum, data: any) {
    if (data?.length) {
      let records = data;
      if (dataset === DatasetEnum.HYDROPONICS) {
        const mac2Records = data.filter((record) => record.MAC === 2);
        records = mac2Records;
      }

      if (dataset === DatasetEnum.SOIL) {
        records = data;
      }

      const points = records.map((obj) => [
        new Date(obj.timestamp).getTime(),
        obj.humidity,
      ]);

      const series = new TimeSeries({
        name: 'Timestamp_vs_Humidity',
        columns: ['time', 'value'],
        points,
      });
      return series;
    }

    return null;
  }
  generateWaterSeries(dataset: DatasetEnum, data: any) {
    if (data?.length) {
      let records = data;
      if (dataset === DatasetEnum.HYDROPONICS) {
        const mac1Records = data.filter((record) => record.MAC === 1);
        records = mac1Records;
      }

      if (dataset === DatasetEnum.SOIL) {
        records = data;
      }

      const points = records.map((obj) => [
        new Date(obj.timestamp).getTime(),
        obj.temperature,
      ]);

      const series = new TimeSeries({
        name: 'Timestamp_vs_Water',
        columns: ['time', 'value'],
        points,
      });
      return series;
    }

    return null;
  }
  generateConductivitySeries(dataset: DatasetEnum, data: any) {
    if (data?.length) {
      let records = data;
      if (dataset === DatasetEnum.HYDROPONICS) {
        const mac1Records = data.filter((record) => record.MAC === 1);
        records = mac1Records;
      }

      if (dataset === DatasetEnum.SOIL) {
        records = data;
      }
      const points = records.map((obj) => [
        new Date(obj.timestamp).getTime(),
        obj.conductivity,
      ]);

      const series = new TimeSeries({
        name: 'Timestamp_vs_Conductivity',
        columns: ['time', 'value'],
        points,
      });
      return series;
    }

    return null;
  }
  generatePHSeries(dataset: DatasetEnum, data: any) {
    if (data?.length) {
      let records = data;
      if (dataset === DatasetEnum.HYDROPONICS) {
        const mac1Records = data.filter((record) => record.MAC === 1);
        records = mac1Records;
      }

      if (dataset === DatasetEnum.SOIL) {
        records = data;
      }
      const points = records.map((obj) => [
        new Date(obj.timestamp).getTime(),
        obj.pH,
      ]);

      const series = new TimeSeries({
        name: 'Timestamp_vs_PH',
        columns: ['time', 'value'],
        points,
      });
      return series;
    }

    return null;
  }
}

export const sensorService = new SernsorService();
