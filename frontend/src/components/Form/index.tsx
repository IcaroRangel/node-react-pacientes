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
  const handleChange = React.useCallback(
    (e: any) => {
      let { name, value } = e.target;

      setValues({
        ...values,
        [name]: value,
      });
    },
    [values]
  );

  const handleSubmit = React.useCallback((e: any) => {
    e.preventDefault();
  }, []);
  return (
    <Container onSubmit={handleSubmit}>
      <div>
        <div>
          <FiUser />
        </div>
        <input
          type="text"
          placeholder="Nome"
          value={values.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <div>
          <FiMail />
        </div>
        <input
          type="text"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <div>
          <FaStreetView />
        </div>
        <input
          type="text"
          placeholder="Endereço"
          value={values.address}
          onChange={handleChange}
        />
      </div>
      <div>
        <div>
          <FaVoicemail />
        </div>
        <input
          type="text"
          placeholder="Telefone"
          value={values.telephone}
          onChange={handleChange}
        />
      </div>
    </Container>
  );
};

export default Form;
