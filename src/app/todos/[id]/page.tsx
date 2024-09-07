import { getTodo } from '@/lib/todoService';

export default async function TodoDetail({ params }: { params: { id: string } }) {
  const todo = await getTodo(params.id);

  return (
    <div className="p-4 bg-secondary rounded-md">
      {todo && <h1 className="text-xl font-bold">{todo.todo}</h1>}
    </div>
  );
}