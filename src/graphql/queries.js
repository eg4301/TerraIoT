/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getData = /* GraphQL */ `
  query GetData($MAC: Int!, $timestamp: String!) {
    getData(MAC: $MAC, timestamp: $timestamp) {
      MAC
      timestamp
      atm_temperature
      CO2
      conductivity
      humidity
      O2
      pH
      temperature
      __typename
    }
  }
`;
export const allData = /* GraphQL */ `
  query AllData($limit: Int, $nextToken: String) {
    allData(limit: $limit, nextToken: $nextToken) {
      Datas {
        MAC
        timestamp
        atm_temperature
        CO2
        conductivity
        humidity
        O2
        pH
        temperature
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const allDatasByMAC = /* GraphQL */ `
  query AllDatasByMAC($MAC: Int!, $limit: Int, $nextToken: String) {
    allDatasByMAC(MAC: $MAC, limit: $limit, nextToken: $nextToken) {
      Datas {
        MAC
        timestamp
        atm_temperature
        CO2
        conductivity
        humidity
        O2
        pH
        temperature
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const allDatasBytimestamp = /* GraphQL */ `
  query AllDatasBytimestamp(
    $timestamp: String!
    $limit: Int
    $nextToken: String
  ) {
    allDatasBytimestamp(
      timestamp: $timestamp
      limit: $limit
      nextToken: $nextToken
    ) {
      Datas {
        MAC
        timestamp
        atm_temperature
        CO2
        conductivity
        humidity
        O2
        pH
        temperature
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
        MAC
        timestamp
        atm_temperature
        CO2
        conductivity
        humidity
        O2
        pH
        temperature
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
    $limit: Int
    $nextToken: String
  ) {
    allDatasByMAC_atm_temperature(
      MAC: $MAC
      limit: $limit
      nextToken: $nextToken
    ) {
      Datas {
        timestamp
        atm_temperature
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const allDatasByMAC_CO2 = /* GraphQL */ `
  query AllDatasByMAC_CO2($MAC: Int!, $limit: Int, $nextToken: String) {
    allDatasByMAC_CO2(MAC: $MAC, limit: $limit, nextToken: $nextToken) {
      Datas {
        timestamp
        CO2
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
    $limit: Int
    $nextToken: String
  ) {
    allDatasByMAC_conductivity(
      MAC: $MAC
      limit: $limit
      nextToken: $nextToken
    ) {
      Datas {
        timestamp
        conductivity
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const allDatasByMAC_humidity = /* GraphQL */ `
  query AllDatasByMAC_humidity($MAC: Int!, $limit: Int, $nextToken: String) {
    allDatasByMAC_humidity(MAC: $MAC, limit: $limit, nextToken: $nextToken) {
      Datas {
        timestamp
        humidity
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const allDatasByMAC_O2 = /* GraphQL */ `
  query AllDatasByMAC_O2($MAC: Int!, $limit: Int, $nextToken: String) {
    allDatasByMAC_O2(MAC: $MAC, limit: $limit, nextToken: $nextToken) {
      Datas {
        timestamp
        O2
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const allDatasByMAC_pH = /* GraphQL */ `
  query AllDatasByMAC_pH($MAC: Int!, $limit: Int, $nextToken: String) {
    allDatasByMAC_pH(MAC: $MAC, limit: $limit, nextToken: $nextToken) {
      Datas {
        timestamp
        pH
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const allDatasByMAC_temperature = /* GraphQL */ `
  query AllDatasByMAC_temperature($MAC: Int!, $limit: Int, $nextToken: String) {
    allDatasByMAC_temperature(MAC: $MAC, limit: $limit, nextToken: $nextToken) {
      Datas {
        timestamp
        temperature
        __typename
      }
      nextToken
      __typename
    }
  }
`;
