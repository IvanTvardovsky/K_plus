import React from "react";
import Risk12 from "./block4/risk12";
import Risk13 from "./block4/risk13";

class FourthBlock extends React.Component{
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
                <h2 onClick={this.ClickToBlock}>Блок №4 : Процесс.</h2>
                {this.state.isClicked && (
                    <div>
                        <Risk12 />
                        <Risk13 />
                    </div>
                )}
            </div>
        )
    }
}

export default FourthBlock