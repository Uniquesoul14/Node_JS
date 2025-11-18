import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, onUpdate, onDelete }) {
  const pendingCount = todos.filter(t => t.status !== 'Completed').length;

  return (
    <section>
      <header className="list-header">
        <h2>Tasks</h2>
        <div className="meta">Pending: {pendingCount}</div>
      </header>

      <div className="todo-list">
        {todos.length === 0 ? (
          <p>No tasks yet.</p>
        ) : (
          todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
          ))
        )}
      </div>
    </section>
  );
}
