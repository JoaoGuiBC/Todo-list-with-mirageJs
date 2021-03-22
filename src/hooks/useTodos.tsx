import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodosContextData {
  todos: Todo[];
  createTodo: (todoTitle: string) => Promise<void>;
  deleteTodo: (todoId: number) => Promise<void>;
  updateTodo: (todoId: number) => Promise<void>;
  listCompletedTodos: () => Promise<void>;
  listIncompletedTodos: () => Promise<void>;
  listAllTodos: () => Promise<void>;
}

interface TodoProviderProps {
  children: ReactNode
}

const TodoContext = createContext<TodosContextData>({} as TodosContextData);

export function TodoProvider({ children }:TodoProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    api.get('todos').then(response => setTodos(response.data.todos));
  }, []);

  async function createTodo(todoTitle: string) {
    const response = await api.post('/todos', {
      title: todoTitle, 
      completed: false
    });
    const { todo } = response.data;

    setTodos([...todos, todo]);
  };

  async function deleteTodo(todoId: number) {
    await api.delete(`/todos/${todoId}`);

    setTodos(todos.filter(todo => todo.id !== todoId));
  }
  
  async function updateTodo(todoId: number) {
    await api.put(`/todos/${todoId}`);

    setTodos(todos.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    }));
  }

  async function listCompletedTodos() {
    const response = await api.get('todos');

    const responseTodos = response.data.todos as Todo[];

    setTodos(responseTodos.filter(todo => todo.completed === true));
  }

  async function listIncompletedTodos() {
    const response = await api.get('todos');

    const responseTodos = response.data.todos as Todo[];

    setTodos(responseTodos.filter(todo => todo.completed === false));
  }

  async function listAllTodos() {
    const response = await api.get('todos');

    setTodos(response.data.todos);
  }

  return (
    <TodoContext.Provider value={{
      todos, 
      createTodo, 
      deleteTodo, 
      updateTodo,
      listCompletedTodos,
      listIncompletedTodos,
      listAllTodos,
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodoContext);

  return context;
}
