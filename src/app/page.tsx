import TodoList from '../components/TodoList';
import CreateTodo from '../components/CreateTodo';
import SearchTodo from '../components/SearchTodo';
import { getTodos } from '../lib/todoService';

export default async function Home() {
  const { todos } = await getTodos(); // Server-side data fetching

  return (
    <div>
      <CreateTodo />
      <SearchTodo initialTodos={todos} />
      <TodoList todos={todos} />
    </div>
  );
}