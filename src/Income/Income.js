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

return (
    <div>
    <Card className ="income">
        <div className="title">Income</div>
        <ExpensesFilter 
         onChangeFilter={filterChangedHandler}
         selected={filteredYear}/>
        <ExpensesChart expenses={filteredIncome}/>
        <ExpensesList items={filteredIncome} removeItem={props.removeItem}/>
        
    </Card>
    </div>
);
}
export default Income;