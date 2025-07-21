const todos = [
  { id: 1, title: "Learn Next.js", inCompleted: true },
  { id: 2, title: "Build a Todo App", inCompleted: false },
  { id: 3, title: "Deploy to Vercel", inCompleted: false },
  { id: 4, title: "Deploy to Vercel", inCompleted: true },
  { id: 5, title: "Deploy to Vercel", inCompleted: false },
];

export async function GET(request) {
  return Response.json({
    data: todos,
    message: "Todos fetched successfully",
  });
}

export async function POST(request) {
    const data = await request.json();
    const obj = {
        id: todos.length + 1,
        ...data,
        inCompleted: true,
    };
    console.log("data from frontend",data);
    todos.push(obj);
    return Response.json({
        message: "Todo added successfully",
        data: todos,
    });
}

