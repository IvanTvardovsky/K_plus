import React from "react";
import Risk2 from "./risk2";
import Risk3 from "./risk3";
import Risk4 from "./risk4";

class SecondBlock extends React.Component{
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
                <h2 onClick={this.ClickToBlock}>Блок №2 : Документы.</h2>
                {this.state.isClicked && (
                    <div>
                        <Risk2 />
                        <Risk3 />
                        <Risk4 />
                    </div>
                )}
            </div>
        )
    }
}

export default SecondBlock