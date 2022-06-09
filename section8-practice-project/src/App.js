import React, {useState} from 'react';
import Card from "./components/Card/Card";


const App = () => {
  const MOCK_USERS = [
    {name: "Jack", age: "12",key:'1'},
    {name: "Young", age: "88",key:'2'}
  ];
  const [userList, setUserList] = useState(MOCK_USERS);

  const saveUserList = (user) => {
    setUserList((prevState) => {
      return [user, ...prevState];
    })
  }

  return (
      <div>
        <div>
          <Card addToList={saveUserList}/>
        </div>
        <div>
          {userList.map(user => (
                  <li key={user.key}>
                    {user.name} + ({user.age} years old)
                  </li>
              )
          )}
        </div>
      </div>

  );
}

export default App;
