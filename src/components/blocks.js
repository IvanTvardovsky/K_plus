import React from "react";
import FirstBlock from "./blocks/firstblock"
import SecondBlock from "./blocks/secondblock"
import ThirdBlock from "./blocks/thirdblock";
import FourthBlock from "./blocks/fourthblock";
import {BsCheckCircle} from "react-icons/bs"
import {BsExclamationCircle} from "react-icons/bs"
import {BsDashCircle} from "react-icons/bs"
import {BsXCircle} from "react-icons/bs"
import {Link} from 'react-router-dom';


class Blocks extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         reportClick: true,
         answers: {
            first: {
               risk1: {
                  ans: 'none',
                  cat: -1,
                  number: -1
               },
               risk10: {
                  ans: 'none',
                  cat: -1,
                  number: -1
               }
            },
            second: {
               risk2: {
                  ans: 'none',
                  cat: -1,
                  number: -1
               },
               risk3: {
                  ans: 'none',
                  cat: -1,
                  number: -1
               },
               risk4: {
                  ans: 'none',
                  cat: -1,
                  number: -1
               },
               risk8: {
                  ans: 'none',
                  cat: -1,
                  number: -1
               },
               risk11: {
                  ans: 'none',
                  cat: -1,
                  number: -1
               }
            },
            third: {
               risk5: {
                  ans: 'none',
                  cat: -1,
                  number: -1
               },
               risk6: {
                  ans: 'none',
                  cat: -1,
                  number: -1
               },
               risk7: {
                  ans: 'none',
                  cat: -1,
                  number: -1
               },
               risk9: {
                  ans: 'none',
                  cat: -1,
                  number: -1
               }
            },
            fourth: {
               risk12: {
                  ans: 'none',
                  cat: -1,
                  number: -1
               },
               risk13: {
                  q1: {
                     ans: 'none',
                     cat: -1,
                     number: -1
                  },
                  q2: {
                     ans: 'none',
                     cat: -1,
                     number: -1
                  }
               }
            }
         }
      };
      this.handleBlock1 = this.handleBlock1.bind(this)
      this.handleBlock2 = this.handleBlock2.bind(this)
      this.handleBlock3 = this.handleBlock3.bind(this)
      this.handleBlock4 = this.handleBlock4.bind(this)
      this.ClickToReport = this.ClickToReport.bind(this)
   }

   ClickToReport = (event) => {
      this.setState((prevState) => ({
         reportClick: !prevState.reportClick
      }));
   };

   handleBlock1 = (data) => {
      this.setState((prevState) => ({
         answers: {
            ...prevState.answers,
            first: {
               risk1: {
                  ans: data.risk1Data.ans,
                  cat: data.risk1Data.cat,
                  number: data.risk1Data.number,
               },
               risk10: {
                  ans: data.risk10Data.ans,
                  cat: data.risk10Data.cat,
                  number: data.risk10Data.number,
               }
            }
         }
      }));
   };

   handleBlock2 = (data) => {
      this.setState((prevState) => ({
         answers: {
            ...prevState.answers,
            second: {
               risk2: {
                  ans: data.risk2Data.ans,
                  cat: data.risk2Data.cat,
                  number: data.risk2Data.number,
               },
               risk3: {
                  ans: data.risk3Data.ans,
                  cat: data.risk3Data.cat,
                  number: data.risk3Data.number,
               },
               risk4: {
                  ans: data.risk4Data.ans,
                  cat: data.risk4Data.cat,
                  number: data.risk4Data.number,
               },
               risk8: {
                  ans: data.risk8Data.ans,
                  cat: data.risk8Data.cat,
                  number: data.risk8Data.number,
               },
               risk11: {
                  ans: data.risk11Data.ans,
                  cat: data.risk11Data.cat,
                  number: data.risk11Data.number,
               }
            }
         }
      }));
   };

   handleBlock3 = (data) => {
      this.setState((prevState) => ({
         answers: {
            ...prevState.answers,
            third: {
               risk5: {
                  ans: data.risk5Data.ans,
                  cat: data.risk5Data.cat,
                  number: data.risk5Data.number,
               },
               risk6: {
                  ans: data.risk6Data.ans,
                  cat: data.risk6Data.cat,
                  number: data.risk6Data.number,
               },
               risk7: {
                  ans: data.risk7Data.ans,
                  cat: data.risk7Data.cat,
                  number: data.risk7Data.number,
               },
               risk9: {
                  ans: data.risk9Data.ans,
                  cat: data.risk9Data.cat,
                  number: data.risk9Data.number,
               }
            }
         }
      }));
   };

   handleBlock4 = (data) => {
      this.setState((prevState) => ({
         answers: {
            ...prevState.answers,
            fourth: {
               ...prevState.answers.fourth,
               risk12: {
                  ans: data.risk12Data.ans,
                  cat: data.risk12Data.cat,
                  number: data.risk12Data.number,
               },
               risk13: {
                  ...prevState.answers.fourth.risk13,
                  q1: {
                     ans: data.risk13Data.risk1.ans,
                     cat: data.risk13Data.risk1.cat,
                     number: data.risk13Data.risk1.number,
                  },
                  q2: {
                     ans: data.risk13Data.risk2.ans,
                     cat: data.risk13Data.risk2.cat,
                     number: data.risk13Data.risk2.number,
                  }
               }
            }
         }
      }));
   };

   render() {
      const {reportClick, answers} = this.state;
      return (
         <div className="Blocks">
            {reportClick ? (
               <div className="Content">
                  <FirstBlock onData={this.handleBlock1}/>
                  <SecondBlock onData={this.handleBlock2}/>
                  <ThirdBlock onData={this.handleBlock3}/>
                  <FourthBlock onData={this.handleBlock4}/>
                  <div className="reportDiv">
                     <button className="report" onClick={this.ClickToReport}>Продолжить</button>
                  </div>
               </div>
            ) : (
               <div>
                  <h1>Отчёт</h1>
                  {((answers.first.risk1.cat < 1) && (answers.first.risk10.cat < 1) && (answers.second.risk2.cat < 1) && (answers.second.risk3.cat < 1)
                     && (answers.second.risk4.cat < 1) && (answers.second.risk8.cat < 1) && (answers.second.risk11.cat < 1) && (answers.third.risk5.cat < 1)
                     && (answers.third.risk6.cat < 1) && (answers.third.risk7.cat < 1) && (answers.third.risk9.cat < 1) && (answers.fourth.risk12.cat < 1)
                     && (answers.fourth.risk13.q1.cat < 1) && (answers.fourth.risk13.q2.cat < 1)) ? (
                     <div>
                        {((answers.first.risk1.cat === 0) && (answers.first.risk10.cat === 0) && (answers.second.risk2.cat === 0) && (answers.second.risk3.cat === 0)
                           && (answers.second.risk4.cat === 0) && (answers.second.risk8.cat === 0) && (answers.second.risk11.cat === 0) && (answers.third.risk5.cat === 0)
                           && (answers.third.risk6.cat === 0) && (answers.third.risk7.cat === 0) && (answers.third.risk9.cat === 0) && (answers.fourth.risk12.cat === 0)
                           && (answers.fourth.risk13.q1.cat === 0) && (answers.fourth.risk13.q2.cat === 0)) ? (
                           <div>
                              <h2> Риски не выявлены! </h2>
                              <h2> Ознакомиться с возможными рисками вы можете в разделе{' '}
                                 <Link to="/handbook">справочник</Link>!справочник.
                              </h2>
                           </div>
                        ) : (
                           <div>
                              <h2> Риски не выявлены! </h2>
                              <div className="notPassed">
                                 <h3>Обратите внимание, есть ряд рисков которые вы не прошли! </h3>
                                 <div>
                                    {answers.first.risk1.cat === -1 && (
                                       <div>
                                          <h4> Риск №1: Право супруга на объект</h4>
                                       </div>
                                    )}
                                    {answers.first.risk10.cat === -1 && (
                                       <div>
                                          <h4> Риск №2: Право собственности продавца</h4>
                                       </div>
                                    )}
                                    {answers.second.risk2.cat === -1 && (
                                       <div>
                                          <h4> Риск №3: Границы объекта </h4>
                                       </div>
                                    )}
                                    {answers.second.risk3.cat === -1 && (
                                       <div>
                                          <h4> Риск №4: Целевое использование объекта</h4>
                                       </div>
                                    )}
                                    {answers.second.risk4.cat === -1 && (
                                       <div>
                                          <h4> Риск №5: Экология</h4>
                                       </div>
                                    )}
                                    {answers.second.risk8.cat === -1 && (
                                       <div>
                                          <h4> Риск №6: Юридическая история объекта</h4>
                                       </div>
                                    )}
                                    {answers.second.risk11.cat === -1 && (
                                       <div>
                                          <h4> Риск №7: Обременения на объект</h4>
                                       </div>
                                    )}
                                    {answers.third.risk5.cat === -1 && (
                                       <div>
                                          <h4> Риск №8: Банкротство продавца</h4>
                                       </div>
                                    )}
                                    {answers.third.risk6.cat === -1 && (
                                       <div>
                                          <h4> Риск №9: Выплата долгов продавцом</h4>
                                       </div>
                                    )}
                                    {answers.third.risk7.cat === -1 && (
                                       <div>
                                          <h4> Риск №10: Экстремизм</h4>
                                       </div>
                                    )}
                                    {answers.third.risk9.cat === -1 && (
                                       <div>
                                          <h4> Риск №11: Продавец-ответчик в судебном споре</h4>
                                       </div>
                                    )}
                                    {answers.fourth.risk12.cat === -1 && (
                                       <div>
                                          <h4> Риск №12: Генеральная доверенность </h4>
                                       </div>
                                    )}
                                    {answers.fourth.risk13.q1.cat === -1 && (
                                       <div>
                                          <h4> Риск №13: Недееспособность продавца</h4>
                                       </div>
                                    )}
                                 </div>
                              </div>
                              <h2> Ознакомиться с возможными рисками вы можете в разделе{' '}
                                 <Link to="/handbook">справочник</Link>.
                              </h2>
                           </div>
                        )}
                     </div>
                  ) : (
                     <div>
                        <h2> Выявлены следующие риски: </h2>
                        {((answers.first.risk1.cat > -1) && (answers.first.risk10.cat > -1) && (answers.second.risk2.cat > -1) && (answers.second.risk3.cat > -1)
                           && (answers.second.risk4.cat > -1) && (answers.second.risk8.cat > -1) && (answers.second.risk11.cat > -1) && (answers.third.risk5.cat > -1)
                           && (answers.third.risk6.cat > -1) && (answers.third.risk7.cat > -1) && (answers.third.risk9.cat > -1) && (answers.fourth.risk12.cat > -1)
                           && (answers.fourth.risk13.q1.cat > -1) && (answers.fourth.risk13.q2.cat > -1)) ? (
                           <div>
                              <div className={`riskBlock ${answers.first.risk1.cat > 0 ? 'active' : ''}`}>
                                 {answers.first.risk1.cat > -1 && (
                                    <div>
                                       {answers.first.risk1.cat === 0 ? (
                                          <div className="conclusionOff">
                                             <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                             <h3>{answers.first.risk1.ans}</h3>
                                          </div>
                                       ) : (
                                          <div>
                                             <h2> Риск №1: Право супруга на объект </h2>
                                             <div className="conclusion">
                                                <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                                <h3>{answers.first.risk1.ans}</h3>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск претензий со стороны супруга Продавца, поэтому: </p>
                                                <p> Необходимо уточнить наличие брачного договора между супругами.
                                                   Нотариальное согласие второго супруга не требуется в случае, если
                                                   заключен брачный договор. </p>
                                                <p> Необходимо выяснить, когда земельный участок был приобретен
                                                   продавцом. Если до брака путем личного приобретения, дарения или
                                                   наследства, то второй супруг не может препятствовать совершению
                                                   сделки; если в браке, то второй супруг должен выразить свое согласие
                                                   на продажу, которое будет нотариально заверено. </p>
                                                <p> Попросите Продавца обратиться к нотариусу для получения
                                                   нотариального согласия. <br/>
                                                   Записаться на прием к нотариусу можно на Госуслугах по ссылке:
                                                   https://www.gosuslugi.ru/help/faq/notary/102751 </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.first.risk10.cat > 0 ? 'active' : ''}`}>
                                 {answers.first.risk10.cat > -1 && (
                                    <div>
                                       {answers.first.risk10.cat === 0 ? (
                                          <div className="conclusionOff">
                                             <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                             <h3>{answers.first.risk10.ans}</h3>
                                          </div>
                                       ) : (
                                          <div>
                                             <h2> Риск №2: Право собственности продавца </h2>
                                             <div className="conclusion">
                                                <BsXCircle className="conclusionIcon" color="red" size={36}/>
                                                <h3>{answers.first.risk10.ans}</h3>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Право собственности Продавца на землю не проверено, поэтому: </p>
                                                <p> Запросите у Продавца подтверждение права собственности на объект.
                                                   Это могут быть разные документы в зависимости от года
                                                   регистрации: <br/>
                                                   21.01.1998 - 01.09.2013 - свидетельство о регистрации права
                                                   собственности; <br/>
                                                   01.09.2013 - 15.07.2016 - свидетельство о регистрации или выпиской из
                                                   ЕГРН; <br/>
                                                   15.07.2016 - по настоящее время - только выписка из ЕГРН. </p>
                                                <p> На любой зарегистрированный объект недвижимости можно получить
                                                   выписку из ЕГРН, даже если у собственника ее никогда не было.
                                                   Заказать ее Вы можете, перейдя по ссылке:
                                                   https://rosreestor.net/vipiska-o-perehode-prav</p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.second.risk2.cat > 0 ? 'active' : ''}`}>
                                 {answers.second.risk2.cat > -1 && (
                                    <div>
                                       {answers.second.risk2.cat === 0 ? (
                                          <div className="conclusionOff">
                                             <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                             <h3>{answers.second.risk2.ans}</h3>
                                          </div>
                                       ) : (
                                          <div>
                                             <h2> Риск №3: Границы объекта </h2>
                                             <div className="conclusion">
                                                <BsExclamationCircle className="conclusionIcon" color="yellow"
                                                                     size={36}/>
                                                <h3>{answers.second.risk2.ans}</h3>
                                             </div>
                                             {answers.second.risk2.number === 1 ? (
                                                <div>
                                                   <div className="Rec">
                                                      <h3>Рекомендации:</h3>
                                                      <p> Есть риск, что межевание не проведено, поэтому: </p>
                                                      <p> Необходимо провести межевание земельного участка и поставить
                                                         его на кадастровый учет. </p>
                                                   </div>
                                                </div>
                                             ) : (
                                                <div>
                                                   <div className="Rec">
                                                      <h3>Рекомендации:</h3>
                                                      <p> Есть риск, что межевание не соответствует выписке ЕГРН,
                                                         поэтому: </p>
                                                      <p> Проверьте с помощью публичной кадастровой карты
                                                         Росреестра: <br/>
                                                         Сылка №1 https://www.gosuslugi.ru/378659/1/info <br/>
                                                         Ссылка № 2
                                                         https://pkk.rosreestr.ru/?source=subscribe#/search/63.60201437832657,65.56074746184491/4/@bzbws4844
                                                      </p>
                                                      <p> Воспользуйтесь услугами кадастрового инженера. Он поможет Вам
                                                         провести проверку межевания. </p>
                                                   </div>
                                                </div>
                                             )}
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.second.risk3.cat > 0 ? 'active' : ''}`}>
                                 {answers.second.risk3.cat > -1 && (
                                    <div>
                                       {answers.second.risk3.cat === 0 ? (
                                          <div className="conclusionOff">
                                             <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                             <h3>{answers.second.risk3.ans}</h3>
                                          </div>
                                       ) : (
                                          <div>
                                             <h2> Риск №4: Целевое использование объекта </h2>
                                             <div className="conclusion">
                                                <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                                <h3>{answers.second.risk3.ans}</h3>
                                             </div>
                                             {answers.second.risk3.number === 1 ? (
                                                <div>
                                                   <div className="Rec">
                                                      <h3>Рекомендации:</h3>
                                                      <p> Советуем Вам не заключать данную сделку. </p>
                                                   </div>
                                                </div>
                                             ) : (
                                                <div>
                                                   {answers.second.risk3.number === 2 ? (
                                                      <div>
                                                         <div className="Rec">
                                                            <h3>Рекомендации:</h3>
                                                            <p> Запросите Продавца предоставить официально
                                                               подтвержденную информацию. </p>
                                                         </div>
                                                      </div>
                                                   ) : (
                                                      <div>
                                                         <div className="Rec">
                                                            <h3>Рекомендации:</h3>
                                                            <p> Есть риск, что объект попадает в зону особого
                                                               назначения, поэтому: </p>
                                                            <p> Проверьте с помощью публичной кадастровой карты
                                                               Росреестра. <br/>
                                                               Ссылка № 1: https://www.gosuslugi.ru/378659/1/info <br/>
                                                               Ссылка № 2:
                                                               https://pkk.rosreestr.ru/?source=subscribe#/search/63.60201437832657,65.56074746184491/4/@bzbws4844
                                                            </p>
                                                            <p> Проверьте генеральный план развития местности,
                                                               утвержденный местной администрацией. Например, Генплан
                                                               Москвы до 2035 г. можно посмотреть по ссылке:
                                                               https://genplanmos.ru/project/generalnyy_plan_moskvy_do_2035_goda/ </p>
                                                            <p> Проверьте Правила землепользования и застройки.
                                                               Например, Правила землепользования и застройки города
                                                               Москвы можно посмотреть по ссылке:
                                                               https://www.mos.ru/mka/documents/pravila-zemlepolzovaniya-i-zastrojki-goroda-moskvy/</p>
                                                            <p> Проверьте информацию по земельному участку на портале
                                                               ФГИС ТП по ссылке: https://fgistp.economy.gov.ru/ </p>
                                                         </div>
                                                      </div>
                                                   )}
                                                </div>
                                             )}
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.second.risk4.cat > 0 ? 'active' : ''}`}>
                                 {answers.second.risk4.cat > -1 && (
                                    <div>
                                       {answers.second.risk4.cat === 0 ? (
                                          <div className="conclusionOff">
                                             <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                             <h3>{answers.second.risk4.ans}</h3>
                                          </div>
                                       ) : (
                                          <div>
                                             <h2> Риск №5: Экология </h2>
                                             <div className="conclusion">
                                                <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                                <h3>{answers.second.risk4.ans}</h3>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p>Есть риск того, что Вы не проинформированы об экологической ситуации
                                                   земельного участка, поэтому: </p>
                                                <p>Запросите информацию об экологической ситуации по ссылке:
                                                   https://www.gosuslugi.ru/72281/1/info</p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.second.risk8.cat > 0 ? 'active' : ''}`}>
                                 {answers.second.risk8.cat > -1 && (
                                    <div>
                                       {answers.second.risk8.cat === 0 ? (
                                          <div className="conclusionOff">
                                             <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                             <h3>{answers.second.risk8.ans}</h3>
                                          </div>
                                       ) : (
                                          <div>
                                             <h2> Риск № 6: Юридическая история объекта </h2>
                                             <div className="conclusion">
                                                <BsExclamationCircle className="conclusionIcon" color="yellow"
                                                                     size={36}/>
                                                <h3>{answers.second.risk8.ans}</h3>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск того, что Вы не проинформированы о юридической истории
                                                   земельного участка, поэтому: </p>
                                                <p> Ознакомьтесь с информацией о переходе прав на объект недвижимости,
                                                   заказав выписку из ЕГРН по ссылке:
                                                   https://rosreestor.net/vipiska-o-perehode-prav </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.second.risk11.cat > 0 ? 'active' : ''}`}>
                                 {answers.second.risk11.cat > -1 && (
                                    <div>
                                       {answers.second.risk11.cat === 0 ? (
                                          <div className="conclusionOff">
                                             <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                             <h3>{answers.second.risk11.ans}</h3>
                                          </div>
                                       ) : (
                                          <div>
                                             <h2> Риск № 7: Обременения на объект </h2>
                                             <div className="conclusion">
                                                <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                                <h3>{answers.second.risk11.ans}</h3>
                                             </div>
                                             {answers.second.risk11.number === 1 ? (
                                                <div>
                                                   <div className="Rec">
                                                      <h3>Рекомендации:</h3>
                                                      <p> Есть риск, что Вы не ознакомлены с возможными обременениями на
                                                         земельный участок, поэтому: </p>
                                                      <p> Узнайте информацию о наличии обременений на участок можно
                                                         тремя способами: <br/>
                                                         1) сделать запрос через МФЦ (Мои документы); <br/>
                                                         2) обратиться в территориальный орган надзора за недвижимостью,
                                                         в ведении которого находится интересующая недвижимость; <br/>
                                                         3) воспользоваться личным кабинетом на сайте государственных
                                                         услуг ( gosuslugi.ru ) и подать заявление; </p>
                                                      <p> Для осуществления запроса, достаточно иметь кадастровый
                                                         паспорт или номер участка и его местоположение. По итогам
                                                         обращения, Вам выдается выписка
                                                         с полным перечнем всех сведений об интересующем объекте,
                                                         включая типы наложенных арестов, обременений и иных
                                                         ограничений.</p>
                                                   </div>
                                                </div>
                                             ) : (
                                                <div>
                                                   <div className="Rec">
                                                      <h3>Рекомендации:</h3>
                                                      <p> Есть риск, что Продавец откажется погасить обременения,
                                                         поэтому: </p>
                                                      <p> Предложите включить условие в договор о погашении обременений
                                                         продавцом. </p>
                                                   </div>
                                                </div>
                                             )}
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.third.risk5.cat > 0 ? 'active' : ''}`}>
                                 {answers.third.risk5.cat > -1 && (
                                    <div>
                                       {answers.third.risk5.cat === 0 ? (
                                          <div className="conclusionOff">
                                             <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                             <h3>{answers.third.risk5.ans}</h3>
                                          </div>
                                       ) : (
                                          <div>
                                             <h2> Риск №8: Банкротство продавца </h2>
                                             <div className="conclusion">
                                                <BsXCircle className="conclusionIcon" color="red" size={36}/>
                                                <h3>{answers.third.risk5.ans}</h3>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск, что Продавец является банкротом, поэтому: </p>
                                                <p> Проверьте наличие Продавца в списках банкротов в соотвествующем
                                                   реестре:
                                                   https://old.bankrot.fedresurs.ru/?ysclid=ljpmeb4npx361137021&attempt=2 </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.third.risk6.cat > 0 ? 'active' : ''}`}>
                                 {answers.third.risk6.cat > -1 && (
                                    <div>
                                       {answers.third.risk6.cat === 0 ? (
                                          <div className="conclusionOff">
                                             <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                             <h3>{answers.third.risk6.ans}</h3>
                                          </div>
                                       ) : (
                                          <div>
                                             <h2> Риск №9: Выплата долгов продавцом </h2>
                                             <div className="conclusion">
                                                <BsXCircle className="conclusionIcon" color="red" size={36}/>
                                                <h3>{answers.third.risk6.ans}</h3>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск, что Продавец является должником, поэтому: </p>
                                                <p> Проверьте Продавца в соответствующем реестре:
                                                   https://fssp.gov.ru/ </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.third.risk7.cat > 0 ? 'active' : ''}`}>
                                 {answers.third.risk7.cat > -1 && (
                                    <div>
                                       {answers.third.risk7.cat === 0 ? (
                                          <div className="conclusionOff">
                                             <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                             <h3>{answers.third.risk7.ans}</h3>
                                          </div>
                                       ) : (
                                          <div>
                                             <h2> Риск №10: Экстремизм</h2>
                                             <div className="conclusion">
                                                <BsXCircle className="conclusionIcon" color="red" size={36}/>
                                                <h3>{answers.third.risk7.ans}</h3>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск, что Продавец причастен к экстремизму или иным
                                                   преступлениям, поэтому: </p>
                                                <p> Проверьте Продавца в соответствующем реестре лиц, причастных к
                                                   экстремизму:
                                                   https://www.fedsfm.ru/documents/terr-list?ysclid=ljpmkslzio263245615 </p>
                                                <p> Наличие иных преступлений продавца можно проверить в сервисе МВД
                                                   "Внимание, розыск!": https://мвд.рф/wanted </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.third.risk9.cat > 0 ? 'active' : ''}`}>
                                 {answers.third.risk9.cat > -1 && (
                                    <div>
                                       {answers.third.risk9.cat === 0 ? (
                                          <div className="conclusionOff">
                                             <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                             <h3>{answers.third.risk9.ans}</h3>
                                          </div>
                                       ) : (
                                          <div>
                                             <h2> Риск №11: Продавец-ответчик в судебном споре </h2>
                                             <div className="conclusion">
                                                <BsExclamationCircle className="conclusionIcon" color="yellow"
                                                                     size={36}/>
                                                <h3>{answers.third.risk9.ans}</h3>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск, что Продавец участвует в судебном производстве в качестве
                                                   ответчика, поэтому: </p>
                                                <p> Проверьте продавца в соответствующем реестре:
                                                   https://mos-gorsud.ru/mgs/services/cases/first-civil. <br/>
                                                   Это нужно для того, чтобы удостовериться, что в отношении продавца
                                                   нет возбужденных судебных дел, которые бы могли угрожать совершению
                                                   сделки (например, развод). </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.fourth.risk12.cat > 0 ? 'active' : ''}`}>
                                 {answers.fourth.risk12.cat > -1 && (
                                    <div>
                                       {answers.fourth.risk12.cat === 0 ? (
                                          <div className="conclusionOff">
                                             <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                             <h3>{answers.fourth.risk12.ans}</h3>
                                          </div>
                                       ) : (
                                          <div>
                                             <h2> Риск №12: Генеральная доверенность </h2>
                                             <div className="conclusion">
                                                <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                                <h3>{answers.fourth.risk12.ans}</h3>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск, что генеральная доверенность не является достоверной,
                                                   поэтому: </p>
                                                <p> Проверьте генеральную доверенность по ссылке:
                                                   https://reestr-dover.ru/ </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.fourth.risk13.q1.cat > 0 ? 'active' : ''}`}>
                                 {answers.fourth.risk13.q1.cat > -1 && (
                                    <div>
                                       {answers.fourth.risk13.q1.cat === 0 ? (
                                          <div className="conclusionOff">
                                             <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                             <h3>{answers.fourth.risk13.q1.cat.ans}</h3>
                                          </div>
                                       ) : (
                                          <div>
                                             <h2> Риск №13: Недееспособность продавца </h2>
                                             <div className="conclusion">
                                                <BsXCircle className="conclusionIcon" color="red" size={36}/>
                                                <h3>{answers.fourth.risk13.q1.ans}</h3>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск, что Продавец является недееспособным, поэтому: </p>
                                                <p> Получите выписку из ЕГРН о признании правообладателя недееспособным
                                                   или ограниченно дееспособным.
                                                   Инструкция по ссылке:
                                                   https://www.gosuslugi.ru/help/faq/egrn/101769 </p>
                                                <p> Запросите у Продавца справку из ПНД, чтобы удостовериться в его
                                                   полной дееспособности. </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div>
                                 <h2>
                                    Рекомендуем для более подробного ознакомления с рисками перейти в раздел{' '}
                                    <Link to="/handbook">справочник</Link>!
                                 </h2>
                              </div>
                           </div>
                        ) : (
                           <div>
                              <div className={`riskBlock ${answers.first.risk1.cat > 0 ? 'active' : ''}`}>
                                 {answers.first.risk1.cat > -1 && (
                                    <div>
                                       {answers.first.risk1.cat === 0 ? (
                                          <div className="conclusionOff">
                                             <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                             <h3>{answers.first.risk1.ans}</h3>
                                          </div>
                                       ) : (
                                          <div>
                                             <h2> Риск №1: Право супруга на объект </h2>
                                             <div className="conclusion">
                                                <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                                <h3>{answers.first.risk1.ans}</h3>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск претензий со стороны супруга Продавца, поэтому: </p>
                                                <p> Необходимо уточнить наличие брачного договора между супругами.
                                                   Нотариальное согласие второго супруга не требуется в случае, если
                                                   заключен брачный договор. </p>
                                                <p> Необходимо выяснить, когда земельный участок был приобретен
                                                   продавцом. Если до брака путем личного приобретения, дарения или
                                                   наследства, то второй супруг не может препятствовать совершению
                                                   сделки; если в браке, то второй супруг должен выразить свое согласие
                                                   на продажу, которое будет нотариально заверено. </p>
                                                <p> Попросите Продавца обратиться к нотариусу для получения
                                                   нотариального согласия. <br/>
                                                   Записаться на прием к нотариусу можно на Госуслугах по ссылке:
                                                   https://www.gosuslugi.ru/help/faq/notary/102751 </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.first.risk10.cat > 0 ? 'active' : ''}`}>
                                 {answers.first.risk10.cat > -1 && (
                                    <div>
                                       {answers.first.risk10.cat === 0 ? (
                                          <div className="conclusionOff">
                                             <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                             <h3>{answers.first.risk10.ans}</h3>
                                          </div>
                                       ) : (
                                          <div>
                                             <h2> Риск №2: Право собственности продавца </h2>
                                             <div className="conclusion">
                                                <BsXCircle className="conclusionIcon" color="red" size={36}/>
                                                <h3>{answers.first.risk10.ans}</h3>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Право собственности Продавца на землю не проверено, поэтому: </p>
                                                <p> Запросите у Продавца подтверждение права собственности на объект.
                                                   Это могут быть разные документы в зависимости от года
                                                   регистрации: <br/>
                                                   21.01.1998 - 01.09.2013 - свидетельство о регистрации права
                                                   собственности; <br/>
                                                   01.09.2013 - 15.07.2016 - свидетельство о регистрации или выпиской из
                                                   ЕГРН; <br/>
                                                   15.07.2016 - по настоящее время - только выписка из ЕГРН. </p>
                                                <p> На любой зарегистрированный объект недвижимости можно получить
                                                   выписку из ЕГРН, даже если у собственника ее никогда не было.
                                                   Заказать ее Вы можете, перейдя по ссылке:
                                                   https://rosreestor.net/vipiska-o-perehode-prav</p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.second.risk2.cat > 0 ? 'active' : ''}`}>
                                 {answers.second.risk2.cat > -1 && (
                                    <div>
                                       {answers.second.risk2.cat === 0 ? (
                                          <div className="conclusionOff">
                                             <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                             <h3>{answers.second.risk2.ans}</h3>
                                          </div>
                                       ) : (
                                          <div>
                                             <h2> Риск №3: Границы объекта </h2>
                                             <div className="conclusion">
                                                <BsExclamationCircle className="conclusionIcon" color="yellow"
                                                                     size={36}/>
                                                <h3>{answers.second.risk2.ans}</h3>
                                             </div>
                                             {answers.second.risk2.number === 1 ? (
                                                <div>
                                                   <div className="Rec">
                                                      <h3>Рекомендации:</h3>
                                                      <p> Есть риск, что межевание не проведено, поэтому: </p>
                                                      <p> Необходимо провести межевание земельного участка и поставить
                                                         его на кадастровый учет. </p>
                                                   </div>
                                                </div>
                                             ) : (
                                                <div>
                                                   <div className="Rec">
                                                      <h3>Рекомендации:</h3>
                                                      <p> Есть риск, что межевание не соответствует выписке ЕГРН,
                                                         поэтому: </p>
                                                      <p> Проверьте с помощью публичной кадастровой карты
                                                         Росреестра: <br/>
                                                         Сылка №1 https://www.gosuslugi.ru/378659/1/info <br/>
                                                         Ссылка № 2
                                                         https://pkk.rosreestr.ru/?source=subscribe#/search/63.60201437832657,65.56074746184491/4/@bzbws4844
                                                      </p>
                                                      <p> Воспользуйтесь услугами кадастрового инженера. Он поможет Вам
                                                         провести проверку межевания. </p>
                                                   </div>
                                                </div>
                                             )}
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.second.risk3.cat > 0 ? 'active' : ''}`}>
                                 {answers.second.risk3.cat > -1 && (
                                    <div>
                                       {answers.second.risk3.cat === 0 ? (
                                          <div className="conclusionOff">
                                             <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                             <h3>{answers.second.risk3.ans}</h3>
                                          </div>
                                       ) : (
                                          <div>
                                             <h2> Риск №4: Целевое использование объекта </h2>
                                             <div className="conclusion">
                                                <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                                <h3>{answers.second.risk3.ans}</h3>
                                             </div>
                                             {answers.second.risk3.number === 1 ? (
                                                <div>
                                                   <div className="Rec">
                                                      <h3>Рекомендации:</h3>
                                                      <p> Советуем Вам не заключать данную сделку. </p>
                                                   </div>
                                                </div>
                                             ) : (
                                                <div>
                                                   {answers.second.risk3.number === 2 ? (
                                                      <div>
                                                         <div className="Rec">
                                                            <h3>Рекомендации:</h3>
                                                            <p> Запросите Продавца предоставить официально
                                                               подтвержденную информацию. </p>
                                                         </div>
                                                      </div>
                                                   ) : (
                                                      <div>
                                                         <div className="Rec">
                                                            <h3>Рекомендации:</h3>
                                                            <p> Есть риск, что объект попадает в зону особого
                                                               назначения, поэтому: </p>
                                                            <p> Проверьте с помощью публичной кадастровой карты
                                                               Росреестра. <br/>
                                                               Ссылка № 1: https://www.gosuslugi.ru/378659/1/info <br/>
                                                               Ссылка № 2:
                                                               https://pkk.rosreestr.ru/?source=subscribe#/search/63.60201437832657,65.56074746184491/4/@bzbws4844
                                                            </p>
                                                            <p> Проверьте генеральный план развития местности,
                                                               утвержденный местной администрацией. Например, Генплан
                                                               Москвы до 2035 г. можно посмотреть по ссылке:
                                                               https://genplanmos.ru/project/generalnyy_plan_moskvy_do_2035_goda/ </p>
                                                            <p> Проверьте Правила землепользования и застройки.
                                                               Например, Правила землепользования и застройки города
                                                               Москвы можно посмотреть по ссылке:
                                                               https://www.mos.ru/mka/documents/pravila-zemlepolzovaniya-i-zastrojki-goroda-moskvy/</p>
                                                            <p> Проверьте информацию по земельному участку на портале
                                                               ФГИС ТП по ссылке: https://fgistp.economy.gov.ru/ </p>
                                                         </div>
                                                      </div>
                                                   )}
                                                </div>
                                             )}
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.second.risk4.cat > 0 ? 'active' : ''}`}>
                                 {answers.second.risk4.cat > -1 && (
                                    <div>
                                       {answers.second.risk4.cat === 0 ? (
                                          <div className="conclusionOff">
                                             <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                             <h3>{answers.second.risk4.ans}</h3>
                                          </div>
                                       ) : (
                                          <div>
                                             <h2> Риск №5: Экология </h2>
                                             <div className="conclusion">
                                                <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                                <h3>{answers.second.risk4.ans}</h3>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p>Есть риск того, что Вы не проинформированы об экологической ситуации
                                                   земельного участка, поэтому: </p>
                                                <p>Запросите информацию об экологической ситуации по ссылке:
                                                   https://www.gosuslugi.ru/72281/1/info</p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.second.risk8.cat > 0 ? 'active' : ''}`}>
                                 {answers.second.risk8.cat > -1 && (
                                    <div>
                                       {answers.second.risk8.cat === 0 ? (
                                          <div className="conclusionOff">
                                             <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                             <h3>{answers.second.risk8.ans}</h3>
                                          </div>
                                       ) : (
                                          <div>
                                             <h2> Риск № 6: Юридическая история объекта </h2>
                                             <div className="conclusion">
                                                <BsExclamationCircle className="conclusionIcon" color="yellow"
                                                                     size={36}/>
                                                <h3>{answers.second.risk8.ans}</h3>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск того, что Вы не проинформированы о юридической истории
                                                   земельного участка, поэтому: </p>
                                                <p> Ознакомьтесь с информацией о переходе прав на объект недвижимости,
                                                   заказав выписку из ЕГРН по ссылке:
                                                   https://rosreestor.net/vipiska-o-perehode-prav </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.second.risk11.cat > 0 ? 'active' : ''}`}>
                                 {answers.second.risk11.cat > -1 && (
                                    <div>
                                       {answers.second.risk11.cat === 0 ? (
                                          <div className="conclusionOff">
                                             <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                             <h3>{answers.second.risk11.ans}</h3>
                                          </div>
                                       ) : (
                                          <div>
                                             <h2> Риск № 7: Обременения на объект </h2>
                                             <div className="conclusion">
                                                <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                                <h3>{answers.second.risk11.ans}</h3>
                                             </div>
                                             {answers.second.risk11.number === 1 ? (
                                                <div>
                                                   <div className="Rec">
                                                      <h3>Рекомендации:</h3>
                                                      <p> Есть риск, что Вы не ознакомлены с возможными обременениями на
                                                         земельный участок, поэтому: </p>
                                                      <p> Узнайте информацию о наличии обременений на участок можно
                                                         тремя способами: <br/>
                                                         1) сделать запрос через МФЦ (Мои документы); <br/>
                                                         2) обратиться в территориальный орган надзора за недвижимостью,
                                                         в ведении которого находится интересующая недвижимость; <br/>
                                                         3) воспользоваться личным кабинетом на сайте государственных
                                                         услуг ( gosuslugi.ru ) и подать заявление; </p>
                                                      <p> Для осуществления запроса, достаточно иметь кадастровый
                                                         паспорт или номер участка и его местоположение. По итогам
                                                         обращения, Вам выдается выписка
                                                         с полным перечнем всех сведений об интересующем объекте,
                                                         включая типы наложенных арестов, обременений и иных
                                                         ограничений.</p>
                                                   </div>
                                                </div>
                                             ) : (
                                                <div>
                                                   <div className="Rec">
                                                      <h3>Рекомендации:</h3>
                                                      <p> Есть риск, что Продавец откажется погасить обременения,
                                                         поэтому: </p>
                                                      <p> Предложите включить условие в договор о погашении обременений
                                                         продавцом. </p>
                                                   </div>
                                                </div>
                                             )}
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.third.risk5.cat > 0 ? 'active' : ''}`}>
                                 {answers.third.risk5.cat > -1 && (
                                    <div>
                                       {answers.third.risk5.cat === 0 ? (
                                          <div className="conclusionOff">
                                             <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                             <h3>{answers.third.risk5.ans}</h3>
                                          </div>
                                       ) : (
                                          <div>
                                             <h2> Риск №8: Банкротство продавца </h2>
                                             <div className="conclusion">
                                                <BsXCircle className="conclusionIcon" color="red" size={36}/>
                                                <h3>{answers.third.risk5.ans}</h3>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск, что Продавец является банкротом, поэтому: </p>
                                                <p> Проверьте наличие Продавца в списках банкротов в соотвествующем
                                                   реестре:
                                                   https://old.bankrot.fedresurs.ru/?ysclid=ljpmeb4npx361137021&attempt=2 </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.third.risk6.cat > 0 ? 'active' : ''}`}>
                                 {answers.third.risk6.cat > -1 && (
                                    <div>
                                       {answers.third.risk6.cat === 0 ? (
                                          <div className="conclusionOff">
                                             <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                             <h3>{answers.third.risk6.ans}</h3>
                                          </div>
                                       ) : (
                                          <div>
                                             <h2> Риск №9: Выплата долгов продавцом </h2>
                                             <div className="conclusion">
                                                <BsXCircle className="conclusionIcon" color="red" size={36}/>
                                                <h3>{answers.third.risk6.ans}</h3>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск, что Продавец является должником, поэтому: </p>
                                                <p> Проверьте Продавца в соответствующем реестре:
                                                   https://fssp.gov.ru/ </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.third.risk7.cat > 0 ? 'active' : ''}`}>
                                 {answers.third.risk7.cat > -1 && (
                                    <div>
                                       {answers.third.risk7.cat === 0 ? (
                                          <div className="conclusionOff">
                                             <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                             <h3>{answers.third.risk7.ans}</h3>
                                          </div>
                                       ) : (
                                          <div>
                                             <h2> Риск №10: Экстремизм</h2>
                                             <div className="conclusion">
                                                <BsXCircle className="conclusionIcon" color="red" size={36}/>
                                                <h3>{answers.third.risk7.ans}</h3>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск, что Продавец причастен к экстремизму или иным
                                                   преступлениям, поэтому: </p>
                                                <p> Проверьте Продавца в соответствующем реестре лиц, причастных к
                                                   экстремизму:
                                                   https://www.fedsfm.ru/documents/terr-list?ysclid=ljpmkslzio263245615 </p>
                                                <p> Наличие иных преступлений продавца можно проверить в сервисе МВД
                                                   "Внимание, розыск!": https://мвд.рф/wanted </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.third.risk9.cat > 0 ? 'active' : ''}`}>
                                 {answers.third.risk9.cat > -1 && (
                                    <div>
                                       {answers.third.risk9.cat === 0 ? (
                                          <div className="conclusionOff">
                                             <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                             <h3>{answers.third.risk9.ans}</h3>
                                          </div>
                                       ) : (
                                          <div>
                                             <h2> Риск №11: Продавец-ответчик в судебном споре </h2>
                                             <div className="conclusion">
                                                <BsExclamationCircle className="conclusionIcon" color="yellow"
                                                                     size={36}/>
                                                <h3>{answers.third.risk9.ans}</h3>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск, что Продавец участвует в судебном производстве в качестве
                                                   ответчика, поэтому: </p>
                                                <p> Проверьте продавца в соответствующем реестре:
                                                   https://mos-gorsud.ru/mgs/services/cases/first-civil. <br/>
                                                   Это нужно для того, чтобы удостовериться, что в отношении продавца
                                                   нет возбужденных судебных дел, которые бы могли угрожать совершению
                                                   сделки (например, развод). </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.fourth.risk12.cat > 0 ? 'active' : ''}`}>
                                 {answers.fourth.risk12.cat > -1 && (
                                    <div>
                                       {answers.fourth.risk12.cat === 0 ? (
                                          <div className="conclusionOff">
                                             <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                             <h3>{answers.fourth.risk12.ans}</h3>
                                          </div>
                                       ) : (
                                          <div>
                                             <h2> Риск №12: Генеральная доверенность </h2>
                                             <div className="conclusion">
                                                <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                                <h3>{answers.fourth.risk12.ans}</h3>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск, что генеральная доверенность не является достоверной,
                                                   поэтому: </p>
                                                <p> Проверьте генеральную доверенность по ссылке:
                                                   https://reestr-dover.ru/ </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.fourth.risk13.q1.cat > 0 ? 'active' : ''}`}>
                                 {answers.fourth.risk13.q1.cat > -1 && (
                                    <div>
                                       {answers.fourth.risk13.q1.cat === 0 ? (
                                          <div className="conclusionOff">
                                             <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                             <h3>{answers.fourth.risk13.q1.cat.ans}</h3>
                                          </div>
                                       ) : (
                                          <div>
                                             <h2> Риск №13: Недееспособность продавца </h2>
                                             <div className="conclusion">
                                                <BsXCircle className="conclusionIcon" color="red" size={36}/>
                                                <h3>{answers.fourth.risk13.q1.ans}</h3>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск, что Продавец является недееспособным, поэтому: </p>
                                                <p> Получите выписку из ЕГРН о признании правообладателя недееспособным
                                                   или ограниченно дееспособным.
                                                   Инструкция по ссылке:
                                                   https://www.gosuslugi.ru/help/faq/egrn/101769 </p>
                                                <p> Запросите у Продавца справку из ПНД, чтобы удостовериться в его
                                                   полной дееспособности. </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className="notPassed">
                                 <h3>Обратите внимание, есть ряд рисков которые вы не прошли! </h3>
                                 <div>
                                    {answers.first.risk1.cat === -1 && (
                                       <div>
                                          <h4> Риск №1: Право супруга на объект</h4>
                                       </div>
                                    )}
                                    {answers.first.risk10.cat === -1 && (
                                       <div>
                                          <h4> Риск №2: Право собственности продавца</h4>
                                       </div>
                                    )}
                                    {answers.second.risk2.cat === -1 && (
                                       <div>
                                          <h4> Риск №3: Границы объекта </h4>
                                       </div>
                                    )}
                                    {answers.second.risk3.cat === -1 && (
                                       <div>
                                          <h4> Риск №4: Целевое использование объекта</h4>
                                       </div>
                                    )}
                                    {answers.second.risk4.cat === -1 && (
                                       <div>
                                          <h4> Риск №5: Экология</h4>
                                       </div>
                                    )}
                                    {answers.second.risk8.cat === -1 && (
                                       <div>
                                          <h4> Риск №6: Юридическая история объекта</h4>
                                       </div>
                                    )}
                                    {answers.second.risk11.cat === -1 && (
                                       <div>
                                          <h4> Риск №7: Обременения на объект</h4>
                                       </div>
                                    )}
                                    {answers.third.risk5.cat === -1 && (
                                       <div>
                                          <h4> Риск №8: Банкротство продавца</h4>
                                       </div>
                                    )}
                                    {answers.third.risk6.cat === -1 && (
                                       <div>
                                          <h4> Риск №9: Выплата долгов продавцом</h4>
                                       </div>
                                    )}
                                    {answers.third.risk7.cat === -1 && (
                                       <div>
                                          <h4> Риск №10: Экстремизм</h4>
                                       </div>
                                    )}
                                    {answers.third.risk9.cat === -1 && (
                                       <div>
                                          <h4> Риск №11: Продавец-ответчик в судебном споре</h4>
                                       </div>
                                    )}
                                    {answers.fourth.risk12.cat === -1 && (
                                       <div>
                                          <h4> Риск №12: Генеральная доверенность </h4>
                                       </div>
                                    )}
                                    {answers.fourth.risk13.q1.cat === -1 && (
                                       <div>
                                          <h4> Риск №13: Недееспособность продавца</h4>
                                       </div>
                                    )}
                                 </div>
                              </div>
                              <h2>
                                 Рекомендуем для более подробного ознакомления с рисками перейти в раздел{' '}
                                 <Link to="/handbook">справочник</Link>!
                              </h2>
                           </div>
                        )}
                     </div>
                  )
                  }
               </div>
            )}
         </div>
      )
   }
}

export default Blocks