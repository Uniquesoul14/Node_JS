import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const API = "http://localhost:5000/api/todos";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('created_desc');
  const [filterPriority, setFilterPriority] = useState('');
  const [filterStatus, setFilterStatus] = useState('');


  // FETCH TODOS

  const fetchTodos = async () => {
    try {
      setLoading(true);

      const params = {};
      if (search) params.search = search;
      if (sort) params.sort = sort;
      if (filterPriority) params.priority = filterPriority;
      if (filterStatus) params.status = filterStatus;

      const res = await axios.get(API, { params });
      setTodos(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);


  // ADD TODO

  const addTodo = async payload => {
    const res = await axios.post(API, payload);
    setTodos(prev => [res.data, ...prev]);
  };

 
  // UPDATE TODO
 
  const updateTodo = async (id, payload) => {
    const res = await axios.put(`${API}/${id}`, payload);
    setTodos(prev => prev.map(t => (t.id === res.data.id ? res.data : t)));
  };


  // DELETE TODO
 
  const deleteTodo = async id => {
    await axios.delete(`${API}/${id}`);
    setTodos(prev => prev.filter(t => t.id !== Number(id)));
  };


  return (
    <main className="app-container">
      <h1>Todo App</h1>

      <button onClick={fetchTodos}>Refresh</button>

      <AddTodo onAdd={addTodo} />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
      )}
    </main>
  );
}
