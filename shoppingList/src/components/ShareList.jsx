import { useState } from 'react';
import { addItem } from '../api'; // Import the addItem API function

const ShareList = () => {
  const [items, setItems] = useState([]);

  // Function to add a new item to the list and share the new list automatically
  const handleAddItemAndShare = async (newItem) => {
    try {
      const response = await addItem(newItem); // Add item via API
      const updatedItems = [...items, response.data]; // Update state with new item
      setItems(updatedItems);
      
      // Automatically share the updated list
      const listText = updatedItems.map(item => `${item.name} - ${item.quantity}`).join('\n');
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'New Shopping List',
            text: `Here is the updated shopping list:\n${listText}`,
          });
          console.log('List shared successfully');
        } catch (error) {
          console.error('Error sharing list:', error);
        }
      } else {
        console.warn('Web Share API is not supported in this browser.');
        alert('Sharing is not supported in this browser.');
      }
    } catch (error) {
      console.error('Error adding and sharing new item:', error);
    }
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name} - {item.quantity}</li>
        ))}
      </ul>
      {/* Simulate adding a new item when needed */}
      <button onClick={() => handleAddItemAndShare({ name: 'New Item', quantity: 1 })}>
        Add and Share New Item
      </button>
    </div>
  );
};

export default ShareList;
