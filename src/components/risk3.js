import React from "react";

class Risk3 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          currentQuestion: 0,
          nextQuestion: true
        };
        this.handleAnswer = this.handleAnswer.bind(this)
    }
    quests = [
        {
            number: 1,
            question: 'FirstQuestion in ThirdRisk',
            answer: 'FirstAnswer in ThirdRisk',
            ansCheck: false,
            help: false
        },
        {
            number: 2,
            question: 'SecondQuestion in ThirdRisk',
            answer: 'SecondAnswer in ThirdRisk',
            ansCheck: false,
            help: false
        },
        {
            number: 3,
            question: 'ThirdQuestion in ThirdRisk',
            answer: 'ThirdAnswer in ThirdRisk',
            ansCheck: false,
            help: false
        }
    ]
    handleAnswer = (answer) => {
        const { currentQuestion } = this.state;
        if (answer === 'да' && currentQuestion < this.quests.length - 1) {
          this.setState({ currentQuestion: currentQuestion + 1 });
        } else {
          this.setState({ nextQuestion: false });
        }
    };

    render(){
        const { currentQuestion, nextQuestion } = this.state;
        return(
            <div className="Risk">
                {nextQuestion ? (
                    <div className="Question">
                        <p>{this.quests[currentQuestion].question}</p>
                        <button onClick={() => this.handleAnswer('да')}>Да</button>
                        <button onClick={() => this.handleAnswer('нет')}>Нет</button>
                    </div>
                ) : (
                    <div>
                        <p>{this.quests[currentQuestion].answer}</p>
                    </div>
                 )}
            </div>
        )
    }
}

export default Risk3