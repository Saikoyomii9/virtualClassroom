/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WebLinkCreateFormInputValues = {
    Title?: string;
    URL?: string;
};
export declare type WebLinkCreateFormValidationValues = {
    Title?: ValidationFunction<string>;
    URL?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WebLinkCreateFormOverridesProps = {
    WebLinkCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Title?: PrimitiveOverrideProps<TextFieldProps>;
    URL?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WebLinkCreateFormProps = React.PropsWithChildren<{
    overrides?: WebLinkCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WebLinkCreateFormInputValues) => WebLinkCreateFormInputValues;
    onSuccess?: (fields: WebLinkCreateFormInputValues) => void;
    onError?: (fields: WebLinkCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WebLinkCreateFormInputValues) => WebLinkCreateFormInputValues;
    onValidate?: WebLinkCreateFormValidationValues;
} & React.CSSProperties>;
export default function WebLinkCreateForm(props: WebLinkCreateFormProps): React.ReactElement;
