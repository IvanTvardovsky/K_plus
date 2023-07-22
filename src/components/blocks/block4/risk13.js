import React from "react";
import {BiSolidRightArrow} from "react-icons/bi"

class Risk13 extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         ans: [false, false],
         click: [false, false],
         isClicked: false,
         riskanswer1: {
            ans: 'none',
            cat: -1,
            number: -1
         },
         riskanswer2: {
            ans: 'none',
            cat: -1,
            number: -1
         }
      };
      this.handleAnswer1 = this.handleAnswer1.bind(this);
      this.ClickToBlock = this.ClickToBlock.bind(this);
   }
   quests = [
      {
         number: 1,
         question: 'Вы уверены, что Продавец может самостоятельно принимать решения?',
         answer: 'Риск есть.',
         ansCheck: false,
         help: false
      },
      {
         number: 2,
         question: 'Вы знаете, как обезопасить себя от возможных обманов, принуждений или угроз, исходящих от продавца?',
         answer: 'Риск есть.',
         ansCheck: false,
         help: false
      }
   ]
   ClickToBlock = (event) => {
      if (event.target.tagName !== 'BUTTON') {
         this.setState((prevState) => ({
            isClicked: !prevState.isClicked
         }));
      }
   };

   handleAnswer1 = (answer) => {
      this.setState((prevState) => ({
         click: prevState.click.map((item, index) => (index === 0 ? true : item))
      }));
      if (answer === 'да') {
         this.setState((prevState) => ({
            ans: prevState.ans.map((item, index) => (index === 0 ? false : item))
         }));
         this.setState({
            riskanswer1:{
               ans: 'Риска нет',
               cat: 0,
               number: 0
            }
         });
      } else {
         this.setState((prevState) => ({
            ans: prevState.ans.map((item, index) => (index === 0 ? true : item))
         }));
         this.setState({
            riskanswer1:{
               ans: 'Риск есть',
               cat: 2,
               number: 1
            }
         });
      }
   };

   handleAnswer2 = (answer) => {
      this.setState((prevState) => ({
         click: prevState.click.map((item, index) => (index === 1 ? true : item))
      }));
      if (answer === 'да') {
         this.setState((prevState) => ({
            ans: prevState.ans.map((item, index) => (index === 1 ? false : item))
         }));
         this.setState({
            riskanswer2:{
               ans: 'Риска нет',
               cat: 0,
               number: 0
            }
         });
      } else {
         this.setState((prevState) => ({
            ans: prevState.ans.map((item, index) => (index === 1 ? true : item))
         }));
         this.setState({
            riskanswer2:{
               ans: 'Риск есть',
               cat: 2,
               number: 1
            }
         });
      }
   };

   componentDidUpdate(prevProps, prevState) {
      if (this.state.riskanswer1 !== prevState.riskanswer1) {
         this.props.onData(this.state.riskanswer1);
      }
      if (this.state.riskanswer2 !== prevState.riskanswer2) {
         this.props.onData(this.state.riskanswer2);
      }
   }

   render() {
      const { ans, click, isClicked } = this.state;
      return (
         <div className="Risk">
            <div className="RiskName">
               <BiSolidRightArrow
                  className={`RiskIcon ${isClicked ? 'rotated' : ''}`}
                  onClick={this.ClickToBlock}
               />
               <h3>Риск: Недееспособность продавца</h3>
            </div>
            {this.state.isClicked && (
               <div>
                  <div className="Question">
                     <div className="QuestTool">
                        <p className="bigger">{this.quests[0].question}</p>
                     </div>
                     <button className={`ans-btn ${click[0] && !ans[0] ? 'active' : ''}`} onClick={() => this.handleAnswer1('да')}>Да</button>
                     <button className={`ans-btn ${click[0] && ans[0] ? 'active' : ''}`} onClick={() => this.handleAnswer1('нет')}>Нет</button>
                  </div>
                  {click[0] && (
                     <div>
                        {!ans[0] ? (
                           <div className="Answer">
                              <p>Риска нет.</p>
                           </div>
                        ) : (
                           <div className="Answer">
                              <p>{this.quests[0].answer}</p>
                           </div>
                        )}
                     </div>
                  )}
               </div>

            )}
         </div>
      );
   }
}

export default Risk13;