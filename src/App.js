import React from "react"
import Navbar from "./components/navbar"
import Blocks from "./components/blocks"
import Welcome from "./components/welcome";
import {BsQuestionCircleFill} from 'react-icons/bs'
import Instrument from "./components/instrument"
import Mainpage from "./components/mainpage"
import Calculator from "./components/calculator"
import Handbook from "./components/handbook"

import {BrowserRouter, Routes, Route} from 'react-router-dom';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         showBlocks: true,
         showCheck: true,
         items: [
            {label: 'Копия/Фото паспорта продавца', checked: false},
            {label: 'Выписка из ЕГРН', checked: false}
         ],
         visible: [false, false]
      };
   }

   handleCheckboxChange = (index) => {
      const {items} = this.state;
      const updatedItems = [...items];
      updatedItems[index].checked = !updatedItems[index].checked;
      this.setState({items: updatedItems});
   };

   handleContinue1 = () => {
      this.setState({showCheck: false});
   };

   handleContinue2 = () => {
      this.setState({showBlocks: false});
   };

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
      const {showBlocks, showCheck, items, visible} = this.state;
      const allChecked = items.every((item) => item.checked);
      const tooltips = ["Подсказка 1", "Подсказка 2"];

      return (
         <BrowserRouter>
            <div>
               <Navbar/>
               <div className="App">
                  <Routes>
                     <Route path="/" element={<Mainpage onContinue1={this.handleContinue1}/>}/>
                     <Route
                        path="/instrument"
                        element={
                           <Instrument
                              items={items}
                              tooltips={tooltips}
                              allChecked={allChecked}
                              handleCheckboxChange={this.handleCheckboxChange}
                           />
                        }
                     />
                     <Route path="/blocks" element={<Blocks/>}/>
                     <Route path="/calculator" element={<Calculator/>}/>
                     <Route path="/handbook" element={<Handbook/>}/>
                  </Routes>
               </div>
            </div>
         </BrowserRouter>
      );
   }
}

export default App;