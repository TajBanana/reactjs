import React, {useState} from 'react';
import NewUser from "./components/Users/NewUser";
import UsersList from "./components/Users/UsersList";


const App = () => {
  const MOCK_USERS = [
    {name: "Jack", age: "12",key:'1'},
    {name: "Young", age: "88",key:'2'}
  ];
  const [usersList, setUsersList] = useState(MOCK_USERS);

  const saveUserList = (user) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, user];
    })
  }

  return (
      <div>
        <NewUser onSaveuser={saveUserList}/>
        <UsersList users={usersList}/>
      </div>

  );
}

export default App;
