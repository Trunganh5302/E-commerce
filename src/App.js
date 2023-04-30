
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Pages/Home/Home';
import Shop from './Pages/Home/Shops';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
