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
          <div>
            <Form />
          </div>
          <h2 style={{ width: "30rem" }}>Lista de pacientes</h2>
        </div>
      </div>
    </Container>
  );
};

export default CreateUser;
