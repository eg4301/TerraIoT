/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addActuateMax = /* GraphQL */ `
  mutation AddActuateMax($Max: Float, $Setup: String!, $Variable: String!) {
    addActuateMax(Max: $Max, Setup: $Setup, Variable: $Variable) {
      Max
      Setup
      Variable
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const addActuateMin = /* GraphQL */ `
  mutation AddActuateMin($Min: Float, $Setup: String!, $Variable: String!) {
    addActuateMin(Min: $Min, Setup: $Setup, Variable: $Variable) {
      Min
      Setup
      Variable
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const addData = /* GraphQL */ `
  mutation AddData(
    $CO2: Float
    $MAC: Int!
    $O2: Float
    $atm_temperature: Float
    $conductivity: Float
    $humidity: Float
    $pH: Float
    $temperature: Float
    $timestamp: String!
  ) {
    addData(
      CO2: $CO2
      MAC: $MAC
      O2: $O2
      atm_temperature: $atm_temperature
      conductivity: $conductivity
      humidity: $humidity
      pH: $pH
      temperature: $temperature
      timestamp: $timestamp
    ) {
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
export const deleteActuateMax = /* GraphQL */ `
  mutation DeleteActuateMax($Setup: String!, $Variable: String!) {
    deleteActuateMax(Setup: $Setup, Variable: $Variable) {
      Max
      Setup
      Variable
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteActuateMin = /* GraphQL */ `
  mutation DeleteActuateMin($Setup: String!, $Variable: String!) {
    deleteActuateMin(Setup: $Setup, Variable: $Variable) {
      Min
      Setup
      Variable
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteData = /* GraphQL */ `
  mutation DeleteData($MAC: Int!, $timestamp: String!) {
    deleteData(MAC: $MAC, timestamp: $timestamp) {
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
export const updateActuateMax = /* GraphQL */ `
  mutation UpdateActuateMax($Max: Float, $Setup: String!, $Variable: String!) {
    updateActuateMax(Max: $Max, Setup: $Setup, Variable: $Variable) {
      Max
      Setup
      Variable
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateActuateMin = /* GraphQL */ `
  mutation UpdateActuateMin($Min: Float, $Setup: String!, $Variable: String!) {
    updateActuateMin(Min: $Min, Setup: $Setup, Variable: $Variable) {
      Min
      Setup
      Variable
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateData = /* GraphQL */ `
  mutation UpdateData(
    $CO2: Float
    $MAC: Int!
    $O2: Float
    $atm_temperature: Float
    $conductivity: Float
    $humidity: Float
    $pH: Float
    $temperature: Float
    $timestamp: String!
  ) {
    updateData(
      CO2: $CO2
      MAC: $MAC
      O2: $O2
      atm_temperature: $atm_temperature
      conductivity: $conductivity
      humidity: $humidity
      pH: $pH
      temperature: $temperature
      timestamp: $timestamp
    ) {
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
export const createActuationMax = /* GraphQL */ `
  mutation CreateActuationMax(
    $input: CreateActuationMaxInput!
    $condition: ModelActuationMaxConditionInput
  ) {
    createActuationMax(input: $input, condition: $condition) {
      Max
      Setup
      Variable
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateActuationMax = /* GraphQL */ `
  mutation UpdateActuationMax(
    $input: UpdateActuationMaxInput!
    $condition: ModelActuationMaxConditionInput
  ) {
    updateActuationMax(input: $input, condition: $condition) {
      Max
      Setup
      Variable
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteActuationMax = /* GraphQL */ `
  mutation DeleteActuationMax(
    $input: DeleteActuationMaxInput!
    $condition: ModelActuationMaxConditionInput
  ) {
    deleteActuationMax(input: $input, condition: $condition) {
      Max
      Setup
      Variable
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createActuationMin = /* GraphQL */ `
  mutation CreateActuationMin(
    $input: CreateActuationMinInput!
    $condition: ModelActuationMinConditionInput
  ) {
    createActuationMin(input: $input, condition: $condition) {
      Min
      Setup
      Variable
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateActuationMin = /* GraphQL */ `
  mutation UpdateActuationMin(
    $input: UpdateActuationMinInput!
    $condition: ModelActuationMinConditionInput
  ) {
    updateActuationMin(input: $input, condition: $condition) {
      Min
      Setup
      Variable
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteActuationMin = /* GraphQL */ `
  mutation DeleteActuationMin(
    $input: DeleteActuationMinInput!
    $condition: ModelActuationMinConditionInput
  ) {
    deleteActuationMin(input: $input, condition: $condition) {
      Min
      Setup
      Variable
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createRACSensors = /* GraphQL */ `
  mutation CreateRACSensors(
    $input: CreateRACSensorsInput!
    $condition: ModelRACSensorsConditionInput
  ) {
    createRACSensors(input: $input, condition: $condition) {
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
export const updateRACSensors = /* GraphQL */ `
  mutation UpdateRACSensors(
    $input: UpdateRACSensorsInput!
    $condition: ModelRACSensorsConditionInput
  ) {
    updateRACSensors(input: $input, condition: $condition) {
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
export const deleteRACSensors = /* GraphQL */ `
  mutation DeleteRACSensors(
    $input: DeleteRACSensorsInput!
    $condition: ModelRACSensorsConditionInput
  ) {
    deleteRACSensors(input: $input, condition: $condition) {
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
