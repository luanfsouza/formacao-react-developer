import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Teste } from "./pages/teste";


function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/login" element={<Login/>} />
      <Route path="/Teste" element={<Teste/>} />
      
    </Routes>
    </Router>
  );
}

export default App;
