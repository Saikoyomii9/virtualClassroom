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
export declare type AnnouncementCreateFormInputValues = {
    Title?: string;
    Body?: string;
};
export declare type AnnouncementCreateFormValidationValues = {
    Title?: ValidationFunction<string>;
    Body?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnnouncementCreateFormOverridesProps = {
    AnnouncementCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Title?: PrimitiveOverrideProps<TextFieldProps>;
    Body?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AnnouncementCreateFormProps = React.PropsWithChildren<{
    overrides?: AnnouncementCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AnnouncementCreateFormInputValues) => AnnouncementCreateFormInputValues;
    onSuccess?: (fields: AnnouncementCreateFormInputValues) => void;
    onError?: (fields: AnnouncementCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AnnouncementCreateFormInputValues) => AnnouncementCreateFormInputValues;
    onValidate?: AnnouncementCreateFormValidationValues;
} & React.CSSProperties>;
export default function AnnouncementCreateForm(props: AnnouncementCreateFormProps): React.ReactElement;
