/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getData = /* GraphQL */ `
  query GetData($MAC: String!, $timestamp: String!) {
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
  query AllDatasByMAC($MAC: String!, $limit: Int, $nextToken: String) {
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
  query AllDataD($MAC: String!, $limit: Int, $nextToken: String) {
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
