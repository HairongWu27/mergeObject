import React, { Component } from 'react';
import {connect} from 'react-redux';

class AnotherItem extends Component {
	// initially defined in component
	// will be copied to Redux store
    
               /* [
                 {id: 1, label: 'List item 10'},
                 {id: 2, label: 'List item 20'},
                   {id: 3, label: 'List item 30'},
                   {id: 4, label: 'List item 40'}
                 ];*/
       newItems ={"person":[{"id":10,"firstName":"John","lastName":"Doe"},
                 { "id":5,"firstName":"Jack","lastName":"Doe" },
                 {"id":7,"firstName":"James","lastName":"Doe" }]};

    componentDidMount() {
        this.props.loaddata(this.newItems);
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
			console.log('show - loading');
            return <p>Loading…</p>;
        }

        return (
            <ul>
                {this.props.items.map((item) => (
                    <li key={item.id}>
                        {item.label}
                    </li>
                ))}
            </ul>
        );
    }
}

//export default ItemList;

const mapStateToProps = state => {
    return {
        items: state.items,
        hasErrored: state.hasErrored,
        isLoading: state.isLoading
    }
  };
  
  const mapDispatchToProps = dispatch => {
      return({
          loaddata: (items) => {
            dispatch({type: 'ITEMS_IS_LOADING', bool: true});
            dispatch({type: 'ITEMS_COMPLETE', items: items});
            dispatch({type: 'ITEMS_IS_LOADING', bool: false});
          }
      })
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AnotherItem);