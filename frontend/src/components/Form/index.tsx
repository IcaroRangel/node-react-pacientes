import React from "react";
import { Container } from "./styles";
import { FiUser } from "react-icons/fi";
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
      <div>
        <div>
          <FiUser />
        </div>
        <input type="text" placeholder="Nome" value={values.name} />
      </div>
    </Container>
  );
};

export default Form;
