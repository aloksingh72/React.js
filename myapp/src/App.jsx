
import Navbar from "./Components/Navbar";
import NavbarCBC from "./Components/NavbarCBC";
import Counter from "./states/fbc/Counter";
import States from "./states/fbc/States";
const App =() =>{
    return (
        <div>
            {/* <Navbar/> */}
            {/* <NavbarCBC/> */}
            <h1>I am React Component</h1>
            {/* <States/> */}
            <Counter/>
        </div>
    );
};
// here the export name can be different but generally we use same name
export default App;