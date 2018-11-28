import React, { Component } from 'react';
import {connect} from 'react-redux'
import {increAction,toggleAction,resetAction, setInTime} from './Reducer'

//import ProductTable from './components/ProductTable/'
//import SearchBar from './components/SearchBar/'
import CountTime from './components/CountTime'

class App extends Component {

  //handleFilterTextChange = (filterText) => {
  //  this.props.setFilterA(filterText);
 // }
  
  //handleInStockChange = (inStockOnly) => {
  //  this.props.setInStockA(inStockOnly);
 // }

  handleCount=()=>{
    this.props.setCountA()
    //console.log(this.props.count);
  }

  render() {
    return (
      <div>
        
        <CountTime 
          time={this.props.time}
          value={this.props.count}
          toggle={this.props.toggle}
          onIncrement={this.props.inc} 
          resetment={this.props.reset} 

        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    //filterText: state.filterText,
    //inStockOnly: state.inStockOnly,
    //products: state.products,
    time: state.timeSet,
    count: state.count,
   // timeID: state.timeID
  }
};

function mapDispatchToProps(dispatch) {
    return({
      //setFilterA: (text)=>{setFilter.filterText = text; dispatch(setFilter)},
      //setInStockA: (checker)=>{setInStock.inStockOnly = checker; dispatch(setInStock)},
      //setCountA: (count)=>{setCount.count = count; dispatch(setCount)},
      //setTimeA: (checker)=>(checker)=>{setInStock.inStockOnly = checker; dispatch(setInStock)},
      inc: ()=>{dispatch(increAction)},
      
      reset:()=>{dispatch(resetAction)},
      toggle:()=>{dispatch(toggleAction)},
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;


/*
<SearchBar
          filterText={this.props.filterText}
          inStockOnly={this.props.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.props.filterText}
          inStockOnly={this.props.inStockOnly}
        />

*/