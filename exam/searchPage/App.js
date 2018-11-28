import React, { Component } from 'react';
import {BrowserRouter, Route, Link, Switch, Redirect, render} from 'react-router-dom';
import {JSX, Start, Setup, VDOM, Elements, Components, Patterns, Additional, Resources, React16, reactInf} from './pages.js';
import './App.css';



/****display a page based on reactInf*/



function SearchKey(key){
  var res='';
  reactInf.forEach( x=>{
    x.content.forEach( y=>{
       //console.log(y.title);
       if(y.title.indexOf(key)!== -1 |x.id.indexOf(key) !== -1 ) res = x.id;
    })
    
  })
  //console.log(res);
  return res;
}

const AnotherPage = ({match,location,history}) => (
    
  
  <div>
    <h2>Another Page</h2>
    <p>match.url: {match.url}</p>
    <p>match.path: {match.path}</p>
    <p>match.params: {JSON.stringify(match.params)}</p>
    <p>location.pathname: {location.pathname}</p>
    <p>history.pathname: {history.location.pathname}</p>
  </div>
);



class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
                searches:'',
                searchResults: '',
                buttons:'',
                areas: [{ id: 'start', name: 'Start', path: '/api/start',},
                      {  id: 'setup', name: 'Setup', path: '/api/setup', },
                      {  id: 'jsx',   name: 'JSX',   path: '/api/jsx',  },
                      {  id: 'vdom',  name: 'VDOM',  path: '/api/vdom', },
                      {  id: 'elements',   name: 'Elements',   path: '/api/elements', },
                      {  id: 'components', name: 'Components', path: '/api/components', },
                      {  id: 'patterns',   name: 'Patterns',   path: '/api/patterns', },
                      {  id: 'additional',   name: 'Additional',   path: '/api/additional', },
                      {  id: 'resources',   name: 'Resources',   path: '/api/resources', },
                      {  id: 'react16',   name: 'React16',   path: '/api/react16', },
                    ],
                
                 

                  
                          };
  };
  handleTimeSearch = e =>{
    this.setState({searchTimes:e.target.value});
    //console.log(this.state.searchTimes);
  };


  handleSearch =(e)=>{
    //console.log(this.state.searches+'  ??????');
    this.setState({searches:e.target.value});
    if(e.keyCode==13 ) console.log('hello world');
    var tmp=SearchKey(e.target.value);
    
    tmp='/api/'+tmp;
    console.log(tmp);
    this.setState({searchResults:tmp});
  };

 
  hanleButton=(e) =>{
    this.setState({buttons: e.target.pathname});
  };
 
  renderRedirect=()=>{
    //console.log(this.state.searches+'  MMMMMMM');
    if(this.state.searchResults){
      return <Redirect to={this.state.searchResults} />
    }
  }

  render() {
    

    return (
      <BrowserRouter>
        <div>
          <form >
            <label>React FAQ
            <input name='searches' type="text" value={this.state.search}
            onChange={this.handleSearch}></input>
            </label>
            
          </form>
          
          <div>
              
              {this.state.areas.map( x=> (
                (
                (x.path ===this.state.buttons)?
                (<button id={x.id} key={x.id} value={x.name} onClick={this.hanleButton} style={{backgroundColor: "yellow"}}>
                <Link to={x.path}>{x.name}</Link></button> ):
                (<button id={x.id} value={x.name} onClick={this.hanleButton}>
                  <Link to={x.path}>{x.name}</Link></button>)
                )
                
              ))}
               {this.state.searches} 
             {this.state.searchResults?(<Redirect to={this.state.searchResults} />):(<p>{this.state.searches}</p>)}
              
          </div>
          <Switch>
            
            <Route exact={true} path="/api/setup" component={Setup} />
            <Route exact={true} path="/api/start" component={Start} />
            <Route exact={true} path="/api/jsx" component={JSX} />
            <Route exact={true} path="/api/vdom" component={VDOM} />
            <Route exact={true} path="/api/elements" component={Elements} />
            <Route exact={true} path="/api/components" component={Components} />
            <Route exact={true} path="/api/patterns" component={Patterns} />
            <Route exact={true} path="/api/additional" component={Additional} />
            <Route exact={true} path="/api/resources" component={Resources} />
            <Route exact={true} path="/api/react16" component={React16} />
            <Route path="/api/:pageName" component={AnotherPage}/>
            
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;



/*

<Route component={NoMatch} />
 {this.state.areas.map( x =>(
              <Route path={x.path} component={{x.name}} />
            ))}

<input name='time' type="text" value={this.state.searchTimes}
            onChange={this.handleTimeSearch}></input>

<input type='submit' value='Submit' onClick={this.renderRedirect}/>
 */  