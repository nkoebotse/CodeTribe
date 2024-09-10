import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, setSortBy, setFilterByCategory } from '../redux/itemsSlice';

const SearchFilter = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value));
  };

  const handleCategoryChange = (e) => {
    dispatch(setFilterByCategory(e.target.value));
  };

  return (
    <div>
      <input type="text" onChange={handleSearchChange} placeholder="Search items" />
      <select onChange={handleSortChange}>
        <option value="name">Sort by Name</option>
        <option value="category">Sort by Category</option>
      </select>
      <select onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchFilter;
