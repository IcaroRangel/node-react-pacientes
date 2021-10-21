import React from "react";
import Form from "../../components/Form";
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

  React.useEffect(() => {
    loadUsers();
  }, [loadUsers]);
  return (
    <Container>
      <header>
        <span>
          <p>Cadastro de Pacientes</p>
          <br />
          Hospital Icaro Rangel
        </span>
      </header>
      <div>
        <div>
          <Form />
          <h2>Lista de pacientes</h2>
          <div>
            {users.map((user) => (
              <div>
                <span>
                  <p>{user.name}</p>
                  <p>{user.telephone}</p>
                  <p>{user.email}</p>
                  <p>{user.address}</p>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CreateUser;
