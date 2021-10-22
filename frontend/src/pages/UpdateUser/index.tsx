import axios from "axios";
import React, { FormEvent } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Section from "../../components/Section";
import { Container } from "./styles";
import api from "../../services/api";

interface RouteParams {
  id: string;
}

interface UserProps {
  id: number;
  name: string;
  telephone: number;
  email: string;
  address: string;
}

const UpdateUser = () => {
  const [name, setName] = React.useState("");
  const [telephone, setTelephone] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const { params } = useRouteMatch<RouteParams>();

  const history = useHistory();

  const loadUser = React.useCallback(async () => {
    const userResponse = await api.get<UserProps>(`/${params.id}`);
    const userValue = userResponse.data;
    setName(userValue.name);
    setTelephone(userValue.telephone);
    setEmail(userValue.email);
    setAddress(userValue.address);
  }, [params.id]);

  React.useEffect(() => {
    loadUser();
  }, [loadUser]);

  const updateUser = React.useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      try {
        const response = { name, telephone, email, address };
        await api.put(`/${params.id}`, response);
        history.goBack();
      } catch (err) {
        console.log(err);
      }
    },
    [address, email, history, name, params.id, telephone]
  );

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
        <form onSubmit={updateUser}>
          <div>
            <span>
              <input
                required
                type="text"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
              />
            </span>
            <span>
              <input
                required
                type="text"
                value={telephone}
                onChange={(e: any) => setTelephone(e.target.value)}
              />
            </span>
            <span>
              <input
                required
                type="text"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
            </span>
            <span>
              <input
                required
                type="text"
                value={address}
                onChange={(e: any) => setAddress(e.target.value)}
              />
            </span>
          </div>
          <Button>Enviar Alterações</Button>
        </form>
        <span>
          <Link to="/">
            <Button>Voltar</Button>
          </Link>
        </span>
      </Section>
    </Container>
  );
};

export default UpdateUser;
