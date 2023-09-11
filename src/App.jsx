import "./App.css";
import Register from "./register/Register";

/* import { Dropdown } from "flowbite-react"; */
import Login from "./login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Perfil from "./perfil/Perfil";
import Dashboard from "./dashboard/Dashboard";
import Usuarios from "./opciones/Usuarios";
import Roles from "./opciones/Roles";
import Parametros from "./opciones/Parametros";
import Enlaces from "./opciones/Enlaces";
import Bitacoras from "./opciones/Bitacoras";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/perfil/:id" element={<Perfil />} />
          <Route path="/editarperfil/:id" element={<Perfil />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/parametros" element={<Parametros />} />
          <Route path="/enlaces" element={<Enlaces />} />
          <Route path="/bitacoras" element={<Bitacoras />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
