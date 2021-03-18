import { 
  IoIosClose, 
  IoIosRadioButtonOff, 
  IoIosCheckmarkCircleOutline 
} from 'react-icons/io';

import { Container, Content, Footer } from "./styles";

interface TodoProps {
  title: string,
  completed: boolean,
  id: string,
}

interface TodolistProps {
  todos: TodoProps[],
}

export function Todolist({ todos }: TodolistProps) {
  return (
    <Container>
      <Content>

        {todos.map(todo => (
          <div key={todo.id}>
            <button type="button">
              {todo.completed ? <IoIosCheckmarkCircleOutline /> : <IoIosRadioButtonOff />}
            </button>
            <p>{todo.title}</p>
            <button type="button">
              <IoIosClose />
            </button>
          </div>
        ))}

        <Footer>
          <button type="button">Concluidas</button>
          <button type="button" disabled>Todas</button>
          <button type="button">Não concluidas</button>
        </Footer>

      </Content>
    </Container>
  );
}