import ChildA from "./ChildA";

const Parent = () =>{
    //it is prop name and value
    let data = "hello world";
    return (
        <div>
            {/* here data is passed through props in childA */}
            
            <ChildA x = {data}/>

            {/* //we can also passed it like  */}
            {/* <ChildA abc = "hello universe"/> */}


        </div>
    )
}
export default Parent;