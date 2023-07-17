import React from "react";
import {BiSolidRightArrow} from "react-icons/bi"

class Risk11 extends React.Component{
   constructor(props) {
      super(props);
      this.state = {
         ans: [false, false, false],
         click: [false, false, false],
         isClicked: false
      };
      this.handleAnswer1 = this.handleAnswer1.bind(this)
      this.handleAnswer2 = this.handleAnswer2.bind(this)
      this.ClickToBlock = this.ClickToBlock.bind(this)
   }
   quests = [
      {
         number: 1,
         question: 'Ознакомлены ли Вы с существующими обременениями на земельный участок?',
         answer: 'Риск есть.',
         ansCheck: false,
         help: false
      },
      {
         number: 2,
         question: 'Готов ли Продавец погасить обременения?',
         answer: 'Риск есть.',
         ansCheck: false,
         help: false
      },
   ]
   ClickToBlock = (event) => {
      if (event.target.tagName !== 'BUTTON') {
         this.setState(prevState => ({
            isClicked: !prevState.isClicked
         }));
      }
   };
   handleAnswer1 = (answer) => {
      this.setState(prevState => ({
         click: prevState.click.map((item, index) =>
            index === 0 ? true : item
         )
      }));
      if (answer === 'да') {
         this.setState(prevState => ({
            ans: prevState.ans.map((item, index) =>
               index === 0 ? false : item
            )
         }));
      }
      else {
         this.setState(prevState => ({
            ans: prevState.ans.map((item, index) =>
               index === 0 ? true : item
            )
         }));

      }
   };
   handleAnswer2 = (answer) => {
      this.setState(prevState => ({
         click: prevState.click.map((item, index) =>
            index === 1 ? true : item
         )
      }));
      if (answer === 'да') {
         this.setState(prevState => ({
            ans: prevState.ans.map((item, index) =>
               index === 1 ? false : item
            )
         }));
      } else {
         this.setState(prevState => ({
            ans: prevState.ans.map((item, index) =>
               index === 1 ? true : item
            )
         }));

      }
   };

   render(){
      const { ans, click, isClicked } = this.state;
      return(
         <div className="Risk">
            <div className="RiskName">
               <BiSolidRightArrow
                  className={`RiskIcon ${isClicked ? 'rotated' : ''}`}
                  onClick={this.ClickToBlock}
               />
               <h3>Риск №7: Наличие обременений в отношении земельного участка</h3>
            </div>
            {this.state.isClicked && (
               <div>
                  <div className="Question">
                     <p>{this.quests[0].question}</p>
                     <button className={`ans-btn ${click[0] && !ans[0] ? 'active' : ''}`} onClick={() => this.handleAnswer1('да')}>Да</button>
                     <button className={`ans-btn ${click[0] && ans[0] ? 'active' : ''}`} onClick={() => this.handleAnswer1('нет')}>Нет</button>
                  </div>
                  {click[0] && (
                     <div>
                        {!ans[0] ? (
                           <div className="Question">
                              <p>{this.quests[1].question}</p>
                              <button className={`ans-btn ${click[1] && !ans[1] ? 'active' : ''}`} onClick={() => this.handleAnswer2('да')}>Да</button>
                              <button className={`ans-btn ${click[1] && ans[1] ? 'active' : ''}`} onClick={() => this.handleAnswer2('нет')}>Нет</button>
                           </div>
                        ) : null}
                     </div>
                  )}
               </div>
            )}
         </div>
      )
   }
}

export default Risk11
