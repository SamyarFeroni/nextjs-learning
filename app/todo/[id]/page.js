// app/todo/[id]/page.js

export default async function TodoDetail({ params }) {
  const { id } = params; // دریافت id از params

  // بارگذاری داده‌ها با استفاده از SSR
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  
  if (!res.ok) {
    throw new Error('This ID is not Founded (try 200>ID)');
  }

  const todo = await res.json();

  return (
    <div>
      <h2>Todo Details</h2>
      <pre>{JSON.stringify(todo, null, 2)}</pre> {/* نمایش تمام بخش های شی */}
    </div>
  );
}
