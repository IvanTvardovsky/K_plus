import React from "react";
import {BsQuestionCircleFill} from 'react-icons/bs'
import {BiSolidRightArrow} from "react-icons/bi"

class Risk11 extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         ans: [false, false, false],
         click: [false, false, false],
         isClicked: false,
         visible: [false, false],
         riskanswer: {
            ans: 'none',
            cat: -1,
            number: -1
         }
      };
      this.handleAnswer1 = this.handleAnswer1.bind(this)
      this.handleAnswer2 = this.handleAnswer2.bind(this)
      this.ClickToBlock = this.ClickToBlock.bind(this)
      this.handleMouseEnter = this.handleMouseEnter.bind(this)
      this.handleMouseLeave = this.handleMouseLeave.bind(this)
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
      }
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
      } else {
         this.setState(prevState => ({
            ans: prevState.ans.map((item, index) =>
               index === 0 ? true : item
            )
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
         this.setState({
            riskanswer: {
               ans: 'Риска нет',
               cat: 0,
               number: 0
            }
         });
      } else {
         this.setState(prevState => ({
            ans: prevState.ans.map((item, index) =>
               index === 1 ? true : item
            )
         }));
         this.setState({
            riskanswer: {
               ans: 'Риск есть',
               cat: 2,
               number: 2
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
         `<b>Обременения</b> - это ограничение права гражданина распоряжаться земельным участком. <br>
            Например:
                <ul className='list'>
                    <li>Сервитут</li>
                    <li>Залог</li>
                    <li>Аренда</li>
                    <li>Арест</li>
                    <li>Доверительное управление</li>
                </ul>`,
         `<b> Погашение обременений </b> - это процесс полного или частичного устранения ограничений или обязательств, связанных с недвижимостью или имуществом.`
      ];
      return (
         <div className="Risk">
            <div className="RiskName">
               <BiSolidRightArrow
                  className={`RiskIcon ${isClicked ? 'rotated' : ''}`}
                  onClick={this.ClickToBlock}
               />
               <h3>Риск № 7: Обременения на объект</h3>
            </div>
            {this.state.isClicked && (
               <div>
                  <div className="Question">
                     <div className="QuestTool">
                        <p className="bigger">{this.quests[0].question}</p>
                        <BsQuestionCircleFill
                           className="QuestIcon"
                           onMouseEnter={() => this.handleMouseEnter(0)}
                           onMouseLeave={() => this.handleMouseLeave(0)}
                        />
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
                           <div className="Question">
                              <div className="QuestTool">
                                 <p className="bigger">{this.quests[1].question}</p>
                                 <BsQuestionCircleFill
                                    className="QuestIcon"
                                    onMouseEnter={() => this.handleMouseEnter(1)}
                                    onMouseLeave={() => this.handleMouseLeave(1)}
                                 />
                                 <div className="ToolContainer">
                                    <div
                                       className="Tooltip"
                                       onMouseEnter={() => this.handleMouseEnter(1)}
                                       onMouseLeave={() => this.handleMouseLeave(1)}
                                       style={{
                                          display: visible[1] ? "block" : "none"
                                       }}
                                       dangerouslySetInnerHTML={{__html: tooltips[1]}}
                                    >
                                    </div>
                                 </div>
                              </div>
                              <button className={`ans-btn ${click[1] && !ans[1] ? 'active' : ''}`}
                                      onClick={() => this.handleAnswer2('да')}>Да
                              </button>
                              <button className={`ans-btn ${click[1] && ans[1] ? 'active' : ''}`}
                                      onClick={() => this.handleAnswer2('нет')}>Нет
                              </button>
                           </div>
                        ) : (
                           <div className="Answer">
                              <p>{this.quests[0].answer}</p>
                           </div>
                        )}
                     </div>
                  )}
                  {click[1] && !ans[0] && (
                     <div>
                        {!ans[1] ? (
                           <div className="Answer">
                              <p>Риска нет.</p>
                           </div>
                        ) : (
                           <div className="Answer">
                              <p>{this.quests[1].answer}</p>
                           </div>
                        )}
                     </div>
                  )}
               </div>
            )}
         </div>
      )
   }
}

export default Risk11