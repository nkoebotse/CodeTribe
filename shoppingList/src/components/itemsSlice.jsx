import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    searchQuery: '',
    sortBy: 'name',
    filterByCategory: '',
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    updateItem(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    setFilterByCategory(state, action) {
      state.filterByCategory = action.payload;
    },
  },
});

export const { addItem, updateItem, deleteItem, setSearchQuery, setSortBy, setFilterByCategory } = itemsSlice.actions;

export default itemsSlice.reducer;
