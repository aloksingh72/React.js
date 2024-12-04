const ChildC = ({ setterFunc }) => {
  let data = "hello  world";
  return (
    <div>
      <h2>I am child C component</h2>
      {/* //callback function */}
      <button onClick={()=>setterFunc(data)}>send to parent</button>
    </div>
  );
};
export default ChildC;
