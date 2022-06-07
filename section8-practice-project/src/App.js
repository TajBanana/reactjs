import React, {useState} from 'react';
import Card from "./components/Card/Card";


const App = () => {
  const[userList, setUserList] = useState([
      '123','345'
  ])

  return (
      <div>
        <div>
          <Card/>
        </div>
        <div>
          {userList.map(username =>(
              <li>
                {username}
              </li>
              )
          )}
        </div>
      </div>

  );
}

export default App;
