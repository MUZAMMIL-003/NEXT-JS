"use server";

import { revalidatePath } from "next/cache";

// export async function addTodo(formData) {
//   const todo = formData.get("todo");
//   console.log("todo from formData:", todo);
//   try {
//     await fetch("http://localhost:3001/api/todos", {
//       method: "POST",
//       body: JSON.stringify({ todo }),
//     });

//     revalidatePath("/todos");
//   } catch (err) {
//     console.log(err);
//   }
// }

export async function addTodo(formData) {
    const todo = formData.get("todo");
    console.log("adding todo:", todo); // Debug

    try {
        await fetch("http://localhost:3000/api/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Important!
            },
            body: JSON.stringify({ todo }),
        });

        revalidatePath("/todos");
    } catch (err) {
        console.log("Error adding todo:", err);
    }
}

export async function updateTodo(obj) {
    console.log("obj==in update todo=>", obj);
    try {
        await fetch("http://localhost:3000/api/todos", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        });

        revalidatePath("/todos");
    } catch (err) {
        console.log(err);
    }
}

export async function deleteTodo(obj) {
    try {
        await fetch("http://localhost:3000/api/todos", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        });

        revalidatePath("/todos");
    } catch (err) {
        console.log(err);
    }
}