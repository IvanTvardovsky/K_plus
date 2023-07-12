import React from "react";

class Risk2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          ans: [false, false, false],
          click: [false, false, false]
        };
        this.handleAnswer1 = this.handleAnswer1.bind(this)
        this.handleAnswer2 = this.handleAnswer2.bind(this)
        this.handleAnswer3 = this.handleAnswer3.bind(this)
    }
    quests = [
        {
            number: 1,
            question: 'Проверена ли Вами информация о праве собственности на землю?',
            answer: 'Согласие супруга не требуется.',
            ansCheck: false,
            help: false
        },
        {
            number: 2,
            question: 'Предоставлено ли нотариальное согласие второго супруга?',
            answer: 'Риск есть.',
            ansCheck: false,
            help: false
        },
        {
            number: 3,
            question: 'ThirdQuestion in FirstRisk',
            answer: 'ThirdAnswer in FirstRisk',
            ansCheck: false,
            help: false
        }
    ]
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

    render(){
        const { ans, click } = this.state;
        return(
            <div className="Risk">
                <div className="RiskName">
                    <h3>Риск №10: Отсутствие права собственности у Продавца</h3>
                </div>
                <div className="Question">
                    <p>{this.quests[0].question}</p>
                    <button onClick={() => this.handleAnswer1('да')}>Да</button>
                    <button onClick={() => this.handleAnswer1('нет')}>Нет</button>
                </div>
                {click[0] && (
                    <div>
                    {!ans[0] ? (
                        <div className="Question">
                            <p>{this.quests[1].question}</p>
                            <button onClick={() => this.handleAnswer2('да')}>Да</button>
                            <button onClick={() => this.handleAnswer2('нет')}>Нет</button>
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
                            <p>{this.quests[2].question}</p>
                            <button onClick={() => this.handleAnswer3('да')}>Да</button>
                            <button onClick={() => this.handleAnswer3('нет')}>Нет</button>
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
                        <div className="Answer">
                            <p>{this.quests[2].answer}</p>
                        </div>
                    ) : (
                        <div className="Answer">
                            <p>Четвёртый ответ.</p>
                        </div>
                    )}
                    </div>
                )}
            </div>
        )
    }
}

export default Risk2