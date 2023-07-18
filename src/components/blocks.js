import React from "react";
import FirstBlock from "./blocks/firstblock"
import SecondBlock from "./blocks/secondblock"
import ThirdBlock from "./blocks/thirdblock";
import FourthBlock from "./blocks/fourthblock";
import {BsCheckCircle} from "react-icons/bs"
import {BsExclamationCircle} from "react-icons/bs"
import {BsDashCircle} from "react-icons/bs"
import {BsXCircle} from "react-icons/bs"


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
                  <div>
                     <h2> Риск №1: Претензии супруга на земельный участок </h2>
                     {answers.first.risk1.cat > -1 && (
                        <div>
                           {answers.first.risk1.cat === 0 ? (
                              <div className="conclusion">
                                 <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                 <h3>{answers.first.risk1.ans}</h3>
                              </div>
                           ) : (
                              <div>
                                 <div className="conclusion">
                                    <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                    <h3>{answers.first.risk1.ans}</h3>
                                 </div>
                                 <div className="Rec">
                                    <h3>Рекомендации:</h3>
                                    <p>Попросите Продавца обратиться к нотариусу для получения нотариального
                                       согласия. </p>
                                    <p> Записаться на прием к нотариусу можно на Госуслугах по ссылке:
                                       https://www.gosuslugi.ru/help/faq/notary/102751</p>
                                 </div>
                              </div>
                           )}
                        </div>
                     )}
                  </div>
                  <div>
                     <h2> Риск №2: Отсутствие права собственности у Продавца </h2>
                     {answers.first.risk10.cat > -1 && (
                        <div>
                           {answers.first.risk10.cat === 0 ? (
                              <div className="conclusion">
                                 <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                 <h3>{answers.first.risk10.ans}</h3>
                              </div>
                           ) : (
                              <div>
                                 <div className="conclusion">
                                    <BsXCircle className="conclusionIcon" color="red" size={36}/>
                                    <h3>{answers.first.risk10.ans}</h3>
                                 </div>
                                 <div className="Rec">
                                    <h3>Рекомендации:</h3>
                                    <p>Попросите Продавца обратиться к нотариусу для получения нотариального
                                       согласия. </p>
                                    <p> Записаться на прием к нотариусу можно на Госуслугах по ссылке:
                                       https://www.gosuslugi.ru/help/faq/notary/102751</p>
                                 </div>
                              </div>
                           )}
                        </div>
                     )}
                  </div>
                  <div>
                     <h2> Риск №3: Неопределенность границ земельного участка </h2>
                     {answers.second.risk2.cat > -1 && (
                        <div>
                           {answers.second.risk2.cat === 0 ? (
                              <div className="conclusion">
                                 <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                 <h3>{answers.second.risk2.ans}</h3>
                              </div>
                           ) : (
                              <div>
                                 <div className="conclusion">
                                    <BsExclamationCircle className="conclusionIcon" color="yellow" size={36}/>
                                    <h3>{answers.second.risk2.ans}</h3>
                                 </div>
                                 {answers.second.risk2.number === 1 ? (
                                    <div>
                                       <div className="Rec">
                                          <h3>Рекомендации:</h3>
                                          <p> Необходимо размежевать участок и поставить его на кадастровый учет. </p>
                                       </div>
                                    </div>
                                 ) : (
                                    <div>
                                       <div className="Rec">
                                          <h3>Рекомендации:</h3>
                                          <p> Кадастровый инженер поможет Вам провести проверку межевания. <br/>
                                             Проверьте градостроительного плана участка. О порядке получения смотреть по
                                             ссылке: https://www.gosuslugi.ru/53918/3/info <br/>
                                             Проверьте с помощью публичной кадастровой карты Росреестра. <br/>
                                             Ссылка № 1: https://www.gosuslugi.ru/378659/1/info <br/>
                                             Ссылка № 2:
                                             https://pkk.rosreestr.ru/?source=subscribe#/search/63.60201437832657,65.56074746184491/4/@bzbws4844
                                          </p>
                                       </div>
                                    </div>
                                 )}
                              </div>
                           )}
                        </div>
                     )}
                  </div>
                  <div>
                     <h2> Риск №4: Целевое использование земельного участка </h2>
                     {answers.second.risk3.cat > -1 && (
                        <div>
                           {answers.second.risk3.cat === 0 ? (
                              <div className="conclusion">
                                 <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                 <h3>{answers.second.risk3.ans}</h3>
                              </div>
                           ) : (
                              <div>
                                 <div className="conclusion">
                                    <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                    <h3>{answers.second.risk3.ans}</h3>
                                 </div>
                                 {answers.second.risk3.number === 1 ? (
                                    <div>
                                       <div className="Rec">
                                          <h3>Рекомендации:</h3>
                                          <p> Нужно дописать. </p>
                                       </div>
                                    </div>
                                 ) : (
                                    <div>
                                       {answers.second.risk3.number === 2 ? (
                                          <div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Нужно дописать. </p>
                                             </div>
                                          </div>
                                       ) : (
                                          <div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Проверьте с помощью публичной кадастровой карты Росреестра. <br/>
                                                   Ссылка № 1: https://www.gosuslugi.ru/378659/1/info </p>
                                                <p> Ссылка № 2:
                                                   https://pkk.rosreestr.ru/?source=subscribe#/search/63.60201437832657,65.56074746184491/4/@bzbws4844 <br/>
                                                   Проверьте генеральный план развития местности, утвержденный местной
                                                   администрацией. <br/>
                                                   Например, Генплан Москвы до 2035 г. можно посмотреть по ссылке:
                                                   https://genplanmos.ru/project/generalnyy_plan_moskvy_do_2035_goda/
                                                </p>
                                                <p> Проверьте Правила землепользования и застройки. Например, Правила
                                                   землепользования и застройки города Москвы можно посмотреть по
                                                   ссылке: <br/>
                                                   https://www.mos.ru/mka/documents/pravila-zemlepolzovaniya-i-zastrojki-goroda-moskvy/
                                                </p>
                                                <p> Проверьте информацию по земельному участку на портале ФГИС ТП по
                                                   ссылке: https://fgistp.economy.gov.ru/
                                                </p>
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
                  <div>
                     <h2> Риск №5: Экология </h2>
                     {answers.second.risk4.cat > -1 && (
                        <div>
                           {answers.second.risk4.cat === 0 ? (
                              <div className="conclusion">
                                 <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                 <h3>{answers.second.risk4.ans}</h3>
                              </div>
                           ) : (
                              <div>
                                 <div className="conclusion">
                                    <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                    <h3>{answers.second.risk4.ans}</h3>
                                 </div>
                                 <div className="Rec">
                                    <h3>Рекомендации:</h3>
                                    <p> Проверьте генеральный план развития местности, утвержденный местной
                                       администрацией. <br/>
                                       Например, Генплан Москвы до 2035 г. можно посмотреть по ссылке: <br/>
                                       https://genplanmos.ru/project/generalnyy_plan_moskvy_do_2035_goda/ </p>
                                    <p> Запросите информацию об экологической ситуации. Смотреть Приложение Б.1 по
                                       ссылке: https://minstroyrf.gov.ru/docs/131522/</p>
                                 </div>
                              </div>
                           )}
                        </div>
                     )}
                  </div>
                  <div>
                     <h2> Риск № 6: Нечистая юридическая история земельного участка </h2>
                     {answers.second.risk8.cat > -1 && (
                        <div>
                           {answers.second.risk8.cat === 0 ? (
                              <div className="conclusion">
                                 <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                 <h3>{answers.second.risk8.ans}</h3>
                              </div>
                           ) : (
                              <div>
                                 <div className="conclusion">
                                    <BsExclamationCircle className="conclusionIcon" color="yellow" size={36}/>
                                    <h3>{answers.second.risk8.ans}</h3>
                                 </div>
                                 <div className="Rec">
                                    <h3>Рекомендации:</h3>
                                    <p> Ознакомьтесь с выпиской из ЕГРН о переходе прав по ссылке:
                                       https://rosreestor.net/vipiska-o-perehode-prav </p>
                                 </div>
                              </div>
                           )}
                        </div>
                     )}
                  </div>
                  <div>
                     <h2> Риск № 7: Наличие обременений в отношении земельного участка </h2>
                     {answers.second.risk11.cat > -1 && (
                        <div>
                           {answers.second.risk11.cat === 0 ? (
                              <div className="conclusion">
                                 <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                 <h3>{answers.second.risk11.ans}</h3>
                              </div>
                           ) : (
                              <div>
                                 <div className="conclusion">
                                    <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                    <h3>{answers.second.risk11.ans}</h3>
                                 </div>
                                 {answers.second.risk11.number === 1 ? (
                                    <div>
                                       <div className="Rec">
                                          <h3>Рекомендации:</h3>
                                          <p> Ознакомьтесь с зарегистрированными правами и возможными ограничениями на
                                             объект по выписке из ЕГРН </p>
                                          <p> Запросите актуальную выписку из ЕГРН с обновленной информацией по объекту
                                             перед подписанием договора.</p>
                                       </div>
                                    </div>
                                 ) : (
                                    <div>
                                       <div className="Rec">
                                          <h3>Рекомендации:</h3>
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
                  <div>
                     <h2> Риск №8: Банкротство продавца </h2>
                     {answers.third.risk5.cat > -1 && (
                        <div>
                           {answers.third.risk5.cat === 0 ? (
                              <div className="conclusion">
                                 <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                 <h3>{answers.third.risk5.ans}</h3>
                              </div>
                           ) : (
                              <div>
                                 <div className="conclusion">
                                    <BsXCircle className="conclusionIcon" color="red" size={36}/>
                                    <h3>{answers.third.risk5.ans}</h3>
                                 </div>
                                 <div className="Rec">
                                    <h3>Рекомендации:</h3>
                                    <p> Нужно дописать. </p>
                                 </div>
                              </div>
                           )}
                        </div>
                     )}
                  </div>
                  <div>
                     <h2> Риск №9: Наличие исполнительных производств в отношении Продавца </h2>
                     {answers.third.risk6.cat > -1 && (
                        <div>
                           {answers.third.risk6.cat === 0 ? (
                              <div className="conclusion">
                                 <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                 <h3>{answers.third.risk6.ans}</h3>
                              </div>
                           ) : (
                              <div>
                                 <div className="conclusion">
                                    <BsXCircle className="conclusionIcon" color="red" size={36}/>
                                    <h3>{answers.third.risk6.ans}</h3>
                                 </div>
                                 <div className="Rec">
                                    <h3>Рекомендации:</h3>
                                    <p> Нужно дописать. </p>
                                 </div>
                              </div>
                           )}
                        </div>
                     )}
                  </div>
                  <div>
                     <h2> Риск №10: Причастность к экстремизму и другим преступлениям </h2>
                     {answers.third.risk7.cat > -1 && (
                        <div>
                           {answers.third.risk7.cat === 0 ? (
                              <div className="conclusion">
                                 <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                 <h3>{answers.third.risk7.ans}</h3>
                              </div>
                           ) : (
                              <div>
                                 <div className="conclusion">
                                    <BsXCircle className="conclusionIcon" color="red" size={36}/>
                                    <h3>{answers.third.risk7.ans}</h3>
                                 </div>
                                 <div className="Rec">
                                    <h3>Рекомендации:</h3>
                                    <p> Нужно дописать. </p>
                                 </div>
                              </div>
                           )}
                        </div>
                     )}
                  </div>
                  <div>
                     <h2> Риск №11: Продавец-Ответчик в судах общей юрисдикции </h2>
                     {answers.third.risk9.cat > -1 && (
                        <div>
                           {answers.third.risk9.cat === 0 ? (
                              <div className="conclusion">
                                 <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                 <h3>{answers.third.risk9.ans}</h3>
                              </div>
                           ) : (
                              <div>
                                 <div className="conclusion">
                                    <BsExclamationCircle className="conclusionIcon" color="yellow" size={36}/>
                                    <h3>{answers.third.risk9.ans}</h3>
                                 </div>
                                 <div className="Rec">
                                    <h3>Рекомендации:</h3>
                                    <p> Проверьте продавца в соответствующем реестре:
                                       https://mos-gorsud.ru/mgs/services/cases/first-civil </p>
                                 </div>
                              </div>
                           )}
                        </div>
                     )}
                  </div>
                  <div>
                     <h2> Риск №12: Доверенность </h2>
                     {answers.fourth.risk12.cat > -1 && (
                        <div>
                           {answers.fourth.risk12.cat === 0 ? (
                              <div className="conclusion">
                                 <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                 <h3>{answers.fourth.risk12.ans}</h3>
                              </div>
                           ) : (
                              <div>
                                 <div className="conclusion">
                                    <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                    <h3>{answers.fourth.risk12.ans}</h3>
                                 </div>
                                 <div className="Rec">
                                    <h3>Рекомендации:</h3>
                                    <p> Найдите доверенность по ссылке: https://reestr-dover.ru/</p>
                                 </div>
                              </div>
                           )}
                        </div>
                     )}
                  </div>
                  <div>
                     <h2> Риск №13: Невозможность самостоятельного принятия решения Продавцом. Принуждение к совершению
                        сделки. Часть 1. </h2>
                     {answers.fourth.risk13.q1.cat > -1 && (
                        <div>
                           {answers.fourth.risk13.q1.cat === 0 ? (
                              <div className="conclusion">
                                 <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                 <h3>{answers.fourth.risk13.q1.cat.ans}</h3>
                              </div>
                           ) : (
                              <div>
                                 <div className="conclusion">
                                    <BsXCircle className="conclusionIcon" color="red" size={36}/>
                                    <h3>{answers.fourth.risk13.q1.ans}</h3>
                                 </div>
                                 <div className="Rec">
                                    <h3>Рекомендации:</h3>
                                    <p> Получите выписку из ЕГРН о признании правообладателя недееспособным или
                                       ограниченно дееспособным. <br/>
                                       Инструция по ссылке: https://www.gosuslugi.ru/help/faq/egrn/101769</p>
                                    <p> Нотариус обеспечит удостоверение договора. Записаться на прием к нотариусу можно
                                       на Госуслугах по ссылке: https://www.gosuslugi.ru/help/faq/notary/102751</p>
                                 </div>
                              </div>
                           )}
                        </div>
                     )}
                  </div>
                  <div>
                     <h2> Риск №13: Невозможность самостоятельного принятия решения Продавцом. Принуждение к совершению
                        сделки. Часть 2 </h2>
                     {answers.fourth.risk13.q2.cat > -1 && (
                        <div>
                           {answers.fourth.risk13.q2.cat === 0 ? (
                              <div className="conclusion">
                                 <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                 <h3>{answers.fourth.risk13.q2.cat.ans}</h3>
                              </div>
                           ) : (
                              <div>
                                 <div className="conclusion">
                                    <BsXCircle className="conclusionIcon" color="red" size={36}/>
                                    <h3>{answers.fourth.risk13.q2.ans}</h3>
                                 </div>
                                 <div className="Rec">
                                    <h3>Рекомендации:</h3>
                                    <p> Нотариус объяснит, что означает сделка и проверит ее соответствие закону.
                                       Записаться на прием к нотариусу можно на Госуслугах <br/>
                                       по ссылке: https://www.gosuslugi.ru/help/faq/notary/102751</p>
                                 </div>
                              </div>
                           )}
                        </div>
                     )}
                  </div>
                  <div>
                     <h1>Для более подробного ознакомления с рисками перейдите в раздел справочник!</h1>
                  </div>
               </div>
            )}
         </div>
      )
   }
}

export default Blocks