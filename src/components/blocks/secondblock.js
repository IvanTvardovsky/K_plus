import React from "react";
import Risk2 from "./block2/risk2";
import Risk3 from "./block2/risk3";
import Risk4 from "./block2/risk4";
import Risk8 from "./block2/risk8";
import Risk11 from "./block2/risk11"

class SecondBlock extends React.Component {
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

   render() {
      return (
         <div className="Risks">
            <h2 onClick={this.ClickToBlock}>Блок №2 : Объект.</h2>
            {this.state.isClicked && (
               <div>
                  <Risk2/>
                  <Risk3/>
                  <Risk4/>
                  <Risk8/>
                  <Risk11/>

               </div>
            )}
         </div>
      )
   }
}

export default SecondBlock