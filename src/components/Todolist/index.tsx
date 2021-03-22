import { 
  IoIosClose, 
  IoIosRadioButtonOff, 
  IoIosCheckmarkCircleOutline 
} from 'react-icons/io';

import { useTodos } from '../../hooks/useTodos';

import { Container, Content, Footer } from "./styles";

export function Todolist() {
  const { 
    todos, 
    deleteTodo, 
    updateTodo, 
    listCompletedTodos,
    listAllTodos,
    listIncompletedTodos,
  } = useTodos();

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
          <button 
            type="button" 
            onClick={() => listCompletedTodos()}
          >
            Concluidas
          </button>

          <button 
            type="button" 
            onClick={() => listAllTodos()}
          >
            Todas
          </button>

          <button 
            type="button" 
            onClick={() => listIncompletedTodos()}
          >
            Não concluidas
          </button>
        </Footer>

      </Content>
    </Container>
  );
}