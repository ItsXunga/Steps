import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Login from './components/Login';

function App() {
  return (
      <Routes>
        <Route  path='/' element={<Landing />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
  );
}

export default App;
