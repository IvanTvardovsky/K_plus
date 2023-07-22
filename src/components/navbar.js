import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import Image from "./image";

class Navbar extends React.Component {
   render() {
      return (
         <div className="navbar">
            <div className="navbar-wrapper">
               <div className="navbar-logo">
                  <Link to="/">
                     <Image image={logo} />
                  </Link>
               </div>
               <nav role="navigation" className="navbar-menu">
                  <ul role="list" className="navbar-menu-list">
                     <li>
                        <Link to="/instrument" className="highlight-link">Инструмент</Link>
                     </li>
                     <li>
                        <Link to="/calculator" className="highlight-link">Калькулятор</Link>
                     </li>
                     <li>
                        <Link to="/dictionary" className="highlight-link">Словарь</Link>
                     </li>
                     <li>
                        <Link to="/handbook" className="highlight-link">Справочник</Link>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
      );
   }
}

export default Navbar;
