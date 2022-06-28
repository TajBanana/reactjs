import {useState} from "react";
import Card from "/src/components/UI/Card";
import classes from '/src/components/Users/NewUser.module.css'
import Button from "/src/components/UI/Button";
import ErrorModal from "/src/components/UI/ErrorModal";

const NewUser = (props) => {

  const [enteredUser, setEnteredUser] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState();

  const nameChangeHandler = (event) => {
    setEnteredUser(event.target.value);
    console.log(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
    console.log(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  }

  const onSaveUser = (event) => {
    event.preventDefault();
    if (enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
      console.log("invalid input");
      setError({
        title: "invalid input",
        message: "Please enter non-empty values"
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "invalid input",
        message: "Please enter age > 0."
      });
      return;
    }

    console.log("button pressed")

    const userDetails = {
      name: enteredUser, age: enteredAge, key: Math.round(Math.random() * 1000000)
    }

    props.onSaveuser(userDetails);
    setEnteredUser('');
    setEnteredAge('');
  }

  return (
      <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
          <form onSubmit={onSaveUser}>
            <label htmlFor={"username"}>Username</label>
            <input
                id={"username"}
                type="text"
                onChange={nameChangeHandler}
                value={enteredUser}/>
            <label htmlFor={"age"}>Age (Years)</label>
            <input
                id={"age"}
                type="number"
                onChange={ageChangeHandler}
                value={enteredAge}/>
            <Button type={"submit"}>Add user</Button>
          </form>
        </Card>
      </div>

  );
}
export default NewUser;
