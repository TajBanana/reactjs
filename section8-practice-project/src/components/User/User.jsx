import styled from 'styled-components'

const UserInput = styled.input`
  color: red;
`

const Inputs = (props) => {

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log("button pressed")
    }

    return (
        <form onSubmit={addUserHandler}>
            <div>
                <label>Username</label>
                <UserInput type="text"/>
            </div>
            <div>
                <label>Age (Years)</label>
                <input type="text"/>
            </div>
            <button type={"submit"}>Add user</button>
        </form>
    );
}
export default Inputs;
