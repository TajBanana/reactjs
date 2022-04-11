import "./ExpenseDate.css"

const ExpenseDate = (props) => {
    const year = props.date.getFullYear();
    const month = props.date.getMonth();
    const day = props.date.getDay();

    return (
        <div className="expense-date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">Mth: {month}</div>
            <div className="expense-date__year">{year}</div>
        </div>)
}

export default ExpenseDate;
