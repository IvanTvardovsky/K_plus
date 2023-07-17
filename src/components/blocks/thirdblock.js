import React from "react";
import Risk5 from "./block3/risk5";
import Risk6 from "./block3/risk6";
import Risk7 from "./block3/risk7";
import Risk9 from "./block3/risk9";

class ThirdBlock extends React.Component {
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
            <h2 onClick={this.ClickToBlock}>Блок №3 : Субъект.</h2>
            {this.state.isClicked && (
               <div>
                  <Risk5/>
                  <Risk6/>
                  <Risk7/>
                  <Risk9/>
               </div>
            )}
         </div>
      )
   }
}

export default ThirdBlock