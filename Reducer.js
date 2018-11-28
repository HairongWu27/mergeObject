// create actions and reducers

// initial state
const initialState = {
    
    filterText: '',
    inStockOnly: false,
    products: [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
      {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
      {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
      {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
      {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ],
    todos: [],
  };

  // actions
  export let setFilter = {type: 'SETFILTER', filterText: 'test'};
  export let setInStock = {type: 'SETINSTOCK', inStockOnly: true};
  
  let nextTodoId = 0;
  export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
  });

  // reducer
  export const producttableR = (state = initialState, action) => {
      console.log(state);
      console.log(action);
      switch (action.type) {
          case 'SETFILTER':
            return {...state, filterText: action.filterText};
          case 'SETINSTOCK':
            return {...state, inStockOnly: action.inStockOnly};
          case 'ADD_TODO':
            return [ 
                   ...state,  
                   { id: action.id,
                     text: action.text,
                     completed: false,
                   },             
            ];      
          default:
            return state;
      }
  }