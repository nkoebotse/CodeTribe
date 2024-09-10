import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const fetchItems = () => axios.get(`${API_URL}/items`);
export const fetchCategories = () => axios.get(`${API_URL}/categories`);
export const addItem = (item) => axios.post(`${API_URL}/items`, item);
export const updateItem = (item) => axios.put(`${API_URL}/items/${item.id}`, item);
export const deleteItem = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/items/${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  } catch (error) {
    console.error('Error in deleteItem API call:', error);
    throw error;
  }
};
