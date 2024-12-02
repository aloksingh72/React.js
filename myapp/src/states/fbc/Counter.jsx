import { useState } from "react"

const Counter = () =>{
    let [count, setCount]= useState(0);

    function incrementHandler(){
        setCount(count+1);

    }
    function decrementHandler(){
        if(count>0){

            setCount(count-1);
        }
    }
    function resetHandler(){
        setCount(0);
    }
    return(
        <div>
            <h1>❤️😊😊😁👍</h1>
            <div>{count}</div>
            <button onClick={incrementHandler}  >Increment</button>
            <button onClick={resetHandler}>Reset</button>
            <button onClick={decrementHandler}>Decrement</button>


        
        </div>
    )
};
export default Counter;