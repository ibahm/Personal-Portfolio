import React from "react";
import NavBar from "./components/NavBar";
import Brief from "./components/Brief";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="container">
      <NavBar/>
      <Brief/>
      <About/>
      <ProjectList/>
      <Contact/>
    </div>
  )
}

export default App;