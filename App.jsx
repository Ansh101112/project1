import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/contact";
import Nav from "./components/Nav";

function App(props) {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Nav></Nav>}></Route>
          <Route exact path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
