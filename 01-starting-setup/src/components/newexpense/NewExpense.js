import './NewExpense.css'
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import expenses from "../expenses/Expenses";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAppSaveExpenseData(expenseData);

    };

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
}

export default NewExpense;