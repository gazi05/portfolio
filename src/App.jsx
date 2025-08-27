import React from "react";
import Home from './components/Home'
import About from "./components/About";
import Projects from "./components/Projects";
import Nav from "./components/Nav";

import Contact from "./components/Contact";
function App() {
  return (
     <div className="min-h-screen w-screen bg-black text-white overflow-x-hidden scroll-smooth">
      <Nav/>
      <Home/>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
