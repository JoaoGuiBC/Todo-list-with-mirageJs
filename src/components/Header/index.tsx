import { useCallback, useState } from 'react';
import { IoIosAdd } from 'react-icons/io';

import { api } from '../../services/api';

import { Container, Content } from "./styles";

interface HeaderProps {
  useGetTodos: () => void;
}

export function Header({ useGetTodos }: HeaderProps) {
  const [title, setTitle] = useState('');

  const handleSubmit = useCallback(async() => {
    if (!title) {
      return;
    };

    await api.post('todos', {
      title,
      completed: false,
    });

    useGetTodos();
  }, [title]);

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