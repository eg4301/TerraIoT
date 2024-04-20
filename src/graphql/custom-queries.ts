/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API';
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const listSoilMACSensors = /* GraphQL */ `query listSoilMACSensors(
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
        humidity
        timestamp

        conductivity
      pH
      temperature

      Nitrogen
      Phosphorous
    
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

export const listSoilMAC1Sensors = /* GraphQL */ `query ListSoilMAC1Sensors(
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

      MAC
      conductivity
      pH
      temperature
      timestamp

      Nitrogen
      Phosphorous
    
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

export const listRACMAC2Sensors = /* GraphQL */ `query ListRACSensors2(
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
        humidity
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

export const listRACMAC1Sensors = /* GraphQL */ `query ListRACSensors1(
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
      MAC
      conductivity
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
