let todos = [];

// GET ALL
exports.getAll = (req, res) => {
  res.json(todos);
};

// GET ONE
exports.getOne = (req, res) => {
  const id = Number(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  res.json(todo);
};

// CREATE
exports.create = (req, res) => {
  const { title, priority, status } = req.body;

  const newTodo = {
    id: Date.now(),
    title,
    priority: priority || "Medium",
    status: status || "Pending",
    createdAt: new Date()
  };

  todos.unshift(newTodo);
  res.json(newTodo);
};

// UPDATE
exports.update = (req, res) => {
  const id = Number(req.params.id);
  const index = todos.findIndex(t => t.id === id);

  if (index === -1) return res.status(404).json({ error: "Todo not found" });

  todos[index] = { ...todos[index], ...req.body };
  res.json(todos[index]);
};

// DELETE
exports.remove = (req, res) => {
  const id = Number(req.params.id);
  todos = todos.filter(t => t.id !== id);
  res.json({ success: true });
};

// RESET
exports.reset = (req, res) => {
  todos = [];
  res.json({ success: true });
};
