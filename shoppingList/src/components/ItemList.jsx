import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../redux/itemsSlice';
import { deleteItem as apiDeleteItem } from '../api';
import ItemForm from './ItemForm';

const ItemList = () => {
  const dispatch = useDispatch();
  const { items, searchQuery, sortBy, filterByCategory } = useSelector(state => state.items);

  const filteredItems = items
    .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(item => !filterByCategory || item.category === filterByCategory)
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return a.category.localeCompare(b.category);
    });

  const handleDelete = async (id) => {
    try {
      console.log(`Attempting to delete item with id: ${id}`);
      await apiDeleteItem(id);
      dispatch(deleteItem(id));
      console.log(`Successfully deleted item with id: ${id}`);
    } catch (error) {
      console.error(`Failed to delete item with id: ${id}`, error);
    }
  };

  return (
    <div>
      {filteredItems.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Notes: {item.notes}</p>
          <p>Category: {item.category}</p>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
          <ItemForm item={item} onClose={() => {}} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
