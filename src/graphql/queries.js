/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const allData = /* GraphQL */ `
  query AllData($limit: Int, $nextToken: String) {
    allData(limit: $limit, nextToken: $nextToken) {
      Datas {
        CO2
        MAC
        O2
        atm_temperature
        conductivity
        humidity
        pH
        temperature
        timestamp
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const allDataD = /* GraphQL */ `
  query AllDataD($MAC: Int!, $limit: Int, $nextToken: String) {
    allDataD(MAC: $MAC, limit: $limit, nextToken: $nextToken) {
      Datas {
        CO2
        MAC
        O2
        atm_temperature
        conductivity
        humidity
        pH
        temperature
        timestamp
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const allDatasByMAC = /* GraphQL */ `
  query AllDatasByMAC(
    $MAC: Int!
    $end: String
    $limit: Int
    $nextToken: String
    $start: String
  ) {
    allDatasByMAC(
      MAC: $MAC
      end: $end
      limit: $limit
      nextToken: $nextToken
      start: $start
    ) {
      Datas {
        CO2
        MAC
        O2
        atm_temperature
        conductivity
        humidity
        pH
        temperature
        timestamp
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const allDatasByMAC_CO2 = /* GraphQL */ `
  query AllDatasByMAC_CO2(
    $MAC: Int!
    $end: String
    $limit: Int
    $nextToken: String
    $start: String
  ) {
    allDatasByMAC_CO2(
      MAC: $MAC
      end: $end
      limit: $limit
      nextToken: $nextToken
      start: $start
    ) {
      Datas {
        CO2
        timestamp
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const allDatasByMAC_O2 = /* GraphQL */ `
  query AllDatasByMAC_O2(
    $MAC: Int!
    $end: String
    $limit: Int
    $nextToken: String
    $start: String
  ) {
    allDatasByMAC_O2(
      MAC: $MAC
      end: $end
      limit: $limit
      nextToken: $nextToken
      start: $start
    ) {
      Datas {
        O2
        timestamp
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const allDatasByMAC_atm_temperature = /* GraphQL */ `
  query AllDatasByMAC_atm_temperature(
    $MAC: Int!
    $end: String
    $limit: Int
    $nextToken: String
    $start: String
  ) {
    allDatasByMAC_atm_temperature(
      MAC: $MAC
      end: $end
      limit: $limit
      nextToken: $nextToken
      start: $start
    ) {
      Datas {
        atm_temperature
        timestamp
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const allDatasByMAC_conductivity = /* GraphQL */ `
  query AllDatasByMAC_conductivity(
    $MAC: Int!
    $end: String
    $limit: Int
    $nextToken: String
    $start: String
  ) {
    allDatasByMAC_conductivity(
      MAC: $MAC
      end: $end
      limit: $limit
      nextToken: $nextToken
      start: $start
    ) {
      Datas {
        conductivity
        timestamp
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const allDatasByMAC_humidity = /* GraphQL */ `
  query AllDatasByMAC_humidity(
    $MAC: Int!
    $end: String
    $limit: Int
    $nextToken: String
    $start: String
  ) {
    allDatasByMAC_humidity(
      MAC: $MAC
      end: $end
      limit: $limit
      nextToken: $nextToken
      start: $start
    ) {
      Datas {
        humidity
        timestamp
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const allDatasByMAC_pH = /* GraphQL */ `
  query AllDatasByMAC_pH(
    $MAC: Int!
    $end: String
    $limit: Int
    $nextToken: String
    $start: String
  ) {
    allDatasByMAC_pH(
      MAC: $MAC
      end: $end
      limit: $limit
      nextToken: $nextToken
      start: $start
    ) {
      Datas {
        pH
        timestamp
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const allDatasByMAC_temperature = /* GraphQL */ `
  query AllDatasByMAC_temperature(
    $MAC: Int!
    $end: String
    $limit: Int
    $nextToken: String
    $start: String
  ) {
    allDatasByMAC_temperature(
      MAC: $MAC
      end: $end
      limit: $limit
      nextToken: $nextToken
      start: $start
    ) {
      Datas {
        temperature
        timestamp
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getData = /* GraphQL */ `
  query GetData($MAC: Int!, $timestamp: String!) {
    getData(MAC: $MAC, timestamp: $timestamp) {
      CO2
      MAC
      O2
      atm_temperature
      conductivity
      humidity
      pH
      temperature
      timestamp
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const getActuationMax = /* GraphQL */ `
  query GetActuationMax($Setup: String!, $Variable: String!) {
    getActuationMax(Setup: $Setup, Variable: $Variable) {
      Max
      Setup
      Variable
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listActuationMaxes = /* GraphQL */ `
  query ListActuationMaxes(
    $Setup: String
    $Variable: ModelStringKeyConditionInput
    $filter: ModelActuationMaxFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listActuationMaxes(
      Setup: $Setup
      Variable: $Variable
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        Max
        Setup
        Variable
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getActuationMin = /* GraphQL */ `
  query GetActuationMin($Setup: String!, $Variable: String!) {
    getActuationMin(Setup: $Setup, Variable: $Variable) {
      Min
      Setup
      Variable
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listActuationMins = /* GraphQL */ `
  query ListActuationMins(
    $Setup: String
    $Variable: ModelStringKeyConditionInput
    $filter: ModelActuationMinFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listActuationMins(
      Setup: $Setup
      Variable: $Variable
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        Min
        Setup
        Variable
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRACSensors = /* GraphQL */ `
  query GetRACSensors($MAC: Int!, $timestamp: String!) {
    getRACSensors(MAC: $MAC, timestamp: $timestamp) {
      CO2
      MAC
      O2
      atm_temperature
      conductivity
      humidity
      pH
      temperature
      timestamp
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRACSensors = /* GraphQL */ `
  query ListRACSensors(
    $MAC: Int
    $timestamp: ModelStringKeyConditionInput
    $filter: ModelRACSensorsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listRACSensors(
      MAC: $MAC
      timestamp: $timestamp
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        CO2
        MAC
        O2
        atm_temperature
        conductivity
        humidity
        pH
        temperature
        timestamp
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
