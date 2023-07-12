import React from "react";
import Risk1 from "./risk1";
import Risk2 from "./risk2";

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
                <Risk2 />
            </div>
        )
    }
}

export default FirstBlock