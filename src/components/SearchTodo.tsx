'use client'; // Client-side search

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';

export default function SearchTodo({ initialTodos }: { initialTodos: any[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTodos, setFilteredTodos] = useState(initialTodos);

  useEffect(() => {
    const filtered = initialTodos.filter((todo) =>
      todo.todo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTodos(filtered);
  }, [searchTerm, initialTodos]);

  return (
    <div>
      <Input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search todos..."
        className="mb-4"
      />
      <div className="space-y-4">
{searchTerm? ({initialTodos.map((Todo) => (
<div key={todo.id}> {todo.todo}</div> ): (
        {filteredTodos.map((todo) => (
          <div key={todo.id} className="p-4 bg-secondary rounded-md">
            {todo.todo}
          </div>
        ))} )
      </div>
    </div>
  );
}