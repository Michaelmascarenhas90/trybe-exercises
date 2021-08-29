import React from 'react';
import Table from './components/Table';
import Filter from './components/Filters';
import './App.css';
import Provider from './context/provider';

function App() {
  return (
    <Provider>
      <span>Hello, App!</span>
      <Filter />
      <Table />
    </Provider>
  );
}

export default App;
