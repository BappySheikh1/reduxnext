import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function Cart(){
    
    const products  =useSelector((state)=>state)

    return (
        <div>
            
           <h1 className="text-4xl text-center my-10">Cart:{products.length}</h1>
           <Link href='/'>
    <button className="bg-orange-500  p-3 text-white font-bold rounded-xl">Home</button>
    </Link>
           <div>
           {
          products.map((product,i) => <div key={i} className='flex flex-row justify-between text-white bg-slate-900 rounded-xl p-10 text-lg font-bold mt-6'>
          <div>
          <h1>Product Name: {product.name}</h1>
           <h1>Product price: ${product.price}</h1>
          </div>
           
      </div>)
        }
           </div>
        </div>
    )
  
}

export default Cart