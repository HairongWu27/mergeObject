
import React, { Component } from 'react';
import {connect} from 'react-redux'
import {setFilter, setInStock, addTodo} from '../../Reducer'





class AddTodo extends Component {
  
  constructor(props) {
    super(props);
    this.state = {inputa: '', all:[]};
  }
  handleInput = e => {
    if(e.keyCode !=='/n'){
      console.log('regular input');
      this.setState({inputa: e.target.value});
      this.props.addtodoA(e.target.value);
    }else{
      console.log('enter char');
      //var tmp =this.state.all; tmp.push(this.state.input);
      //this.setState({input:'', all:tmp});
      //this.props.addtodoA(this.state.input);
      //this.setState({input: ''});
    }
  };

  //handleFilterTextChange = (e) => {
  //  this.props.setFilterA(e.target.value);
    //this.props.onFilterTextChange(e.target.value);
  //}
  
 
  
  render() {
    console.log(this.props.todos);
    return (
      <form>
        <input type="text"
               placeholder="Search..."
               value={this.state.inputa} 
               onChange={this.handleInput}
         />
        
       <p>{this.state.inputa}</p>
       <p>{''}</p>
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
      addtodoA: (text)=>{addTodo.todos = text; dispatch(addTodo(text))},
      //addtodo: (text)=>dispatch(actions.addTodo(text)), 
    })
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
  


  
  