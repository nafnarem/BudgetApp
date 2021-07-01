import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
const ExpensesList = (props) => {
    return (
        <ul className = "expenses-list">
            {props.items.length>0 && props.items.map((item,index)=> (
                <ExpenseItem removeItem={props.removeItem}
                key = {index}
                title= {item.title}
                date = {item.date}
                amount = {item.amount}
                />
            ))}
            {props.items.length<1 && <div style={{textAlign: "center", color:"white"}}>No transactions</div>}
        </ul>
    );
}
export default ExpensesList