import React from "react";
import Glossary from "./handbookMaterials/glossary"
import Guidebook from "./handbookMaterials/guidebook"

class Handbook extends React.Component {
   render() {
      return (
         <div className="App">
            <p>Здесь Вы можете найти всю необходимую справочную информацию.</p>


            <nav>
               <ul>
                  <li>
                     <p>В разделе "Глоссарий" хранятся все основные юридические термины, которые объясняются простым языком.</p>
                     <a href="#glossaryTitle">Перейти к глоссарию</a>
                  </li>
                  <li>
                     <p>В разделе "Справочник" хранятся все риски при покупке земли с кратким описанием, предупреждениями и примечаниями.</p>
                     <a href="#guidebookTitle">Перейти к справочнику</a>
                  </li>
               </ul>
            </nav>
            <Glossary/>
            <Guidebook/>
         </div>
      );
   }
}

export default Handbook;
