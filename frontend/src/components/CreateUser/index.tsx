import React from "react";
import Form from "../Form";
import { Container } from "./styles";

const CreateUser = () => {
  return (
    <Container>
      <header>
        <span>
          <p>Cadastro de Pacientes</p>
          <br />
          Hospital Icaro Rangel
        </span>
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
