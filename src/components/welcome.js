import React from "react";

function Welcome({onContinue}) {
   return (
      <div>
         <h1 style={{ marginLeft: "2%"}}>Добро пожаловать!</h1>
         <p className="bigger" style={{ marginLeft: "2%"}}>Мы рады приветствовать Вас на нашем сайте <strong>«ЗемельКа»</strong>!</p>
         <p className="bigger" style={{ marginLeft: "2%"}}>Мы предлагаем Вам пройти тестирование для выявления рисков при покупке земельного
            участка.</p>
         <p className="bigger" style={{ marginLeft: "2%"}}>Как только Вы нажмете кнопку <strong>«Продолжить»</strong>, тестирование будет открыто для Вас.</p>
         <p className="bigger" style={{ marginLeft: "2%"}}>После прохождения теста мы предоставим Вам список рисков в зависимости от Ваших ответов.
         </p>
         <p className="bigger" style={{ marginLeft: "2%"}}>Надеемся, что наш сервис оставит только хорошие впечатления от использования.</p>
         <p className="bigger" style={{ marginLeft: "2%"}}><em>С уважением, Команда «ЗемельКа»</em></p>
      </div>
   );
}

export default Welcome;