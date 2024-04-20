/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getActuationMax = /* GraphQL */ `query GetActuationMax($Setup: String!, $Variable: String!) {
  getActuationMax(Setup: $Setup, Variable: $Variable) {
    Max
    PesudoMax
    Setup
    Variable
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetActuationMaxQueryVariables,
  APITypes.GetActuationMaxQuery
>;
export const listActuationMaxes = /* GraphQL */ `query ListActuationMaxes(
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
      PesudoMax
      Setup
      Variable
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListActuationMaxesQueryVariables,
  APITypes.ListActuationMaxesQuery
>;
export const getActuationMin = /* GraphQL */ `query GetActuationMin($Setup: String!, $Variable: String!) {
  getActuationMin(Setup: $Setup, Variable: $Variable) {
    Min
    PesudoMin
    Setup
    Variable
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetActuationMinQueryVariables,
  APITypes.GetActuationMinQuery
>;
export const listActuationMins = /* GraphQL */ `query ListActuationMins(
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
      PesudoMin
      Setup
      Variable
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListActuationMinsQueryVariables,
  APITypes.ListActuationMinsQuery
>;
export const getRACSensors = /* GraphQL */ `query GetRACSensors($MAC: Int!, $timestamp: AWSDateTime!) {
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
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRACSensorsQueryVariables,
  APITypes.GetRACSensorsQuery
>;
export const listRACSensors = /* GraphQL */ `query ListRACSensors(
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
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRACSensorsQueryVariables,
  APITypes.ListRACSensorsQuery
>;
export const getSoilSensors = /* GraphQL */ `query GetSoilSensors($MAC: Int!, $timestamp: AWSDateTime!) {
  getSoilSensors(MAC: $MAC, timestamp: $timestamp) {
    CO2
    MAC
    O2
    atm_temperature
    conductivity
    humidity
    Nitrogen
    Phosphorous
    pH
    temperature
    timestamp
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSoilSensorsQueryVariables,
  APITypes.GetSoilSensorsQuery
>;
export const listSoilSensors = /* GraphQL */ `query ListSoilSensors(
  $MAC: Int
  $timestamp: ModelStringKeyConditionInput
  $filter: ModelSoilSensorsFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listSoilSensors(
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
      Nitrogen
      Phosphorous
      pH
      temperature
      timestamp
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSoilSensorsQueryVariables,
  APITypes.ListSoilSensorsQuery
>;
export const getPlantRepository = /* GraphQL */ `query GetPlantRepository($Crops: String!) {
  getPlantRepository(Crops: $Crops) {
    Crops
    Name
    nitrogen_upper
    nitrogen_lower
    ec_upper
    ec_lower
    pH_upper
    pH_lower
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPlantRepositoryQueryVariables,
  APITypes.GetPlantRepositoryQuery
>;
export const listPlantRepositories = /* GraphQL */ `query ListPlantRepositories(
  $Crops: String
  $filter: ModelPlantRepositoryFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPlantRepositories(
    Crops: $Crops
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      Crops
      Name
      nitrogen_upper
      nitrogen_lower
      ec_upper
      ec_lower
      pH_upper
      pH_lower
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPlantRepositoriesQueryVariables,
  APITypes.ListPlantRepositoriesQuery
>;
export const getEventTemplate = /* GraphQL */ `query GetEventTemplate($id: ID!) {
  getEventTemplate(id: $id) {
    userId
    eventName
    description
    duration
    id
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEventTemplateQueryVariables,
  APITypes.GetEventTemplateQuery
>;
export const listEventTemplates = /* GraphQL */ `query ListEventTemplates(
  $filter: ModelEventTemplateFilterInput
  $limit: Int
  $nextToken: String
) {
  listEventTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      userId
      eventName
      description
      duration
      id
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEventTemplatesQueryVariables,
  APITypes.ListEventTemplatesQuery
>;
export const getUserEventTemplates = /* GraphQL */ `query GetUserEventTemplates(
  $userId: String!
  $sortDirection: ModelSortDirection
  $filter: ModelEventTemplateFilterInput
  $limit: Int
  $nextToken: String
) {
  getUserEventTemplates(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      userId
      eventName
      description
      duration
      id
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserEventTemplatesQueryVariables,
  APITypes.GetUserEventTemplatesQuery
>;
