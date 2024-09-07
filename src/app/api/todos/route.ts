import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('https://dummyjson.com/todos');
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const { todo } = await request.json();
  const res = await fetch('https://dummyjson.com/todos/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      todo: todo,
      completed: false,
      userId: 5,
     }),
  });
  const data = await res.json();
  return NextResponse.json(data);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  const res = await fetch(`https://dummyjson.com/todos/${id}`, {
    method: 'DELETE',
  });
  const data = await res.json();
  return NextResponse.json(data);
}
