import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function TodoList({ todos }: { todos: any[] }) {
  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="p-4 bg-secondary rounded flex justify-between items-center"
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
    </div>
  );
}