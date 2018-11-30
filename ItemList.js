import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchdata, chosenItem,setSearch} from './store.js';
import InputForm from './inputform';



class ItemList extends Component {

   
 
    
    handleClick= (e)=>{
        //console.log(e.target +' ??????');
        console.log(e.target.id +' >>>>>');
        //console.log(e.target.itemID +' >>>>>');
        this.props.setItem(e.target.id);
    }

    componentDidMount() {
        this.props.loaddata('http://api.github.com/users');
    }

    render() {
        var itemID= this.props.itemChosen;
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        

        return (
            <div>
                <InputForm/>
              <ul>
                {this.props.items.map((item) => (
                    <div>
                        
                        <img src={item.avatar_url} value={item.id} id={item.id}
                        alt={item.avatar_url}  style={{'width':100, 'height':100}} id={item.id}></img> 
                        <p></p>
                        {item.login}
                         
                        
                        
                        
                        
                    </div>
                    
                ))}
              </ul>
            </div>
        );
    }
}

//export default ItemList;

const mapStateToProps = state => {
    return {
        items: state.items,
        hasErrored: state.hasErrored,
        isLoading: state.isLoading,
        //itemChosen: state.itemChosen, //show select item
        //itemSearch: state.itemSearch,  //search from item list
    }
  };
  
  const mapDispatchToProps = dispatch => {
      return({
          loaddata: (url) => {dispatch(fetchdata(url));},
          //setItem:(itemID) =>{chosenItem.itemChosen = itemID; dispatch(chosenItem)},
          //setSearchItem:(name) =>{setSearch.itemSearch = name; dispatch(setSearch)},
      })
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ItemList);


  /*



    


  */