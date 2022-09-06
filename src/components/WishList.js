import React from "react";
import { useCart } from "react-use-cart";

// export default function WishList() {
//     return <h1>WishList</h1>
//   }

const Wishlist = () =>{
  const{isEmpty,totalUniqueItems,items,totalItems} = useCart();

  if(isEmpty) return <h1 className="text-center">Your shopping wishlist is empty </h1>

  return(
    <table>
      {
        items.map((item, index) =>{ 
          return(
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

