import React from "react";

class Risk4 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          ans: [false, false, false],
          click: [false, false, false],
          isClicked: false
        };
        this.handleAnswer1 = this.handleAnswer1.bind(this)
        this.ClickToBlock = this.ClickToBlock.bind(this)
    }
    quests = [
        {
            number: 1,
            question: 'Вы ознакомлены с информацией об экологической ситуации земельного участка?',
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
        } 
        else {
            this.setState(prevState => ({
                ans: prevState.ans.map((item, index) =>
                  index === 0 ? true : item
                )
            }));

        }
    };

    render(){
        const { ans, click } = this.state;
        return(
            <div className="Risk" onClick={this.ClickToBlock}>
                <h3>Риск №4: Экология</h3>
                {this.state.isClicked && (
                    <div>
                        <div className="Question">
                            <p>{this.quests[0].question}</p>
                            <button className={click[0] && !ans[0] ? 'active' : ''} onClick={() => this.handleAnswer1('да')}>Да</button>
                            <button className={click[0] && ans[0] ? 'active' : ''} onClick={() => this.handleAnswer1('нет')}>Нет</button>
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
                                    <div className="Rec">
                                        <h4>Рекомендации:</h4>
                                        <p> Проверьте генеральный план развития местности, утвержденный местной администрацией.</p>
                                        <p> Например, Генплан Москвы до 2035 г. можно посмотреть по ссылке:</p>
                                        <p> https://genplanmos.ru/project/generalnyy_plan_moskvy_do_2035_goda/</p>
                                        <p>Запросите информацию об экологической ситуации. Смотреть Приложение Б.1 по ссылке: https://minstroyrf.gov.ru/docs/131522/</p>
                                    </div>
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

export default Risk4