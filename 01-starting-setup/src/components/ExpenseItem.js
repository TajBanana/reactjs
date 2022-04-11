import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";


const ExpenseItem = (props) => {

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    )
}

// function ExpenseItem() {
//
//     const expenseDate = new Date(2022, 2, 28);
//     const expenseTitle = "Car Insurance";
//     const expenseAmt = 294.37;
//
//     return (
//         <div className="expense-item">
//             <div>{expenseDate.toISOString()}</div>
//             <div className="expense-item__description">
//                 <h2>{expenseTitle}</h2>
//                 <div className="expense-item__price">${expenseAmt}</div>
//             </div>
//         </div>
//     )
// }

export default ExpenseItem;
