'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SearchTodo({ initialTodos }: { initialTodos: any[] }) {
  const [searchTerm, setSearchTerm] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem('searchTerm') || '';
    }
    return '';
  });
  const [filteredTodos, setFilteredTodos] = useState(initialTodos);

  useEffect(() => {
    const filtered = initialTodos.filter((todo) => {
      return todo?.todo?.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredTodos(filtered);
  }, [searchTerm, initialTodos]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem('searchTerm', searchTerm);
    }
  }, [searchTerm]);

  
  const handleDelete = async (id: number) => {
    const res = await fetch(`/api/todos`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      setFilteredTodos(filteredTodos.filter(todo => todo.id !== id));
    } else {
      console.error('Failed to delete the todo');
    }
  };

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
        {filteredTodos.map((todo) => (
          <div
            key={todo.id}
            className="p-4 bg-secondary rounded-md flex justify-between items-center"
          >
            <Link href={`/todos/${todo.id}`} className="text-lg font-medium">
              {todo.todo}
            </Link>
            <Button
              onClick={() => handleDelete(todo.id)}
              variant="destructive"
              className="ml-4"
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}