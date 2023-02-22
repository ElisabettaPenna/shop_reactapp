import React from 'react';
import './Cart.css'


export default function Cart ({cart,setCart, count,setCount,total, setTotal}) {

    function removeFromCart(cartItem,i){
        let newList = [...cart]
        newList.splice(i, 1)
        setCart(newList)
        setCount(count - 1)
        setTotal(total - cartItem.price)
         }

 function reduceQuantity(cartItem,i){
    setCount(count - 1);
    setTotal(total - cartItem.price)
    let itemIndex= cart.findIndex((elem) => elem.id === cartItem.id);
         if(cart[itemIndex].quantity > 1){
              cart[itemIndex].quantity--;
                setCart([...cart])} 
         else if(cart[itemIndex].quantity === 1 ){
                    let newList = [...cart]
                    newList.splice(i, 1)
                    setCart(newList)}
     }

function increaseQuantity(cartItem){
    setTotal(total + cartItem.price)
    setCount(count + 1);
    let itemIndex= cart.findIndex((elem) => elem.id === cartItem.id);
    cart[itemIndex].quantity++;
    setCart([...cart])

}



    const cartlist= cart.map((cartItem, i) =>{
        return(
            <li key={i}>
            <div className='cartItem'>
              <img src= {cartItem.image}/>
              <div className='moreOrLess'>
             <button className='more' onClick={()=>increaseQuantity(cartItem)}>+</button>
             <span className='quantity'>{cartItem.quantity}</span>
             <button className='less' onClick={()=>reduceQuantity(cartItem,i)}>-</button>
             </div>
                  <p className="cartTitle">{cartItem.title}</p>
                  <div className="miniWrap">
                  <p className ="cartPrice">€ {(cartItem.quantity*cartItem.price).toFixed(2)}</p>
                  <button className='remove' onClick={()=>removeFromCart(cartItem,i)}>X</button>
                  </div>
                  </div>
                  </li>
        )})




    return(
<>
<div className='cart'>
<ul className="cartList">

    {cartlist}
</ul>
{total !== 0 && <div className="totalSubmit">
    <p className='total'>€ {total.toFixed(2)}</p>
     <button type="submit" className='submit'>Acquista</button>
</div>}
</div>

    </>
    )
    }