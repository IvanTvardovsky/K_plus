import React from "react";
import Risk1 from "./risk1";
import Risk10 from "./risk10";

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
                <h2>Блок №1 : Документы.</h2>
                <Risk1 />
                <Risk10 />
            </div>
        )
    }
}

export default FirstBlock