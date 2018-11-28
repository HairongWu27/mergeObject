import React, { Component } from 'react';
import {connect} from 'react-redux'
import {increaseAction, decreaseAction} from './Reducer'
import Counter from './Counter';

// 6. now use Redux store and dispatches as if they are props
class App extends Component {
    render() {
        return (
          <Counter
            value={this.props.state}
            onIncrement={this.props.inc}
            onDecrement={this.props.dec}
          />
        )
    }
}

// 4. define state->props, and dispatch->props mappings
const mapStateToProps = state => {
    return {
        state: state
    }
};
  
function mapDispatchToProps(dispatch) {
      return({
        inc: ()=>{dispatch(increaseAction)},
        dec: ()=>{dispatch(decreaseAction)}
      })
};
  
// 5. connect component to store with mappings
export default connect(mapStateToProps, mapDispatchToProps)(App);
  