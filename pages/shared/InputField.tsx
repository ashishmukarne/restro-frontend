import React from "react";
import { FormFeedback, FormGroup, Label } from "reactstrap";
import { Field } from "formik";

export const InputField = (props: {
  errors: any;
  touched: any;
  values: any;
  handleChange: any;
  name: string;
  placeholder?: string;
  label: string;
  type?: string;
  extraAttrs?: {};
}) => {
  const isInValid = props.touched[props.name] && props.errors[props.name];
  const type = props.type ? props.type : "text";

  return (
    <>
      <FormGroup>
        <Label>{props.label}</Label>

        <Field
          name={props.name}
          placeholder={props.placeholder ? props.placeholder : props.label}
          className={"form-control " + (isInValid ? "is-invalid" : "is-valid")}
          valid={isInValid}
          type={type}
          value={props.values[props.name] ? props.values[props.name] : ""}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            // console.log("onchange: ")
            props.handleChange(event);
          }}
          {...props?.extraAttrs}
        ></Field>

        {isInValid && (
          <FormFeedback valid={!isInValid} className="d-block">
            {props.errors[props.name]}
          </FormFeedback>
        )}
      </FormGroup>
    </>
  );
};
