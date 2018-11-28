// combin reducers

import {combineReducers} from 'redux';
import todos from './Todo';
import filter from './Filter';

const reducers = combineReducers({
  todos: todos,
  filter: filter,
});

export default reducers;