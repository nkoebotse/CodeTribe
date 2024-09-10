import React from 'react';
import ItemList from '../components/ItemList';
import SearchFilter from '../components/SearchFilter';
import ItemForm from '../components/ItemForm';
import ShareList from '../components/ShareList';

const HomePage = () => {
  return (
    <div>
      <h1>Shopping List</h1>
      <SearchFilter />
      <ItemForm />
      <ItemList />
      <ShareList />
    </div>
  );
};

export default HomePage;
