
import React, { Component } from 'react';
import {connect} from 'react-redux'
import {setFilter, setInStock, addTodo} from '../../Reducer'





class AddTodo extends Component {
  
  constructor(props) {
    super(props);
    this.state = {input: ''};
  }
  handleInput = e => {
    if(e.target.value !=='/n'){
      console.log('regular input');
      this.setState({input: e.target.value});
      this.props.addtodoA(this.state.input);
    }else{
      console.log('enter char');
      //this.props.addtodoA(this.state.input);
      //this.setState({input: ''});
    }
  };

  //handleFilterTextChange = (e) => {
  //  this.props.setFilterA(e.target.value);
    //this.props.onFilterTextChange(e.target.value);
  //}
  
 
  
  render() {
    return (
      <form>
        <input type="text"
               placeholder="Search..."
               value={this.state.input} 
               onChange={this.handleInput}
         />
       <p>{this.state.input}</p>
      </form>
    );
  }
  }
  
  const mapStateToProps = state => {
  return {
    //filterText: state.filterText,
    //inStockOnly: state.inStockOnly,
    todos: state.todos,
  }
  };
  
  function mapDispatchToProps(dispatch) {
    return({
      //setFilterA: (text)=>{setFilter.filterText = text; dispatch(setFilter)},
      //setInStockA: (checker)=>{setInStock.inStockOnly = checker; dispatch(setInStock)},
      addtodoA: (text)=>{addTodo.todos = text; dispatch(addTodo)},
      //addtodo: (text)=>dispatch(actions.addTodo(text)), 
    })
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
  


  
  