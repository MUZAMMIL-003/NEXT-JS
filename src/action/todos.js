"use server"

import { revalidatePath } from "next/cache";

export async function addTodo(data) {
    const todo = data.get("todo")
    console.log("todo from frontend", todo);
    try {
        const res = await fetch("http://localhost:3001/api/todos", {
            method: "POST",
            body: JSON.stringify({ title: todo }),
        });
        revalidatePath("/todos");
    } catch (error) {
        console.error("Error adding todo:", error);
    }
}