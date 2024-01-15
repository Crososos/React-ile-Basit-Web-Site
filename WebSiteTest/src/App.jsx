import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact.jsx";
import Service from "./components/Service";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/contact" exact Component={Contact} />
          <Route path="/service" exact Component={Service} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
