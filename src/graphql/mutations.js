/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addData = /* GraphQL */ `
  mutation AddData(
    $MAC: String!
    $timestamp: String!
    $atm_temperature: Float
    $CO2: Float
    $conductivity: Float
    $humidity: Float
    $O2: Float
    $pH: Float
    $temperature: Float
  ) {
    addData(
      MAC: $MAC
      timestamp: $timestamp
      atm_temperature: $atm_temperature
      CO2: $CO2
      conductivity: $conductivity
      humidity: $humidity
      O2: $O2
      pH: $pH
      temperature: $temperature
    ) {
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
export const deleteData = /* GraphQL */ `
  mutation DeleteData($MAC: String!, $timestamp: String!) {
    deleteData(MAC: $MAC, timestamp: $timestamp) {
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
export const updateData = /* GraphQL */ `
  mutation UpdateData(
    $MAC: String!
    $timestamp: String!
    $atm_temperature: Float
    $CO2: Float
    $conductivity: Float
    $humidity: Float
    $O2: Float
    $pH: Float
    $temperature: Float
  ) {
    updateData(
      MAC: $MAC
      timestamp: $timestamp
      atm_temperature: $atm_temperature
      CO2: $CO2
      conductivity: $conductivity
      humidity: $humidity
      O2: $O2
      pH: $pH
      temperature: $temperature
    ) {
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
