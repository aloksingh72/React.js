import Child1 from "./Chlid1";
const PropsDrillingParent = () => {
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
