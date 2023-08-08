// import './App.css'
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";

// import Book from './components/UI/Book';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} /> 
        <Route path="/books" component={Books} /> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;
