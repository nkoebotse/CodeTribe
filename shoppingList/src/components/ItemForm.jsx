import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, updateItem } from '../redux/itemsSlice';
import { addItem as apiAddItem, updateItem as apiUpdateItem } from '../api';

const ItemForm = ({ item, onClose = () => {} }) => {
  const [name, setName] = useState(item ? item.name : '');
  const [quantity, setQuantity] = useState(item ? item.quantity : '');
  const [notes, setNotes] = useState(item ? item.notes : '');
  const [category, setCategory] = useState(item ? item.category : '');

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = { name, quantity, notes, category, id: `${ Date.now() }`};

    try {
      if (item) {
        await apiUpdateItem(newItem);
        dispatch(updateItem(newItem));
      } else {
        await apiAddItem(newItem);
        dispatch(addItem(newItem));
      }
      onClose();
    } catch (error) {
      console.error('Error handling item submission:', error);
    }
  };

  const handleShare = async () => {
    const itemDetails = `Item: ${name}\nQuantity: ${quantity}\nNotes: ${notes}\nCategory: ${category}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Shared Item',
          text: itemDetails,
        });
        console.log('Item shared successfully');
      } catch (error) {
        console.error('Error sharing item:', error);
      }
    } else {
      console.warn('Web Share API is not supported in this browser.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Item Name" 
        required 
      />
      <input 
        type="number" 
        value={quantity} 
        onChange={(e) => setQuantity(e.target.value)} 
        placeholder="Quantity" 
        required 
      />
      <input 
        type="text" 
        value={notes} 
        onChange={(e) => setNotes(e.target.value)} 
        placeholder="Notes" 
      />
      <input 
        type="text" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        placeholder="Category" 
      />
      <button type="submit">Save</button>
      <button type="button" onClick={handleShare}>Share Item</button>
    </form>
  );
};

export default ItemForm;
