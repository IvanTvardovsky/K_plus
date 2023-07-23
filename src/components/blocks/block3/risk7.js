import React from "react";
import {BiSolidRightArrow} from "react-icons/bi"
import {BsQuestionCircleFill} from 'react-icons/bs'

class Risk7 extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         ans: [false],
         click: [false],
         isClicked: false,
         visible: [false],
         riskanswer: {
            ans: 'none',
            cat: -1,
            number: -1
         }
      };
      this.handleAnswer1 = this.handleAnswer1.bind(this);
      this.ClickToBlock = this.ClickToBlock.bind(this);
      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
   }

   quests = [
      {
         number: 1,
         question: 'Уверены ли Вы, что Продавец не был найден в реестре лиц, причастных к экстремизму и другим преступлениям?',
         answer: 'Риска нет.',
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
            riskanswer: {
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
            riskanswer: {
               ans: 'Риск есть',
               cat: 2,
               number: 1
            }
         });
      }
   };
   handleMouseEnter = (index) => {
      const updatedVisible = [...this.state.visible];
      updatedVisible[index] = true;
      this.setState({visible: updatedVisible});
   };

   handleMouseLeave = (index) => {
      const updatedVisible = [...this.state.visible];
      updatedVisible[index] = false;
      this.setState({visible: updatedVisible});
   };

   componentDidUpdate(prevProps, prevState) {
      if (this.state.riskanswer !== prevState.riskanswer) {
         this.props.onData(this.state.riskanswer);
      }
   }

   render() {
      const {ans, click, isClicked, visible} = this.state;
      const tooltips = [
         `<b>Экстремизм</b> - это криминальное явление, направленное против основ конституционного строя и безопасности государства`
      ];
      return (
         <div className="Risk">
            <div className="RiskName">
               <BiSolidRightArrow
                  className={`RiskIcon ${isClicked ? 'rotated' : ''}`}
                  onClick={this.ClickToBlock}
               />
               <h3>Риск: Причастность к экстремизму и другим преступлениям</h3>
            </div>
            {this.state.isClicked && (
               <div>
                  <div className="Question">
                     <div className="QuestTool">
                        <p className="bigger">{this.quests[0].question}</p>
                        <div>
                           <BsQuestionCircleFill
                              className="QuestIcon"
                              onMouseEnter={() => this.handleMouseEnter(0)}
                              onMouseLeave={() => this.handleMouseLeave(0)}
                           />
                        </div>
                        <div className="ToolContainer">
                           <div
                              className="Tooltip"
                              onMouseEnter={() => this.handleMouseEnter(0)}
                              onMouseLeave={() => this.handleMouseLeave(0)}
                              style={{
                                 display: visible[0] ? "block" : "none"
                              }}
                              dangerouslySetInnerHTML={{__html: tooltips[0]}}
                           >
                           </div>
                        </div>
                     </div>
                     <button className={`ans-btn ${click[0] && !ans[0] ? 'active' : ''}`}
                             onClick={() => this.handleAnswer1('да')}>Да
                     </button>
                     <button className={`ans-btn ${click[0] && ans[0] ? 'active' : ''}`}
                             onClick={() => this.handleAnswer1('нет')}>Нет
                     </button>
                  </div>
                  {click[0] && (
                     <div>
                        {!ans[0] ? (
                           <div className="Answer">
                              <p>Риск есть.</p>
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

export default Risk7;