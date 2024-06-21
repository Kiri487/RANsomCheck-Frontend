import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Analysis from "./pages/Analysis/Analysis";

function App() {
  return (
    <Router>
      <>
        <Header />
        <div className="routes-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;
