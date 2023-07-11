import React from "react";
import Blocks from "./risk1"
import Risk1 from "./risk1";

class FirstBlock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          currentQuestion: 0,
          riskCount: 0
        };
      }
    
    render(){
        return(
            <div class="Risks">
                <Risk1 />
            </div>
        )
    }
}

export default FirstBlock