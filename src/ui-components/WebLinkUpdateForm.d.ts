/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { WebLink } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WebLinkUpdateFormInputValues = {
    Title?: string;
    URL?: string;
};
export declare type WebLinkUpdateFormValidationValues = {
    Title?: ValidationFunction<string>;
    URL?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WebLinkUpdateFormOverridesProps = {
    WebLinkUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Title?: PrimitiveOverrideProps<TextFieldProps>;
    URL?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WebLinkUpdateFormProps = React.PropsWithChildren<{
    overrides?: WebLinkUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    webLink?: WebLink;
    onSubmit?: (fields: WebLinkUpdateFormInputValues) => WebLinkUpdateFormInputValues;
    onSuccess?: (fields: WebLinkUpdateFormInputValues) => void;
    onError?: (fields: WebLinkUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WebLinkUpdateFormInputValues) => WebLinkUpdateFormInputValues;
    onValidate?: WebLinkUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WebLinkUpdateForm(props: WebLinkUpdateFormProps): React.ReactElement;
