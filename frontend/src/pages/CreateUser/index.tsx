import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Form from "../../components/Form";
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

const CreateUser = () => {
  const [users, setUsers] = React.useState<UserProps[]>([]);

  const loadUsers = React.useCallback(async () => {
    const usersResponse = await api.get("");
    const response: any = usersResponse.data;
    setUsers(response);
  }, [setUsers]);

  const deleteUser = React.useCallback(
    async (id: number) => {
      await api.delete(`/${id}`);
      const deletedUser = users.filter((user) => user.id !== id);
      setUsers([...deletedUser]);
    },
    [users, setUsers]
  );

  React.useEffect(() => {
    loadUsers();
  }, [loadUsers]);
  return (
    <Container>
      <Header>
        <span>
          <p>Cadastro de Pacientes</p>
          <br />
          Hospital Icaro Rangel
        </span>
      </Header>
      <div>
        <Form />
        <Section>
          {users.map((user) => (
            <section key={user.id}>
              <div>
                <h4>Nome</h4>
                <h4>Telefone</h4>
                <h4>E-mail</h4>
                <h4>Endereço</h4>
              </div>
              <div>
                <p>{user.name}</p>
                <p>{user.telephone}</p>
                <p>{user.email}</p>
                <p>{user.address}</p>
              </div>
              <span>
                <Link to={`/updateUser/${user.id}`}>
                  <Button>Editar paciente</Button>
                </Link>
                <Button onClick={() => deleteUser(user.id)}>
                  Remover paciente
                </Button>
              </span>
            </section>
          ))}
        </Section>
      </div>
    </Container>
  );
};

export default CreateUser;
