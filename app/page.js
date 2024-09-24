// app/page.js
"use client"; // مشخص کردن این فایل به عنوان Client Component
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setTodos(data);
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link href={`/component/${todo.id}`}>
              {" "}
              {/* مسیر درست را مشخص کنید */}
              {todos}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
