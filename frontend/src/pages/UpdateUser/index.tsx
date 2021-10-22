import React from "react";
import { useRouteMatch } from "react-router";
import Header from "../../components/Header";
import Section from "../../components/Section";
import api from "../../services/api";
import { Container } from "./styles";

interface UserProps {
  id: number;
  name: string;
  telephone: number;
  email: string;
  address: string;
}

interface RouteParams {
  id: string;
}

const UpdateUser = () => {
  const { params } = useRouteMatch<RouteParams>();
  const [name, setName] = React.useState("");
  const [telephone, setTelephone] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");

  const loadUser = React.useCallback(async () => {
    const response: any = { name, telephone, email, address };
    const loadResponse = await api.get<UserProps>(`${params.id}`, response);
    const userValue = loadResponse.data;
    setName(userValue.name);
    setTelephone(userValue.telephone);
    setEmail(userValue.email);
    setAddress(userValue.address);
  }, [address, email, name, params.id, telephone]);

  React.useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <Container>
      <Header>
        <span>
          <p>Editar paciente</p>
        </span>
      </Header>
      <Section>
        <div>
          <h4>Nome</h4>
          <h4>Telefone</h4>
          <h4>E-mail</h4>
          <h4>Endereço</h4>
        </div>
        <div>
          <p>{name}</p>
          <p>{telephone}</p>
          <p>{email}</p>
          <p>{address}</p>
        </div>
      </section>
    </Container>
  );
};

export default UpdateUser;
