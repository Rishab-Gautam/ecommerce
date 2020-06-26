import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Navbar from './components/Navbar'
import ProductsContextProvider from"./Global/ProductsContext"
import CartContextProvider from "./Global/CartContext";
import Products from './components/Products';
import './App.css';
import Cart from './components/Cart';
import Notfound from './components/Notfound'

function App() {
  
  return (
    <div>
      <ProductsContextProvider>
        <CartContextProvider>
        <Router>
        <Navbar/>
      
          <Switch>
            <Route path ="/" exact component={Products}/>
            <Route path="/cart" exact component={Cart}/>
            <Route component={Notfound}/>
          </Switch>

        </Router>
        </CartContextProvider>
     </ProductsContextProvider>
      </div>
    
  );

}

export default App;
