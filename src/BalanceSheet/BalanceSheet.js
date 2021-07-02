
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
    filteredExpenses.map((expense)=>(
        totalExpense+= expense.amount
    ))
    filteredIncome.map((incomeItem)=>(
        totalIncome+= incomeItem.amount
    )
    )
    let balanceBar = totalExpense+totalIncome;
    let balanceBarLength="0%"
    let balanceBarInner="#ADD8E6"
    if(balanceBar>0){
    balanceBarInner="green"
     balanceBarLength = Math.round((totalExpense/balanceBar)*100)+"%";
    totalBalance = totalIncome- totalExpense;
    }
    return (
        
        <Card className="balanceSheet">
            <ExpensesFilter 
         onChangeFilter={filterChangedHandler}
         selected={filteredYear}/>

<div className="title">Balance Sheet</div>
        <div className="balanceBarInner" style={{backgroundColor: balanceBarInner}}>
            <div className="balanceBar" 
        style={{ width : balanceBarLength}}></div>
        </div>
            <div className="pair"><div>Total Expense: </div><div style={{color: "#E2735B"}}>₱{totalExpense}</div>
            </div>
            { filteredExpenses.map((element,index) => { return (<div className="expenseList" key={index}>{element.title} <span className="alignRight">₱{element.amount}</span></div>)

            })}
            <div className="pair">Total Income: <div style={{color: "#44CF31"}}>₱{totalIncome}</div></div>
            { filteredIncome.map((element,index) => { return (<div className="incomeList" key={index}>{element.title} <span>₱{element.amount}</span></div>)

            })}
            <div className="pair balance">Total Balance: <div style={{color: "#ADD8E6"}}>₱{totalBalance} </div></div>
        </Card>
    )
    
}
export default BalanceSheet;