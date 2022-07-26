import { React, useState, useEffect } from "react";

function Home() {
  const [quotes, setQuotes] = useState([]);

  // function to fetch quotes
  // const fetchQuotes = async () => {
  //   const response = await fetch('http://localhost/8000/quotes')
  //   let data = await response.json()
  //   setQuotes(data)

  const getQuotes = () => {
    fetch("http://localhost:8000/quotes")
      .then((res) => res.json())
      .then((data) => (setQuotes(data), console.log(data)));
  };

  useEffect(() => {
    getQuotes();
  }, []);

  //create a variable to randomize.
  let rand = Math.floor(Math.random() * 4);


  return (
    <>
      <div>
        <h4>{!quotes ? "Loading..." : quotes[rand]?.writer}</h4>
        <p>{!quotes ? "Loading..." : quotes[rand]?.content}</p>
      </div>
    </>
  );
}

export default Home;
