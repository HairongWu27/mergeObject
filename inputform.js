import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchdata, chosenItem,setSearch} from './store.js';





class InputForm extends Component {
    handleInputChange= e=>{
        console.log(e.target.value);
        this.props.setSearchItem(e.target.value);

    };

    render(){
        return(
            <div>
                Search Name
                <p></p>
                <input value={this.props.itemSearch} onChange={this.handleInputChange} />
                <p>{this.props.itemSearch}</p>
            </div>
        );
    }

}

//export default InputForm;

const mapStateToProps = state => {
    return {
        items: state.items,
        //hasErrored: state.hasErrored,
        //isLoading: state.isLoading,
        //itemChosen: state.itemChosen, //show select item
        itemSearch: state.itemSearch,  //search from item list
        users: state.users,
    }
  };
  
  const mapDispatchToProps = dispatch => {
      return({
          loaddata: (url) => {dispatch(fetchdata(url));},
          //setItem:(itemID) =>{chosenItem.itemChosen = itemID; dispatch(chosenItem)},
          setSearchItem:(name) =>{setSearch.itemSearch = name; dispatch(setSearch)},
      })
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
