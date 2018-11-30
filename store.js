import {createStore} from 'redux';

const InitState = 
{
   AP1:
   {
    items: [],
    hasErrored: false,
    isLoading: false
    },
    AP2:
    {
    items: [],
    hasErrored: false,
    isLoading: false   
    }

}
    

const myReducer = (state = InitState, action) => {
    console.log('Action received: ');
    console.log(action);
    switch (action.type) {
      case 'ITEMS_HAS_ERRORED':
        return {...state, hasErrored: action.bool};
      case 'ITEMS_IS_LOADING':
        return {...state, isLoading: action.bool};
      case 'ITEMS_COMPLETE':
        return {...state, items: action.items};
      default:
        return state;
    }
  };

  const store = createStore(myReducer);
  export default store;