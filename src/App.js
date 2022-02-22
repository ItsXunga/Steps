import { Route, Routes } from "react-router-dom"
import "./App.css"
import Landing from "./components/Landing"
import Login from "./components/Login"
import Categorias from "./components/categorias/categorias"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/categorias" element={<Categorias />} />
    </Routes>
  )
}

export default App
