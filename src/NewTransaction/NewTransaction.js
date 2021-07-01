import { useState } from "react";
import TransactionForm from "./TransactionForm";
import "./NewTransaction.css"

const NewTransaction = (props) => {
    const [isEditing, setEditing] = useState(false);
    const startEditingHandler = () =>{
        setEditing(true)
    }
    const stopEditingHandler = () =>{
        setEditing(false)
    }
    const saveTransactionDataHandler = (enteredTransactionData) =>{
        const transactionData ={
            ...enteredTransactionData,
            id: Math.random().toString()
        };
        if(transactionData.transactionType==="income"){
            props.onAddIncome(transactionData);
        }
        else if (transactionData.transactionType==="expense"){
            props.onAddExpense(transactionData);
        }
    }
    return(
        <div className="new-transaction">
            {!isEditing && <button onClick={startEditingHandler}> Add Transaction</button>}
            {isEditing && <TransactionForm onCancel={stopEditingHandler} onSaveTransactionData={saveTransactionDataHandler}/>}
        </div>
    ) 
};

export default NewTransaction;