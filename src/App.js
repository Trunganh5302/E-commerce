
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Pages/Home/Home';
import Shop from './Pages/Shop/Shops';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Signup/Signup';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
