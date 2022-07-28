import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contacts";
import NavBar from "./components/NavBar.js";
import CreateQuote from "./components/CreateQuote";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/New Blog" element={<CreateQuote />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      {/* <CreateQuote quotes={quotes} /> */}
    </>
  );
}

export default App;
