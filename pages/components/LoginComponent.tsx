import router from "next/router";

import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import * as Yup from "yup";
import { InputField } from "../shared/InputField";
import { redirectTo } from "../shared/redirect.service";
import { UserService } from "../shared/services/UserService";
import { ToastUtil } from "../shared/toast";
import { UserAuth } from "../shared/UserAuth";

const FormSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Email is required"),
});
const initialValues = {
  email: "",
  password: "",
};

export interface ILoginPayload {
  email: string;
  password: string;
}

export const LoginComponent = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FormSchema}
      validateOnChange={true}
      enableReinitialize={true}
      onSubmit={(values: ILoginPayload, actions: any) => {
        actions.setSubmitting(false);

        UserService.login(values)
          .then((user) => {
            ToastUtil.success("Login Successful");
            UserAuth.setToken(user);
            redirectTo("/dashboard", router);
          })
          .catch((error) => {
            let response: any = JSON.parse(error.request.response);
            response.message.forEach((item: string) => {
              ToastUtil.error(item);
            });
          });
      }}
    >
      {({
        values,
        errors,
        touched,
        isSubmitting,
        handleChange,
        setFieldValue,
        handleBlur,
        handleSubmit,
        setSubmitting,
      }) => (
        <Form className="mr-5 ml-5">
          <InputField
            name="email"
            label="Email"
            placeholder="Email"
            type="email"
            errors={errors}
            values={values}
            touched={touched}
            handleChange={handleChange}
          />
          <InputField
            name="password"
            label="Password"
            placeholder="Password"
            type="password"
            errors={errors}
            values={values}
            touched={touched}
            handleChange={handleChange}
          />

          <Button
            className="float-right mb-3 mt-5"
            onClick={() => {
              setSubmitting(!isSubmitting);
              handleSubmit();
            }}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};
