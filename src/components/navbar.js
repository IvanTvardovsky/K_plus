import React from "react";
import logo from "../images/logo.webp"
import Image from "./image"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Navbar extends React.Component{
    render(){
        return(
           <Router>
               <div className="navbar">
                   <div className="navbar-wrapper">
                       <div className="navbar-logo">
                           <Image image={logo} />
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
                                   <Link to="/handbook">Справочник</Link>
                               </li>
                           </ul>
                       </nav>
                   </div>
               </div>
           </Router>
        )
    }
}

export default Navbar