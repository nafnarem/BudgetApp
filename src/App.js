import React, { useState } from "react";
import "./App.css";
import Expenses from "./Expenses/Expenses";
import Income from "./Income/Income";
import NewTransaction from "./NewTransaction/NewTransaction";
import BalanceSheet from "./BalanceSheet/BalanceSheet";


const DUMMY_EXPENSES = [{
  title: "Car Insurance",
  amount: 1000,
  date: new Date (2021,5 ,19)
},
{
  title: "House Insurance",
  amount: 100000,
  date: new Date (2021,6 ,19)
},
{
  title: "Computer Insurance",
  amount: 15000,
  date: new Date (2021,7 ,19)
},
{
  title: "Phone Insurance",
  amount: 20000,
  date: new Date (2021,8 ,19)
}]

const DUMMY_INCOME =[{
  title: "Salary",
  amount: 20000,
  date: new Date(2021, 8, 19), 
},
{
  title: "Sale",
  amount: 50000,
  date: new Date(2021, 10, 19)
},
{
  title: "Dividends",
  amount: 10000,
  date: new Date(2021, 6, 20)
}

]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expenseItem) =>{
    setExpenses(prevExpenses => {
      return [expenseItem, ...prevExpenses];
    })
  }
  const [income, setIncome] = useState(DUMMY_INCOME);
  const addIncomeHandler = (incomeItem) => {
    setIncome(prevIncome => {
      return [incomeItem, ...prevIncome];
    })
    
  }

  const removeExpense = (title) => {
      let newItems = expenses.filter((item)=> item.title !== title);
      setExpenses(newItems);
  }

  const removeIncome = (title) => {
    let newItems = income.filter((item)=> item.title !== title);
    setIncome(newItems);
}



  return <div className="App">

    <BalanceSheet expenses= {expenses} income = {income}/>
    <NewTransaction onAddIncome={addIncomeHandler} onAddExpense={addExpenseHandler}/>
    <div className="Stack">
    <Expenses expenses = {expenses} removeItem={removeExpense}/>
    <Income income = {income} removeItem={removeIncome}/>
    </div>
    <div className="Stack">
    </div>
  </div>;

};
export default App;