import './App.css';
import {Paths} from "./Routes.tsx";

function App() {
  return (
      <div>
        <h1>React Router Tutorial!</h1>
        <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}
        >
        </nav>

        <p>{Paths.INVOICES}</p>
      </div>

  );


}

export default App;
