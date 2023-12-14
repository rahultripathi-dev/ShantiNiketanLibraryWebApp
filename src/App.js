// import React from 'react'
// import Home from './Home'
// import About from './About'

// const App = () => {
//   return (
//     <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>

//       <Home />
//      {/* <About /> */}
      
//     </div>
//   )
// }

// export default App

import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import ContactUs from "./ContactUs"
import Photos from "./Photos"

function App() {
  return (
    <>
    <Home/>
    {/* <div className="App">
      <Routes >
          <Route path="/" element={ <Home/> } />
        <Route path="About" element={ <About/> } />
        <Route path="ContactUs" element={ <ContactUs/> } />
        <Route path="Photos" element={ <Photos/> } />
      </Routes>
     </div> */}
    </>
  )
}

export default App