import React from "react"
import Navbar from "./components/navbar"
import Blocks from "./components/blocks"

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          showBlocks: true,
        };
        this.handleContinue = this.handleContinue.bind(this)
    }

    handleContinue = () => {
        this.setState({ showBlocks: false });
    };

    render(){
        const { showBlocks } = this.state;
        return(
            <div>
                <Navbar /> 
                <div className="App">
                    {showBlocks ? (
                        <div>
                            <h1>Добро пожаловать!</h1>
                            <p> Мы рады приветствовать Вас на нашем сайте «ЗемельКа»! </p>
                            <p> Мы предлагаем Вам тестирование для выявления рисков при покупке земельного участка.  </p>
                            <p> Пожалуйста, убедитесь, что у Вас есть все документы со звездочкой, представленные в нашем чек-листе. </p>
                            <p> Нажимая на значок (?) слева от документов, Вам будет предоставлена подсказка, как Вы можете их получить. </p>
                            <p> Как только Вы поставите галочки около каждого из документов и нажмете кнопку «продолжить» тестирование будет открыто для Вас. </p>
                            <p> После прохождения теста мы предоставим Вам список рисков в зависимости от ваших ответов. </p>
                            <p> Надеемся, что наш сервис оставит только хорошие впечатления от использования.
                                С уважением,
                                Команда «ЗемельКа» </p>
                            <button onClick={this.handleContinue}>Продолжить</button>
                        </div>
                    ) : (
                        <div>
                            <Blocks />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default App