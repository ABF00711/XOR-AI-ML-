import './App.css';
import UserProvider from './Context/user';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import PerceptronProvider from './Context/perceptron';

function App() {
  return (
    <UserProvider>
      <PerceptronProvider>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </div>
      </PerceptronProvider>
    </UserProvider>
  );
}

export default App;
