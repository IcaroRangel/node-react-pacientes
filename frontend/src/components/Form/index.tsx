import React, { FormEvent } from "react";
import { Container, ContainerInputs } from "./styles";
import { FiUser, FiMail } from "react-icons/fi";
import { FaStreetView, FaVoicemail } from "react-icons/fa";
import api from "../../services/api";
import Button from "../Button";

const Form = () => {
  const [name, setName] = React.useState("");
  const [telephone, setTelephone] = React.useState(Number);
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const PostUser = React.useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      const response = { name, telephone, email, address };
      await api.post("", response);
    },
    [address, email, name, telephone]
  );

  return (
    <Container onSubmit={PostUser}>
      <h3>Cadastre-se aqui</h3>
      <ContainerInputs>
        <div>
          <FiUser />
        </div>
        <input
          required
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
          required
          type="text"
          pattern="[0-9]+$"
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
          required
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

      <Button>Cadastrar</Button>
    </Container>
  );
};

export default Form;
