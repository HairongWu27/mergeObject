import React, { Component } from 'react';
import {connect} from 'react-redux'
import {setFilter, setInStock} from '../../Reducer'

class SearchBar extends Component {
  
    handleFilterTextChange = (e) => {
      this.props.setFilterA(e.target.value);
      //this.props.onFilterTextChange(e.target.value);
    }
    
    handleInStockChange = (e) => {
      this.props.setInStockA(e.target.checked);
      //this.props.onInStockChange(e.target.checked);
    }
    
    render() {
      return (
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
          />
          <p>
            <input
              type="checkbox"
              checked={this.props.inStockOnly}
              onChange={this.handleInStockChange}
            />
            {' '}
            Only show products in stock
          </p>
        </form>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      filterText: state.filterText,
      inStockOnly: state.inStockOnly
    }
  };
  
  function mapDispatchToProps(dispatch) {
      return({
        setFilterA: (text)=>{setFilter.filterText = text; dispatch(setFilter)},
        setInStockA: (checker)=>{setInStock.inStockOnly = checker; dispatch(setInStock)}
      })
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);