import React from "react";
import { Container } from "./styles";

interface InitialValues {
  name: string;
  telephone: number;
  email: string;
  address: string;
}

const Form = () => {
  const [values, setValues] = React.useState({} as InitialValues);
  return (
    <Container>
      <h2>Lista de pacientes</h2>
    </Container>
  );
};

export default Form;
