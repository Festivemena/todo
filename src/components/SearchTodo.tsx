'use client'; // Client-side search

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SearchTodo({ initialTodos }: { initialTodos: any[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTodos, setFilteredTodos] = useState(initialTodos);

  useEffect(() => {
    const filtered = initialTodos.filter((todo) => {
      return todo?.todo?.toLowerCase().includes(searchTerm.toLowerCase());
    });
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
        {filteredTodos.map((todo) => (
        <div
          key={todo.id}
          className="p-4 bg-secondary rounded-md flex justify-between items-center"
        >
          <Link href={`/todos/${todo.id}`} className="text-lg font-medium">
            {todo.todo}
          </Link>
          <form method="post" action={`/api/todos`} className="ml-4">
            <Button
              type="submit"
              formAction={`/api/todos/${todo.id}/delete`}
              variant="destructive"
            >
              Delete
            </Button>
          </form>
        </div>
      ))}
        ))}
      </div>
    </div>
  );
}