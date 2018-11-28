// initial state
const initialState = 'all';

// action creators are in actions.js

// reducer
const filter = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_FILTER':
        return action.filter;
      default:
        return state;
    }
  };

  export default filter;