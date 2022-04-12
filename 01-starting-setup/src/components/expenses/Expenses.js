import ExpenseItem from "./expenseItem/ExpenseItem";
import "./Expenses.css"
import Card from "../Card";

const Expenses = (props) => {
    return (
        <Card className="expenses">
            {props.itemList.map((item) => <ExpenseItem title={item.title}
                                                       amount={item.amount}
                                                       date={item.date}/>
            )}
        </Card>
    )
}

export default Expenses;