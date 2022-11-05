// import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Body />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
