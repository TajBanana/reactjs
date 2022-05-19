import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../Card";
import ExpensesFilter from "./ExpenseFilter";
import {useState} from "react";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2022')

    const optionValue = (year) => {
        setSelectedYear(year);
    }

    const filteredExpenses = props.itemList.filter(item =>
        item.date.getFullYear().toString() === selectedYear)

    let expensesContent = <h2 style={{color: "grey", textAlign: "center"}}>
        no expense found</h2>;

    expensesContent = filteredExpenses.length > 0 ? filteredExpenses
        .map((item) => <ExpenseItem title={item.title}
                                    amount={item.amount}
                                    date={item.date}
                                    key={item.id}/>) : expensesContent;


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter initYear={selectedYear}
                                onOptionChange={optionValue}/>
                {expensesContent}
            </Card>

        </div>

    )
}

export default Expenses;