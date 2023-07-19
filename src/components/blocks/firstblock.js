import React from "react";
import Risk1 from "./block1/risk1";
import Risk10 from "./block1/risk10";

class FirstBlock extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isClicked: true,
         FirstData: {
            risk1Data: {
               ans: 'none',
               cat: -1,
               number: -1
            },
            risk10Data: {
               ans: 'none',
               cat: -1,
               number: -1
            }
         }
      };
      this.ClickToBlock = this.ClickToBlock.bind(this)
      this.handleRisk1Data = this.handleRisk1Data.bind(this)
      this.handleRisk10Data = this.handleRisk10Data.bind(this)
   }

   ClickToBlock = () => {
      this.setState(prevState => ({
         isClicked: !prevState.isClicked
      }));
   };

   handleRisk1Data = (data) => {
      this.setState((prevState) => ({
         FirstData: {
            ...prevState.FirstData,
            risk1Data: {
               ans: data.ans,
               cat: data.cat,
               number: data.number,
            },
         },
      }));
   };

   handleRisk10Data = (data) => {
      this.setState((prevState) => ({
         FirstData: {
            ...prevState.FirstData,
            risk10Data: {
               ans: data.ans,
               cat: data.cat,
               number: data.number,
            },
         },
      }));
   };

   componentDidUpdate(prevProps, prevState) {
      if (this.state.FirstData !== prevState.FirstData) {
         this.props.onData(this.state.FirstData);
      }
   }

   render() {
      const {FirstData} = this.state;
      return (
         <div className="Risks">
            <h2 onClick={this.ClickToBlock}>Блок №1 : Документы.</h2>
            {this.state.isClicked && (
               <div>
                  <Risk1 onData={this.handleRisk1Data}/>
                  <Risk10 onData={this.handleRisk10Data}/>
               </div>
            )}
         </div>
      )
   }
}

export default FirstBlock