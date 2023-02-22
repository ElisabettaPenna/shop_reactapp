import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Cart from "./components/Cart/Cart"
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {

  const [products, setProducts] = React.useState([])

  React.useEffect(function() {
      fetch('https://fakestoreapi.com/products')
          .then((res) => res.json())
          .then((data) => setProducts(data))
          .catch(e => console.log(e));
  }, []);

  const [count, setCount] = React.useState(0)
  const [total, setTotal] = React.useState(0)
  const [cart, setCart] = React.useState([])

  
  
      

  return (
    <>
    <BrowserRouter>
         <Navbar 
             count={count}
             setCount={setCount}
          /> 
  <main>
    <Routes>
         <Route path="/" element= {
              <Home
                products= {products}
                cart= {cart}
                setCart={setCart}
                count={count}
                setCount={setCount}
                total={total}
                setTotal={setTotal}
               />
           }/>
         <Route path="/cart" element= {
              <Cart 
                cart= {cart}
                setCart={setCart}
                count={count}
                setCount={setCount}
                total={total}
                setTotal={setTotal}
              /> 
            }/>
          
    </Routes>
  </main>
  </BrowserRouter>
   </>
  );
}

export default App
