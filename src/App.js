import React from "react"
import Navbar from "./components/navbar"
import Blocks from "./components/blocks"

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          showBlocks: true,
        };
        this.handleContinue = this.handleContinue.bind(this)
    }

    handleContinue = () => {
        this.setState({ showBlocks: false });
    };

    render(){
        const { showBlocks } = this.state;
        return(
            <div>
                <Navbar /> 
                <div className="App">
                    {showBlocks ? (
                        <div>
                            <h1>Добро пожаловать!</h1>
                            <button onClick={this.handleContinue}>Продолжить</button>
                        </div>
                    ) : (
                        <div>
                            <Blocks />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default App