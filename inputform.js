import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchdata, chosenItem,setSearch, didSearch} from './store.js';






class InputForm extends Component {
    

    handleInputChange= e=>{
        console.log(e.target.value);
        this.props.setSearchItem(e.target.value);
     
    }

    componentDidMount() {
        if(this.props.itemSearch !=='')

        console.log(this.props.didSearch+" ???????");
    }

    handleClick = ()=>{
        var items = this.props.items, userrepos_URL='', keyName=this.props.itemSearch;
        this.props.didSearchA(true);

        
        items.forEach(element => {
            if (element.login.indexOf(keyName) > -1) userrepos_URL=element.repos_url;
        });
        this.props.loaddata(`${userrepos_URL}`);

    }

    render(){
        
        
        return(
            <div>
                
                <div>
                Search Name
                <p></p>
                <input value={this.props.itemSearch} onChange={this.handleInputChange} />
                <input type="submit" value="Submit" onClick={this.handleClick}></input>
                </div>
                
                
                
            </div>
        );
    }

}

//export default InputForm;


const mapStateToProps = state => {
    return {
        items: state.items,
        itemSearch: state.itemSearch,  //search from item list
        users: state.users,
        didSearch: state.didSearch,
    }
  };
  
  const mapDispatchToProps = dispatch => {
      return({
          loaddata: (url) => {dispatch(fetchdata(url));},
          setSearchItem:(name) =>{setSearch.itemSearch = name; dispatch(setSearch)},
          didSearchA:(value) => {didSearch.didSearch = value; dispatch(didSearch)},
      })
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(InputForm);


 