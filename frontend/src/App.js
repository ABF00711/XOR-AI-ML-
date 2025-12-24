import './App.css';
import UserProvider from './Context';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
