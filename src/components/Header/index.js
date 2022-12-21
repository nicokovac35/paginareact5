import React from 'react';
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";


export const Header = () => {
    return(
      <header>
      
         <Link to="/">
            <div className="logo">
                <img src={logo} alt="logo" width="120" />
            </div>
         </Link>
         <ul>
            <li>
                <Link to="/">Inicio </Link>
            </li>
            <li>
                <Link to="/Productos">Productos</Link>
            </li>
         </ul>
         <div className="cart">
            <box-icon name="cart"></box-icon>
            <span className="item__total">0</span>

         </div>
      </header>
    )
}

