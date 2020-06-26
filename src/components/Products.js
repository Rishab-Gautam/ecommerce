import React, { useContext } from 'react';
import {CartContext} from '../Global/CartContext';
import Banner from './/Banner'
import { ProductsContext } from "../Global/ProductsContext";
const Products = () => {
    const { products } = useContext(ProductsContext);
    const {dispatch} = useContext(CartContext);
    
    
    

     

    return (
        <div className="container">
            <Banner/>
        <div className="products">
            {products.map((product) => (
                <div className="product" key={product.id}>


                    <div className="product-img">
                        <img src={product.image} alt="not found" height="200" width="300" />
                    </div>
                    <div className="product-details">
                        <div className="product-name">
                            {product.name}

                        </div>
                        <div className="product-price">
                            ${product.price}.00
                        </div>



                          <div className="add-to-cart" onClick={() => dispatch({type:'ADD_TO_CART',id:product.id,product})} >
                         
                            ADD TO CART
                          
                        </div>
                        {product.status === 'hot' ? <div className="hot">Hot</div> : ''}
                            {product.status === 'new' ? <div className="new">New</div> : ''}

                    </div>
                </div>



            ))}

        </div>
        </div>

    )
}
export default Products;