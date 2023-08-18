import NAV from "./components/NAV/NAV"
import Home from "./pages/Home/Home.jsx"
import Login from "./pages/Login/Login"
import Contact from "./pages/Contact/Contact"
import About from "./pages/About/About"
import Blog from "./pages/Blog/Blog"
import Register from "./pages/Register/Register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <div>
      <Router>
        <NAV />
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/about" element={<About />}>About</Route>
          <Route path="/contact" element={<Contact />}>Contact</Route>
          <Route path="/login" element={<Login />}>Login</Route>
          <Route path="/register" element={<Register />}>Register</Route>
          <Route path="/blog" element={<Blog />}>Blog</Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
