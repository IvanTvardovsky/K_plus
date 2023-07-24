import React from "react";
import Navbar from "./components/navbar";
import Blocks from "./components/blocks";
import Welcome from "./components/welcome";
import Mainpage from "./components/links/mainpage";
import Instrument from "./components/links/instrument";
import Calculator from "./components/links/calculator";
import Handbook from "./components/links/handbook";
import Footer from "./components/footer"
import Dictionary from "./components/links/dictionary"
import ScrollToTop from './components/scrollToTop';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         items: [
            {label: 'Копия/Фото паспорта продавца', check: false},
            {
               label: 'Выписка из ЕГРН',
               check: true,
               tooltip: '<b>Выписка из ЕГРН</b> - это документ, который содержит информацию об основных характеристиках объекта, сведения о лицах, у которых есть права на объект, о кадастровой стоимости, обременениях и многом другом.'
            },
            {
               label: 'Нотариальное согласие супруга продавца (при наличии)',
               check: true,
               tooltip: '<b>Нотариальное согласие супруга</b> - это документ, который необходим для продажи недвижимого имущества жены и мужа и удостоверен нотариусом.'
            },
            {
               label: 'Копия/фото паспорта доверенного лица (при наличии)',
               check: true,
               tooltip: '<b>Доверенное лицо</b> - это человек, которому доверяют дела и полномочия для выполнения определенных действий от чужого имени.'
            },
            {
               label: 'Брачный договор между супругами (при наличии)',
               check: true,
               tooltip: '<b>Брачный договор между супругами</b> - это соглашение между супругами или будущими супругами о том, как будет делиться добрачное или нажитое в браке имущество.'
            },
            {
               label: 'Генеральная доверенность (при наличии)',
               check: true,
               tooltip: '<b>Генеральная доверенность</b> - это документ, который дает право доверенному лицу на самые разные юридические действия, в том числе на покупку или отчуждение имущества и подпись документов.'
            },
            {
               label: 'Справка продавца из психоневрологического диспансера (при наличии)',
               check: true,
               tooltip: '<b>Справка из психоневрологического диспансера</b> - это документ, который подтверждает факт того, что лицо не состоит на учете в психоневрологическом диспансере и не имеет психических заболеваний, а также гарантирует невозможность признать договор недействительным.'
            },
            {
               label: 'Справка продавца из наркологического диспансера (при наличии)',
               check: true,
               tooltip: '<b>Справка из наркологического диспансера</b> - это документ, который подтверждает факт того, что обратившийся не стоит на учете с алкогольной или наркотической зависимостью, и гарантирует невозможность признать договор недействительным.'
            },
         ]
      };
   }

   render() {
      const {items} = this.state;

      return (
         <BrowserRouter>
            <ScrollToTop/>
            <div>
               <Navbar/>
               <div className="App">
                  <Routes>
                     <Route path="/" element={<Mainpage/>}/>
                     <Route path="/instrument" element={<Instrument items={items}/>}/>
                     <Route path="/blocks" element={<Blocks/>}/>
                     <Route path="/calculator" element={<Calculator/>}/>
                     <Route path="/dictionary" element={<Dictionary/>}/>
                     <Route path="/handbook" element={<Handbook/>}/>
                  </Routes>
               </div>
            </div>
         </BrowserRouter>
      );
   }
}

export default App;
