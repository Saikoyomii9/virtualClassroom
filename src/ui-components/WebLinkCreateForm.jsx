/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { WebLink } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function WebLinkCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Title: "",
    URL: "",
  };
  const [Title, setTitle] = React.useState(initialValues.Title);
  const [URL, setURL] = React.useState(initialValues.URL);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitle(initialValues.Title);
    setURL(initialValues.URL);
    setErrors({});
  };
  const validations = {
    Title: [{ type: "Required" }],
    URL: [{ type: "Required" }, { type: "URL" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
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
          Title,
          URL,
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
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new WebLink(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "WebLinkCreateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={Title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Title: value,
              URL,
            };
            const result = onChange(modelFields);
            value = result?.Title ?? value;
          }
          if (errors.Title?.hasError) {
            runValidationTasks("Title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("Title", Title)}
        errorMessage={errors.Title?.errorMessage}
        hasError={errors.Title?.hasError}
        {...getOverrideProps(overrides, "Title")}
      ></TextField>
      <TextField
        label="Url"
        isRequired={true}
        isReadOnly={false}
        value={URL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Title,
              URL: value,
            };
            const result = onChange(modelFields);
            value = result?.URL ?? value;
          }
          if (errors.URL?.hasError) {
            runValidationTasks("URL", value);
          }
          setURL(value);
        }}
        onBlur={() => runValidationTasks("URL", URL)}
        errorMessage={errors.URL?.errorMessage}
        hasError={errors.URL?.hasError}
        {...getOverrideProps(overrides, "URL")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
