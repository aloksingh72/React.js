//here data is being recieved from parent through props keyword
// const ChildA =(props)=>{
//     console.log(props);

//     return (
//         <div>
//             {/* inside props object the data is being present inside x:key  */}
//             <h1>{props.abc}</h1>

//         </div>
//     )
// }
// export default ChildA;


// ======================
// another method of data destructing

//Way-1

const ChildA =(x)=> {
    //nested object destructing
    let {propVal :{data,user:{id,name}}} =x;
    console.log(data,id,name);

    // Important properties
    // after destructing we can't use parent key name for accesing children
    // console.log(propVal);

    
  return (
    <div>
        <h1>Child A componentN</h1>
    </div>
  )
}

export default ChildA

// ======================
//Way-2
// const ChildA = ({dbData})=>{




//     console.log(dbData);
//     return (
//         <div>
            
//         </div>
//     )
// };
// export default ChildA
