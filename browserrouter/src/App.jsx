import React from 'react'
import Navbar from './Navbar'

import Home from "./Home";
import Services from "./Services";
import Contacts from "./Contacts";
const App=()=> {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path = "/services" element = {<Services />}/>
        <Route path = "/contacts" element = {<Contacts />}/>

      </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App