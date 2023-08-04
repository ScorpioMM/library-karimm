// import './App.css'
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";

// import Book from './components/UI/Book';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
