import styled from 'styled-components'
import {useState} from "react";

const UserInput = styled.input`
  color: red;
`

const NewUser = (props) => {

  const [enteredUser, setEnteredUser] = useState('')
  const [enteredAge, setEnteredAge] = useState('')

  const nameChangeHandler = (event) => {
    setEnteredUser(event.target.value)
    console.log(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
    console.log(event.target.value)
  };

  const onSaveUser = (event) => {
    event.preventDefault();
    console.log("button pressed")

    const userDetails = {
      name:enteredUser,
      age: enteredAge,
      key: Math.round(Math.random()*1000000)
    }

    props.onAddUser(userDetails);
    setEnteredUser('');
    setEnteredAge('');

  }

  return (
      <form onSubmit={onSaveUser}>
        <div>
          <label htmlFor={"username"}>Username</label>
          <UserInput id={"username"} type="text" onChange={nameChangeHandler}/>
        </div>
        <div>
          <label htmlFor={"age"}>Age (Years)</label>
          <input id={"age"} type="text" onChange={ageChangeHandler}/>
        </div>
        <button type={"submit"}>Add user</button>
      </form>
  );
}
export default NewUser;
