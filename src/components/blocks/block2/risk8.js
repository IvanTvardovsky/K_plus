import React from "react";

class Risk8 extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         ans: [false],
         click: [false],
         isClicked: false
      };
      this.handleAnswer1 = this.handleAnswer1.bind(this);
      this.ClickToBlock = this.ClickToBlock.bind(this);
   }

   ClickToBlock = (event) => {
      if (event.target.tagName !== 'BUTTON') {
         this.setState((prevState) => ({
            isClicked: !prevState.isClicked
         }));
      }
   };

   handleAnswer1 = (answer) => {
      this.setState((prevState) => ({
         click: prevState.click.map((item, index) => (index === 0 ? true : item))
      }));
      if (answer === 'да') {
         this.setState((prevState) => ({
            ans: prevState.ans.map((item, index) => (index === 0 ? false : item))
         }));
      } else {
         this.setState((prevState) => ({
            ans: prevState.ans.map((item, index) => (index === 0 ? true : item))
         }));
      }
   };

   render() {
      const { ans, click } = this.state;
      return (
         <div className="Risk" onClick={this.ClickToBlock}>
            <h3>Риск №6: Нечистая юридическая история земельного участка</h3>
            {this.state.isClicked && (
               <div>
                  <div className="Question">
                     <p>Проверена ли юридическая история земельного участка в ЕГРН?</p>
                     <button className={click[0] && !ans[0] ? 'active' : ''} onClick={() => this.handleAnswer1('да')}>Да</button>
                     <button className={click[0] && ans[0] ? 'active' : ''} onClick={() => this.handleAnswer1('нет')}>Нет</button>
                  </div>
                  {click[0] && !ans[0] && (
                     <div>

                     </div>
                  )}
               </div>
            )}
         </div>
      );
   }
}

export default Risk8;
