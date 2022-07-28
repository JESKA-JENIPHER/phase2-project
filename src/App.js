import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contacts";
import NavBar from "./components/NavBar.js";


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
