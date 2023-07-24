import React from "react";
import {Link} from 'react-router-dom';
import {BiSolidRightArrow} from "react-icons/bi"
import {BsQuestionCircleFill} from 'react-icons/bs'


class Instrument extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         visible: [false, false, false, false, false, false, false, false],
      }
      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
   }

   handleMouseEnter = (index) => {
      const updatedVisible = [...this.state.visible];
      updatedVisible[index] = true;
      this.setState({visible: updatedVisible});
   };

   handleMouseLeave = (index) => {
      const updatedVisible = [...this.state.visible];
      updatedVisible[index] = false;
      this.setState({visible: updatedVisible});
   };

   render() {
      const {items} = this.props;
      const { visible } = this.state;
      return (
         <div>
            <h3 style={{marginLeft: '2%'}}>Руководство по использованию сайта</h3>
            <p className="bigger" style={{ marginLeft: "2%"}}> Перед прохождением тестирования советуем Вам ознакомиться с нашим информационным
               материалом — &nbsp;
               <Link to="/handbook"><strong>Справочником</strong></Link>. </p>
            <p className="bigger" style={{ marginLeft: "2%"}}> Если же Вам будет непонятен какой-то термин, Вы сможете найти его в нашем &nbsp;
               <Link to="/dictionary"><strong>Словаре</strong></Link>. </p>
            <p className="bigger" style={{ marginLeft: "2%"}}> После нажатия кнопки "<strong>Продолжить</strong>" Вам будет представлено тестирование,
               сгруппированное по блокам и
               Рискам. <br/>Чтобы открыть окно с риском, Вам необходимо нажать на треугольник <BiSolidRightArrow/> рядом
               с оглавлением. </p>
            <p className="bigger" style={{ marginLeft: "2%"}}> Вы можете закончить тестирование и получить его результаты в любой момент, нажав на
               кнопку "<strong>Продолжить</strong>". Однако, чтобы получить полный перечень рекомендаций, необходимо ответить на все
               вопросы. После окончания тестирования Вы получите отчет на сайте и возможность скачать его в формате
               PDF.</p>
            <h3 style={{ marginLeft: "2%"}}>Эти документы потребуются для качественного прохождения тестирования:</h3>
            <div>
               {items.map((item, index) => (
                  <div key={index} className="Docs">
                     <div className="DocsCont">
                        <div className="Bullet" style={{ marginLeft: "3%"}}></div>
                        <label className="Docs bigger">{item.label}</label>
                        {item.check && (
                           <div>
                              <div className="ToolContainerInstr">
                                 <BsQuestionCircleFill
                                    className="QuestIcon"
                                    onMouseEnter={() => this.handleMouseEnter(index)}
                                    onMouseLeave={() => this.handleMouseLeave(index)}
                                 />
                                 <div
                                    className="TooltipInstr"
                                    onMouseEnter={() => this.handleMouseEnter(index)}
                                    onMouseLeave={() => this.handleMouseLeave(index)}
                                    style={{
                                       display: visible[index] ? "block" : "none"
                                    }}
                                    dangerouslySetInnerHTML={{__html: item.tooltip}}
                                 >
                                 </div>
                              </div>
                           </div>
                        )}
                     </div>
                  </div>
               ))}
               <Link to="/blocks">
                  <button className="continue-btn" style={{ marginTop: '10px'}}>Продолжить</button>
               </Link>
            </div>
         </div>
      );
   }
}

export default Instrument;
