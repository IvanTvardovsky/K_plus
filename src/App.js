import React from "react"
import Navbar from "./components/navbar"
import Blocks from "./components/blocks"
import {BsQuestionCircleFill} from 'react-icons/bs'

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          showBlocks: true,
          showCheck: true,
          items: [
            {label: 'Копия/Фото паспорта продавца', checked: false },
            {label: 'Выписка из ЕГРН', checked: false }
          ],
          visible: [false, false]
        };
        this.handleContinue1 = this.handleContinue1.bind(this)
        this.handleContinue2 = this.handleContinue2.bind(this)
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
    }

    handleCheckboxChange = (index) => {
        const { items } = this.state;
        const updatedItems = [...items];
        updatedItems[index].checked = !updatedItems[index].checked;
        this.setState({ items: updatedItems });
    };

    handleContinue1 = () => {
        this.setState({ showCheck: false });
    };

    handleContinue2 = () => {
        this.setState({ showBlocks: false });
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
        const { showBlocks, showCheck, items, visible } = this.state;
        const allChecked = items.every((item) => item.checked);
        const tooltips = ["Подсказка 1", "Подсказка 2"]
        return(
            <div>
                <Navbar /> 
                <div className="App">
                    {showCheck ? (
                        <div>
                            <h1>Добро пожаловать!</h1>
                            <p> Мы рады приветствовать Вас на нашем сайте «ЗемельКа»! </p>
                            <p> Мы предлагаем Вам тестирование для выявления рисков при покупке земельного участка.  </p>
                            <p> Пожалуйста, убедитесь, что у Вас есть все необходимые документы, представленные в нашем чек-листе. </p>
                            <p> Нажимая на значок (?) слева от документов, Вам будет предоставлена подсказка, как Вы можете их получить. </p>
                            <p> Как только Вы поставите галочки около каждого из документов и нажмете кнопку «продолжить» тестирование будет открыто для Вас. </p>
                            <p> После прохождения теста мы предоставим Вам список рисков в зависимости от ваших ответов. </p>
                            <p> Надеемся, что наш сервис оставит только хорошие впечатления от использования.
                                С уважением,
                                Команда «ЗемельКа» </p>
                            <button onClick={this.handleContinue1}>Продолжить</button>
                        </div>
                    ) : (
                        <div>
                            {showBlocks ? (
                                <div>
                                    <h3>Подтвердите наличие всех необходимых документов!</h3>
                                    <div>
                                        {items.map((item, index) => (
                                            <div key={index} className="Docs">
                                                <div
                                                    className="Tooltip"
                                                    onMouseEnter={() => this.handleMouseEnter(index)}
                                                    onMouseLeave={() => this.handleMouseLeave(index)}
                                                    style={{
                                                        display: visible[index] ? "block" : "none"
                                                    }}
                                                >
                                                    {tooltips[index]}
                                                </div>
                                                <BsQuestionCircleFill
                                                    className="QuestIcon"
                                                    onMouseEnter={() => this.handleMouseEnter(index)}
                                                    onMouseLeave={() => this.handleMouseLeave(index)}
                                                />
                                                <input
                                                    type="checkbox"
                                                    className="DocCheckBox"
                                                    checked={item.checked}
                                                    onChange={() => this.handleCheckboxChange(index)}
                                                />
                                                <label className="Docs">{item.label}</label>
                                            </div>
                                        ))}
                                        <button disabled={!allChecked} onClick={this.handleContinue2}>Продолжить</button>
                                    </div>                                    
                                </div>
                            ) : (
                                <div>
                                    <Blocks />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default App