import React from "react";
import NavBar from "./components/NavBar";
import Brief from "./components/Brief";
import About from "./components/About";

const App = () => {
  return (
    <div className="container">
      <NavBar/>
      <Brief/>
      <About/>
    </div>
  )
}

export default App;