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

const [isSearching, setIsSearching] = useState(false);
const [searchTerm, setSearchTerm] = useState("");


const searchingExpenses = filteredExpenses.filter((expense)=>{
    return expense.description.toLowerCase().includes(searchTerm);
})
const searchFunction = event =>{
    setIsSearching(true);
    setSearchTerm(event.target.value);
}

return (
    <div>
    
        <Card className ="expenses">
        <div className="title"><span>Expense</span>
        <input className type="text" placeholder={"search"} value={searchTerm} onChange={searchFunction}></input>
        </div>
        <ExpensesFilter 
         onChangeFilter={filterChangedHandler}
         selected={filteredYear}/>
{!isSearching && 
<div>
         <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}  removeItem={props.removeItem}/>
    </div>}
    {isSearching && 
<div>
         <ExpensesChart expenses={searchingExpenses}/>
        <ExpensesList items={searchingExpenses}  removeItem={props.removeItem}/>
    </div>}


    </Card>
    </div>
);
}
export default Expenses;