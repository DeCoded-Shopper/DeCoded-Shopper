import React from "react";
import { useCart } from "react-use-cart";
import {
  StyleSheet, Button, View, SafeAreaView,
  Text, Alert
} from 'react'
import ProductCard from "./ProductCard";
const total=0; 
const Wishlist = () =>{
  const{isEmpty,totalUniqueItems,items,totalItems} = useCart();

  //this massage will display if the wishlist is empth

  if(isEmpty) return <h1 className="text-center">Your shopping wishlist is empty </h1>

  return(

    // this will return table of all items in wishlist
    
    <>
      <table className="line">
        {items.map((item, index) => {
          return (
            <h1></h1>,
            <><tr key={index}> 
              <td>
                <img src={item.image} style={{ height: '6rem', width: '6rem' }} onClick={() => items.pop}></img>
              </td>
              <td style={{paddingLeft:'3rem'}}>   {item.title}   </td>
              <td> </td>
              <td style={{paddingLeft:'3rem', paddingRight:'3rem'}}>  R{item.price} </td>
              <td> <img src={"bin.png"} style={{ height: '3rem', width: '3rem' }}  onClick={() => alert(items)}></img> </td>
            </tr></>
          );


        })}

      </table>
      <h2>{items.length} items in list with a Total {

          
        
      //  items.at(0).price+items.at(1).price
      items.map((item, index)=>{return (item.price)})
      
       // for(let i = 0; i < items.length; i++) {
       //     total+=items.at(i).price
       // }
       // return total 

      }
      </h2>
      <button onClick={() => alert('Shopping List Cleared!')}>Clear Wishlist</button>
      </>
    
  )

}
export default Wishlist;

