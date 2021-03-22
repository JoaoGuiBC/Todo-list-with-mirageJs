import { 
  IoIosClose, 
  IoIosRadioButtonOff, 
  IoIosCheckmarkCircleOutline 
} from 'react-icons/io';

import { useTodos } from '../../hooks/useTodos';

import { Container, Content, Footer } from "./styles";

export function Todolist() {
  const { todos, deleteTodo, updateTodo } = useTodos();

  return (
    <Container>
      <Content>

        {todos.map(todo => (
          <div key={todo.id}>
            <button type="button" onClick={async() => updateTodo(todo.id)}>
              {todo.completed ? <IoIosCheckmarkCircleOutline /> : <IoIosRadioButtonOff />}
            </button>
            <p>{todo.title}</p>
            <button type="button" onClick={async() => deleteTodo(todo.id)}>
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