import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Service from "../components/Service";
import Login from "../components/Login";
import Register from "../components/Register";
import NotFound from "../components/notFound";
import Logout from '../components/Logout'
import Admin from '../components/Admin'
 
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
