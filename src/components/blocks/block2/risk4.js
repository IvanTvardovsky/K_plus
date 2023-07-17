import React from "react";
import {BiSolidRightArrow} from "react-icons/bi"

class Risk4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ans: [false],
            click: [false],
            isClicked: false
        };
        this.handleAnswer1 = this.handleAnswer1.bind(this);
        this.ClickToBlock = this.ClickToBlock.bind(this);
    }

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

    render() {
        const { ans, click, isClicked } = this.state;
        return (
           <div className="Risk">
                <div className="RiskName">
                    <BiSolidRightArrow
                        className={`RiskIcon ${isClicked ? 'rotated' : ''}`}
                        onClick={this.ClickToBlock}
                    />
                    <h3>Риск №5: Экология</h3>
                </div>
               {this.state.isClicked && (
                  <div>
                      <div className="Question">
                          <p>Вы ознакомлены с информацией об экологической ситуации земельного участка?</p>
                          <button className={`ans-btn ${click[0] && !ans[0] ? 'active' : ''}`} onClick={() => this.handleAnswer1('да')}>Да</button>
                          <button className={`ans-btn ${click[0] && ans[0] ? 'active' : ''}`} onClick={() => this.handleAnswer1('нет')}>Нет</button>
                      </div>
                      {click[0] && !ans[0] && (
                         <div>

                         </div>
                      )}
                  </div>
               )}
           </div>
        );
    }
}

export default Risk4;
