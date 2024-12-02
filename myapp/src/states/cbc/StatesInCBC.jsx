import { Component } from "react";

 // --->Structure of class based component CBC

 class StateInCBC  extends Component{
    state = {count:0};//intitalizing the sate
     

    //note -> this. keyword (avaiable) or works with arrow functions
    increment=()=>{
        console.log("updateState");
        this.setState({count:this.state.count +1});
    }
    decrement =()=>{
        if(this.state.count >0){

            this.setState({count:this.state.count-1});
        }
    }
    reset = ()=>{
        this.setState({count:this.state.count =0});
    }
    //render method is used in calss based component 
    render(){
        console.log(this);
        return (
            <div>
                <h1>State in Class Based component</h1>
                <h2>Counter <mark>{this.state.count}</mark></h2>

                <button onClick={this.increment}> Increment</button>
                <button onClick={this.reset}>Reset</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
     };
 }
 export default StateInCBC