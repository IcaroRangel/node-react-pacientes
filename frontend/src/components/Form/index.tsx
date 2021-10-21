import React, { FormEvent } from "react";
import { Container, ContainerInputs } from "./styles";
import { FiUser, FiMail } from "react-icons/fi";
import { FaStreetView, FaVoicemail } from "react-icons/fa";
import api from "../../services/api";

const Form = () => {
  const [name, setName] = React.useState("");
  const [telephone, setTelephone] = React.useState(Number);
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const handleChange = React.useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      const response = { name, telephone, email, address };
      await api.post("", response);
    },
    [address, email, name, telephone]
  );

  return (
    <Container onSubmit={handleChange}>
      <h3>Cadastre-se aqui</h3>
      <ContainerInputs>
        <div>
          <FiUser />
        </div>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
        />
      </ContainerInputs>
      <ContainerInputs>
        <div>
          <FaVoicemail />
        </div>
        <input
          type="text"
          placeholder="Telefone"
          value={telephone}
          onChange={(e: any) => setTelephone(e.target.value)}
        />
      </ContainerInputs>
      <ContainerInputs>
        <div>
          <FiMail />
        </div>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
      </ContainerInputs>
      <ContainerInputs>
        <div>
          <FaStreetView />
        </div>
        <input
          type="text"
          placeholder="Endereço"
          value={address}
          onChange={(e: any) => setAddress(e.target.value)}
        />
      </ContainerInputs>

      <button>Ok</button>
    </Container>
  );
};

export default Form;
