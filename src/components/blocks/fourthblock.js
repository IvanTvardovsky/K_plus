import React from "react";
import Risk12 from "./block4/risk12";
import Risk13 from "./block4/risk13";

class FourthBlock extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isClicked: true,
         FourthData: {
            risk12Data: {
               ans: 'none',
               cat: -1,
               number: -1
            },
            risk13Data: {
               risk1: {
                  ans: 'none',
                  cat: -1,
                  number: -1
               },
               risk2: {
                  ans: 'none',
                  cat: -1,
                  number: -1
               }
            }
         }
      };
      this.ClickToBlock = this.ClickToBlock.bind(this)
      this.handleRisk12Data = this.handleRisk12Data.bind(this)
      this.handleRisk13Data = this.handleRisk13Data.bind(this)
   }

   ClickToBlock = () => {
      this.setState(prevState => ({
         isClicked: !prevState.isClicked
      }));
   };

   handleRisk12Data = (data) => {
      this.setState((prevState) => ({
         FourthData: {
            ...prevState.FourthData,
            risk12Data: {
               ans: data.ans,
               cat: data.cat,
               number: data.number,
            },
         },
      }));
   };

   handleRisk13Data = (data) => {
      this.setState((prevState) => ({
         FourthData: {
            ...prevState.FourthData,
            risk13Data: {
               ...prevState.risk13Data,
               risk1: {
                  ans: data.ans,
                  cat: data.cat,
                  number: data.number,
               },
               risk2: {
                  ans: data.ans,
                  cat: data.cat,
                  number: data.number,
               }
            },
         },
      }));
   };

   componentDidUpdate(prevProps, prevState) {
      if (this.state.FourthData !== prevState.FourthData) {
         this.props.onData(this.state.FourthData);
      }
   }

   render() {
      const {FourthData} = this.state;
      return (
         <div className="Risks">
            <h2 onClick={this.ClickToBlock}>Блок №4 : Процесс.</h2>
            {this.state.isClicked && (
               <div>
                  <Risk12 onData={this.handleRisk12Data}/>
                  <Risk13 onData={this.handleRisk13Data}/>
               </div>
            )}
         </div>
      )
   }
}

export default FourthBlock