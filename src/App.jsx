import "./App.css";

import { Dropdown } from "flowbite-react";
function App() {
  return (
    <>
      <h1>Hola mundo</h1>
      <Dropdown inline label="Dropdown">
        <div className=" m-3">
          <a href="/">Dashboard</a>
        </div>
        <div className=" m-3">
          <a href="/register">Dashboard</a>
        </div>
        <div className=" m-3">
          <a href="/perfil">Dashboard</a>
        </div>
      </Dropdown>
    </>
  );
}

export default App;
