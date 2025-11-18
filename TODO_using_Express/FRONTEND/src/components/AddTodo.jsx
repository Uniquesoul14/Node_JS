import React, { useState } from 'react';

export default function AddTodo({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const [dueDate, setDueDate] = useState('');

  const submit = async e => {
    e.preventDefault();
    if (!title.trim()) return;
    await onAdd({ title: title.trim(), description, priority, status: 'Pending', dueDate: dueDate || null });
    setTitle('');
    setDescription('');
    setPriority('Low');
    setDueDate('');
  };

  return (
    <form className="add-form" onSubmit={submit}>
      <div className="row">
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Add a task..."
          aria-label="Title"
          required
        />
        <select value={priority} onChange={e => setPriority(e.target.value)} aria-label="Priority">
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <button type="submit" className="btn">Add</button>
      </div>

      <div className="row small">
        <input
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Short description (optional)"
          aria-label="Description"
        />
        <input
          type="date"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
          aria-label="Due date"
        />
      </div>
    </form>
  );
}
