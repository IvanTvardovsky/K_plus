import React from "react";

class Risk2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            ans: [false, false, false],
            click: [false, false, false],
            isClicked: false
        };
        this.handleAnswer1 = this.handleAnswer1.bind(this)
        this.handleAnswer2 = this.handleAnswer2.bind(this)
        this.handleAnswer3 = this.handleAnswer3.bind(this)
        this.ClickToBlock = this.ClickToBlock.bind(this)
    }
    quests = [
        {
            number: 1,
            question: 'Определены ли границы земельного участка?',
            answer: 'Риск есть.',
            ansCheck: false,
            help: false
        },
        {
            number: 2,
            question: 'Проведено ли межевание участка?',
            answer: 'Риск есть.',
            ansCheck: false,
            help: false
        },
        {
            number: 3,
            question: 'Вы уверены, что межевание соответствует выписке ЕГРН?',
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
           <div className="Risk" onClick={this.ClickToBlock}>
               <h3>Риск №3: Неопределенность границ земельного участка</h3>
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
                                <div className="Question">
                                    <p>{this.quests[1].question}</p>
                                    <button className={click[1] && !ans[1] ? 'active' : ''}onClick={() => this.handleAnswer2('да')}>Да</button>
                                    <button className={click[1] && ans[1] ? 'active' : ''} onClick={() => this.handleAnswer2('нет')}>Нет</button>
                                </div>
                             ) : null}
                         </div>
                      )}
                      {click[1] && !ans[0] && (
                         <div>
                             {!ans[1] ? (
                                <div className="Question">
                                    <p>{this.quests[2].question}</p>
                                    <button className={click[2] && !ans[2] ? 'active' : ''} onClick={() => this.handleAnswer3('да')}>Да</button>
                                    <button className={click[2] && ans[2] ? 'active' : ''} onClick={() => this.handleAnswer3('нет')}>Нет</button>
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

export default Risk2
