import React from 'react';

function Contacts() {
  return (
    <div className="create">
      <p>Basically contacts of a writer in the applicaton</p>
      <form>
        <input type="text" placeholder="Enter contact"></input>
        <input type="text" placeholder="Enter email address"></input>
      </form>
    </div>
  );
}

export default Contacts;
