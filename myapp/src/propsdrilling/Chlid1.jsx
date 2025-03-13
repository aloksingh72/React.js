//importing child 2 
import Child2 from "./Child2";
const Child1 = (x) =>{
//print into the console
console.log(x);//{data:[{},{}]
console.log(x.data)//[{},{}]
    return(
        <div>
           <Child2 users = {x.data}/> 
        </div>
    )
};
//exporting child
export default Child1;
