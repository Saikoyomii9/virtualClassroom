/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Announcement } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AnnouncementUpdateFormInputValues = {
    Title?: string;
    Body?: string;
};
export declare type AnnouncementUpdateFormValidationValues = {
    Title?: ValidationFunction<string>;
    Body?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnnouncementUpdateFormOverridesProps = {
    AnnouncementUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Title?: PrimitiveOverrideProps<TextFieldProps>;
    Body?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AnnouncementUpdateFormProps = React.PropsWithChildren<{
    overrides?: AnnouncementUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    announcement?: Announcement;
    onSubmit?: (fields: AnnouncementUpdateFormInputValues) => AnnouncementUpdateFormInputValues;
    onSuccess?: (fields: AnnouncementUpdateFormInputValues) => void;
    onError?: (fields: AnnouncementUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AnnouncementUpdateFormInputValues) => AnnouncementUpdateFormInputValues;
    onValidate?: AnnouncementUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AnnouncementUpdateForm(props: AnnouncementUpdateFormProps): React.ReactElement;
