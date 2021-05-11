import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Examples from "./components/Examples";

function App() {

  return (
    <div>
      <Nav></Nav>
      <main>
        <Examples></Examples>
        <About></About>
      </main>
    </div>
  );
}

export default App;
