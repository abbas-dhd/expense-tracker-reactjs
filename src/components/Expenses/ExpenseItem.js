import React from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title); // USE STATE RETURN EXACTLY 2 VALUES EVERYTIME

  // const changeTitleHandler = () => {
  //   setTitle("Updated");
  // };

  // const revertTitleHandler = () => {
  //   setTitle(props.title);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          {/* <button onClick={changeTitleHandler}>Change Title</button>
        <button onClick={revertTitleHandler}>Revert Title</button> */}
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
