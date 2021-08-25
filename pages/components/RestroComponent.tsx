import router from "next/router";

import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import * as Yup from "yup";
import { InputField } from "../shared/InputField";
import { redirectTo } from "../shared/redirect.service";
import { UserService } from "../shared/services/UserService";
import { ToastUtil } from "../shared/toast";
import { UserAuth } from "../shared/UserAuth";
import { CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

export const RestroComponent = (props: any) => {
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{props.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {props.address}
          </CardSubtitle>
          <CardText>{props.description}</CardText>
          <CardText>{props.cuisines.map((item:{name:string, price:number},)=>{
              return `${item.name}(${item.price} Rs), `
          })}</CardText>
        </CardBody>
      </Card>
    </>
  );
};
