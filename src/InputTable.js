import React, { useState } from "react";
import "./Input.css";
import { BsGlobeAsiaAustralia } from 'react-icons/bs';
const Test = () => {
  const [inputValue, setInputValue] = useState("");
  const [firstList, setFirstList] = useState([]);
  const [secondList, setSecondList] = useState([]);
  const [thirdList, setThirdList] = useState([]);

  const addToList = () => {
    setFirstList((prev) => [...prev, inputValue]);
    // console.log("jhfjhdf");
  };

  const addToNextList = (listItem, index, listNum) => {
    console.log(listNum);
    console.log(listItem);
    if (listItem && listNum) {
      if (listNum === "first") {
        setSecondList((prev) => [...prev, listItem]);
        firstList.splice(index, 1);
      } else if (listNum === "second") {
        setThirdList((prev) => [...prev, listItem]);
        secondList.splice(index, 1);
      } else if (listNum === "third") {
        alert("CANNOT ACCESS");
      }
    }
  };

  const addPreviousToList = (listItem, index, listNum) => {
    console.log(listItem, index);
    if (listItem && listNum) {
      if (listNum === "secondPrev") {
        setFirstList((prev) => [...prev, listItem]);
        secondList.splice(index, 1);
      } else if (listNum === "thirdPrev") {
        setSecondList((prev) => [...prev, listItem]);
        thirdList.splice(index, 1);
      }else if (listNum === "firstPrev") {
      alert("CANNOT ACCESS");
    }
    }
  };

  // console.log(secondList);
  // console.log(firstList);
  return (
    <div className="main_head">
    <div>
     
    </div>
      <div className="input_main">
      <div className="input_tag">
      <span className="span_head">FE-ASSIGNMENT</span>
      <BsGlobeAsiaAustralia className="globe"/>
        <input  placeholder="Board" onChange={(e) => setInputValue(e.target.value)} />
        <button className="add" onClick={addToList}>
          ADD
        </button>
      </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>TODO</th>
            <th>DOING</th>
            <th>DONE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td_one">
              {firstList.map((listItem, index) => (<li><button className="prev" onClick={addPreviousToList.bind(this,listItem,index,"firstPrev")}>
              prev </button>{" "}
              {listItem}
              <button className="next" onClick={addToNextList.bind(this, listItem, index, "first")}>next </button></li>))}
            </td>

            <td className="td_one">
              {secondList.map((listItem, index) => (<li><button className="prev"
              onClick={() => addPreviousToList(listItem,index,"secondPrev")}>
              prev{" "}</button>
              {listItem}
              <button className="next" onClick={addToNextList.bind(this,listItem,
              index,"second")}>next
              </button></li>))}
            </td>

            <td className="td_one">
              {thirdList.map((listItem, index) => (<li><button className="prev"
              onClick={addPreviousToList.bind(this,listItem,index,"thirdPrev")}>
              prev </button>
              {listItem}
              <button className="next" onClick={addToNextList.bind(this, listItem, index, "third")}> next </button> </li> ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Test;
