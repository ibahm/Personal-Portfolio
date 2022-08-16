import React from "react";
import NavBar from "./components/NavBar";
import Brief from "./components/Brief";
import About from "./components/About";
import ProjectList from "./components/ProjectList";

const App = () => {
  return (
    <div className="container">
      <NavBar/>
      <Brief/>
      <About/>
      <ProjectList/>
    </div>
  )
}

export default App;