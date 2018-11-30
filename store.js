import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// can't import {thunk} from 'redux-thunk';
import axios from 'axios';

const InitState = {
    items: [
        {id: 1, label: 'List item 1'},
        {id: 2, label: 'List item 2'},
        {id: 3, label: 'List item 3'},
        {id: 4, label: 'List item 4'}
    ],
    hasErrored: false,
    isLoading: false,
    //itemChosen: '',
    itemSearch:'',
    didSearch:false,
}

// action creators
export function fetchdata(url) {
    return (dispatch) => {
        dispatch(requestStart());
        axios.get(url)
            .then((response) => {
                console.log(response.data);
                dispatch(requestComplete(response.data));
                //dispatch(choseItem(action.id));
            })
            .catch(err => {
                console.log(err);
                dispatch(requestError())
            });
    }
}

function requestError() {
    return {
      type: 'ITEMS_HAS_ERRORED',
    };
}

function requestStart() {
    return {
      type: 'ITEMS_IS_LOADING',
    };
}

function requestComplete(newitems) {
    return {
      type: 'ITEMS_COMPLETE',
      items: newitems,
    };
}

//export let chosenItem ={type:'SELECT_ITEM', itemChosen: ''};
export let setSearch ={type:'SEARCH_ITEM', itemSearch: ''};
export let didSearch ={type:'DID_SEARCH', didSearch: ''};


const myReducer = (state = InitState, action) => {
    console.log('Action received: ');
    console.log(action);
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
          return {...state, hasErrored: true};
        case 'ITEMS_IS_LOADING':
          return {...state, isLoading: true};
        case 'ITEMS_COMPLETE':
          return {hasErrored: false, isLoading: false, items: action.items};
        case 'SELECT_ITEM':
          return{...state, itemChosen:action.itemChosen};
        case 'SEARCH_ITEM':
          return{...state, itemSearch:action.itemSearch};
        case 'DID_SEARCH':
          return{...state, didSearch: action.didSearch};
        default:
          return state;
      }
  };

  //const store = createStore(myReducer);
  const store = createStore(myReducer, InitState, applyMiddleware(thunk));
  export default store;