import React from "react";
import {BiSolidRightArrow} from "react-icons/bi"
import { BsQuestionCircleFill } from 'react-icons/bs'

class Risk13 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ans: [false, false],
            click: [false, false],
            isClicked: false
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
        } else {
            this.setState((prevState) => ({
                ans: prevState.ans.map((item, index) => (index === 0 ? true : item))
            }));
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
        } else {
            this.setState((prevState) => ({
                ans: prevState.ans.map((item, index) => (index === 1 ? true : item))
            }));
        }
    };

    render() {
        const { ans, click, isClicked } = this.state;
        return (
           <div className="Risk">
                <div className="RiskName">
                    <BiSolidRightArrow
                        className={`RiskIcon ${isClicked ? 'rotated' : ''}`}
                        onClick={this.ClickToBlock}
                    />
                    <h3>Риск №13: Невозможность самостоятельного принятия решения Продавцом. Принуждение к совершению сделки</h3>
                </div>
               {this.state.isClicked && (
                    <div>
                        <div className="Question">
                            <div className="QuestTool">
                                <p>{this.quests[0].question}</p> 
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
                        <div className="Question">
                            <div className="QuestTool">
                                <p>{this.quests[1].question}</p> 
                            </div>
                            <button className={`ans-btn ${click[1] && !ans[1] ? 'active' : ''}`} onClick={() => this.handleAnswer2('да')}>Да</button>
                            <button className={`ans-btn ${click[1] && ans[1] ? 'active' : ''}`} onClick={() => this.handleAnswer2('нет')}>Нет</button>
                        </div>
                        {click[1] && (
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
        );
    }
}

export default Risk13;
