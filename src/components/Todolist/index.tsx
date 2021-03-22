import { useCallback, useState } from 'react';
import { 
  IoIosClose, 
  IoIosRadioButtonOff, 
  IoIosCheckmarkCircleOutline 
} from 'react-icons/io';

import { useTodos } from '../../hooks/useTodos';

import { Container, Content, Footer, Button } from "./styles";

export function Todolist() {
  const { 
    todos, 
    deleteTodo, 
    updateTodo, 
    listCompletedTodos,
    listAllTodos,
    listIncompletedTodos,
  } = useTodos();

  const [selectedFilterButton, setSelectedFilterButton] = useState('all');

  const handleFilterCompleteTodos = useCallback(() => {
    setSelectedFilterButton('complete');
    listCompletedTodos();
  }, []);

  const handleFilterAllTodos = useCallback(() => {
    setSelectedFilterButton('all');
    listAllTodos();
  }, []);

  const handleFilterIncompleteTodos = useCallback(() => {
    setSelectedFilterButton('incomplete');
    listIncompletedTodos();
  }, []);

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
          <Button 
            type="button" 
            onClick={handleFilterCompleteTodos}
            isSelected={selectedFilterButton === 'complete'}
          >
            Concluidas
          </Button>

          <Button 
            type="button" 
            onClick={handleFilterAllTodos}
            isSelected={selectedFilterButton === 'all'}
          >
            Todas
          </Button>

          <Button 
            type="button" 
            onClick={handleFilterIncompleteTodos}
            isSelected={selectedFilterButton === 'incomplete'}
          >
            Não concluidas
          </Button>
        </Footer>

      </Content>
    </Container>
  );
}