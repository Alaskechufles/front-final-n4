import "./App.css";
import Register from "./register/Register";

/* import { Dropdown } from "flowbite-react"; */
import Login from "./login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Perfil from "./perfil/Perfil";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
