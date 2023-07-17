import React from "react";
import FirstBlock from "./blocks/firstblock"
import SecondBlock from "./blocks/secondblock"
import ThirdBlock from "./blocks/thirdblock";
import FourthBlock from "./blocks/fourthblock";

class Blocks extends React.Component{
    render(){
        return(
            <div class="Blocks">
                <FirstBlock />
                <SecondBlock />
                <ThirdBlock />
                <FourthBlock />
            </div>
        )
    }
}

export default Blocks