import React from 'react'
import './Home.css'

export default function Home({products, 
                              cart, setCart, 
                              count,setCount,
                              total, setTotal}){


 function addToCart(item){
   setCount(count + 1)
   setTotal(total + item.price);
//exist controlla se in cart esiste un elemento con lo stesso id dell'item appena aggiunto
let exist= cart.findIndex((elem) => elem.id === item.id)
//se è uguale a -1, quindi non esiste, allora verrà inserito con quantità 1, 
//altrimenti verrà aggiornata la quantità all'elemento già presente
    if(exist === -1)
{setCart([...cart,{...item, quantity: 1}])} 
    else {
    cart[exist].quantity++;
    setCart([...cart])
         }
                           }


    const productlist= products.map((item)=>{
        return(
            <div className= 'item'  key={item.id} id= {"item" + item.id}>
       <img src= {item.image} alt={item.title}/>
       <p className='title'>{item.title}</p>
       <div>
       <p className ='price'>€ {item.price}</p>
       <button className="miniCart" onClick={()=>addToCart(item)}><img src="./cart.png" alt="carrello"/></button>
       </div>
       </div>
        )
        })
    
        
            
          

    return(
        <>
       <div className='productList'>
   
        <div className='wrapper'>
{productlist}
</div>  
       </div>
        </>
    )
}