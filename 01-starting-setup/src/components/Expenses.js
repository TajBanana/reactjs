import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"

const Expenses = (props) => {
    return (
        <div className="expenses">
            {props.itemList.map((expense) =>
                <ExpenseItem title={expense.title}
                             amount={expense.amount}
                             date={expense.date}/>
            )}
        </div>
    )
}

export default Expenses;