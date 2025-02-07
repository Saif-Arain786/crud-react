// src/App.js
import React, { useEffect, useState } from 'react';
import { database } from './firebase';
import { ref, set, onValue, remove } from 'firebase/database';
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const itemsRef = ref(database, 'items/');
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      const itemsList = data ? Object.entries(data).map(([id, value]) => ({ id, value })) : [];
      setItems(itemsList);
    });
  }, []);

  const handleAddOrUpdate = () => {
    const itemsRef = ref(database, `items/${editId || Date.now()}`);
    set(itemsRef, inputValue);
    setInputValue('');
    setEditId(null);
  };

  const handleEdit = (id, value) => {
    setInputValue(value);
    setEditId(id);
  };

  const handleDelete = (id) => {
    const itemRef = ref(database, `items/${id}`);
    remove(itemRef);
  };

  return (
    <div>
      <h1>Real-time CRUD with Firebase</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddOrUpdate}>
        {editId ? 'Update' : 'Add'}
      </button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.value}
            <button onClick={() => handleEdit(item.id, item.value)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
