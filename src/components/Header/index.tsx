import { IoIosAdd } from 'react-icons/io';

import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <strong>TODO</strong>
        <div>
          <button type="button">
            <IoIosAdd />
          </button>
          <input type="text" placeholder="Adicionar uma nova tarefa"/>
        </div>
      </Content>
    </Container>
  );
}