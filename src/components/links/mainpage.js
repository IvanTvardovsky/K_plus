import React from "react";
import {Link} from 'react-router-dom';
import Welcome from "../welcome";

class MainPage extends React.Component {
   handleContinue1 = () => {
      this.props.onContinue1();
   };

   render() {
      return (
         <div className="App">
            <Welcome/>
            <Link to="/instrument">
               <button>Продолжить</button>
            </Link>
         </div>
      );
   }
}

export default MainPage;
