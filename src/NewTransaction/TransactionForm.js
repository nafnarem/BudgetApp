
import { useState } from "react";
import "./NewTransaction.css"

const TransactionForm = (props) =>{
    const [enteredTitle, setEnteredTitle] = useState("");
    const titleChangedHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const [enteredAmount, setEnteredAmount] = useState("");
    const amountChangedHandler = (event) =>{
        setEnteredAmount(event.target.value);
    };
    const [enteredDate, setEnteredDate] = useState("");
    const dateChangedHandler = (event) =>{
        setEnteredDate(event.target.value);
    };
    const [selectedTransactionType, setTransactionType] = useState("expense");
    const transactionTypeHandler = (event) =>{
        setTransactionType(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const transactionData = {
            title: enteredTitle,
            amount: Number(enteredAmount),
            date: new Date(enteredDate),
            transactionType: selectedTransactionType
        };

    props.onSaveTransactionData(transactionData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
    };

return (
<form onSubmit={submitHandler}>
    <div className="new-transaction__controls">
        <div className="new-transaction__control">
            <label>Title</label>
            <input required type="text" value={enteredTitle} onChange={titleChangedHandler}></input>
        </div>
        <div className="new-transaction__control">
            <label>Amount</label>
            <input required type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangedHandler}></input>
        </div>
        <div className="new-transaction__control">
            <label>Date</label>
            <input required type="date" min="2019-01-01" max="2022-12-31" value = {enteredDate} onChange={dateChangedHandler}></input>
        </div>
         <div className="radio">
             <input type="radio" value="income" checked={selectedTransactionType==="income"} onChange={transactionTypeHandler}></input>
             <label>Income</label>
            <input type="radio" value="expense" checked={selectedTransactionType==="expense"} onChange={transactionTypeHandler}></input>
            <label>Expense</label>
        </div>
    </div>
    <div className="new-transaction__actions">
        <button type="button" onClick={props.onCancel}> Cancel</button>
        <button type="submit"> Add Transaction</button>
    </div>
</form>
)    
}

export default TransactionForm;