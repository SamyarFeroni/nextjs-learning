// app/component/[id]/page.js
"use client"; // اضافه کردن این خط

import { useEffect, useState } from "react";

export default function TodoDetail({ params }) {
  const { id } = params; // دریافت id از params
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      if (res.ok) {
        const data = await res.json();
        setTodo(data);
      } else {
        // Handle error if necessary
        setTodo(null);
      }
    };

    fetchTodo();
  }, [id]);

  if (!todo) {
    return <div>Loading...</div>; // یا نمایش پیام خطا
  }

  return (
    <div>
      <pre>{JSON.stringify(todo, null, 2)}</pre>
    </div>
  );
}
