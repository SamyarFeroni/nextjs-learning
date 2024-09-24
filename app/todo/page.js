//baseic page

export default async function TodoList() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await res.json();
    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <pre>{JSON.stringify(todo, null, 2)}</pre>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  