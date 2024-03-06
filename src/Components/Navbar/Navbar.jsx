import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'
import nav_dropdown from '../Assets/nav_dropdown.png'


const Navbar = () => {
    const [menu , setmenu] = useState("shop")
    const {getTotalCartItems} = useContext(Context);
    const menuRef = useRef();

    const dropdown_toggle =(e)=>{
      menuRef.current.classList.toggle("nav-menu-visible");
      e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <Link style={{textDecoration:'none'}} to ="/"><img src={logo} alt='logo'/></Link>
            <Link style={{ textDecoration:'none' }} to ="/"><p>SHO<span>PC</span>ART</p></Link>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={ ()=>{setmenu("shop")} }><Link style={{ textDecoration:'none', color:'#626262' }} to ="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={ ()=>{setmenu("mens")} }><Link style={{ textDecoration:'none', color:'#626262' }} to ="mens">Mens</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={ ()=>{setmenu("womens")} }><Link style={{ textDecoration:'none', color:'#626262' }} to ="womens">Womens</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={ ()=>{setmenu("kids")} }><Link style={{ textDecoration:'none' , color:'#626262' }} to ="kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
           <Link style={{ textDecoration:'none' }} to ="/login"><button>Login</button></Link>
            <Link style={{ textDecoration:'none' }} to="/cart"><img src={cart_icon} alt='cart'/></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>

    </div>
  )
}

export default Navbar