import NewUser from "../Users/NewUser";
import styled from "styled-components";

const CardContent = styled.div`
  text-align: center;
  border-color: black;
  width: 100%;
`

const Card = (props) => {
  const addUserHandler = (enteredUser) => {
    console.log(enteredUser);
    props.addToList(enteredUser);
  }

    return (
        <CardContent >
            <NewUser onAddUser={addUserHandler}/>
        </CardContent>
    )
}

export default Card;
