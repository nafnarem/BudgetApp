import "./Income.css";
import Card from "../UI/Card";
import {useState} from "react";
import ExpensesFilter from "../Expenses/ExpensesFilter";
import ExpensesList from "../Expenses/ExpensesList";
import ExpensesChart from "../Expenses/ExpensesChart";

const Income = (props) => {
    const [filteredYear, setSelectedYear] = useState("2021")
    const filterChangedHandler = (selectedValue) => {
        setSelectedYear(selectedValue);
    }
    const filteredIncome = props.income.filter((income)=>{
        return income.date.getFullYear().toString()=== filteredYear;
    })


const [isSearching, setIsSearching] = useState(false);
const [searchTerm, setSearchTerm] = useState("");

const searchingIncome = filteredIncome.filter((income)=>{
    return income.description.toLowerCase().includes(searchTerm);
})

const searchFunction = event =>{
    setIsSearching(true);
    setSearchTerm(event.target.value);
}
return (
    <Card className ="income">
        <div className="title">Income
        <input className type="text" placeholder={"search"} value={searchTerm} onChange={searchFunction}></input>
        </div>
        <ExpensesFilter 
         onChangeFilter={filterChangedHandler}
         selected={filteredYear}/>
         
{!isSearching && 
        <div>
        <ExpensesChart expenses={filteredIncome}/>
        <ExpensesList items={filteredIncome} removeItem={props.removeItem}/>
        </div>}
{isSearching && 
        <div>
        <ExpensesChart expenses={searchingIncome}/>
        <ExpensesList items={searchingIncome} removeItem={props.removeItem}/>
        </div>}

    </Card>
);
}
export default Income;