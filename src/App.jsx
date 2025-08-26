import React from "react";
import Home from './sections/Home'
import About from "./sections/About";
import Projects from "./sections/Projects";

import Contact from "./sections/Contact";
function App() {
  return (
     <div className="min-h-screen w-screen bg-black text-white overflow-x-hidden scroll-smooth">
      <Home/>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
