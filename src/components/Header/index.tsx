import { useCallback, useState } from 'react';
import { IoIosAdd } from 'react-icons/io';

import { useTodos } from '../../hooks/useTodos';

import { Container, Content } from "./styles";

export function Header() {
  const { createTodo } = useTodos();

  const [title, setTitle] = useState('');

  const handleSubmit = useCallback(async() => {
    if (!title) {
      return;
    };

    await createTodo(title);
    setTitle('');
  }, [title, createTodo, setTitle]);

  return (
    <Container>
      <Content>
        <strong>TODO</strong>
        <div>
          <button type="button" onClick={handleSubmit}>
            <IoIosAdd />
          </button>
          <input 
            placeholder="Adicionar uma nova tarefa"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </div>
      </Content>
    </Container>
  );
}