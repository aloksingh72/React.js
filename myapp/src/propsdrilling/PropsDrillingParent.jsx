import Child1 from "./Chlid1";
const PropsDrillingParent = () => {
  // this data is used to send from parent to its child's child 
  let user = [
    { id: 1, name: "john" },
    { id: 2, name: "alex" },
  ];
  return (
    <div>
      <Child1 data={user} />
    </div>
  );
};
export default PropsDrillingParent;
