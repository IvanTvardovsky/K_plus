import React from "react";
import Risk5 from "./block3/risk5";
import Risk6 from "./block3/risk6";
import Risk7 from "./block3/risk7";
import Risk9 from "./block3/risk9";
import Risk13 from "./block3/risk13";

class ThirdBlock extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isClicked: true,
         ThirdData: {
            risk5Data: {
               ans: 'none',
               cat: -1,
               number: -1
            },
            risk6Data: {
               ans: 'none',
               cat: -1,
               number: -1
            },
            risk7Data: {
               ans: 'none',
               cat: -1,
               number: -1
            },
            risk9Data: {
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
      this.handleRisk5Data = this.handleRisk5Data.bind(this)
      this.handleRisk6Data = this.handleRisk6Data.bind(this)
      this.handleRisk7Data = this.handleRisk7Data.bind(this)
      this.handleRisk9Data = this.handleRisk9Data.bind(this)
      this.handleRisk13Data = this.handleRisk13Data.bind(this)
   }

   ClickToBlock = () => {
      this.setState(prevState => ({
         isClicked: !prevState.isClicked
      }));
   };

   handleRisk5Data = (data) => {
      this.setState((prevState) => ({
         ThirdData: {
            ...prevState.ThirdData,
            risk5Data: {
               ans: data.ans,
               cat: data.cat,
               number: data.number,
            },
         },
      }));
   };

   handleRisk6Data = (data) => {
      this.setState((prevState) => ({
         ThirdData: {
            ...prevState.ThirdData,
            risk6Data: {
               ans: data.ans,
               cat: data.cat,
               number: data.number,
            },
         },
      }));
   };

   handleRisk7Data = (data) => {
      this.setState((prevState) => ({
         ThirdData: {
            ...prevState.ThirdData,
            risk7Data: {
               ans: data.ans,
               cat: data.cat,
               number: data.number,
            },
         },
      }));
   };
   handleRisk9Data = (data) => {
      this.setState((prevState) => ({
         ThirdData: {
            ...prevState.ThirdData,
            risk9Data: {
               ans: data.ans,
               cat: data.cat,
               number: data.number,
            },
         },
      }));
   };

   handleRisk13Data = (data) => {
      this.setState((prevState) => ({
         ThirdData: {
            ...prevState.ThirdData,
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
      if (this.state.ThirdData !== prevState.ThirdData) {
         this.props.onData(this.state.ThirdData);
      }
   }

   render() {
      return (
         <div className="Risks">
            <h2 onClick={this.ClickToBlock} style={{ textAlign: 'center' }}>Субъект</h2>
            {this.state.isClicked && (
               <div>
                  <Risk5 onData={this.handleRisk5Data}/>
                  <Risk6 onData={this.handleRisk6Data}/>
                  <Risk7 onData={this.handleRisk7Data}/>
                  <Risk9 onData={this.handleRisk9Data}/>
                  <Risk13 onData={this.handleRisk13Data}/>
               </div>
            )}
         </div>
      )
   }
}

export default ThirdBlock