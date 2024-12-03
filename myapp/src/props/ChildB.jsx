
// here we destructre the object inside the argument
const ChildB =({fun})=>{

    return (
        <div>
            <h1>Child B component</h1>
            {/* when the button is clicked then the function is called that is available inside parent component */}
        {/* this funciton is defined in parent but execute by child component and the function is passed through props */}
        <button onClick={fun}>Click</button>
        </div>
    );
};
export default ChildB;