import React from "react";
import FirstBlock from "./firstblock"
import SecondBlock from "./secondblock"

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