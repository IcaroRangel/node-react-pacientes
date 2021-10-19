import React from "react";
import Form from "../Form";
import { Container } from "./styles";

const CreateUser = () => {
  return (
    <Container>
      <header>
        <h1>Cadastro de pacientes</h1>
      </header>
      <div>
        <div>
          <h3>Formulário de cadastro</h3>
          <span>...</span>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </Container>
  );
};

export default CreateUser;
