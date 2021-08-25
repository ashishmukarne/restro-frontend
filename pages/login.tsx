import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import { LoginComponent } from "./components/LoginComponent";

const login = () => {
  return (
    <>
      <Container>
        <Row>
          <Card className="mt-5 mr-5 ml-5">
            <Card.Body>
              <LoginComponent></LoginComponent>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default login;
