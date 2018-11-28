import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import Counter from './Counter';
import {counterR, increaseAction, decreaseAction} from './Reducer'

// 3. create store
const store = createStore(counterR,
                    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                );

// 4. associate render with subscribe
const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch(increaseAction)}
    onDecrement={() => store.dispatch(decreaseAction)}
  />,
  document.getElementById('root')
);

render();
store.subscribe(render);

registerServiceWorker();
