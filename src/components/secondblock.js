import React from "react";
import Risk3 from "./risk3";
import Risk4 from "./risk4";

class SecondBlock extends React.Component{
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
                <Risk3 />
                <Risk4 />
            </div>
        )
    }
}

export default SecondBlock