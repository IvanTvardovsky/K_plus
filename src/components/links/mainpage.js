import React from "react";
import {Link} from 'react-router-dom';
import Welcome from "../welcome";

class MainPage extends React.Component {
   handleContinue1 = () => {
      this.props.onContinue1();
   };

   getCurrentDate() {
      const currentDate = new Date();
      const options = {
         year: "numeric",
         month: "long",
         day: "numeric",
      };
      return currentDate.toLocaleDateString(undefined, options);
   }

   render() {
      const currentDate = this.getCurrentDate();
      return (
         <div className="App">
            <Welcome/>
            <div className="date-info">
               Вся информация актуальна на {currentDate}
            </div>
            <Link to="/instrument">
               <button className="continue-btn">Продолжить</button>
            </Link>
         </div>
      );
   }
}

export default MainPage;
