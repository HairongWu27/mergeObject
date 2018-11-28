import React, { Component } from 'react';
import {connect} from 'react-redux';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import * as actions from './actions';

class App extends Component {
/* don't use mapDispatchToProps
  addTodo = text => {
    this.props.dispatch(actions.addTodo(text));
  };
  onTodoClick = id => {
    this.props.dispatch(actions.toggleTodo(id));
  };

  setFilter = filter => {
    this.props.dispatch(actions.setFilter(filter));
  };
*/
  // use mapDispatchToProps
  addTodo = text => {
    this.props.addtodo(text);
  };
  
  onTodoClick = id => {
    this.props.toggletodo(actions.toggleTodo(id));
  };
  setFilter = filter => {
    this.props.setfilter(actions.setFilter(filter));
  };

  render() {
    return (
      <div>
        <AddTodo addTodo={this.props.addtodo} />
        <TodoList
          list={this.props.todos}
          onTodoClick={this.onTodoClick}
          filter={this.props.filter}
        />
        <Filter filter={this.props.filter} setFilter={this.setFilter} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    filter: state.filter,
  };
};

// don't use mapDispatchToProps
//export default connect(mapStateToProps, mapDispatchToProps)(App);

//use mapDispatchToProps
function mapDispatchToProps(dispatch) {
  return({
    addtodo: (text)=>dispatch(actions.addTodo(text)),
    toggletodo: (id) => dispatch(id),
    setfilter: (filter) => dispatch(filter)
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

