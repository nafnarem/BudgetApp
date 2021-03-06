import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
    return (
        <ul className = "expenses-list">
            {props.items.length>0 && props.items.map((item,index)=> (
                <ExpenseItem removeItem={props.removeItem}
                key = {index}
                title= {item.title}
                date = {item.date}
                amount = {item.amount}
                description = {item.description}
                />
            ))}
            {props.items.length<1 && <div style={{textAlign: "center", color:"white"}}>No transactions</div>}
        </ul>
    );
}
export default ExpensesList