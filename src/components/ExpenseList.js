import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  let output = [];
  for (let i = 0; i < props.list.length; i++) {
    output.push(
      <ExpenseItem
        title={props.list[i].title}
        amount={props.list[i].amount}
        date={props.list[i].date}
      />
    );
  }
  return (
    <div className="expenses">
      {output}
    </div>
  );
}

export default ExpenseList;
