import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchdata, chosenItem,setSearch} from './store.js';
import InputForm from './inputform';



class ItemList extends Component {

   
 
    
    handleClick= (e)=>{
        
        this.props.setItem(e.target.id);
    }

    componentDidMount() {
        this.props.loaddata('http://api.github.com/users');
    }

    render() {
        var itemID= this.props.itemChosen;
        console.log(this.props.didSearch+'  VVVVV');
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        var didSearch = this.props.didSearch;
       
        return (
           
            <div>
              
              <InputForm/>
                <ul>
                     {this.props.items.map((item) => 
                     ( (item.name? 
                        (
                           <div>
                                { this.props.items.map((x,idx)=>{
                                     return (<li key={idx}>
                                             <p>name: {x.name}</p>
                                             <p>commit url: {x.commits_url}</p>
                                             <p>contents url: {x.contents_url}</p>
                                             <p>Create at: {x.created_at}</p>
                                             <p>description: {x.description}</p>
                                             <p>full name: {x.full_name}</p>
                                        </li>
                                  )})}
                           </div> 
                        ):
                        (<div>
                            <img src={item.avatar_url} value={item.id} id={item.id}
                            alt={item.avatar_url}  style={{'width':100, 'height':100}} id={item.id}></img> 
                            <p></p>
                            {item.login}
                        </div> )
                        
                        
                     )
                    ))}   
                </ul>
            </div>
        );
    }
}



const mapStateToProps = state => {
    return {
        items: state.items,
        hasErrored: state.hasErrored,
        isLoading: state.isLoading,
        didSearch: state.didSearch,
       
    }
  };
  
  const mapDispatchToProps = dispatch => {
      return({
          loaddata: (url) => {dispatch(fetchdata(url));},

      })
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ItemList);


 