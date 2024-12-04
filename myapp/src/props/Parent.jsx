import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import ChildC from "./ChildC";

const Parent = () =>{

    let [state,setState] = useState("Parent")
    //it is prop name and value
    // let data = "hello world";
    let data = [12,45,2,3,6,9];
    let user = {id:1,name: "John"};

    function Display(){
        console.log("I am the Display function");

    }

    return (
        <div>
            {/* here data is passed through props in childA */}
            
            {/* <ChildA abc = {data}/> */}
            <h1>Prop Parent</h1>
            <ChildA propVal= {{data,user}}/>
            <ChildB fun={Display}/>
        <hr />
        {/* here the setState is being updated by the data is comming from setterFunc */}
        <ChildC setterFunc = {setState}/>
        {state}

            {/* //we can also passed it like  */}
            {/* <ChildA abc = "hello universe"/> */}


        </div>
    )
}
export default Parent;