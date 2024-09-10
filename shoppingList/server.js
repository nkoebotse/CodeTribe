const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Mock database
let items = [
  { id: '1', name: 'Item 1', quantity: 10, notes: 'Note 1', category: 'Category 1' },
  { id: '2', name: 'Item 2', quantity: 5, notes: 'Note 2', category: 'Category 2' },
];

// Routes
app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

app.put('/items/:id', (req, res) => {
  const { id } = req.params;
  const updatedItem = req.body;
  items = items.map(item => (item.id === id ? updatedItem : item));
  res.json(updatedItem);
});

app.delete('/items/:id', (req, res) => {
  const { id } = req.params;
  items = items.filter(item => item.id !== id);
  res.status(200).send(`Item with id ${id} deleted`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
