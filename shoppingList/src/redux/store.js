import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './itemsSlice';
import categoriesReducer from './categoriesSlice';

const store = configureStore({
  reducer: {
    items: itemsReducer,
    categories: categoriesReducer,
  },
});

export default store;
