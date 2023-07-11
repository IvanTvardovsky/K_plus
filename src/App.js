import React from "react"
import Image from "./components/image"
import logo from "./images/logo.webp"


class App extends React.Component{
    render(){
        return(
            <div class="navbar">
                <div class="navbar-wrapper">
                    <div class="navbar-logo">
                        <Image image={logo} />
                    </div>
                    <nav role="navigation" class="navbar-menu">
                        <ul role="list" class="navbar-menu-list">
                            <li>
                                <a href="#">Инструмент</a>
                            </li>
                            <li>
                                <a href="#">Калькулятор</a>
                            </li>
                            <li>
                                <a href="#">Справочник</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default App