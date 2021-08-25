import React, { useEffect, useState } from "react";
import { Input, Button, Card, Col, Container, Row } from "reactstrap";
import { LoginComponent } from "./components/LoginComponent";
import { RestroComponent } from "./components/RestroComponent";
import { RestroService } from "./shared/services/RestroService";
import { ToastUtil } from "./shared/toast";
const restros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Dashboard = () => {
  const [restros, setRestros] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sorting, setSorting] = useState(1);

  const loadRestros = () => {
    RestroService.list(searchText, sorting)
      .then((success) => {
        setRestros(success);
      })
      .catch((error: any) => {
        ToastUtil.error(error);
      });
  };

  useEffect(() => {
    loadRestros();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col className="mt-5" xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
            <Input
              onChange={(event: any) => {
                console.log(event.currentTarget.value);
                loadRestros();
                setSearchText(event.currentTarget.value);
                setSearchText(event.currentTarget.value);
              }}
            ></Input>
          </Col>
          <Col className="mt-5" xs={6} sm={6} md={3} lg={2} xl={2} xxl={1}>
            <Button>Search</Button>
          </Col>
          <Col className="mt-5" xs={6} sm={6} md={3} lg={2} xl={2} xxl={1}>
            <Button
              onClick={() => {
                if (sorting == 1) {
                  setSorting(-1);
                  loadRestros();
                } else {
                  setSorting(1);
                  loadRestros();
                }
              }}
              className="float-right"
            >
              Sort
            </Button>
          </Col>
        </Row>

        <Row className="mt-5 mr-5 ml-5">
          {restros.map((item, index) => {
            return (
              <Col
                key={index}
                className="mt-5"
                xs={12}
                sm={6}
                md={4}
                lg={4}
                xl={3}
                xxl={2}
              >
                <RestroComponent {...item}></RestroComponent>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
