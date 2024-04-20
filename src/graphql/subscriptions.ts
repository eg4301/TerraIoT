/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateActuationMax = /* GraphQL */ `subscription OnCreateActuationMax(
  $filter: ModelSubscriptionActuationMaxFilterInput
) {
  onCreateActuationMax(filter: $filter) {
    Max
    PesudoMax
    Setup
    Variable
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateActuationMaxSubscriptionVariables,
  APITypes.OnCreateActuationMaxSubscription
>;
export const onUpdateActuationMax = /* GraphQL */ `subscription OnUpdateActuationMax(
  $filter: ModelSubscriptionActuationMaxFilterInput
) {
  onUpdateActuationMax(filter: $filter) {
    Max
    PesudoMax
    Setup
    Variable
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateActuationMaxSubscriptionVariables,
  APITypes.OnUpdateActuationMaxSubscription
>;
export const onDeleteActuationMax = /* GraphQL */ `subscription OnDeleteActuationMax(
  $filter: ModelSubscriptionActuationMaxFilterInput
) {
  onDeleteActuationMax(filter: $filter) {
    Max
    PesudoMax
    Setup
    Variable
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteActuationMaxSubscriptionVariables,
  APITypes.OnDeleteActuationMaxSubscription
>;
export const onCreateActuationMin = /* GraphQL */ `subscription OnCreateActuationMin(
  $filter: ModelSubscriptionActuationMinFilterInput
) {
  onCreateActuationMin(filter: $filter) {
    Min
    PesudoMin
    Setup
    Variable
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateActuationMinSubscriptionVariables,
  APITypes.OnCreateActuationMinSubscription
>;
export const onUpdateActuationMin = /* GraphQL */ `subscription OnUpdateActuationMin(
  $filter: ModelSubscriptionActuationMinFilterInput
) {
  onUpdateActuationMin(filter: $filter) {
    Min
    PesudoMin
    Setup
    Variable
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateActuationMinSubscriptionVariables,
  APITypes.OnUpdateActuationMinSubscription
>;
export const onDeleteActuationMin = /* GraphQL */ `subscription OnDeleteActuationMin(
  $filter: ModelSubscriptionActuationMinFilterInput
) {
  onDeleteActuationMin(filter: $filter) {
    Min
    PesudoMin
    Setup
    Variable
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteActuationMinSubscriptionVariables,
  APITypes.OnDeleteActuationMinSubscription
>;
export const onCreateRACSensors = /* GraphQL */ `subscription OnCreateRACSensors(
  $filter: ModelSubscriptionRACSensorsFilterInput
) {
  onCreateRACSensors(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRACSensorsSubscriptionVariables,
  APITypes.OnCreateRACSensorsSubscription
>;
export const onUpdateRACSensors = /* GraphQL */ `subscription OnUpdateRACSensors(
  $filter: ModelSubscriptionRACSensorsFilterInput
) {
  onUpdateRACSensors(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRACSensorsSubscriptionVariables,
  APITypes.OnUpdateRACSensorsSubscription
>;
export const onDeleteRACSensors = /* GraphQL */ `subscription OnDeleteRACSensors(
  $filter: ModelSubscriptionRACSensorsFilterInput
) {
  onDeleteRACSensors(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRACSensorsSubscriptionVariables,
  APITypes.OnDeleteRACSensorsSubscription
>;
export const onCreateSoilSensors = /* GraphQL */ `subscription OnCreateSoilSensors(
  $filter: ModelSubscriptionSoilSensorsFilterInput
) {
  onCreateSoilSensors(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSoilSensorsSubscriptionVariables,
  APITypes.OnCreateSoilSensorsSubscription
>;
export const onUpdateSoilSensors = /* GraphQL */ `subscription OnUpdateSoilSensors(
  $filter: ModelSubscriptionSoilSensorsFilterInput
) {
  onUpdateSoilSensors(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSoilSensorsSubscriptionVariables,
  APITypes.OnUpdateSoilSensorsSubscription
>;
export const onDeleteSoilSensors = /* GraphQL */ `subscription OnDeleteSoilSensors(
  $filter: ModelSubscriptionSoilSensorsFilterInput
) {
  onDeleteSoilSensors(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSoilSensorsSubscriptionVariables,
  APITypes.OnDeleteSoilSensorsSubscription
>;
export const onCreatePlantRepository = /* GraphQL */ `subscription OnCreatePlantRepository(
  $filter: ModelSubscriptionPlantRepositoryFilterInput
) {
  onCreatePlantRepository(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePlantRepositorySubscriptionVariables,
  APITypes.OnCreatePlantRepositorySubscription
>;
export const onUpdatePlantRepository = /* GraphQL */ `subscription OnUpdatePlantRepository(
  $filter: ModelSubscriptionPlantRepositoryFilterInput
) {
  onUpdatePlantRepository(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePlantRepositorySubscriptionVariables,
  APITypes.OnUpdatePlantRepositorySubscription
>;
export const onDeletePlantRepository = /* GraphQL */ `subscription OnDeletePlantRepository(
  $filter: ModelSubscriptionPlantRepositoryFilterInput
) {
  onDeletePlantRepository(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePlantRepositorySubscriptionVariables,
  APITypes.OnDeletePlantRepositorySubscription
>;
export const onCreateEventTemplate = /* GraphQL */ `subscription OnCreateEventTemplate(
  $filter: ModelSubscriptionEventTemplateFilterInput
) {
  onCreateEventTemplate(filter: $filter) {
    userId
    eventName
    description
    duration
    id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateEventTemplateSubscriptionVariables,
  APITypes.OnCreateEventTemplateSubscription
>;
export const onUpdateEventTemplate = /* GraphQL */ `subscription OnUpdateEventTemplate(
  $filter: ModelSubscriptionEventTemplateFilterInput
) {
  onUpdateEventTemplate(filter: $filter) {
    userId
    eventName
    description
    duration
    id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateEventTemplateSubscriptionVariables,
  APITypes.OnUpdateEventTemplateSubscription
>;
export const onDeleteEventTemplate = /* GraphQL */ `subscription OnDeleteEventTemplate(
  $filter: ModelSubscriptionEventTemplateFilterInput
) {
  onDeleteEventTemplate(filter: $filter) {
    userId
    eventName
    description
    duration
    id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEventTemplateSubscriptionVariables,
  APITypes.OnDeleteEventTemplateSubscription
>;
