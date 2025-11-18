import React, { useState } from 'react';

function formatDate(iso) {
  if (!iso) return '-';
  // show local-friendly date for createdAt or dueDate
  const d = new Date(iso);
  return d.toLocaleString();
}

export default function TodoItem({ todo, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description || '');
  const [priority, setPriority] = useState(todo.priority || 'Low');
  const [status, setStatus] = useState(todo.status || 'Pending');
  const [dueDate, setDueDate] = useState(todo.dueDate ? todo.dueDate.split('T')[0] : '');

  const isOverdue = () => {
    if (!todo.dueDate) return false;
    const due = new Date(todo.dueDate);
    const now = new Date();
    return due < now && todo.status !== 'Completed';
  };

  const save = async () => {
    await onUpdate(todo.id, { title, description, priority, status, dueDate: dueDate || null });
    setEditing(false);
  };

  const cancel = () => {
    setTitle(todo.title);
    setDescription(todo.description || '');
    setPriority(todo.priority || 'Low');
    setStatus(todo.status || 'Pending');
    setDueDate(todo.dueDate ? todo.dueDate.split('T')[0] : '');
    setEditing(false);
  };

  return (
    <article className={`todo-item ${isOverdue() ? 'overdue' : ''}`}>
      <div className="main">
        {editing ? (
          <input value={title} onChange={e => setTitle(e.target.value)} />
        ) : (
          <h3>{todo.title}</h3>
        )}

        <div className="meta-row">
          <small>Created: {formatDate(todo.createdAt)}</small>
          <small>Due: {todo.dueDate ? todo.dueDate : '-'}</small>
          <small>Priority: {todo.priority}</small>
          <small>Status: {todo.status}</small>
        </div>

        {editing ? (
          <textarea value={description} onChange={e => setDescription(e.target.value)} />
        ) : (
          <p className="desc">{todo.description}</p>
        )}
      </div>

      <div className="actions">
        {editing ? (
          <>
            <div className="field-row">
              <label>
                Priority
                <select value={priority} onChange={e => setPriority(e.target.value)}>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </label>

              <label>
                Status
                <select value={status} onChange={e => setStatus(e.target.value)}>
                  <option>Pending</option>
                  <option>In-progress</option>
                  <option>Completed</option>
                </select>
              </label>

              <label>
                Due
                <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
              </label>
            </div>

            <div className="btn-row">
              <button className="btn" onClick={save}>Save</button>
              <button className="btn subtle" onClick={cancel}>Cancel</button>
            </div>
          </>
        ) : (
          <>
            <div className="btn-row">
              <button className="btn" onClick={() => setEditing(true)}>Edit</button>
              <button
                className="btn subtle"
                onClick={() => onDelete(todo.id)}
              >
                Delete
              </button>
            </div>

            <div className="quick-update">
              <label>
                Status
                <select value={status} onChange={e => { setStatus(e.target.value); onUpdate(todo.id, { status: e.target.value }); }}>
                  <option>Pending</option>
                  <option>In-progress</option>
                  <option>Completed</option>
                </select>
              </label>

              <label>
                Priority
                <select value={priority} onChange={e => { setPriority(e.target.value); onUpdate(todo.id, { priority: e.target.value }); }}>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </label>
            </div>
          </>
        )}

        {isOverdue() && <div className="badge">Overdue</div>}
      </div>
    </article>
  );
}
