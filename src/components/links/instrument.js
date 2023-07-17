import React from "react";
import { Link } from 'react-router-dom';

class Instrument extends React.Component {
   render() {
      const { items } = this.props;
      return (
         <div>
            <h3>Подтвердите наличие всех необходимых документов!</h3>
            <div>
               {items.map((item, index) => (
                  <div key={index} className="Docs">
                     <div className="Bullet"></div>
                     <label className="Docs">{item.label}</label>
                  </div>
               ))}
               <Link to="/blocks">
                  <button>Продолжить</button>
               </Link>
            </div>
         </div>
      );
   }
}

export default Instrument;