
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar.js'


function App() {

  return (
    <>
      
      <Router>
      <NavBar/>
        <Routes>
          <Route exact path="/"/>
                <Route  path="/home" element={<Home />}/>

        
      <Route path="/about" element={<About/>}/>
        {/* <About /> */}
        {/* </Route> */}
    </Routes>
    </Router>
    

    </>
  );
}

export default App;
