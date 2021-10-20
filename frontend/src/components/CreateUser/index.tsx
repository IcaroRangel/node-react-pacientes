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
          <h2 style={{ width: "30rem" }}>Formulário de cadastro</h2>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CreateUser;
