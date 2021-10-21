import React from "react";
import Form from "../Form";
import { Container } from "./styles";

const CreateUser = () => {
  return (
    <Container>
      <header>
        <h1>Cadastro de Pacientes</h1>
      </header>
      <div>
        <div>
          <Form />

          <h2>Lista de pacientes</h2>
        </div>
      </div>
    </Container>
  );
};

export default CreateUser;
