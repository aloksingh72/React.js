const ChildC = ({ setterFunc }) => {
  let data = "hello  React";
  return (
    <div>
      <h2>I am child C component</h2>
      {/* //callback function */}
      {/* when the onClick is called then setterFunc me data send kar diya jayega */}
      <button onClick={()=>setterFunc(data)}>send to parent</button>
    </div>
  );
};
//exporting the child component
export default ChildC;
