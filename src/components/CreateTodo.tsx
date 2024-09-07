'use client'; // Required for client-side actions

import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useTransition } from 'react';

export default function CreateTodo() {
  const [todo, setTodo] = useState('');
  const [isPending, startTransition] = useTransition();

  async function addTodoAction(formData: FormData) {
    const todo = formData.get('todo')?.toString() || '';
    if (todo.trim()) {
      await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ todo }),
      });
    }
  }

  return (
    <form
      action={addTodoAction}
      onSubmit={(e) => {
        e.preventDefault();
        startTransition(() => addTodoAction(new FormData(e.currentTarget)));
      }}
      className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4"
    >
      <Textarea
        name="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add new todo"
        className="w-full h-2/4"
      />
      <Button
        type="submit"
        variant="default"
        disabled={isPending}
        className='w-full md:w-auto'
      >
        {isPending ? 'Adding...' : 'Add'}
      </Button>
    </form>
  );
}
