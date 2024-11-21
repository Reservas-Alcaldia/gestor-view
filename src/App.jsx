import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage'; 
import Admin from './pages/Admin';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<LoginPage />} /> 
        <Route path="/admin" element={<Admin />} /> 
      </Routes>
    </Router>
  );
}

export default App;