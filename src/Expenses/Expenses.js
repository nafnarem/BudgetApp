import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import {useState} from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setSelectedYear] = useState("2021")
    const filterChangedHandler = (selectedValue) => {
        setSelectedYear(selectedValue);
    }
    const filteredExpenses = props.expenses.filter((expense)=>{
        return expense.date.getFullYear().toString()=== filteredYear;
    })


return (
    <div>
    <Card className ="expenses">
        <div className="title">Expense</div>
        <ExpensesFilter 
         onChangeFilter={filterChangedHandler}
         selected={filteredYear}/>
         <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}  removeItem={props.removeItem}/>
        
    </Card>
    </div>
);
}
export default Expenses;