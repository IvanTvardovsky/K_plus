import React from "react";

class Risk10 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          ans: [false],
          click: [false],
          isClicked: false
        };
        this.handleAnswer1 = this.handleAnswer1.bind(this)
        this.ClickToBlock = this.ClickToBlock.bind(this)
    }
    quests = [
        {
            number: 1,
            question: 'Проверена ли Вами информация о праве собственности на землю?',
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
                <h3>Риск №10: Отсутствие права собственности у Продавца</h3>
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
                                    <p>Нотариус обеспечит проверку действительности права собственности.</p>
                                    <p>Проверьте отметки Росреестра на документе.</p>
                                    <p>Сверить документы со справочной информацией Росреестра по ссылке: https://lk.rosreestr.ru/eservices/real-estate-objects-online</p>
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
        )
    }
}

export default Risk10