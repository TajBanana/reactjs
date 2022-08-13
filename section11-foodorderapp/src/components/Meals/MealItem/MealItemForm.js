import classes from './MealItemForm.module.css'
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const mealInput = {
    id: "amount_" + props.id,
    type: "number",
    min: "1",
    max: "5",
    step: "",
    defaultValue: "1"
  }

return <form className={classes.form}>
  <Input label={"Amount"} input={mealInput}/>
  <button>Add</button>
</form>
}

export default MealItemForm