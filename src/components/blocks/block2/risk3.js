import React from "react";
import {BsQuestionCircleFill} from 'react-icons/bs'
import {BiSolidRightArrow} from "react-icons/bi"

class Risk3 extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         ans: [false, false, false, false],
         click: [false, false, false, false],
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
      this.handleAnswer3 = this.handleAnswer3.bind(this)
      this.handleAnswer4 = this.handleAnswer4.bind(this)
      this.ClickToBlock = this.ClickToBlock.bind(this)
      this.handleMouseEnter = this.handleMouseEnter.bind(this)
      this.handleMouseLeave = this.handleMouseLeave.bind(this)
   }

   quests = [
      {
         number: 1,
         question: 'Попадает ли земельный участок под целевое использование?',
         answer: 'Риска нет.',
         ansCheck: false,
         help: false
      },
      {
         number: 2,
         question: 'Разрешено ли использование участка для ваших нужд?',
         answer: 'Риск есть.',
         ansCheck: false,
         help: false
      },
      {
         number: 3,
         question: 'Подтверждено ли это официально?',
         answer: 'Риск есть',
         ansCheck: false,
         help: false
      },
      {
         number: 4,
         question: 'Вы уверены, что объект не попадает в зону особого назначения?',
         answer: 'Риск есть',
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
               ans: 'Риска нет',
               cat: 0,
               number: 0
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
               number: 1
            }
         });

      }
   };
   handleAnswer3 = (answer) => {
      this.setState(prevState => ({
         click: prevState.click.map((item, index) =>
            index === 2 ? true : item
         )
      }));
      if (answer === 'да') {
         this.setState(prevState => ({
            ans: prevState.ans.map((item, index) =>
               index === 2 ? false : item
            )
         }));
      } else {
         this.setState(prevState => ({
            ans: prevState.ans.map((item, index) =>
               index === 2 ? true : item
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

   handleAnswer4 = (answer) => {
      this.setState(prevState => ({
         click: prevState.click.map((item, index) =>
            index === 3 ? true : item
         )
      }));
      if (answer === 'да') {
         this.setState(prevState => ({
            ans: prevState.ans.map((item, index) =>
               index === 3 ? false : item
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
               index === 3 ? true : item
            )
         }));
         this.setState({
            riskanswer: {
               ans: 'Риск есть',
               cat: 2,
               number: 3
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
         `<b>Целевое использование</b> - это использование земельного участка в соответствии с его установленной категорией. <br>
            К землям <b>целевого использования</b> относятся:
                <ul className='list'>
                    <li>земли сельскохозяйственного назначения;</li>
                    <li>земли населенных пунктов;</li>
                    <li>земли промышленности, энергетики, транспорта, связи, радиовещания, телевидения, информатики, земли для обеспечения космической деятельности, земли обороны, безопасности и земли иного специального назначения;</li>
                    <li>земли особо охраняемых территорий и объектов;</li>
                    <li>земли лесного фонда;</li>
                    <li>земли водного фонда;</li>
                    <li>земли запаса.</li>
                </ul>`,
         `Должно быть подтверждено соответствующими документами: 
                <ul className='list'>
                    <li> Публичная кадастровая карта Росреестра; </li>
                    <li> Выписка из ЕГРН; </li>
                    <li> Генеральный план земельного участка; </li>
                    <li> Правила землепользования и застройки; </li>
                </ul>`,
         `<b> Зона особого назначения </b> - это специальная зона, в которой земельные участки можно использовать по назначению, но с оглядкой на правила застройки.`
      ];
      return (
         <div className="Risk">
            <div className="RiskName">
               <BiSolidRightArrow
                  className={`RiskIcon ${isClicked ? 'rotated' : ''}`}
                  onClick={this.ClickToBlock}
               />
               <h3>Риск №4: Целевое использование объекта</h3>
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
                              <p className="bigger">{this.quests[1].question}</p>
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
                           <div className="Question">
                              <div className="QuestTool">
                                 <p className="bigger">{this.quests[2].question}</p>
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
                              <button className={`ans-btn ${click[2] && !ans[2] ? 'active' : ''}`}
                                      onClick={() => this.handleAnswer3('да')}>Да
                              </button>
                              <button className={`ans-btn ${click[2] && ans[2] ? 'active' : ''}`}
                                      onClick={() => this.handleAnswer3('нет')}>Нет
                              </button>
                           </div>
                        ) : (
                           <div className="Answer">
                              <p>{this.quests[1].answer}</p>
                           </div>
                        )}
                     </div>
                  )}
                  {click[2] && !ans[1] && !ans[0] && (
                     <div>
                        {!ans[2] ? (
                           <div className="Question">
                              <div className="QuestTool">
                                 <p className="bigger">{this.quests[3].question}</p>
                                 <BsQuestionCircleFill
                                    className="QuestIcon"
                                    onMouseEnter={() => this.handleMouseEnter(2)}
                                    onMouseLeave={() => this.handleMouseLeave(2)}
                                 />
                                 <div className="ToolContainer">
                                    <div
                                       className="Tooltip"
                                       onMouseEnter={() => this.handleMouseEnter(2)}
                                       onMouseLeave={() => this.handleMouseLeave(2)}
                                       style={{
                                          display: visible[2] ? "block" : "none"
                                       }}
                                       dangerouslySetInnerHTML={{__html: tooltips[2]}}
                                    >
                                    </div>
                                 </div>
                              </div>
                              <button className={`ans-btn ${click[3] && !ans[3] ? 'active' : ''}`}
                                      onClick={() => this.handleAnswer4('да')}>Да
                              </button>
                              <button className={`ans-btn ${click[3] && ans[3] ? 'active' : ''}`}
                                      onClick={() => this.handleAnswer4('нет')}>Нет
                              </button>
                           </div>
                        ) : (
                           <div className="Answer">
                              <p>{this.quests[2].answer}</p>
                           </div>
                        )}
                     </div>
                  )}
                  {click[3] && !ans[2] && !ans[1] && !ans[0] && (
                     <div>
                        {!ans[3] ? (
                           <div className="Answer">
                              <p>Риска нет.</p>
                           </div>
                        ) : (
                           <div className="Answer">
                              <p>{this.quests[3].answer}</p>
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

export default Risk3