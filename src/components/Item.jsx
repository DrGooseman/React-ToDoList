import React from "react";
import { useState } from "react";

function Item(props) {
  const [isChecked, setIsChecked] = useState("");

  function handleClick() {
    setIsChecked(!isChecked);
  }

  return (
    <div>
      <li
        onClick={handleClick}
        style={{ textDecoration: isChecked ? "line-through" : "none" }}
      >
        {props.name}
        <button
          className="list-button"
          onClick={() => {
            props.onClicked(props.id);
          }}
        >
          Delete
        </button>
      </li>
    </div>
  );
}

export default Item;
