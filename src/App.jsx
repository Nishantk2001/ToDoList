import React, { useState } from "react";
import "./index.css";
import ToDoLists from "./ToDoLists";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const [warning, setWarning] = useState("");

  const itemEvent = (event) => {
    setInputList(event.target.value);
    setWarning("");
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List📃</h1>
          <br />
          <input
            type="text"
            placeholder="Add an Item"
            value={inputList}
            onChange={itemEvent}
          />
          <button
            onClick={
              inputList.trim() !== ""
                ? listOfItems
                : () => setWarning("First Add an Item🙂")
            }>
            +
          </button>
          <p
            style={{
              color: "red",
              marginTop: "10px",
              marginLeft: "30%",
              textAlign: "left",
            }}>
            {warning}
          </p>

          <ol>
            {items.map((itemsvalue, index) => {
              return (
                <ToDoLists
                  key={index}
                  id={index}
                  text={itemsvalue}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
