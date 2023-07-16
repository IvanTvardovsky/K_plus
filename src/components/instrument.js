import React from "react";
import { Link } from 'react-router-dom';
import { BsQuestionCircleFill } from "react-icons/bs";

class Instrument extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         visible: [false, false]
      };
   }

   handleMouseEnter = (index) => {
      const updatedVisible = [...this.state.visible];
      updatedVisible[index] = true;
      this.setState({ visible: updatedVisible });
   };

   handleMouseLeave = (index) => {
      const updatedVisible = [...this.state.visible];
      updatedVisible[index] = false;
      this.setState({ visible: updatedVisible });
   };

   render() {
      const { items, tooltips, allChecked, handleCheckboxChange } = this.props;
      return (
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
                           display: this.state.visible[index] ? "block" : "none"
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
                        onChange={() => handleCheckboxChange(index)}
                     />
                     <label className="Docs">{item.label}</label>
                  </div>
               ))}
               <Link to="/blocks">
                  <button disabled={!allChecked}>Продолжить</button>
               </Link>
            </div>
         </div>
      );
   }
}

export default Instrument;
