import React, { Component } from 'react';

import ProductTable from './components/ProductTable/'
import SearchBar from './components/SearchBar/'
import AddTodo from './components/AddTodo/'
class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable />
        <AddTodo/>
      </div>
    );
  }
}

export default App;
