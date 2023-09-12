// import './App.css'

import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import {books} from "./data";
import BooksInfo from "./Pages/BooksInfo";
import Cart from "./Pages/Cart";
import { useEffect, useState } from "react";

// import Book from './components/UI/Book';

function App() {
  const [cart, setCart] = useState ([])
  function addToCart(book) {
    const dupeItem = cart.find(item => +item.id === +book.id)
    if (dupeItem){
    
setCart (cart.map(item => { 
  if (item.id === dupeItem.id ) {
    return {

      ...item,
      quantity:  item.quantity + 1,
      
    }
  }
else {
  return item
}
}))
    }
   else {
    setCart ([...cart, {...book, quanitity: 1}])
   }
  }

useEffect(() => {
  console.log(cart)
}, [cart])

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} /> 
        <Route path="/books" exact render={() => <Books books={books} />}  /> 
        <Route path="/books/:id" render={() => <BooksInfo books={books} addToCart={addToCart} /> } /> 
        <Route path="/cart" render={() => <Cart books={books} /> } /> 
      
        <Footer />
      </div>
    </Router>
  );
}

export default App;


// Brrrrr

// BG=IG FCKING BRRRR