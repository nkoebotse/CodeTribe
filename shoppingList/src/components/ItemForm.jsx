import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, updateItem } from '../redux/itemsSlice';
import { addItem as apiAddItem, updateItem as apiUpdateItem } from '../api';

const ItemForm = ({ item, onClose = () => {} }) => { // Default empty function for onClose
  const [name, setName] = useState(item ? item.name : '');
  const [quantity, setQuantity] = useState(item ? item.quantity : '');
  const [notes, setNotes] = useState(item ? item.notes : '');
  const [category, setCategory] = useState(item ? item.category : '');

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = { name, quantity, notes, category, id: item ? item.id : Date.now() };

    try {
      if (item) {
        await apiUpdateItem(newItem);
        dispatch(updateItem(newItem));
      } else {
        await apiAddItem(newItem);
        dispatch(addItem(newItem));
      }
      onClose(); // Call onClose, assuming it's a function
    } catch (error) {
      console.error('Error handling item submission:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Item Name" required />
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" required />
      <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Notes" />
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      <button type="submit">Save</button>
    </form>
  );
};

export default ItemForm;
