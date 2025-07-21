"use client";
import { addTodo } from "@/action/todos";
import { use, useRef } from "react";


export default function TodoForm() {
    const formRef = useRef(null);
    return (
        <form
            ref={formRef}
            action={async (formData) => {
                await addTodo(formData);
                formRef.current?.reset();
            }}
            className="w-2/3 mx-auto flex gap-2">
            <input name="todo" type="text" className="flex-1 p-2 border border-gray-300 rounded" placeholder="Add a new todo..." />
            <input className="bg-blue-500 text-white px-4 py-2 rounded" type="submit" value="Add Todo" />
        </form>
    );
}
