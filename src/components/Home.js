import { React, useState, useEffect } from "react";
import CreateQuote from "./CreateQuote";

function Home() {
  const [quotes, setQuotes] = useState([]);

 

  // function to fetch quotes
  
  const getQuotes = () => {
    fetch("http://localhost:8000/quotes")
      .then((res) => res.json())
      .then((data) => setQuotes(data));
  };

  useEffect(() => {
    getQuotes();
  }, []);

  //create a variable to randomize.
  let rand = Math.floor(Math.random() * 4);

  
  function handleClick() {
    getQuotes();
  }

  return (
    <div className="home">
      <h3>Refresh page for new quote!!</h3>
      <p>{!quotes ? "Loading..." : quotes[rand]?.content}</p>
      <h4>{!quotes ? "Loading..." : quotes[rand]?.writer}</h4>
      <button onClick={handleClick}>Get Quote</button>

      <CreateQuote quotes={quotes} />
    </div>
  );
};

export default Home;









 // function to fetch quotes

  // const fetchQuotes = async () => {
  // const response = await fetch('http://localhost/8000/quotes')
  // let data = await response.json()
  //   setQuotes(data)
  // };