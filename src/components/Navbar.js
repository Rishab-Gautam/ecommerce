import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../Global/CartContext';



const Navbar = () =>{
    const {qty} = useContext(CartContext);
    return(
        <div>
            <nav>
                <ul className="left">
                    <li>
                    <Link to="/"  >IndiaExpress</Link>  
                    </li>
                </ul>
                <ul className="right">
                    <li>
                        <Link to="/Cart"><span className="ShoppingCart">
                            <i class="fas fa-cart-plus"></i>
    <span className="CartCount">{qty}</span></span></Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}
export default Navbar;