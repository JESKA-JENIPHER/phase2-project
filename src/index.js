import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from "react-router-dom";


// function Home() {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h1>This is my about component!</h1>
//     </div>
//   );
// }


// ReactDOM.render(
  // <Router>
  //   <Routes>
  //     <Route path="/">
  //       <Home />
  //     </Route>
  //     <Route path="/about">
  //       <About />
  //     </Route>
  //   </Routes>
  // </Router>,
//   document.getElementById("root")
// );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Router> */}
    <App />
    {/* </Router> */}
  </React.StrictMode>
);



