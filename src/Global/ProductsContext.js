import React,{createContext, useState} from 'react'
import earphones from '../assets/earphones.jpg';
import headphones from '../assets/headphones.jpg';
import shoes from '../assets/shoes.jpg';
import perfumes from '../assets/perfumes.jpg';
import iphone from '../assets/iphone.jpg';
import guitar from '../assets/guitar.jpg';
import watches from '../assets/watches.jpg';
import dslr from '../assets/dslr.jpg';

export const ProductsContext=createContext();


const ProductsContextProvider = (props) =>{
    const [products] = useState([

        {id:1,name:'Earphones',price:400,image:earphones,status:'hot'},
        {id:2,name:'Headphones',price:600,image:headphones,status:'new'},
         {id:3,name:'Shoes',price:800,image:shoes,status:'hot'},
        {id:4,name:'Perfumes',price:200,image:perfumes,status:'new'},
        {id:5,name:'Iphone',price:10000,image:iphone,status:'new'},
        {id:6,name:'Guitar',price:5900,image:guitar,status:'new'},
        {id:7,name:'Watches',price:900,image:watches,status:'hot'},
        {id:8,name:'Dslr',price:8900,image:dslr,status:'new'},
    ]);
    return(
        <div>
            
                <ProductsContext.Provider value={{products: [...products]}}>
            {props.children}
        </ProductsContext.Provider>
        </div>
    )
}
export default ProductsContextProvider;