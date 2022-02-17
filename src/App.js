import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
      <Routes>
        <Route  path='/' element={<Landing />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
  );
}

export default App;
