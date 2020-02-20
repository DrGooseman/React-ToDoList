import React from "react";
import Item from "./Item.jsx";
import { useState } from "react";

const items = ["An Item.", "An Item 2"];

function App() {
  const [textField, updateTextField] = useState("");
  const [items, updateItems] = useState(["An Item.", "An Item 2"]);

  function addItem() {
    updateItems([...items, textField]);
    updateTextField("");
  }

  function handleChange(event) {
    updateTextField(event.target.value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={textField} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, i) => (
            <Item key={i} name={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
