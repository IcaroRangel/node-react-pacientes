import React from "react";
import { Container } from "./styles";
import { FiUser, FiMail } from "react-icons/fi";
import { FaStreetView, FaVoicemail } from "react-icons/fa";
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
      <div>
        <div>
          <FiMail />
        </div>
        <input type="text" placeholder="Email" value={values.email} />
      </div>
      <div>
        <div>
          <FaStreetView />
        </div>
        <input type="text" placeholder="Endereço" value={values.address} />
      </div>
      <div>
        <div>
          <FaVoicemail />
        </div>
        <input type="text" placeholder="Telefone" value={values.telephone} />
      </div>
    </Container>
  );
};

export default Form;
