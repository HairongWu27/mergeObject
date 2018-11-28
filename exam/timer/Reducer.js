// create actions and reducers

// initial state
const initialState = {
    count:0,
    timeSet:false,
}
    /*
    filterText: '',
    inStockOnly: false,
    products: [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
      {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
      {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
      {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
      {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ]*/

  

  // actions
  //export let setInTime = {type: 'SETTIME', timeSet: true};
  export const increAction = {type: 'INCREMENT'};
  export const toggleAction = {type: 'TOGGLE'};
  export const resetAction = {type: 'RESETMENT'};
  // it's better to use action creator here because of parameters
  /*
  export let setFilter = textF => ({type: 'SETFILTER', filterText: text});
  export let setInStock = inStockF => ({type: 'SETINSTOCK', inStockOnly: inStockF});
  */

  // reducer
  export const producttableR = (state = initialState, action) => {
      //console.log(state);
      //console.log(action);
      switch (action.type) {
          case 'SETTIME':
            return {...state, timeSet: action.timeSet};
          //case 'SETINSTOCK':
          //  return {...state, inStockOnly: action.inStockOnly};
          //case 'SETCOUNT':
          //  return{...state, };
          case 'INCREMENT':
            return {...state, count: state.count+1,};
          case 'TOGGLE':
            return {...state, timeSet:!state.timeSet}; 
          case 'RESETMENT':
            return {...state, count:0}; 
          default:
            return state;
      }
  }