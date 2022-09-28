import React from "react";
import { useCart } from "react-use-cart";

// export default function WishList() {
//     
//   }

const Wishlist = () =>{
  const{isEmpty,totalUniqueItems,items,totalItems} = useCart();

  if(isEmpty) return <h1 className="text-center">Your shopping wishlist is empty </h1>
  
  
  {/*displaying the iteam that are in the wishlist to the screen*/}

  return(
    
    
    <table>
      {
        items.map((item, index) =>{ 
          return(
            <h1></h1>,
            <tr key={index}>
              <td>
                <img src={item.image} style= {{height : '6rem' ,width : '6rem'}}></img>
              </td>
              <td>   {item.title}   </td>
              <td> </td>
              <td>   $ {item.price} </td>
            </tr>
          )
          
        })
      }

    </table>
  )

}
export default Wishlist;

