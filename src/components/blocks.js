import React from "react";
import FirstBlock from "./blocks/firstblock"
import SecondBlock from "./blocks/secondblock"

class Blocks extends React.Component{
    render(){
        return(
            <div class="Blocks">
                <FirstBlock />
                <SecondBlock />
            </div>
        )
    }
}

export default Blocks