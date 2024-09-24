// app/todo/page.js

export default async function TodoList() {
    // بارگذاری داده‌ها از API
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await res.json();
  
    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {/* <a href={`/todo/${todo.id}`}>
                {todo.title}
              </a> */}
              <pre>{JSON.stringify(todo, null, 2)}</pre>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  