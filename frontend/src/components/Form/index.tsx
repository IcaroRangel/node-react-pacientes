import React from "react";
import { Container, ContainerInputs } from "./styles";
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
      <h3>Cadastre-se aqui</h3>
      <ContainerInputs>
        <div>
          <FiUser />
        </div>
        <input
          type="text"
          placeholder="Nome"
          value={values.name}
          onChange={handleChange}
        />
      </ContainerInputs>
      <ContainerInputs>
        <div>
          <FiMail />
        </div>
        <input
          type="text"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
      </ContainerInputs>
      <ContainerInputs>
        <div>
          <FaStreetView />
        </div>
        <input
          type="text"
          placeholder="Endereço"
          value={values.address}
          onChange={handleChange}
        />
      </ContainerInputs>
      <ContainerInputs>
        <div>
          <FaVoicemail />
        </div>
        <input
          type="text"
          placeholder="Telefone"
          value={values.telephone}
          onChange={handleChange}
        />
      </ContainerInputs>
      <button>Ok</button>
    </Container>
  );
};

export default Form;
