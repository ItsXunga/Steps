import { Route, Routes } from "react-router-dom"
import "./App.css"
import Landing from "./components/Landing"
import Login from "./components/Login"
import Categorias from "./components/categorias"
import CategoriaDetails from "./components/categoria_details"
import Profile from "./components/Profile"
import Register from "./components/Register"
import Instruções1 from "./components/Instruções1"
import Instruções2 from "./components/Instruções2"
import Instruções3 from "./components/Instruções3"
import MainPage from "./components/MainPage"
import EditProfile from "./components/EditProfile"
import ModalInfo from "./components/ModalInfo"
import ModalPin from "./components/ModalPin"
import ModalAddRota from "./components/ModalAddRota"
import ModalRota from "./components/modalRota"
import ManageModalPin from "./components/ManageModalPin"
import Drawertest from "./components/Drawer"
import ModalCancelar from "./components/modalcancelar"
import ModalEliminar from "./components/modaleliminar"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/categoriaDetails" element={<CategoriaDetails />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/intro" element={<Instruções1 />} />
      <Route path="/intro2" element={<Instruções2 />} />
      <Route path="/intro3" element={<Instruções3 />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/editProfile" element={<EditProfile />} />
      <Route path="/modalInfo" element={<ModalInfo />} />
      <Route path="/modalPin" element={<ModalPin />} />
      <Route path="/modalAddRota" element={<ModalAddRota />} />
      <Route path="/modalRota" element={<ModalRota />} />
      <Route path="/manageModalPin" element={<ManageModalPin />} />
      <Route path="/drawer" element={<Drawertest />} />
      <Route path="/modalcancelar" element={<ModalCancelar />} />
      <Route path="/modaleliminar" element={<ModalEliminar />} />
    </Routes>
  );
}

export default App;
