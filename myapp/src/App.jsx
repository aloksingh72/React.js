
import Navbar from "./Components/Navbar";
import NavbarCBC from "./Components/NavbarCBC";
import Parent from "./props/Parent";
import StateInCBC from "./states/cbc/StatesInCBC";
import Counter from "./states/fbc/Counter";
import States from "./states/fbc/States";
import PropsDrillingParent from "./propsdrilling/PropsDrillingParent";
import InlineCSS from "./reactcss/InlineCSS";
import Footer from "./reactcss/Footer";
import Profile from "./images/Profile";
const App =() =>{
    return (
        <div>
            {/* <Navbar/> */}
            {/* <NavbarCBC/> */}
            <h1>I am React Component</h1>
            {/* <States/> */}
            {/* <Counter/> */}
            {/* <StateInCBC/> */}
            
            {/* <Parent/> */}
            {/* <PropsDrillingParent/> */}
            <InlineCSS/>
            <Footer/>
            <Profile/>

        </div>
    );
};
// here the export name can be different but generally we use same name
export default App;