import React from "react";
import {BsQuestionCircleFill} from 'react-icons/bs'

class Risk3 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          ans: [false, false, false, false],
          click: [false, false, false, false],
          isClicked: false,
          visible: [false, false]
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
            question: 'Попадает ли земля в зону особого назначения?',
            answer: 'Риска нет',
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
        } else {
            this.setState(prevState => ({
                ans: prevState.ans.map((item, index) =>
                  index === 3 ? true : item
                )
            }));
            
        }
    };

    handleMouseEnter= (index) => {
        const updatedVisible = [...this.state.visible];
        updatedVisible[index] = true;
        this.setState({ visible: updatedVisible });
    };

    handleMouseLeave= (index) => {
        const updatedVisible = [...this.state.visible];
        updatedVisible[index] = false;
        this.setState({ visible: updatedVisible });
    };


    render(){
        const { ans, click, visible } = this.state;
        const tooltips = [
            `земли сельскохозяйственного назначения;
             земли населенных пунктов; 
             земли промышленности, энергетики, транспорта, связи, радиовещания, телевидения, информатики, земли для обеспечения космической деятельности, земли обороны, безопасности и земли иного специального назначения;
             земли особо охраняемых территорий и объектов;
             земли лесного фонда;
             земли водного фонда;
             земли запаса.`,
            'Публичная кадастровая карта Росреестра; \n  Выписка из ЕГРН,  \n Генеральный план земельного участка,  \n Правила землепользования и застройки'
        ];
        return(
            <div className="Risk" onClick={this.ClickToBlock}>
                <h3>Риск №3: Целевое использование земельного участка</h3>
                {this.state.isClicked && (
                    <div>
                        <div className="Question">
                            <div
                                className="Tooltip"
                                onMouseEnter={() => this.handleMouseEnter(0)}
                                onMouseLeave={() => this.handleMouseLeave(0)}
                                style={{
                                    display: visible[0] ? "block" : "none"
                                }}
                            >
                                {tooltips[0]}
                            </div>
                            <BsQuestionCircleFill
                                className="QuestIcon"
                                onMouseEnter={() => this.handleMouseEnter(0)}
                                onMouseLeave={() => this.handleMouseLeave(0)}
                            />
                            <p>{this.quests[0].question}</p>
                            <button className={click[0] && !ans[0] ? 'active' : ''} onClick={() => this.handleAnswer1('да')}>Да</button>
                            <button className={click[0] && ans[0] ? 'active' : ''} onClick={() => this.handleAnswer1('нет')}>Нет</button>
                        </div>
                        {click[0] && (
                            <div>
                            {!ans[0] ? (
                                <div className="Question">
                                    <p>{this.quests[1].question}</p>
                                    <button className={click[1] && !ans[1] ? 'active' : ''}onClick={() => this.handleAnswer2('да')}>Да</button>
                                    <button className={click[1] && ans[1] ? 'active' : ''} onClick={() => this.handleAnswer2('нет')}>Нет</button>
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
                                    <div
                                        className="Tooltip"
                                        onMouseEnter={() => this.handleMouseEnter(1)}
                                        onMouseLeave={() => this.handleMouseLeave(1)}
                                        style={{
                                            display: visible[1] ? "block" : "none"
                                        }}
                                    >
                                        {tooltips[1]}
                                    </div>
                                    <BsQuestionCircleFill
                                        className="QuestIcon"
                                        onMouseEnter={() => this.handleMouseEnter(1)}
                                        onMouseLeave={() => this.handleMouseLeave(1)}
                                    />
                                    <p>{this.quests[2].question}</p>
                                    <button className={click[2] && !ans[2] ? 'active' : ''} onClick={() => this.handleAnswer3('да')}>Да</button>
                                    <button className={click[2] && ans[2] ? 'active' : ''} onClick={() => this.handleAnswer3('нет')}>Нет</button>
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
                                    <p>{this.quests[3].question}</p>
                                    <button className={click[3] && !ans[3] ? 'active' : ''} onClick={() => this.handleAnswer4('да')}>Да</button>
                                    <button className={click[3] && ans[3] ? 'active' : ''} onClick={() => this.handleAnswer4('нет')}>Нет</button>
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
                                    <p>Риск есть.</p>
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