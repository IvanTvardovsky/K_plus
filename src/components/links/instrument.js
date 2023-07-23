import React from "react";
import {Link} from 'react-router-dom';
import {BiSolidRightArrow} from "react-icons/bi"

class Instrument extends React.Component {
   render() {
      const {items} = this.props;
      return (
         <div>
            <p className="bigger" style={{ marginLeft: "2%"}}> Перед прохождением тестирования советуем Вам ознакомиться с нашим информационным
               материалом — &nbsp;
               <Link to="/handbook"><strong>Справочником</strong></Link>. </p>
            <p className="bigger" style={{ marginLeft: "2%"}}> Если же Вам будет непонятен какой-то термин, Вы сможете найти его в нашем &nbsp;
               <Link to="/handbook"><strong>Словаре</strong></Link>. </p>
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
                     <div className="Bullet" style={{ marginLeft: "3%"}}></div>
                     <label className="Docs bigger">{item.label}</label>
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
