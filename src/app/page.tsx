import TodoList from '../components/TodoList';
import CreateTodo from '../components/CreateTodo';
import SearchTodo from '../components/SearchTodo';
import { getTodos } from '../lib/todoService';

export default async function Home() {
  const { todos } = await getTodos(); // Server-side data fetching

  return (
    <div className='flex mx-2 h-screen mr-6'>
      <CreateTodo />
      <div className='pl-5'>
      <SearchTodo initialTodos={todos} />
      <TodoList todos={todos} />
      </div>
    </div>
  );
}