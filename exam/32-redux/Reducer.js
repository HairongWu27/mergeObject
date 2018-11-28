// 1. create state, action, reducer

// initial state
const initialState = 0;

// actions
export const increaseAction = {type: 'INCREMENT'};
export const decreaseAction = {type: 'DECREMENT'};
export const otherAction = {type: 'OTHER'};

// reducer
export const counterR = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  };

 