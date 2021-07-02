import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
    const remove = () =>{
        props.removeItem(props.title);
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
            <h2>{props.title}</h2>
            </div>

            <div className="expense-item__description">
            <h2>{props.description}</h2>
            </div>
            <div className="expense-item__price">{props.amount}
            </div>
            <button className="button" onClick={remove}></button>
        </Card>
    );
};

export default ExpenseItem