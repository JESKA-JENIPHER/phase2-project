import { React, useState } from "react";

function CreateQuote() {
  const [content, setContent] = useState("");
  const [writer, setWriter] = useState("");


  // function refresh() {
  //   window.location.reload()
  // }

  function handleSubmit(e) {
    e.preventDefault();

    const quote = { content, writer }

// handle POST request
    fetch("http://localhost:8000/quotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(quote),
    }).then((response) => {
      
      console.log('POST successful');
      window.setInterval(window.location.reload(), 10000);
    });
  }

 
  return (
    <div className="create">
      <p >Write a quote</p>
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          placeholder="Write a quote"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        ></textarea>
        <input
          type="text"
          value={writer}
          placeholder="Enter your name"
          onChange={(e) => setWriter(e.target.value)}
        ></input>
        <button>Add Quote</button>
      </form>
     
    </div>
  );
}

export default CreateQuote;
