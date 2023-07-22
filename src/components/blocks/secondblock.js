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
         isClicked: true,
         SecondData: {
            risk2Data: {
               ans: 'none',
               cat: -1,
               number: -1
            },
            risk3Data: {
               ans: 'none',
               cat: -1,
               number: -1
            },
            risk4Data: {
               ans: 'none',
               cat: -1,
               number: -1
            },
            risk8Data: {
               ans: 'none',
               cat: -1,
               number: -1
            },
            risk11Data: {
               ans: 'none',
               cat: -1,
               number: -1
            }
         }
      };
      this.ClickToBlock = this.ClickToBlock.bind(this)
      this.handleRisk2Data = this.handleRisk2Data.bind(this)
      this.handleRisk3Data = this.handleRisk3Data.bind(this)
      this.handleRisk4Data = this.handleRisk4Data.bind(this)
      this.handleRisk8Data = this.handleRisk8Data.bind(this)
      this.handleRisk11Data = this.handleRisk11Data.bind(this)
   }

   ClickToBlock = () => {
      this.setState(prevState => ({
         isClicked: !prevState.isClicked
      }));
   };

   handleRisk2Data = (data) => {
      this.setState((prevState) => ({
         SecondData: {
            ...prevState.SecondData,
            risk2Data: {
               ans: data.ans,
               cat: data.cat,
               number: data.number,
            },
         },
      }));
   };

   handleRisk3Data = (data) => {
      this.setState((prevState) => ({
         SecondData: {
            ...prevState.SecondData,
            risk3Data: {
               ans: data.ans,
               cat: data.cat,
               number: data.number,
            },
         },
      }));
   };

   handleRisk4Data = (data) => {
      this.setState((prevState) => ({
         SecondData: {
            ...prevState.SecondData,
            risk4Data: {
               ans: data.ans,
               cat: data.cat,
               number: data.number,
            },
         },
      }));
   };

   handleRisk8Data = (data) => {
      this.setState((prevState) => ({
         SecondData: {
            ...prevState.SecondData,
            risk8Data: {
               ans: data.ans,
               cat: data.cat,
               number: data.number,
            },
         },
      }));
   };

   handleRisk11Data = (data) => {
      this.setState((prevState) => ({
         SecondData: {
            ...prevState.SecondData,
            risk11Data: {
               ans: data.ans,
               cat: data.cat,
               number: data.number,
            },
         },
      }));
   };

   componentDidUpdate(prevProps, prevState) {
      if (this.state.SecondData !== prevState.SecondData) {
         this.props.onData(this.state.SecondData);
      }
   }

   render() {
      const {SecondData} = this.state;
      return (
         <div className="Risks">
            <h2 onClick={this.ClickToBlock} style={{ textAlign: 'center' }}>Объект</h2>
            {this.state.isClicked && (
               <div>
                  <Risk2 onData={this.handleRisk2Data}/>
                  <Risk3 onData={this.handleRisk3Data}/>
                  <Risk4 onData={this.handleRisk4Data}/>
                  <Risk8 onData={this.handleRisk8Data}/>
                  <Risk11 onData={this.handleRisk11Data}/>

               </div>
            )}
         </div>
      )
   }
}

export default SecondBlock