
import "./BalanceSheet.css"
import {useState} from "react";
import ExpensesFilter from "../Expenses/ExpensesFilter";
import Card from "../UI/Card";
const BalanceSheet = (props) =>{
    const [filteredYear, setSelectedYear] = useState("2021")
    const filterChangedHandler = (selectedValue) => {
        setSelectedYear(selectedValue);
    }
    const filteredIncome = props.income.filter((income)=>{
        return income.date.getFullYear().toString()=== filteredYear;
    })

    const filteredExpenses = props.expenses.filter((expense)=>{
        return expense.date.getFullYear().toString()=== filteredYear;
    })

    let totalExpense=0;
    let totalIncome=0;
    let totalBalance=0;
    filteredExpenses.map((expense)=>{
        totalExpense+= expense.amount;
    })
    filteredIncome.map((incomeItem)=>{
        totalIncome+= incomeItem.amount;
    })

    totalBalance = totalIncome- totalExpense;

    if(totalBalance<0){
    return (
        
        <Card className="balanceSheet">
            <div className="title">Balance Sheet</div>
            <ExpensesFilter 
         onChangeFilter={filterChangedHandler}
         selected={filteredYear}/>
            <div><span>Total Expense: </span>{totalExpense}</div>
            <div><span>Total Income: </span>{totalIncome}</div>
            <div><span>Total Net Loss: </span>{totalBalance}</div>
        </Card>
    )
    }
    if(totalBalance>=0){
        return (
            <Card className="balanceSheet">
                <div className="title">Balance Sheet</div>
                <ExpensesFilter 
         onChangeFilter={filterChangedHandler}
         selected={filteredYear}/>
         
                <div><span>Total Expense: </span>{totalExpense}</div>
                <div><span>Total Income: </span>{totalIncome}</div>
                <div><span>Total Net Gain: </span>{totalBalance}</div>
            </Card>
        )
        }

}
export default BalanceSheet;