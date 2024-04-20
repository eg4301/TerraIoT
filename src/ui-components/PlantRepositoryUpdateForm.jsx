/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getPlantRepository } from "../graphql/queries";
import { updatePlantRepository } from "../graphql/mutations";
const client = generateClient();
export default function PlantRepositoryUpdateForm(props) {
  const {
    Crops: CropsProp,
    plantRepository: plantRepositoryModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Crops: "",
    Name: "",
    nitrogen_upper: "",
    nitrogen_lower: "",
    ec_upper: "",
    ec_lower: "",
    pH_upper: "",
    pH_lower: "",
  };
  const [Crops, setCrops] = React.useState(initialValues.Crops);
  const [Name, setName] = React.useState(initialValues.Name);
  const [nitrogen_upper, setNitrogen_upper] = React.useState(
    initialValues.nitrogen_upper
  );
  const [nitrogen_lower, setNitrogen_lower] = React.useState(
    initialValues.nitrogen_lower
  );
  const [ec_upper, setEc_upper] = React.useState(initialValues.ec_upper);
  const [ec_lower, setEc_lower] = React.useState(initialValues.ec_lower);
  const [pH_upper, setPH_upper] = React.useState(initialValues.pH_upper);
  const [pH_lower, setPH_lower] = React.useState(initialValues.pH_lower);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = plantRepositoryRecord
      ? { ...initialValues, ...plantRepositoryRecord }
      : initialValues;
    setCrops(cleanValues.Crops);
    setName(cleanValues.Name);
    setNitrogen_upper(cleanValues.nitrogen_upper);
    setNitrogen_lower(cleanValues.nitrogen_lower);
    setEc_upper(cleanValues.ec_upper);
    setEc_lower(cleanValues.ec_lower);
    setPH_upper(cleanValues.pH_upper);
    setPH_lower(cleanValues.pH_lower);
    setErrors({});
  };
  const [plantRepositoryRecord, setPlantRepositoryRecord] = React.useState(
    plantRepositoryModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = CropsProp
        ? (
            await client.graphql({
              query: getPlantRepository.replaceAll("__typename", ""),
              variables: { Crops: CropsProp },
            })
          )?.data?.getPlantRepository
        : plantRepositoryModelProp;
      setPlantRepositoryRecord(record);
    };
    queryData();
  }, [CropsProp, plantRepositoryModelProp]);
  React.useEffect(resetStateValues, [plantRepositoryRecord]);
  const validations = {
    Crops: [{ type: "Required" }],
    Name: [{ type: "Required" }],
    nitrogen_upper: [],
    nitrogen_lower: [],
    ec_upper: [],
    ec_lower: [],
    pH_upper: [],
    pH_lower: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Crops,
          Name,
          nitrogen_upper: nitrogen_upper ?? null,
          nitrogen_lower: nitrogen_lower ?? null,
          ec_upper: ec_upper ?? null,
          ec_lower: ec_lower ?? null,
          pH_upper: pH_upper ?? null,
          pH_lower: pH_lower ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updatePlantRepository.replaceAll("__typename", ""),
            variables: {
              input: {
                Crops: plantRepositoryRecord.Crops,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PlantRepositoryUpdateForm")}
      {...rest}
    >
      <TextField
        label="Crops"
        isRequired={true}
        isReadOnly={true}
        value={Crops}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Crops: value,
              Name,
              nitrogen_upper,
              nitrogen_lower,
              ec_upper,
              ec_lower,
              pH_upper,
              pH_lower,
            };
            const result = onChange(modelFields);
            value = result?.Crops ?? value;
          }
          if (errors.Crops?.hasError) {
            runValidationTasks("Crops", value);
          }
          setCrops(value);
        }}
        onBlur={() => runValidationTasks("Crops", Crops)}
        errorMessage={errors.Crops?.errorMessage}
        hasError={errors.Crops?.hasError}
        {...getOverrideProps(overrides, "Crops")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Crops,
              Name: value,
              nitrogen_upper,
              nitrogen_lower,
              ec_upper,
              ec_lower,
              pH_upper,
              pH_lower,
            };
            const result = onChange(modelFields);
            value = result?.Name ?? value;
          }
          if (errors.Name?.hasError) {
            runValidationTasks("Name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("Name", Name)}
        errorMessage={errors.Name?.errorMessage}
        hasError={errors.Name?.hasError}
        {...getOverrideProps(overrides, "Name")}
      ></TextField>
      <TextField
        label="Nitrogen upper"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={nitrogen_upper}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Crops,
              Name,
              nitrogen_upper: value,
              nitrogen_lower,
              ec_upper,
              ec_lower,
              pH_upper,
              pH_lower,
            };
            const result = onChange(modelFields);
            value = result?.nitrogen_upper ?? value;
          }
          if (errors.nitrogen_upper?.hasError) {
            runValidationTasks("nitrogen_upper", value);
          }
          setNitrogen_upper(value);
        }}
        onBlur={() => runValidationTasks("nitrogen_upper", nitrogen_upper)}
        errorMessage={errors.nitrogen_upper?.errorMessage}
        hasError={errors.nitrogen_upper?.hasError}
        {...getOverrideProps(overrides, "nitrogen_upper")}
      ></TextField>
      <TextField
        label="Nitrogen lower"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={nitrogen_lower}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Crops,
              Name,
              nitrogen_upper,
              nitrogen_lower: value,
              ec_upper,
              ec_lower,
              pH_upper,
              pH_lower,
            };
            const result = onChange(modelFields);
            value = result?.nitrogen_lower ?? value;
          }
          if (errors.nitrogen_lower?.hasError) {
            runValidationTasks("nitrogen_lower", value);
          }
          setNitrogen_lower(value);
        }}
        onBlur={() => runValidationTasks("nitrogen_lower", nitrogen_lower)}
        errorMessage={errors.nitrogen_lower?.errorMessage}
        hasError={errors.nitrogen_lower?.hasError}
        {...getOverrideProps(overrides, "nitrogen_lower")}
      ></TextField>
      <TextField
        label="Ec upper"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ec_upper}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Crops,
              Name,
              nitrogen_upper,
              nitrogen_lower,
              ec_upper: value,
              ec_lower,
              pH_upper,
              pH_lower,
            };
            const result = onChange(modelFields);
            value = result?.ec_upper ?? value;
          }
          if (errors.ec_upper?.hasError) {
            runValidationTasks("ec_upper", value);
          }
          setEc_upper(value);
        }}
        onBlur={() => runValidationTasks("ec_upper", ec_upper)}
        errorMessage={errors.ec_upper?.errorMessage}
        hasError={errors.ec_upper?.hasError}
        {...getOverrideProps(overrides, "ec_upper")}
      ></TextField>
      <TextField
        label="Ec lower"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ec_lower}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Crops,
              Name,
              nitrogen_upper,
              nitrogen_lower,
              ec_upper,
              ec_lower: value,
              pH_upper,
              pH_lower,
            };
            const result = onChange(modelFields);
            value = result?.ec_lower ?? value;
          }
          if (errors.ec_lower?.hasError) {
            runValidationTasks("ec_lower", value);
          }
          setEc_lower(value);
        }}
        onBlur={() => runValidationTasks("ec_lower", ec_lower)}
        errorMessage={errors.ec_lower?.errorMessage}
        hasError={errors.ec_lower?.hasError}
        {...getOverrideProps(overrides, "ec_lower")}
      ></TextField>
      <TextField
        label="P h upper"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={pH_upper}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Crops,
              Name,
              nitrogen_upper,
              nitrogen_lower,
              ec_upper,
              ec_lower,
              pH_upper: value,
              pH_lower,
            };
            const result = onChange(modelFields);
            value = result?.pH_upper ?? value;
          }
          if (errors.pH_upper?.hasError) {
            runValidationTasks("pH_upper", value);
          }
          setPH_upper(value);
        }}
        onBlur={() => runValidationTasks("pH_upper", pH_upper)}
        errorMessage={errors.pH_upper?.errorMessage}
        hasError={errors.pH_upper?.hasError}
        {...getOverrideProps(overrides, "pH_upper")}
      ></TextField>
      <TextField
        label="P h lower"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={pH_lower}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Crops,
              Name,
              nitrogen_upper,
              nitrogen_lower,
              ec_upper,
              ec_lower,
              pH_upper,
              pH_lower: value,
            };
            const result = onChange(modelFields);
            value = result?.pH_lower ?? value;
          }
          if (errors.pH_lower?.hasError) {
            runValidationTasks("pH_lower", value);
          }
          setPH_lower(value);
        }}
        onBlur={() => runValidationTasks("pH_lower", pH_lower)}
        errorMessage={errors.pH_lower?.errorMessage}
        hasError={errors.pH_lower?.hasError}
        {...getOverrideProps(overrides, "pH_lower")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(CropsProp || plantRepositoryModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(CropsProp || plantRepositoryModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
