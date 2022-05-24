import "./Expenses.css"
import Card from "../Card";
import ExpensesFilter from "./ExpenseFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2022')

    const optionValue = (year) => {
        setSelectedYear(year);
    }

    const filteredExpenses = props.itemList.filter(item =>
        item.date.getFullYear().toString() === selectedYear)

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter initYear={selectedYear}
                                onOptionChange={optionValue}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList itemsList={filteredExpenses}/>
            </Card>

        </div>

    )
}

export default Expenses;