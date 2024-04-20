/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlantRepositoryCreateFormInputValues = {
    Crops?: string;
    Name?: string;
    nitrogen_upper?: number;
    nitrogen_lower?: number;
    ec_upper?: number;
    ec_lower?: number;
    pH_upper?: number;
    pH_lower?: number;
};
export declare type PlantRepositoryCreateFormValidationValues = {
    Crops?: ValidationFunction<string>;
    Name?: ValidationFunction<string>;
    nitrogen_upper?: ValidationFunction<number>;
    nitrogen_lower?: ValidationFunction<number>;
    ec_upper?: ValidationFunction<number>;
    ec_lower?: ValidationFunction<number>;
    pH_upper?: ValidationFunction<number>;
    pH_lower?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlantRepositoryCreateFormOverridesProps = {
    PlantRepositoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Crops?: PrimitiveOverrideProps<TextFieldProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    nitrogen_upper?: PrimitiveOverrideProps<TextFieldProps>;
    nitrogen_lower?: PrimitiveOverrideProps<TextFieldProps>;
    ec_upper?: PrimitiveOverrideProps<TextFieldProps>;
    ec_lower?: PrimitiveOverrideProps<TextFieldProps>;
    pH_upper?: PrimitiveOverrideProps<TextFieldProps>;
    pH_lower?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlantRepositoryCreateFormProps = React.PropsWithChildren<{
    overrides?: PlantRepositoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PlantRepositoryCreateFormInputValues) => PlantRepositoryCreateFormInputValues;
    onSuccess?: (fields: PlantRepositoryCreateFormInputValues) => void;
    onError?: (fields: PlantRepositoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlantRepositoryCreateFormInputValues) => PlantRepositoryCreateFormInputValues;
    onValidate?: PlantRepositoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function PlantRepositoryCreateForm(props: PlantRepositoryCreateFormProps): React.ReactElement;
