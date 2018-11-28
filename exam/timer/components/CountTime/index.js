import React, { Component } from 'react';

/*let CountTime = (props) =>{
    const count = props.count;
    

    return (
      <div>
        <h1>{count}</h1>
        <button >start</button>
      </div>
    );
};

export default CountTime;

function timerFunc() {
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    console.log("time = " + hour + ":" + min + ":" + sec);
  }
  const CountTime = ({value, onIncrement, resetment}) => (
    <div>
      <h1>{value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={resetment}>reset</button>
    </div>
  );
  
  export default CountTime;
  */

export default class CountTime extends Component {
  
    handleFilterTextChange = (e) => {
      this.props.onFilterTextChange(e.target.value);
    }
    
    handleInStockChange = (e) => {
      this.props.onInStockChange(e.target.checked);
    }
     //count=0;

    handleCountChange (){
       //this.props.onCountChange;
        console.log('hello');
        
        
        //console.log(this.props.count);
        //setInterval(timerFunc, 1000);
        console.log("run the setinterval");
        //this.props.onCountChange();
        //console.log(value);
    }

    render() {
        var togg=false;
        var tmp=null;
        
        console.log(this.props.time);
        if(!togg) {
            tmp = setInterval(this.props.onIncrement, 2000);
            togg = 'ture';
        }else{
            clearInterval(tmp);
            tmp = null; togg=false;
        }
       
        console.log(tmp);
      return (
        <div>
            <h1>{this.props.value}</h1>
            {togg? (<button onClick={ this.props.onIncrement}>start</button>):
            (<button onClick={ this.props.onIncrement}>stop</button>)}
           
            <button onClick={ this.props.resetment}>Reset</button>
            
        </div>
      );
    }
  }
  