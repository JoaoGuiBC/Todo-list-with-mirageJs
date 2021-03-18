import { 
  IoIosClose, 
  IoIosRadioButtonOff, 
  IoIosCheckmarkCircleOutline 
} from 'react-icons/io';

import { Container, Content, Footer } from "./styles";

import { api } from '../../services/api';

interface TodoProps {
  title: string,
  completed: boolean,
  id: string,
}

interface TodolistProps {
  todos: TodoProps[],
  useGetTodos: () => void;
}

export function Todolist({ todos, useGetTodos }: TodolistProps) {
  function handleDeleteTodo(id: string) {
    api.delete(`todos/${id}`);
    useGetTodos();
  }
  
  function handleChangeTodoCompletion(id: string) {
    api.put(`todos/${id}`);
    useGetTodos();
  }

  return (
    <Container>
      <Content>

        {todos.map(todo => (
          <div key={todo.id}>
            <button type="button" onClick={() => handleChangeTodoCompletion(todo.id)}>
              {todo.completed ? <IoIosCheckmarkCircleOutline /> : <IoIosRadioButtonOff />}
            </button>
            <p>{todo.title}</p>
            <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
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