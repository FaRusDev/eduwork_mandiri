import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUser from './pages/AddUser';

import Navbar from './components/Navbar';
import UserList from './pages/UserList';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/user/add' element={<AddUser/>} />
        <Route path='/users' element={<UserList/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
