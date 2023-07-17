import React from "react";
import Risk1 from "./block1/risk1";
import Risk10 from "./block1/risk10";

class FirstBlock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          isClicked: true
        };
        this.ClickToBlock = this.ClickToBlock.bind(this)
    }
    
    ClickToBlock = () => {
        this.setState(prevState => ({
          isClicked: !prevState.isClicked
        }));
    };

    render(){
        return(
            <div className="Risks">
                <h2 onClick={this.ClickToBlock}>Блок №1 : Документы.</h2>
                {this.state.isClicked && (
                    <div>
                        <Risk1 />
                        <Risk10 />
                    </div>
                )}
            </div>
        )
    }
}

export default FirstBlock