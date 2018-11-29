import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchdata, chosenItem} from './store.js';




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
        if(itemID !==''){
            return(
            <div>
                
            </div>);
        }

        return (
             
            <ul>
                {this.props.items.map((item) => (
                    <div>
                        <button id={item.id} value={item.id} onClick={this.handleClick}><img src={item.avatar_url} 
                        alt={item.avatar_url}  style={{'width':100, 'height':100}} id={item.id}></img> </button>
                        <p></p>
                        {item.login}
                         
                        
                        
                        
                        
                    </div>
                    
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
        isLoading: state.isLoading,
        itemChosen: state.itemChosen,
    }
  };
  
  const mapDispatchToProps = dispatch => {
      return({
          loaddata: (url) => {dispatch(fetchdata(url));},
          setItem:(itemID) =>{chosenItem.itemChosen=itemID; dispatch(chosenItem)},

      })
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ItemList);