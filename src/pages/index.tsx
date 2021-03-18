import { useEffect, useState } from 'react';
import { createServer, Model } from 'miragejs';

import { Header } from '../components/Header'
import { Todolist } from '../components/Todolist'

import { api } from '../services/api';

interface TodoProps {
  title: string,
  completed: boolean,
  id: string,
}

createServer({
  models: {
    todo: Model,
  },

  routes() {
    this.namespace = 'api';

    this.get('/todos', (schema, _) => {
      return schema.all('todo');
    });

    this.post('/todos', (schema, request) => {
      const todo = JSON.parse(request.requestBody)

      return schema.create('todo', todo);
    });

    this.delete('/todos/:id', (schema, request) => {
      const id = request.params.id;

      schema.findBy('todo', {id}).destroy();
      
      return { status: 'deleted' };
    });
  }
});

export default function Home() {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const handleGetTodos = () => {
    api.get('todos').then(response => setTodos(response.data.todos));
  };

  useEffect(handleGetTodos, []);

  return (
    <>
      <Header useGetTodos={handleGetTodos} />
      <Todolist todos={todos} useGetTodos={handleGetTodos} />
    </>
  )
}
