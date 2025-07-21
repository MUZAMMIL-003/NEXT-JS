import { addTodo } from "@/action/todos";
import TodoForm from "@/components/TodoForm";
import Link from "next/link";

export default async function Todos() {   
    let res = await fetch("http://localhost:3001/api/todos", {cache: "no-cache"});
    res =  await res.json();

  return (
    <div className="min-h-screen p-10 bg-gray-600"> 

      <h1 className="text-5xl text-center font-bold text-white">Todos</h1> <br />
      <TodoForm />
      {res.data?.map((todo) => (
        <Link key={todo.id} href={`/todos/${todo.id}`} className=" min-h-auto p-4 rounded shadow-md mb-4">
          <h2 className="text-2xl border p-2 text-center   font-red">{todo.title}</h2>
        </Link>
      ))}
    </div>

  );
}