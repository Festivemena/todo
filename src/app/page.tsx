'use client'; 

import { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';
import CreateTodo from '../components/CreateTodo';
import SearchTodo from '../components/SearchTodo';
import { getTodos } from '../lib/todoService';

export default function Home() {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    async function fetchTodos() {
      const { todos } = await getTodos(); 
      setTodos(todos); // Set the todos to state
    }
    fetchTodos();
  }, []);

  const addTodo = (newTodo: any) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div>
      <CreateTodo onAddTodo={addTodo} />
      <SearchTodo initialTodos={todos} />
    </div>
  );
}