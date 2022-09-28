import React from "react";
import { useCart } from "react-use-cart";

const Wishlist = () =>{
  const{isEmpty,totalUniqueItems,items,totalItems} = useCart();

  //this massage will display if the wishlist is empth

  if(isEmpty) return <h1 className="text-center">Your shopping wishlist is empty </h1>

  return(

    // this will return table of all items in wishlist
    
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
              <td>   R {item.price} </td>
            </tr>
          )
          
        })
      }

    </table>
  )

}
export default Wishlist;

