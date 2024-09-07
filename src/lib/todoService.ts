export const getTodos = async () => {
  const res = await fetch('https://dummyjson.com/todos');
  return res.json();
};

export const getTodo = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/todos/${id}`);
  return res.json();
};