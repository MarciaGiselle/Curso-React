import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card } from "react-bootstrap";
import Condicional from "./components/Condicional";
import { CardBody } from "react-bootstrap/Card";

function App() {
  return (
    <Container>
      <header>
        <h1 className="text-center mt-2">Gasto Semanal</h1>
      </header>
      <Card>
        <Card.Body>
        <Condicional />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
