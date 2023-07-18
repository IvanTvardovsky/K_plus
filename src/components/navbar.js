import React from "react";
import {Link} from "react-router-dom";
import logo from "../images/logo.webp";
import Image from "./image";

class Navbar extends React.Component {
   render() {
      return (
         <div className="navbar">
            <div className="navbar-wrapper">
               <div className="navbar-logo">
                  <Link to="/">
                     <Image image={logo}/>
                  </Link>
               </div>
               <nav role="navigation" className="navbar-menu">
                  <ul role="list" className="navbar-menu-list">
                     <li>
                        <Link to="/instrument">Инструмент</Link>
                     </li>
                     <li>
                        <Link to="/calculator">Калькулятор</Link>
                     </li>
                     <li>
                        <Link to="/dictionary">Словарь</Link>
                     </li>
                     <li>
                        <Link to="/handbook">Справочник</Link>
                     </li>
                  </ul>
                  <div className="navbar-info">
                     Вся информация актуальна на 17.07.2023
                  </div>
               </nav>
            </div>
         </div>
      );
   }
}

export default Navbar;
