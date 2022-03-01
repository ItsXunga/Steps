import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Categorias from "./components/categorias";
import Categoria_details from "./components/categoria_details";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Instruções1 from "./components/Instruções1";
import Instruções2 from "./components/Instruções2";
import Instruções3 from "./components/Instruções3";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/categoria_details" element={<Categoria_details />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/intro" element={<Instruções1 />} />
      <Route path="/intro2" element={<Instruções2 />} />
      <Route path="/intro3" element={<Instruções3 />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/second" element={<SecondPage />} />
    </Routes>
  );
}

export default App;
