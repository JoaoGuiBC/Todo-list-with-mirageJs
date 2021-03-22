import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoProviderProps {
  children: ReactNode
}

const TodoContext = createContext<Todo[]>([]);

export function TodoProvider({ children }:TodoProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    api.get('todos').then(response => setTodos(response.data.todos));
  }, []);

  return (
    <TodoContext.Provider value={todos}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodoContext);

  return context;
}
