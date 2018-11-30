import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchdata, chosenItem,setSearch, didSearch} from './store.js';






class InputForm extends Component {
    

    handleInputChange= e=>{
        console.log(e.target.value);
        //if(e.target.value (!==)console.log('enter key');
        //var searchname= this.props;
        this.props.setSearchItem(e.target.value);
        //var user={}, userrepos='';
        //this.props.items.forEach(element => {
        //    if(element.login.findIndexof(this.props.itemSearch)) userrepos=element.repos_url;
        //});
        
        //console.log(this.props.items);
        //if(userT !== null){
        //    console.log(userT);
       // }
    }

    componentDidMount() {
        if(this.props.itemSearch !=='')
        //this.props.didSearchA(true);
        console.log(this.props.didSearch+" ???????");
    //    this.props.loaddata('http://api.github.com/users');

    }

    handleClick = ()=>{
        var items = this.props.items, userrepos_URL='', keyName=this.props.itemSearch;
        //console.log(items);
        //console.log(keyName);
        this.props.didSearchA(true);
        //console.log(this.props.didSearch+" ???????");
        
        items.forEach(element => {
            //if(element.login.indexof(keyName) >-1) userrepos_URL=element.repos_url;
            if (element.login.indexOf(keyName) > -1) userrepos_URL=element.repos_url;
        });
        this.props.loaddata(`${userrepos_URL}`);
        //console.log(userrepos_URL);
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
        //hasErrored: state.hasErrored,
        //isLoading: state.isLoading,
        //itemChosen: state.itemChosen, //show select item
        itemSearch: state.itemSearch,  //search from item list
        users: state.users,
        didSearch: state.didSearch,
    }
  };
  
  const mapDispatchToProps = dispatch => {
      return({
          loaddata: (url) => {dispatch(fetchdata(url));},
          //setItem:(itemID) =>{chosenItem.itemChosen = itemID; dispatch(chosenItem)},
          setSearchItem:(name) =>{setSearch.itemSearch = name; dispatch(setSearch)},
          didSearchA:(value) => {didSearch.didSearch = value; dispatch(didSearch)},
      })
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(InputForm);


  /*

Search Name
                <p></p>
                <input value={this.props.itemSearch} onChange={this.handleInputChange} />
                <input type="submit" value="Submit" onClick={this.handleClick}></input>
                <p>{this.props.itemSearch}</p>



                 { this.props.items.map((x,idx)=>{
                    return (<li key={idx}>{x.name}</li>
                )})}

  */