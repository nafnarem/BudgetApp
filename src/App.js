import React, { useState } from "react";
import "./App.css";
import Expenses from "./Expenses/Expenses";
import Income from "./Income/Income";
import NewTransaction from "./NewTransaction/NewTransaction";
import BalanceSheet from "./BalanceSheet/BalanceSheet";
import Card from "./UI/Card";


const DUMMY_EXPENSES = [{
  title: "Car Insurance",
  amount: 1000,
  description:"On MUX FAB7950",
  date: new Date (2021,5 ,19)
},
{
  title: "House Insurance",
  amount: 100000,
  description: "Residence Address",
  date: new Date (2021,6 ,19)
},
{
  title: "Computer Insurance",
  description: "M1-Macbook Air 2021",
  amount: 15000,
  date: new Date (2021,7 ,19)
},
{
  title: "Phone Insurance",
  description: "Google Pixel 3a",
  amount: 20000,
  date: new Date (2021,8 ,19)
}]

const DUMMY_INCOME =[{
  title: "Salary",
  amount: 30000,
  description: "Regular Job",
  date: new Date(2021, 8, 19), 
},
{
  title: "Sale",
  description: "Old Phone",
  amount: 50000,
  date: new Date(2021, 10, 19)
},
{
  title: "Dividends",
  description: "Globe Stock",
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

  const [detailsExpense, setDetailsExpense] = useState("Show Detailed Expenses");
  const [detailsIncome, setDetailsIncome] = useState("Show Detailed Income");
    

  const [displayIncome, setDisplayIncome] = useState(false);
  const displayIncomeHandler = () =>{
    if(displayIncome===true)
    {setDisplayIncome(false)
    setDetailsIncome("Show Detailed Income")}
    else{setDisplayIncome(true)
      setDetailsIncome("Hide Detailed Income")}
      
  }
  const [displayExpense, setDisplayExpense] = useState(false);
  const displayExpenseHandler = () =>{
    if(displayExpense===true){

      setDisplayExpense(false)
      setDetailsExpense("Show Detailed Expenses")
    }
    else {setDisplayExpense(true)
    setDetailsExpense("Hide Detailed Expenses")}
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

    <BalanceSheet expenses= {expenses} income = {income}  />

    <NewTransaction onAddIncome={addIncomeHandler} onAddExpense={addExpenseHandler}/>
    <div className="Stack details"><button onClick={displayExpenseHandler}>{detailsExpense}</button><button onClick={displayIncomeHandler}>{detailsIncome}</button></div>
    <Card className="Stack">
    {displayExpense && <Expenses expenses = {expenses} removeItem={removeExpense}/>}
    {displayIncome && <Income income = {income} removeItem={removeIncome}/>}
    </Card>
  </div>;

};
export default App;