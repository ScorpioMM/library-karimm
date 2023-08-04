// import './App.css'
import Nav from './components/Nav'
import Explore from './components/Explore';
import Landing from './components/Landing';
import Highlights from './components/Highlights';
import Featured from './components/Featured';
import Discounted from './components/Discounted';
import Footer from './components/Footer'

// import Book from './components/UI/Book';

function App() {
  return (
    <div className="App">
    <Nav/>
    <Landing/>
    <Highlights/>
    < Featured /> 
    < Discounted /> 
    <Explore/>
    <Footer /> 
    </div>
  );
}

export default App;


