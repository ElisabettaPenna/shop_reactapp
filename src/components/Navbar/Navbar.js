import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";

export default function Navbar({count,setCount}){
return(
<>
<nav>
<Link to="/" style={{ textDecoration: 'none' }}>
<p className='nav'>Shop</p>
</Link>
<Link to="/cart" style={{ textDecoration: 'none' }}>
<div className="divCart">
<p className="count">{count}</p> 
<button>
<img src="./cart.png"/></button>
</div>
</Link>
</nav>
</>
)
}