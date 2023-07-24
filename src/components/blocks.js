import React from "react";
import FirstBlock from "./blocks/firstblock"
import SecondBlock from "./blocks/secondblock"
import ThirdBlock from "./blocks/thirdblock";
import {BsCheckCircle} from "react-icons/bs"
import {BsDashCircle} from "react-icons/bs"
import {BsXCircle} from "react-icons/bs"
import {Link} from 'react-router-dom';
import {PDFDownloadLink} from '@react-pdf/renderer';
import Report from './report';
import ScrollToTop from './scrollToTop'

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
               },
               risk12: {
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
      this.ClickToReport = this.ClickToReport.bind(this)
   }
   getCurrentDate() {
      const currentDate = new Date();
      const options = {
         year: "numeric",
         month: "long",
         day: "numeric",
      };
      return currentDate.toLocaleDateString(undefined, options);
   }
   scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
   }

   ClickToReport = (event) => {
      this.setState((prevState) => ({
         reportClick: !prevState.reportClick
      }));
      this.scrollToTop();
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
               },
               risk12: {
                  ans: data.risk12Data.ans,
                  cat: data.risk12Data.cat,
                  number: data.risk12Data.number,
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
               },
               risk13: {
                  ...prevState.answers.third.risk13,
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
      const currentDate = this.getCurrentDate();
      const {reportClick, answers} = this.state;
      return (
         <div className="Blocks">
            {reportClick ? (
               <div className="Content">
                  <FirstBlock onData={this.handleBlock1}/>
                  <SecondBlock onData={this.handleBlock2}/>
                  <ThirdBlock onData={this.handleBlock3}/>
                  <div className="reportDiv">
                     <button className="reportBtn" onClick={this.ClickToReport}>Продолжить</button>
                  </div>
               </div>
            ) : (
               <div>
                  <h1 style={{textAlign: "center"}}>Отчёт</h1>
                  {((answers.first.risk1.cat < 1) && (answers.first.risk10.cat < 1) && (answers.second.risk2.cat < 1) && (answers.second.risk3.cat < 1)
                     && (answers.second.risk4.cat < 1) && (answers.second.risk8.cat < 1) && (answers.second.risk11.cat < 1) && (answers.third.risk5.cat < 1)
                     && (answers.third.risk6.cat < 1) && (answers.third.risk7.cat < 1) && (answers.third.risk9.cat < 1) && (answers.first.risk12.cat < 1)
                     && (answers.third.risk13.q1.cat < 1) && (answers.third.risk13.q2.cat < 1)) ? (
                     <div>
                        {((answers.first.risk1.cat === 0) && (answers.first.risk10.cat === 0) && (answers.second.risk2.cat === 0) && (answers.second.risk3.cat === 0)
                           && (answers.second.risk4.cat === 0) && (answers.second.risk8.cat === 0) && (answers.second.risk11.cat === 0) && (answers.third.risk5.cat === 0)
                           && (answers.third.risk6.cat === 0) && (answers.third.risk7.cat === 0) && (answers.third.risk9.cat === 0) && (answers.first.risk12.cat === 0)
                           && (answers.third.risk13.q1.cat === 0) && (answers.third.risk13.q2.cat === 0)) ? (
                           <div>
                              <h2 style={{marginLeft: "3%"}}> Нет рисков, сделка  может быть заключена! </h2>
                              {answers.first.risk1.cat === 0 && (
                                 <div className={`riskBlock ${answers.first.risk1.cat === 0 ? 'active' : ''}`}>
                                    <div className="riskTitle">
                                       <h2>Риск: Право супруга на объект</h2>
                                    </div>
                                    <div className="conclusionOff">
                                       <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                       <h2>Риска нет</h2>
                                    </div>
                                 </div>
                              )}
                              {answers.first.risk10.cat === 0 && (
                                 <div className={`riskBlock ${answers.first.risk10.cat === 0 ? 'active' : ''}`}>
                                    <div className="riskTitle">
                                       <h2>Риск: Право собственности продавца</h2>
                                    </div>
                                    <div className="conclusionOff">
                                       <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                       <h2>Риска нет</h2>
                                    </div>
                                 </div>
                              )}
                              {answers.first.risk12.cat === 0 && (
                                 <div className={`riskBlock ${answers.first.risk12.cat === 0 ? 'active' : ''}`}>
                                    <div className="riskTitle">
                                       <h2>Риск: Генеральная доверенность</h2>
                                    </div>
                                    <div className="conclusionOff">
                                       <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                       <h2>Риска нет</h2>
                                    </div>
                                 </div>
                              )}
                              {answers.second.risk2.cat === 0 && (
                                 <div className={`riskBlock ${answers.second.risk2.cat === 0 ? 'active' : ''}`}>
                                    <div className="riskTitle">
                                       <h2>Риск: Границы объекта</h2>
                                    </div>
                                    <div className="conclusionOff">
                                       <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                       <h2>Риска нет</h2>
                                    </div>
                                 </div>
                              )}
                              {answers.second.risk3.cat === 0 && (
                                 <div className={`riskBlock ${answers.second.risk3.cat === 0 ? 'active' : ''}`}>
                                    <div className="riskTitle">
                                       <h2>Риск: Целевое использование объекта</h2>
                                    </div>
                                    <div className="conclusionOff">
                                       <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                       <h2>Риска нет</h2>
                                    </div>
                                 </div>
                              )}
                              {answers.second.risk4.cat === 0 && (
                                 <div className={`riskBlock ${answers.second.risk4.cat === 0 ? 'active' : ''}`}>
                                    <div className="riskTitle">
                                       <h2>Риск: Экология</h2>
                                    </div>
                                    <div className="conclusionOff">
                                       <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                       <h2>Риска нет</h2>
                                    </div>
                                 </div>
                              )}
                              {answers.second.risk8.cat === 0 && (
                                 <div className={`riskBlock ${answers.second.risk8.cat === 0 ? 'active' : ''}`}>
                                    <div className="riskTitle">
                                       <h2>Риск: Юридическая история объекта</h2>
                                    </div>
                                    <div className="conclusionOff">
                                       <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                       <h2>Риска нет</h2>
                                    </div>
                                 </div>
                              )}
                              {answers.second.risk11.cat === 0 && (
                                 <div className={`riskBlock ${answers.second.risk11.cat === 0 ? 'active' : ''}`}>
                                    <div className="riskTitle">
                                       <h2>Риск: Обременения на объект</h2>
                                    </div>
                                    <div className="conclusionOff">
                                       <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                       <h2>Риска нет</h2>
                                    </div>
                                 </div>
                              )}
                              {answers.third.risk5.cat === 0 && (
                                 <div className={`riskBlock ${answers.third.risk5.cat === 0 ? 'active' : ''}`}>
                                    <div className="riskTitle">
                                       <h2>Риск: Банкротство продавца</h2>
                                    </div>
                                    <div className="conclusionOff">
                                       <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                       <h2>Риска нет</h2>
                                    </div>
                                 </div>
                              )}
                              {answers.third.risk6.cat === 0 && (
                                 <div className={`riskBlock ${answers.third.risk6.cat === 0 ? 'active' : ''}`}>
                                    <div className="riskTitle">
                                       <h2>Риск: Выплата долгов продавцом</h2>
                                    </div>
                                    <div className="conclusionOff">
                                       <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                       <h2>Риска нет</h2>
                                    </div>
                                 </div>
                              )}
                              {answers.third.risk7.cat === 0 && (
                                 <div className={`riskBlock ${answers.third.risk7.cat === 0 ? 'active' : ''}`}>
                                    <div className="riskTitle">
                                       <h2>Риск: Причастность к экстремизму и другим преступлениям</h2>
                                    </div>
                                    <div className="conclusionOff">
                                       <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                       <h2>Риска нет</h2>
                                    </div>
                                 </div>
                              )}
                              {answers.third.risk9.cat === 0 && (
                                 <div className={`riskBlock ${answers.third.risk9.cat === 0 ? 'active' : ''}`}>
                                    <div className="riskTitle">
                                       <h2>Риск: Продавец-Ответчик в судебном споре</h2>
                                    </div>
                                    <div className="conclusionOff">
                                       <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                       <h2>Риска нет</h2>
                                    </div>
                                 </div>
                              )}
                              {answers.third.risk13.q1.cat === 0 && (
                                 <div className={`riskBlock ${answers.third.risk13.q1.cat === 0 ? 'active' : ''}`}>
                                    <div className="riskTitle">
                                       <h2>Риск: Недееспособность продавца</h2>
                                    </div>
                                    <div className="conclusionOff">
                                       <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                       <h2>Риска нет</h2>
                                    </div>
                                 </div>
                              )}

                              <PDFDownloadLink className="downloadPDF" document={<Report answers={answers}/>}
                                               fileName={"ЗемельКа отчет_" + currentDate}>
                                 {({
                                      blob,
                                      url,
                                      loading,
                                      error
                                   }) => (loading ? 'Загрузка документа...' : 'Скачать PDF отчет')}
                              </PDFDownloadLink>
                              <h2 style={{marginLeft: "3%"}}> Ознакомиться с возможными рисками вы можете в разделе{' '}
                                 <Link to="/handbook">справочник</Link>!.
                              </h2>
                              <p className="warning">Информируем Вас, что команда “ЗемельКа” не оказывает влияние на
                                 принятие Вами итогового
                                 решения по заключению сделки и не несет ответственность за это.</p>
                              <div className="warning">
                                 Вся информация актуальна на {currentDate}
                              </div>
                           </div>
                        ) : (
                           <div>
                              <h2 style={{marginLeft: "3%"}}> Нет рисков, сделка  может быть заключена!</h2>
                              {answers.first.risk1.cat === 0 && (
                                 <div className={`riskBlock ${answers.first.risk1.cat === 0 ? 'active' : ''}`}>
                                    <div className="riskTitle">
                                       <h2>Риск: Право супруга на объект</h2>
                                    </div>
                                    <div className="conclusionOff">
                                       <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                       <h2>Риска нет</h2>
                                    </div>
                                 </div>
                              )}
                              {answers.first.risk10.cat === 0 && (
                                 <div className={`riskBlock ${answers.first.risk10.cat === 0 ? 'active' : ''}`}>
                                    <div className="riskTitle">
                                       <h2>Риск: Право собственности продавца</h2>
                                    </div>
                                    <div className="conclusionOff">
                                       <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                       <h2>Риска нет</h2>
                                    </div>
                                 </div>
                              )}
                              {answers.first.risk12.cat === 0 && (
                                 <div className={`riskBlock ${answers.first.risk12.cat === 0 ? 'active' : ''}`}>
                                    <div className="riskTitle">
                                       <h2>Риск: Генеральная доверенность</h2>
                                    </div>
                                    <div className="conclusionOff">
                                       <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                       <h2>Риска нет</h2>
                                    </div>
                                 </div>
                              )}
                              {answers.second.risk2.cat === 0 && (
                                 <div className={`riskBlock ${answers.second.risk2.cat === 0 ? 'active' : ''}`}>
                                    <div className="riskTitle">
                                       <h2>Риск: Границы объекта</h2>
                                    </div>
                                    <div className="conclusionOff">
                                       <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                       <h2>Риска нет</h2>
                                    </div>
                                 </div>
                              )}
                              {answers.second.risk3.cat === 0 && (
                                 <div className={`riskBlock ${answers.second.risk3.cat === 0 ? 'active' : ''}`}>
                                    <div className="riskTitle">
                                       <h2>Риск: Целевое использование объекта</h2>
                                    </div>
                                    <div className="conclusionOff">
                                       <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                       <h2>Риска нет</h2>
                                    </div>
                                 </div>
                              )}
                              {answers.second.risk4.cat === 0 && (
                                 <div className={`riskBlock ${answers.second.risk4.cat === 0 ? 'active' : ''}`}>
                                    <div className="riskTitle">
                                       <h2>Риск: Экология</h2>
                                    </div>
                                    <div className="conclusionOff">
                                       <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                       <h2>Риска нет</h2>
                                    </div>
                                 </div>
                              )}
                              {answers.second.risk8.cat === 0 && (
                                 <div className={`riskBlock ${answers.second.risk8.cat === 0 ? 'active' : ''}`}>
                                    <div className="riskTitle">
                                       <h2>Риск: Юридическая история объекта</h2>
                                    </div>
                                    <div className="conclusionOff">
                                       <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                       <h2>Риска нет</h2>
                                    </div>
                                 </div>
                              )}
                              {answers.second.risk11.cat === 0 && (
                                 <div className={`riskBlock ${answers.second.risk11.cat === 0 ? 'active' : ''}`}>
                                    <div className="riskTitle">
                                       <h2>Риск: Обременения на объект</h2>
                                    </div>
                                    <div className="conclusionOff">
                                       <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                       <h2>Риска нет</h2>
                                    </div>
                                 </div>
                              )}
                              {answers.third.risk5.cat === 0 && (
                                 <div className={`riskBlock ${answers.third.risk5.cat === 0 ? 'active' : ''}`}>
                                    <div className="riskTitle">
                                       <h2>Риск: Банкротство продавца</h2>
                                    </div>
                                    <div className="conclusionOff">
                                       <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                       <h2>Риска нет</h2>
                                    </div>
                                 </div>
                              )}
                              {answers.third.risk6.cat === 0 && (
                                 <div className={`riskBlock ${answers.third.risk6.cat === 0 ? 'active' : ''}`}>
                                    <div className="riskTitle">
                                       <h2>Риск: Выплата долгов продавцом</h2>
                                    </div>
                                    <div className="conclusionOff">
                                       <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                       <h2>Риска нет</h2>
                                    </div>
                                 </div>
                              )}
                              {answers.third.risk7.cat === 0 && (
                                 <div className={`riskBlock ${answers.third.risk7.cat === 0 ? 'active' : ''}`}>
                                    <div className="riskTitle">
                                       <h2>Риск: Причастность к экстремизму и другим преступлениям</h2>
                                    </div>
                                    <div className="conclusionOff">
                                       <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                       <h2>Риска нет</h2>
                                    </div>
                                 </div>
                              )}
                              {answers.third.risk9.cat === 0 && (
                                 <div className={`riskBlock ${answers.third.risk9.cat === 0 ? 'active' : ''}`}>
                                    <div className="riskTitle">
                                       <h2>Риск: Продавец-Ответчик в судебном споре</h2>
                                    </div>
                                    <div className="conclusionOff">
                                       <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                       <h2>Риска нет</h2>
                                    </div>
                                 </div>
                              )}
                              {answers.third.risk13.q1.cat === 0 && (
                                 <div className={`riskBlock ${answers.third.risk13.q1.cat === 0 ? 'active' : ''}`}>
                                    <div className="riskTitle">
                                       <h2>Риск: Недееспособность продавца</h2>
                                    </div>
                                    <div className="conclusionOff">
                                       <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                       <h2>Риска нет</h2>
                                    </div>
                                 </div>
                              )}
                              <div className="notPassed">
                                 <h3>Есть вопросы, на которые Вы не ответили:</h3>
                                 <div style={{marginLeft: "30px"}}>
                                    {answers.first.risk1.cat === -1 && (
                                       <div>
                                          <h4> Риск: Право супруга на объект</h4>
                                       </div>
                                    )}
                                    {answers.first.risk10.cat === -1 && (
                                       <div>
                                          <h4> Риск: Право собственности продавца</h4>
                                       </div>
                                    )}
                                    {answers.second.risk2.cat === -1 && (
                                       <div>
                                          <h4> Риск: Границы объекта </h4>
                                       </div>
                                    )}
                                    {answers.first.risk12.cat === -1 && (
                                       <div>
                                          <h4> Риск: Генеральная доверенность </h4>
                                       </div>
                                    )}
                                    {answers.second.risk3.cat === -1 && (
                                       <div>
                                          <h4> Риск: Целевое использование объекта</h4>
                                       </div>
                                    )}
                                    {answers.second.risk4.cat === -1 && (
                                       <div>
                                          <h4> Риск: Экология</h4>
                                       </div>
                                    )}
                                    {answers.second.risk8.cat === -1 && (
                                       <div>
                                          <h4> Риск: Юридическая история объекта</h4>
                                       </div>
                                    )}
                                    {answers.second.risk11.cat === -1 && (
                                       <div>
                                          <h4> Риск: Обременения на объект</h4>
                                       </div>
                                    )}
                                    {answers.third.risk5.cat === -1 && (
                                       <div>
                                          <h4> Риск: Банкротство продавца</h4>
                                       </div>
                                    )}
                                    {answers.third.risk6.cat === -1 && (
                                       <div>
                                          <h4> Риск: Выплата долгов продавцом</h4>
                                       </div>
                                    )}
                                    {answers.third.risk7.cat === -1 && (
                                       <div>
                                          <h4> Риск: Экстремизм</h4>
                                       </div>
                                    )}
                                    {answers.third.risk9.cat === -1 && (
                                       <div>
                                          <h4> Риск: Продавец-ответчик в судебном споре</h4>
                                       </div>
                                    )}
                                    {answers.third.risk13.q1.cat === -1 && (
                                       <div>
                                          <h4> Риск: Недееспособность продавца</h4>
                                       </div>
                                    )}
                                 </div>
                              </div>
                              <PDFDownloadLink className="downloadPDF" document={<Report answers={answers}/>}
                                               fileName={"ЗемельКа отчет_" + currentDate}>
                                 {({
                                      blob,
                                      url,
                                      loading,
                                      error
                                   }) => (loading ? 'Загрузка документа...' : 'Скачать PDF отчет')}
                              </PDFDownloadLink>
                              <h2 style={{marginLeft: "3%"}}> Ознакомиться с возможными рисками вы можете в разделе{' '}
                                 <Link to="/handbook">справочник</Link>.
                              </h2>
                              <p className="warning">Информируем Вас, что команда “ЗемельКа” не оказывает влияние на
                                 принятие Вами итогового
                                 решения по заключению сделки и не несет ответственность за это.</p>
                              <div className="warning">
                                 Вся информация актуальна на {currentDate}
                              </div>
                           </div>
                        )}
                     </div>
                  ) : (
                     <div>
                        <h3 className="report-designations">Обозначения:</h3>
                        <div className="reportIcons">
                           <div className="reportIconsInfo">
                              <BsCheckCircle className="conclusionIconInfo" color="green" size={34}/>
                              <h3> — &nbsp;Сделка может быть заключена, риска нет</h3>
                           </div>
                           <div className="reportIconsInfo">
                              <BsDashCircle className="conclusionIconInfo" color="orange" size={34}/>
                              <h3> — &nbsp;Сделка может быть заключена, но есть риск</h3>
                           </div>
                           <div className="reportIconsInfo">
                              <BsXCircle className="conclusionIconInfo" color="red" size={34}/>
                              <h3> — &nbsp;Сделка не может быть заключена</h3>
                           </div>
                        </div>
                        {((answers.first.risk1.cat < 2) && (answers.first.risk10.cat < 2) && (answers.second.risk2.cat < 2) && (answers.second.risk3.cat < 2)
                        && (answers.second.risk4.cat < 2) && (answers.second.risk8.cat < 2) && (answers.second.risk11.cat < 2) && (answers.third.risk5.cat < 2)
                        && (answers.third.risk6.cat < 2) && (answers.third.risk7.cat < 2) && (answers.third.risk9.cat < 2) && (answers.first.risk12.cat < 2)
                        && (answers.third.risk13.q1.cat < 2) && (answers.third.risk13.q2.cat < 2)) ? (
                           <h2 style={{marginLeft: "3%"}}>Есть риски, на которые стоит обратить внимание, но сделка может быть заключена!</h2>
                        ) : (
                           <h2 style={{marginLeft: "3%"}}>Есть высокий риск того, что сделка не может быть заключена!</h2>
                        )}
                        {((answers.first.risk1.cat > -1) && (answers.first.risk10.cat > -1) && (answers.second.risk2.cat > -1) && (answers.second.risk3.cat > -1)
                           && (answers.second.risk4.cat > -1) && (answers.second.risk8.cat > -1) && (answers.second.risk11.cat > -1) && (answers.third.risk5.cat > -1)
                           && (answers.third.risk6.cat > -1) && (answers.third.risk7.cat > -1) && (answers.third.risk9.cat > -1) && (answers.first.risk12.cat > -1)
                           && (answers.third.risk13.q1.cat > -1) && (answers.third.risk13.q2.cat > -1)) ? (
                           <div>
                              <div className={`riskBlock ${answers.first.risk1.cat > -1 ? 'active' : ''}`}>
                                 {answers.first.risk1.cat > -1 && (
                                    <div className="riskBlockAct">
                                       {answers.first.risk1.cat === 0 ? (
                                          <div className="riskBlockStatus">
                                             <div className="riskTitle">
                                                <h2>Риск: Право супруга на объект</h2>
                                             </div>
                                             <div className="conclusionOff">
                                                <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                                <h2>Риска нет</h2>
                                             </div>
                                          </div>
                                       ) : (
                                          <div>
                                             <div className="riskBlockStatus">
                                                <div className="riskTitle">
                                                   <h2>Риск: Право супруга на объект</h2>
                                                </div>
                                                <div className="conclusion">
                                                   <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                                   <h2>{answers.first.risk1.ans}</h2>
                                                </div>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск претензий со стороны супруга Продавца, поэтому: </p>
                                                <p> Необходимо уточнить наличие брачного договора между супругами.
                                                   Нотариальное согласие второго супруга не требуется в случае, если
                                                   заключен брачный договор, в котором прописано условие о праве
                                                   распоряжения земельным участком. </p>
                                                <p> Необходимо выяснить, когда земельный участок был приобретен
                                                   продавцом. Если до брака путем личного приобретения, дарения или
                                                   наследства, то второй супруг не может препятствовать совершению
                                                   сделки; если в браке, то второй супруг должен выразить свое согласие
                                                   на продажу, которое будет нотариально заверено. </p>
                                                <p> Ознакомиться с законодательством вы можете по ссылке:</p>
                                                <Link
                                                   to="https://www.consultant.ru/document/cons_doc_LAW_5142/ec0c88d23cfe0b75563d574872c1457827b3607f/?ysclid=lkb23oaxga358628244"
                                                   target="_blank" rel="noopener noreferrer">
                                                   ГК РФ Статья 256. Общая собственность супругов \ КонсультантПлюс
                                                </Link>
                                                &nbsp;(ч. 1 ст. 256 ГК РФ)
                                                <p> Попросите Продавца обратиться к нотариусу для получения
                                                   нотариального согласия. <br/>
                                                   Записаться на прием к нотариусу можно на Госуслугах по ссылке: <br/>
                                                   <Link
                                                      to="https://www.gosuslugi.ru/help/faq/notary/102751"
                                                      target="_blank" rel="noopener noreferrer">
                                                      https://www.gosuslugi.ru/help/faq/notary/102751
                                                   </Link>
                                                </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.first.risk10.cat > -1 ? 'active' : ''}`}>
                                 {answers.first.risk10.cat > -1 && (
                                    <div className="riskBlockAct">
                                       {answers.first.risk10.cat === 0 ? (
                                          <div className="riskBlockStatus">
                                             <div className="riskTitle">
                                                <h2>Риск: Право собственности продавца</h2>
                                             </div>
                                             <div className="conclusionOff">
                                                <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                                <h2>Риска нет</h2>
                                             </div>
                                          </div>
                                       ) : (
                                          <div>
                                             <div className="riskBlockStatus">
                                                <div className="riskTitle">
                                                   <h2>Риск: Право собственности продавца</h2>
                                                </div>
                                                <div className="conclusion">
                                                   <BsDashCircle className="conclusionIcon" color="red" size={36}/>
                                                   <h2>{answers.first.risk10.ans}</h2>
                                                </div>
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
                                                <p>На любой зарегистрированный объект недвижимости можно получить
                                                   выписку из ЕГРН, даже если у собственника ее никогда не было.<br/>
                                                   Ознакомиться с законодательством Вы можете по ссылке:<br/>
                                                   <Link
                                                      to="https://www.consultant.ru/document/cons_doc_LAW_182661/e064cc95b1bdffa4d12abb92fdfc56dea94198df/"
                                                      target="_blank" rel="noopener noreferrer">
                                                      Статья 62. Порядок предоставления сведений, содержащихся в Едином
                                                      государственном реестре недвижимости \ КонсультантПлюс
                                                   </Link>
                                                   &nbsp;(ст. 62 ГК РФ)
                                                </p>
                                                <p> На любой зарегистрированный объект недвижимости можно получить
                                                   выписку из ЕГРН, даже если у собственника ее никогда не было.
                                                   Заказать выписку Вы (или Продавец) можете, перейдя по ссылке:&nbsp;
                                                   <Link
                                                      to="https://rosreestr.gov.ru/eservices/request_info_from_egrn/"
                                                      target="_blank" rel="noopener noreferrer">
                                                      https://https://rosreestr.gov.ru/eservices/request_info_from_egrn/
                                                   </Link></p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.first.risk12.cat > -1 ? 'active' : ''}`}>
                                 {answers.first.risk12.cat > -1 && (
                                    <div className="riskBlockAct">
                                       {answers.first.risk12.cat === 0 ? (
                                          <div className='riskBlockStatus'>
                                             <div className="riskTitle">
                                                <h2>Риск: Генеральная доверенность</h2>
                                             </div>
                                             <div className="conclusionOff">
                                                <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                                <h2>Риска нет</h2>
                                             </div>
                                          </div>
                                       ) : (
                                          <div>
                                             <div className="riskBlockStatus">
                                                <div className="riskTitle">
                                                   <h2>Риск: Генеральная доверенность</h2>
                                                </div>
                                                <div className="conclusion">
                                                   <BsDashCircle className="conclusionIcon" color="red" size={36}/>
                                                   <h2>{answers.first.risk12.ans}</h2>
                                                </div>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск, что генеральная доверенность не является достоверной,
                                                   поэтому: </p>
                                                <p> Проверьте генеральную доверенность по ссылке:&nbsp;
                                                   <Link
                                                      to="https://reestr-dover.ru/"
                                                      target="_blank" rel="noopener noreferrer">
                                                      https://reestr-dover.ru/
                                                   </Link>
                                                </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.second.risk2.cat > -1 ? 'active' : ''}`}>
                                 {answers.second.risk2.cat > -1 && (
                                    <div className="riskBlockAct">
                                       {answers.second.risk2.cat === 0 ? (
                                          <div className='riskBlockStatus'>
                                             <div className="riskTitle">
                                                <h2>Риск: Границы объекта</h2>
                                             </div>
                                             <div className="conclusionOff">
                                                <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                                <h2>Риска нет</h2>
                                             </div>
                                          </div>
                                       ) : (
                                          <div>
                                             <div className="riskBlockStatus">
                                                <div className="riskTitle">
                                                   <h2>Риск: Границы объекта</h2>
                                                </div>
                                                <div className="conclusion">
                                                   <BsDashCircle className="conclusionIcon" color="red" size={36}/>
                                                   <h2>{answers.second.risk2.ans}</h2>
                                                </div>
                                             </div>
                                             {answers.second.risk2.number === 1 ? (
                                                <div>
                                                   <div className="Rec">
                                                      <h3>Рекомендации:</h3>
                                                      <p> Есть риск, что межевание не проведено, поэтому: </p>
                                                      <p> Необходимо провести межевание земельного участка и поставить
                                                         его на кадастровый учет. Попросите Продавца воспользоваться
                                                         услугами кадастрового инженера. Он поможет провести проверку
                                                         межевания. </p>
                                                      <p> Аккредитованные кадастровые инженеры есть в реестре. </p>
                                                      <p> Ознакомиться с ним Вы можете по ссылке: </p>
                                                      <Link
                                                         to="https://rosreestr.gov.ru/"
                                                         target="_blank" rel="noopener noreferrer">
                                                         https://rosreestr.gov.ru/
                                                      </Link>
                                                   </div>
                                                </div>
                                             ) : (
                                                <div>
                                                   <div className="Rec">
                                                      <h3>Рекомендации:</h3>
                                                      <p> Есть риск, что межевание не соответствует выписке из ЕГРН,
                                                         поэтому: </p>
                                                      <p> Проверьте межевой план и акт согласования границ с помощью
                                                         публичной кадастровой карты
                                                         Росреестра: <br/>
                                                         Ссылка №1&nbsp;
                                                         <Link
                                                            to="https://www.gosuslugi.ru/378659/1/info"
                                                            target="_blank" rel="noopener noreferrer">
                                                            https://www.gosuslugi.ru/378659/1/info
                                                         </Link> <br/>
                                                         Ссылка №2&nbsp;
                                                         <Link
                                                            to="https://pkk.rosreestr.ru/?source=subscribe#/search/63.60201437832657,65.56074746184491/4/@bzbws4844"
                                                            target="_blank" rel="noopener noreferrer">
                                                            https://pkk.rosreestr.ru/?source=subscribe#/search/63.60201437832657,65.56074746184491/4/@bzbws4844
                                                         </Link>
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
                              <div className={`riskBlock ${answers.second.risk3.cat > -1 ? 'active' : ''}`}>
                                 {answers.second.risk3.cat > -1 && (
                                    <div className="riskBlockAct">
                                       {answers.second.risk3.cat === 0 ? (
                                          <div className='riskBlockStatus'>
                                             <div className="riskTitle">
                                                <h2>Риск: Целевое использование объекта</h2>
                                             </div>
                                             <div className="conclusionOff">
                                                <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                                <h2>Риска нет</h2>
                                             </div>
                                          </div>
                                       ) : (
                                          <div>
                                             <div className="riskBlockStatus">
                                                <div className="riskTitle">
                                                   <h2>Риск: Целевое использование объекта</h2>
                                                </div>
                                                <div className="conclusion">
                                                   <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                                   <h2>{answers.second.risk3.ans}</h2>
                                                </div>
                                             </div>
                                             {answers.second.risk3.number === 1 ? (
                                                <div>
                                                   <div className="Rec">
                                                      <h3>Рекомендации:</h3>
                                                      <p> Есть риск, что использование объекта для ваших нужд
                                                         недопустимо, поэтому: </p>
                                                      <p>Вы можете заключить данную сделку, однако ваши планы на
                                                         земельный участок могут быть не реализованы.
                                                         Вид разрешенного использования земельного участка предполагает,
                                                         что объект должен использоваться в соответствии с назначением и
                                                         требованиями. Это ограничивает свободу ваших действий при
                                                         пользовании объектом.
                                                      </p>

                                                   </div>
                                                </div>
                                             ) : (
                                                <div>
                                                   {answers.second.risk3.number === 2 ? (
                                                      <div>
                                                         <div className="Rec">
                                                            <h3>Рекомендации:</h3>
                                                            <p>Есть риск, что разрешение на использование объекта не
                                                               подтверждено официально:</p>
                                                            <p>Проверьте с помощью публичной кадастровой карты
                                                               Росреестра. </p>
                                                            <p>Ссылка №1:</p>
                                                            <p><Link
                                                               to="https://www.gosuslugi.ru/378659/1/info"
                                                               target="_blank" rel="noopener noreferrer">
                                                               https://www.gosuslugi.ru/378659/1/info
                                                            </Link>
                                                            </p>
                                                            <p>Ссылка №2:</p>
                                                            <p><Link
                                                               to="https://pkk.rosreestr.ru/?source=subscribe#/search/63.60201437832657,65.56074746184491/4/@bzbws4844"
                                                               target="_blank" rel="noopener noreferrer">
                                                               https://pkk.rosreestr.ru/?source=subscribe#/search/63.60201437832657,65.56074746184491/4/@bzbws4844
                                                            </Link>
                                                            </p>
                                                            <p>Проверьте генеральный план развития местности,
                                                               утвержденный местной администрацией.
                                                               Например, Генплан Москвы до 2035 г. можно посмотреть по
                                                               ссылке:</p>
                                                            <p><Link
                                                               to="https://genplanmos.ru/project/generalnyy_plan_moskvy_do_2035_goda/"
                                                               target="_blank" rel="noopener noreferrer">
                                                               https://genplanmos.ru/project/generalnyy_plan_moskvy_do_2035_goda/
                                                            </Link>
                                                            </p>
                                                            <p>Проверьте Правила землепользования и застройки. Например,
                                                               Правила землепользования и застройки города Москвы можно
                                                               посмотреть по ссылке: </p>
                                                            <p><Link
                                                               to="https://www.mos.ru/mka/documents/pravila-zemlepolzovaniya-i-zastrojki-goroda-moskvy/"
                                                               target="_blank" rel="noopener noreferrer">
                                                               https://www.mos.ru/mka/documents/pravila-zemlepolzovaniya-i-zastrojki-goroda-moskvy/
                                                            </Link>
                                                            </p>
                                                         </div>
                                                      </div>
                                                   ) : (
                                                      <div>
                                                         <div className="Rec">
                                                            <h3>Рекомендации:</h3>
                                                            <p> Есть риск, что объект попадает в зону особого
                                                               назначения, поэтому: </p>
                                                            <p> Проверьте информацию по земельному участку на портале
                                                               ФГИС ТП по ссылке:&nbsp;
                                                               <Link
                                                                  to="https://fgistp.economy.gov.ru/"
                                                                  target="_blank" rel="noopener noreferrer">
                                                                  https://fgistp.economy.gov.ru/
                                                               </Link>
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
                              <div className={`riskBlock ${answers.second.risk4.cat > -1 ? 'active' : ''}`}>
                                 {answers.second.risk4.cat > -1 && (
                                    <div className="riskBlockAct">
                                       {answers.second.risk4.cat === 0 ? (
                                          <div className='riskBlockStatus'>
                                             <div className="riskTitle">
                                                <h2>Риск: Экология</h2>
                                             </div>
                                             <div className="conclusionOff">
                                                <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                                <h2>Риска нет</h2>
                                             </div>
                                          </div>
                                       ) : (
                                          <div>
                                             <div className="riskBlockStatus">
                                                <div className="riskTitle">
                                                   <h2>Риск: Экология</h2>
                                                </div>
                                                <div className="conclusion">
                                                   <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                                   <h2>{answers.second.risk4.ans}</h2>
                                                </div>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p>Есть риск того, что Вы не проинформированы об экологической ситуации
                                                   земельного участка, поэтому: </p>
                                                <p>Запросите информацию об экологической ситуации по ссылке:&nbsp;
                                                   <Link
                                                      to="https://www.gosuslugi.ru/72281/1/info"
                                                      target="_blank" rel="noopener noreferrer">
                                                      https://www.gosuslugi.ru/72281/1/info
                                                   </Link>
                                                </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.second.risk8.cat > -1 ? 'active' : ''}`}>
                                 {answers.second.risk8.cat > -1 && (
                                    <div className="riskBlockAct">
                                       {answers.second.risk8.cat === 0 ? (
                                          <div className='riskBlockStatus'>
                                             <div className="riskTitle">
                                                <h2>Риск: Юридическая история объекта</h2>
                                             </div>
                                             <div className="conclusionOff">
                                                <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                                <h2>Риска нет</h2>
                                             </div>
                                          </div>
                                       ) : (
                                          <div>
                                             <div className="riskBlockStatus">
                                                <div className="riskTitle">
                                                   <h2>Риск: Юридическая история объекта</h2>
                                                </div>
                                                <div className="conclusion">
                                                   <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                                   <h2>{answers.second.risk8.ans}</h2>
                                                </div>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск того, что Вы не проинформированы о юридической истории
                                                   земельного участка, поэтому: </p>
                                                <p> Ознакомьтесь с информацией о переходе прав на объект недвижимости,
                                                   заказав выписку из ЕГРН по ссылке:&nbsp;
                                                   <Link
                                                      to="https://rosreestr.gov.ru/eservices/request_info_from_egrn/"
                                                      target="_blank" rel="noopener noreferrer">
                                                      https://rosreestr.gov.ru/eservices/request_info_from_egrn/
                                                   </Link>
                                                </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.second.risk11.cat > -1 ? 'active' : ''}`}>
                                 {answers.second.risk11.cat > -1 && (
                                    <div className="riskBlockAct">
                                       {answers.second.risk11.cat === 0 ? (
                                          <div className='riskBlockStatus'>
                                             <div className="riskTitle">
                                                <h2>Риск: Обременения на объект</h2>
                                             </div>
                                             <div className="conclusionOff">
                                                <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                                <h2>Риска нет</h2>
                                             </div>
                                          </div>
                                       ) : (
                                          <div>
                                             <div className="riskBlockStatus">
                                                <div className="riskTitle">
                                                   <h2>Риск: Обременения на объект</h2>
                                                </div>
                                                <div className="conclusion">
                                                   <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                                   <h2>{answers.second.risk11.ans}</h2>
                                                </div>
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
                              <div className={`riskBlock ${answers.third.risk5.cat > -1 ? 'active' : ''}`}>
                                 {answers.third.risk5.cat > -1 && (
                                    <div className="riskBlockAct">
                                       {answers.third.risk5.cat === 0 ? (
                                          <div className='riskBlockStatus'>
                                             <div className="riskTitle">
                                                <h2>Риск: Банкротство продавца</h2>
                                             </div>
                                             <div className="conclusionOff">
                                                <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                                <h2>Риска нет</h2>
                                             </div>
                                          </div>
                                       ) : (
                                          <div>
                                             <div className="riskBlockStatus">
                                                <div className="riskTitle">
                                                   <h2>Риск: Банкротство продавца</h2>
                                                </div>
                                                <div className="conclusion">
                                                   <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                                   <h2>{answers.third.risk5.ans}</h2>
                                                </div>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск, что Продавец является банкротом, поэтому: </p>
                                                <p> Проверьте наличие Продавца в списках банкротов в соотвествующем
                                                   реестре:&nbsp;
                                                   <Link
                                                      to="https://old.bankrot.fedresurs.ru/?ysclid=ljpmeb4npx361137021&attempt=2"
                                                      target="_blank" rel="noopener noreferrer">
                                                      https://old.bankrot.fedresurs.ru/?ysclid=ljpmeb4npx361137021&attempt=2
                                                   </Link>
                                                </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.third.risk6.cat > -1 ? 'active' : ''}`}>
                                 {answers.third.risk6.cat > -1 && (
                                    <div className="riskBlockAct">
                                       {answers.third.risk6.cat === 0 ? (
                                          <div className='riskBlockStatus'>
                                             <div className="riskTitle">
                                                <h2>Риск: Выплата долгов продавцом</h2>
                                             </div>
                                             <div className="conclusionOff">
                                                <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                                <h2>Риска нет</h2>
                                             </div>
                                          </div>
                                       ) : (
                                          <div>
                                             <div className="riskBlockStatus">
                                                <div className="riskTitle">
                                                   <h2>Риск: Выплата долгов продавцом</h2>
                                                </div>
                                                <div className="conclusion">
                                                   <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                                   <h2>{answers.third.risk6.ans}</h2>
                                                </div>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск, что Продавец является злостным должником, поэтому: </p>
                                                <p> Проверьте Продавца в соответствующем реестре:&nbsp;
                                                   <Link
                                                      to="https://fssp.gov.ru/"
                                                      target="_blank" rel="noopener noreferrer">
                                                      https://fssp.gov.ru/
                                                   </Link>
                                                </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.third.risk7.cat > -1 ? 'active' : ''}`}>
                                 {answers.third.risk7.cat > -1 && (
                                    <div className="riskBlockAct">
                                       {answers.third.risk7.cat === 0 ? (
                                          <div className='riskBlockStatus'>
                                             <div className="riskTitle">
                                                <h2>Риск: Причастность к экстремизму и другим преступлениям</h2>
                                             </div>
                                             <div className="conclusionOff">
                                                <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                                <h2>Риска нет</h2>
                                             </div>
                                          </div>
                                       ) : (
                                          <div>
                                             <div className="riskBlockStatus">
                                                <div className="riskTitle">
                                                   <h2>Риск: Причастность к экстремизму и другим преступлениям</h2>
                                                </div>
                                                <div className="conclusion">
                                                   <BsDashCircle className="conclusionIcon" color="red" size={36}/>
                                                   <h2>{answers.third.risk7.ans}</h2>
                                                </div>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск, что Продавец причастен к экстремизму или иным
                                                   преступлениям, поэтому: </p>
                                                <p> Проверьте Продавца в соответствующем реестре лиц, причастных к
                                                   экстремизму:&nbsp;
                                                   <Link
                                                      to="https://www.fedsfm.ru/documents/terr-list?ysclid=ljpmkslzio263245615"
                                                      target="_blank" rel="noopener noreferrer">
                                                      https://www.fedsfm.ru/documents/terr-list?ysclid=ljpmkslzio263245615
                                                   </Link>
                                                </p>
                                                <p> Наличие иных преступлений продавца можно проверить в сервисе МВД
                                                   "Внимание, розыск!":&nbsp;
                                                   <Link
                                                      to="https://мвд.рф/wanted"
                                                      target="_blank" rel="noopener noreferrer">
                                                      https://мвд.рф/wanted
                                                   </Link>
                                                </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.third.risk9.cat > -1 ? 'active' : ''}`}>
                                 {answers.third.risk9.cat > -1 && (
                                    <div className="riskBlockAct">
                                       {answers.third.risk9.cat === 0 ? (
                                          <div className='riskBlockStatus'>
                                             <div className="riskTitle">
                                                <h2>Риск: Продавец-Ответчик в судебном споре</h2>
                                             </div>
                                             <div className="conclusionOff">
                                                <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                                <h2>Риска нет</h2>
                                             </div>
                                          </div>
                                       ) : (
                                          <div>
                                             <div className="riskBlockStatus">
                                                <div className="riskTitle">
                                                   <h2>Риск: Продавец-Ответчик в судебном споре</h2>
                                                </div>
                                                <div className="conclusion">
                                                   <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                                   <h2>{answers.third.risk9.ans}</h2>
                                                </div>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск, что Продавец участвует в судебном производстве в качестве
                                                   ответчика, поэтому: </p>
                                                <p> Проверьте продавца в соответствующем реестре:&nbsp;
                                                   <Link
                                                      to="https://mos-gorsud.ru/mgs/services/cases/first-civil"
                                                      target="_blank" rel="noopener noreferrer">
                                                      https://mos-gorsud.ru/mgs/services/cases/first-civil
                                                   </Link>
                                                   <br/>
                                                   Это нужно для того, чтобы удостовериться, что в отношении продавца
                                                   нет возбужденных судебных дел, которые бы могли угрожать совершению
                                                   сделки (например, развод).
                                                </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.third.risk13.q1.cat > -1 ? 'active' : ''}`}>
                                 {answers.third.risk13.q1.cat > -1 && (
                                    <div className="riskBlockAct">
                                       {answers.third.risk13.q1.cat === 0 ? (
                                          <div className='riskBlockStatus'>
                                             <div className="riskTitle">
                                                <h2>Риск: Недееспособность продавца</h2>
                                             </div>
                                             <div className="conclusionOff">
                                                <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                                <h2>Риска нет</h2>
                                             </div>
                                          </div>
                                       ) : (
                                          <div>
                                             <div className="riskBlockStatus">
                                                <div className="riskTitle">
                                                   <h2>Риск: Недееспособность продавца</h2>
                                                </div>
                                                <div className="conclusion">
                                                   <BsDashCircle className="conclusionIcon" color="red" size={36}/>
                                                   <h2>{answers.third.risk13.q1.ans}</h2>
                                                </div>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск, что Продавец является недееспособным, поэтому:</p>
                                                <p> Получите выписку из ЕГРН о признании правообладателя недееспособным
                                                   или ограниченно дееспособным. Инструкция по ссылке:&nbsp;
                                                   <Link
                                                      to="https://www.gosuslugi.ru/help/faq/egrn/101769"
                                                      target="_blank" rel="noopener noreferrer">
                                                      https://www.gosuslugi.ru/help/faq/egrn/101769
                                                   </Link>
                                                </p>
                                                <p> Запросите у Продавца справки из психоневрологического диспансера и
                                                   наркологического диспансера, чтобы удостовериться в его полной
                                                   дееспособности и снять подозрения о невозможности совершения
                                                   осознанных действий. </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <PDFDownloadLink className="downloadPDF" document={<Report answers={answers}/>}
                                               fileName={"ЗемельКа отчет_" + currentDate}>
                                 {({
                                      blob,
                                      url,
                                      loading,
                                      error
                                   }) => (loading ? 'Загрузка документа...' : 'Скачать PDF отчет')}
                              </PDFDownloadLink>
                              <div>
                                 <h2 style={{marginLeft: "3%"}}>
                                    Рекомендуем для более подробного ознакомления с рисками перейти в раздел{' '}
                                    <Link to="/handbook">справочник</Link>!
                                 </h2>
                                 <p className="warning">Информируем Вас, что команда “ЗемельКа” не оказывает влияние на
                                    принятие Вами итогового
                                    решения по заключению сделки и не несет ответственность за это.</p>
                                 <div className="warning">
                                    Вся информация актуальна на {currentDate}
                                 </div>
                              </div>
                           </div>
                        ) : (
                           <div>
                              <div className={`riskBlock ${answers.first.risk1.cat > -1 ? 'active' : ''}`}>
                                 {answers.first.risk1.cat > -1 && (
                                    <div className="riskBlockAct">
                                       {answers.first.risk1.cat === 0 ? (
                                          <div className="riskBlockStatus">
                                             <div className="riskTitle">
                                                <h2>Риск: Право супруга на объект</h2>
                                             </div>
                                             <div className="conclusionOff">
                                                <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                                <h2>Риска нет</h2>
                                             </div>
                                          </div>
                                       ) : (
                                          <div>
                                             <div className="riskBlockStatus">
                                                <div className="riskTitle">
                                                   <h2>Риск: Право супруга на объект</h2>
                                                </div>
                                                <div className="conclusion">
                                                   <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                                   <h2>{answers.first.risk1.ans}</h2>
                                                </div>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск претензий со стороны супруга Продавца, поэтому: </p>
                                                <p> Необходимо уточнить наличие брачного договора между супругами.
                                                   Нотариальное согласие второго супруга не требуется в случае, если
                                                   заключен брачный договор, в котором прописано условие о праве
                                                   распоряжения земельным участком. </p>
                                                <p> Необходимо выяснить, когда земельный участок был приобретен
                                                   продавцом. Если до брака путем личного приобретения, дарения или
                                                   наследства, то второй супруг не может препятствовать совершению
                                                   сделки; если в браке, то второй супруг должен выразить свое согласие
                                                   на продажу, которое будет нотариально заверено. </p>
                                                <p> Ознакомиться с законодательством вы можете по ссылке:</p>
                                                <Link
                                                   to="https://www.consultant.ru/document/cons_doc_LAW_5142/ec0c88d23cfe0b75563d574872c1457827b3607f/?ysclid=lkb23oaxga358628244"
                                                   target="_blank" rel="noopener noreferrer">
                                                   ГК РФ Статья 256. Общая собственность супругов \ КонсультантПлюс
                                                </Link>
                                                &nbsp;(ч. 1 ст. 256 ГК РФ)
                                                <p> Попросите Продавца обратиться к нотариусу для получения
                                                   нотариального согласия. <br/>
                                                   Записаться на прием к нотариусу можно на Госуслугах по ссылке: <br/>
                                                   <Link
                                                      to="https://www.gosuslugi.ru/help/faq/notary/102751"
                                                      target="_blank" rel="noopener noreferrer">
                                                      https://www.gosuslugi.ru/help/faq/notary/102751
                                                   </Link>
                                                </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.first.risk10.cat > -1 ? 'active' : ''}`}>
                                 {answers.first.risk10.cat > -1 && (
                                    <div className="riskBlockAct">
                                       {answers.first.risk10.cat === 0 ? (
                                          <div className="riskBlockStatus">
                                             <div className="riskTitle">
                                                <h2>Риск: Право собственности продавца</h2>
                                             </div>
                                             <div className="conclusionOff">
                                                <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                                <h2>Риска нет</h2>
                                             </div>
                                          </div>
                                       ) : (
                                          <div>
                                             <div className="riskBlockStatus">
                                                <div className="riskTitle">
                                                   <h2>Риск: Право собственности продавца</h2>
                                                </div>
                                                <div className="conclusion">
                                                   <BsDashCircle className="conclusionIcon" color="red" size={36}/>
                                                   <h2>{answers.first.risk10.ans}</h2>
                                                </div>
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
                                                <p>На любой зарегистрированный объект недвижимости можно получить
                                                   выписку из ЕГРН, даже если у собственника ее никогда не было.<br/>
                                                   Ознакомиться с законодательством Вы можете по ссылке:<br/>
                                                   <Link
                                                      to="https://www.consultant.ru/document/cons_doc_LAW_182661/e064cc95b1bdffa4d12abb92fdfc56dea94198df/"
                                                      target="_blank" rel="noopener noreferrer">
                                                      Статья 62. Порядок предоставления сведений, содержащихся в Едином
                                                      государственном реестре недвижимости \ КонсультантПлюс
                                                   </Link>
                                                   &nbsp;(ст. 62 ГК РФ)
                                                </p>
                                                <p> На любой зарегистрированный объект недвижимости можно получить
                                                   выписку из ЕГРН, даже если у собственника ее никогда не было.
                                                   Заказать выписку Вы (или Продавец) можете, перейдя по ссылке:&nbsp;
                                                   <Link
                                                      to="https://rosreestr.gov.ru/eservices/request_info_from_egrn/"
                                                      target="_blank" rel="noopener noreferrer">
                                                      https://rosreestr.gov.ru/eservices/request_info_from_egrn/
                                                   </Link></p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.first.risk12.cat > -1 ? 'active' : ''}`}>
                                 {answers.first.risk12.cat > -1 && (
                                    <div className="riskBlockAct">
                                       {answers.first.risk12.cat === 0 ? (
                                          <div className='riskBlockStatus'>
                                             <div className="riskTitle">
                                                <h2>Риск: Генеральная доверенность</h2>
                                             </div>
                                             <div className="conclusionOff">
                                                <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                                <h2>Риска нет</h2>
                                             </div>
                                          </div>
                                       ) : (
                                          <div>
                                             <div className="riskBlockStatus">
                                                <div className="riskTitle">
                                                   <h2>Риск: Генеральная доверенность</h2>
                                                </div>
                                                <div className="conclusion">
                                                   <BsDashCircle className="conclusionIcon" color="red" size={36}/>
                                                   <h2>{answers.first.risk12.ans}</h2>
                                                </div>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск, что генеральная доверенность не является достоверной,
                                                   поэтому: </p>
                                                <p> Проверьте генеральную доверенность по ссылке:&nbsp;
                                                   <Link
                                                      to="https://reestr-dover.ru/"
                                                      target="_blank" rel="noopener noreferrer">
                                                      https://reestr-dover.ru/
                                                   </Link>
                                                </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.second.risk2.cat > -1 ? 'active' : ''}`}>
                                 {answers.second.risk2.cat > -1 && (
                                    <div className="riskBlockAct">
                                       {answers.second.risk2.cat === 0 ? (
                                          <div className='riskBlockStatus'>
                                             <div className="riskTitle">
                                                <h2>Риск: Границы объекта</h2>
                                             </div>
                                             <div className="conclusionOff">
                                                <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                                <h2>Риска нет</h2>
                                             </div>
                                          </div>
                                       ) : (
                                          <div>
                                             <div className="riskBlockStatus">
                                                <div className="riskTitle">
                                                   <h2>Риск: Границы объекта</h2>
                                                </div>
                                                <div className="conclusion">
                                                   <BsDashCircle className="conclusionIcon" color="red" size={36}/>
                                                   <h2>{answers.second.risk2.ans}</h2>
                                                </div>
                                             </div>
                                             {answers.second.risk2.number === 1 ? (
                                                <div>
                                                   <div className="Rec">
                                                      <h3>Рекомендации:</h3>
                                                      <p> Есть риск, что межевание не проведено, поэтому: </p>
                                                      <p> Необходимо провести межевание земельного участка и поставить
                                                         его на кадастровый учет. Попросите Продавца воспользоваться
                                                         услугами кадастрового инженера. Он поможет провести проверку
                                                         межевания. </p>
                                                      <p> Аккредитованные кадастровые инженеры есть в реестре. </p>
                                                      <p> Ознакомиться с ним Вы можете по ссылке: </p>
                                                      <Link
                                                         to="https://rosreestr.gov.ru/"
                                                         target="_blank" rel="noopener noreferrer">
                                                         https://rosreestr.gov.ru/
                                                      </Link>
                                                   </div>
                                                </div>
                                             ) : (
                                                <div>
                                                   <div className="Rec">
                                                      <h3>Рекомендации:</h3>
                                                      <p> Есть риск, что межевание не соответствует выписке из ЕГРН,
                                                         поэтому: </p>
                                                      <p> Проверьте межевой план и акт согласования границ с помощью
                                                         публичной кадастровой карты
                                                         Росреестра: <br/>
                                                         Ссылка №1&nbsp;
                                                         <Link
                                                            to="https://www.gosuslugi.ru/378659/1/info"
                                                            target="_blank" rel="noopener noreferrer">
                                                            https://www.gosuslugi.ru/378659/1/info
                                                         </Link> <br/>
                                                         Ссылка №2&nbsp;
                                                         <Link
                                                            to="https://pkk.rosreestr.ru/?source=subscribe#/search/63.60201437832657,65.56074746184491/4/@bzbws4844"
                                                            target="_blank" rel="noopener noreferrer">
                                                            https://pkk.rosreestr.ru/?source=subscribe#/search/63.60201437832657,65.56074746184491/4/@bzbws4844
                                                         </Link>
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
                              <div className={`riskBlock ${answers.second.risk3.cat > -1 ? 'active' : ''}`}>
                                 {answers.second.risk3.cat > -1 && (
                                    <div className="riskBlockAct">
                                       {answers.second.risk3.cat === 0 ? (
                                          <div className='riskBlockStatus'>
                                             <div className="riskTitle">
                                                <h2>Риск: Целевое использование объекта</h2>
                                             </div>
                                             <div className="conclusionOff">
                                                <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                                <h2>Риска нет</h2>
                                             </div>
                                          </div>
                                       ) : (
                                          <div>
                                             <div className="riskBlockStatus">
                                                <div className="riskTitle">
                                                   <h2>Риск: Целевое использование объекта</h2>
                                                </div>
                                                <div className="conclusion">
                                                   <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                                   <h2>{answers.second.risk3.ans}</h2>
                                                </div>
                                             </div>
                                             {answers.second.risk3.number === 1 ? (
                                                <div>
                                                   <div className="Rec">
                                                      <h3>Рекомендации:</h3>
                                                      <p> Есть риск, что использование объекта для ваших нужд
                                                         недопустимо, поэтому: </p>
                                                      <p>Вы можете заключить данную сделку, однако ваши планы на
                                                         земельный участок могут быть не реализованы.
                                                         Вид разрешенного использования земельного участка предполагает,
                                                         что объект должен использоваться в соответствии с назначением и
                                                         требованиями. Это ограничивает свободу ваших действий при
                                                         пользовании объектом.
                                                      </p>

                                                   </div>
                                                </div>
                                             ) : (
                                                <div>
                                                   {answers.second.risk3.number === 2 ? (
                                                      <div>
                                                         <div className="Rec">
                                                            <h3>Рекомендации:</h3>
                                                            <p>Есть риск, что разрешение на использование объекта не
                                                               подтверждено официально:</p>
                                                            <p>Проверьте с помощью публичной кадастровой карты
                                                               Росреестра. </p>
                                                            <p>Ссылка №1:</p>
                                                            <p><Link
                                                               to="https://www.gosuslugi.ru/378659/1/info"
                                                               target="_blank" rel="noopener noreferrer">
                                                               https://www.gosuslugi.ru/378659/1/info
                                                            </Link>
                                                            </p>
                                                            <p>Ссылка №2:</p>
                                                            <p><Link
                                                               to="https://pkk.rosreestr.ru/?source=subscribe#/search/63.60201437832657,65.56074746184491/4/@bzbws4844"
                                                               target="_blank" rel="noopener noreferrer">
                                                               https://pkk.rosreestr.ru/?source=subscribe#/search/63.60201437832657,65.56074746184491/4/@bzbws4844
                                                            </Link>
                                                            </p>
                                                            <p>Проверьте генеральный план развития местности,
                                                               утвержденный местной администрацией.
                                                               Например, Генплан Москвы до 2035 г. можно посмотреть по
                                                               ссылке:</p>
                                                            <p><Link
                                                               to="https://genplanmos.ru/project/generalnyy_plan_moskvy_do_2035_goda/"
                                                               target="_blank" rel="noopener noreferrer">
                                                               https://genplanmos.ru/project/generalnyy_plan_moskvy_do_2035_goda/
                                                            </Link>
                                                            </p>
                                                            <p>Проверьте Правила землепользования и застройки. Например,
                                                               Правила землепользования и застройки города Москвы можно
                                                               посмотреть по ссылке: </p>
                                                            <p><Link
                                                               to="https://www.mos.ru/mka/documents/pravila-zemlepolzovaniya-i-zastrojki-goroda-moskvy/"
                                                               target="_blank" rel="noopener noreferrer">
                                                               https://www.mos.ru/mka/documents/pravila-zemlepolzovaniya-i-zastrojki-goroda-moskvy/
                                                            </Link>
                                                            </p>
                                                         </div>
                                                      </div>
                                                   ) : (
                                                      <div>
                                                         <div className="Rec">
                                                            <h3>Рекомендации:</h3>
                                                            <p> Есть риск, что объект попадает в зону особого
                                                               назначения, поэтому: </p>
                                                            <p> Проверьте информацию по земельному участку на портале
                                                               ФГИС ТП по ссылке:&nbsp;
                                                               <Link
                                                                  to="https://fgistp.economy.gov.ru/"
                                                                  target="_blank" rel="noopener noreferrer">
                                                                  https://fgistp.economy.gov.ru/
                                                               </Link>
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
                              <div className={`riskBlock ${answers.second.risk4.cat > -1 ? 'active' : ''}`}>
                                 {answers.second.risk4.cat > -1 && (
                                    <div className="riskBlockAct">
                                       {answers.second.risk4.cat === 0 ? (
                                          <div className='riskBlockStatus'>
                                             <div className="riskTitle">
                                                <h2>Риск: Экология</h2>
                                             </div>
                                             <div className="conclusionOff">
                                                <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                                <h2>Риска нет</h2>
                                             </div>
                                          </div>
                                       ) : (
                                          <div>
                                             <div className="riskBlockStatus">
                                                <div className="riskTitle">
                                                   <h2>Риск: Экология</h2>
                                                </div>
                                                <div className="conclusion">
                                                   <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                                   <h2>{answers.second.risk4.ans}</h2>
                                                </div>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p>Есть риск того, что Вы не проинформированы об экологической ситуации
                                                   земельного участка, поэтому: </p>
                                                <p>Запросите информацию об экологической ситуации по ссылке:&nbsp;
                                                   <Link
                                                      to="https://www.gosuslugi.ru/72281/1/info"
                                                      target="_blank" rel="noopener noreferrer">
                                                      https://www.gosuslugi.ru/72281/1/info
                                                   </Link>
                                                </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.second.risk8.cat > -1 ? 'active' : ''}`}>
                                 {answers.second.risk8.cat > -1 && (
                                    <div className="riskBlockAct">
                                       {answers.second.risk8.cat === 0 ? (
                                          <div className='riskBlockStatus'>
                                             <div className="riskTitle">
                                                <h2>Риск: Юридическая история объекта</h2>
                                             </div>
                                             <div className="conclusionOff">
                                                <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                                <h2>Риска нет</h2>
                                             </div>
                                          </div>
                                       ) : (
                                          <div>
                                             <div className="riskBlockStatus">
                                                <div className="riskTitle">
                                                   <h2>Риск: Юридическая история объекта</h2>
                                                </div>
                                                <div className="conclusion">
                                                   <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                                   <h2>{answers.second.risk8.ans}</h2>
                                                </div>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск того, что Вы не проинформированы о юридической истории
                                                   земельного участка, поэтому: </p>
                                                <p> Ознакомьтесь с информацией о переходе прав на объект недвижимости,
                                                   заказав выписку из ЕГРН по ссылке:&nbsp;
                                                   <Link
                                                      to="https://rosreestr.gov.ru/eservices/request_info_from_egrn/"
                                                      target="_blank" rel="noopener noreferrer">
                                                      https://rosreestr.gov.ru/eservices/request_info_from_egrn/
                                                   </Link>
                                                </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.second.risk11.cat > -1 ? 'active' : ''}`}>
                                 {answers.second.risk11.cat > -1 && (
                                    <div className="riskBlockAct">
                                       {answers.second.risk11.cat === 0 ? (
                                          <div className='riskBlockStatus'>
                                             <div className="riskTitle">
                                                <h2>Риск: Обременения на объект</h2>
                                             </div>
                                             <div className="conclusionOff">
                                                <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                                <h2>Риска нет</h2>
                                             </div>
                                          </div>
                                       ) : (
                                          <div>
                                             <div className="riskBlockStatus">
                                                <div className="riskTitle">
                                                   <h2>Риск: Обременения на объект</h2>
                                                </div>
                                                <div className="conclusion">
                                                   <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                                   <h2>{answers.second.risk11.ans}</h2>
                                                </div>
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
                              <div className={`riskBlock ${answers.third.risk5.cat > -1 ? 'active' : ''}`}>
                                 {answers.third.risk5.cat > -1 && (
                                    <div className="riskBlockAct">
                                       {answers.third.risk5.cat === 0 ? (
                                          <div className='riskBlockStatus'>
                                             <div className="riskTitle">
                                                <h2>Риск: Банкротство продавца</h2>
                                             </div>
                                             <div className="conclusionOff">
                                                <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                                <h2>Риска нет</h2>
                                             </div>
                                          </div>
                                       ) : (
                                          <div>
                                             <div className="riskBlockStatus">
                                                <div className="riskTitle">
                                                   <h2>Риск: Банкротство продавца</h2>
                                                </div>
                                                <div className="conclusion">
                                                   <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                                   <h2>{answers.third.risk5.ans}</h2>
                                                </div>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск, что Продавец является банкротом, поэтому: </p>
                                                <p> Проверьте наличие Продавца в списках банкротов в соотвествующем
                                                   реестре:&nbsp;
                                                   <Link
                                                      to="https://old.bankrot.fedresurs.ru/?ysclid=ljpmeb4npx361137021&attempt=2"
                                                      target="_blank" rel="noopener noreferrer">
                                                      https://old.bankrot.fedresurs.ru/?ysclid=ljpmeb4npx361137021&attempt=2
                                                   </Link>
                                                </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.third.risk6.cat > -1 ? 'active' : ''}`}>
                                 {answers.third.risk6.cat > -1 && (
                                    <div className="riskBlockAct">
                                       {answers.third.risk6.cat === 0 ? (
                                          <div className='riskBlockStatus'>
                                             <div className="riskTitle">
                                                <h2>Риск: Выплата долгов продавцом</h2>
                                             </div>
                                             <div className="conclusionOff">
                                                <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                                <h2>Риска нет</h2>
                                             </div>
                                          </div>
                                       ) : (
                                          <div>
                                             <div className="riskBlockStatus">
                                                <div className="riskTitle">
                                                   <h2>Риск: Выплата долгов продавцом</h2>
                                                </div>
                                                <div className="conclusion">
                                                   <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                                   <h2>{answers.third.risk6.ans}</h2>
                                                </div>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск, что Продавец является злостным должником, поэтому: </p>
                                                <p> Проверьте Продавца в соответствующем реестре:&nbsp;
                                                   <Link
                                                      to="https://fssp.gov.ru/"
                                                      target="_blank" rel="noopener noreferrer">
                                                      https://fssp.gov.ru/
                                                   </Link>
                                                </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.third.risk7.cat > -1 ? 'active' : ''}`}>
                                 {answers.third.risk7.cat > -1 && (
                                    <div className="riskBlockAct">
                                       {answers.third.risk7.cat === 0 ? (
                                          <div className='riskBlockStatus'>
                                             <div className="riskTitle">
                                                <h2>Риск: Причастность к экстремизму и другим преступлениям</h2>
                                             </div>
                                             <div className="conclusionOff">
                                                <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                                <h2>Риска нет</h2>
                                             </div>
                                          </div>
                                       ) : (
                                          <div>
                                             <div className="riskBlockStatus">
                                                <div className="riskTitle">
                                                   <h2>Риск: Причастность к экстремизму и другим преступлениям</h2>
                                                </div>
                                                <div className="conclusion">
                                                   <BsDashCircle className="conclusionIcon" color="red" size={36}/>
                                                   <h2>{answers.third.risk7.ans}</h2>
                                                </div>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск, что Продавец причастен к экстремизму или иным
                                                   преступлениям, поэтому: </p>
                                                <p> Проверьте Продавца в соответствующем реестре лиц, причастных к
                                                   экстремизму:&nbsp;
                                                   <Link
                                                      to="https://www.fedsfm.ru/documents/terr-list?ysclid=ljpmkslzio263245615"
                                                      target="_blank" rel="noopener noreferrer">
                                                      https://www.fedsfm.ru/documents/terr-list?ysclid=ljpmkslzio263245615
                                                   </Link>
                                                </p>
                                                <p> Наличие иных преступлений продавца можно проверить в сервисе МВД
                                                   "Внимание, розыск!":&nbsp;
                                                   <Link
                                                      to="https://мвд.рф/wanted"
                                                      target="_blank" rel="noopener noreferrer">
                                                      https://мвд.рф/wanted
                                                   </Link>
                                                </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.third.risk9.cat > -1 ? 'active' : ''}`}>
                                 {answers.third.risk9.cat > -1 && (
                                    <div className="riskBlockAct">
                                       {answers.third.risk9.cat === 0 ? (
                                          <div className='riskBlockStatus'>
                                             <div className="riskTitle">
                                                <h2>Риск: Продавец-Ответчик в судебном споре</h2>
                                             </div>
                                             <div className="conclusionOff">
                                                <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                                <h2>Риска нет</h2>
                                             </div>
                                          </div>
                                       ) : (
                                          <div>
                                             <div className="riskBlockStatus">
                                                <div className="riskTitle">
                                                   <h2>Риск: Продавец-Ответчик в судебном споре</h2>
                                                </div>
                                                <div className="conclusion">
                                                   <BsDashCircle className="conclusionIcon" color="orange" size={36}/>
                                                   <h2>{answers.third.risk9.ans}</h2>
                                                </div>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск, что Продавец участвует в судебном производстве в качестве
                                                   ответчика, поэтому: </p>
                                                <p> Проверьте продавца в соответствующем реестре:&nbsp;
                                                   <Link
                                                      to="https://mos-gorsud.ru/mgs/services/cases/first-civil"
                                                      target="_blank" rel="noopener noreferrer">
                                                      https://mos-gorsud.ru/mgs/services/cases/first-civil
                                                   </Link>
                                                   <br/>
                                                   Это нужно для того, чтобы удостовериться, что в отношении продавца
                                                   нет возбужденных судебных дел, которые бы могли угрожать совершению
                                                   сделки (например, развод).
                                                </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className={`riskBlock ${answers.third.risk13.q1.cat > -1 ? 'active' : ''}`}>
                                 {answers.third.risk13.q1.cat > -1 && (
                                    <div className="riskBlockAct">
                                       {answers.third.risk13.q1.cat === 0 ? (
                                          <div className='riskBlockStatus'>
                                             <div className="riskTitle">
                                                <h2>Риск: Недееспособность продавца</h2>
                                             </div>
                                             <div className="conclusionOff">
                                                <BsCheckCircle className="conclusionIcon" color="green" size={36}/>
                                                <h2>Риска нет</h2>
                                             </div>
                                          </div>
                                       ) : (
                                          <div>
                                             <div className="riskBlockStatus">
                                                <div className="riskTitle">
                                                   <h2>Риск: Недееспособность продавца</h2>
                                                </div>
                                                <div className="conclusion">
                                                   <BsDashCircle className="conclusionIcon" color="red" size={36}/>
                                                   <h2>{answers.third.risk13.q1.ans}</h2>
                                                </div>
                                             </div>
                                             <div className="Rec">
                                                <h3>Рекомендации:</h3>
                                                <p> Есть риск, что Продавец является недееспособным, поэтому:</p>
                                                <p> Получите выписку из ЕГРН о признании правообладателя недееспособным
                                                   или ограниченно дееспособным. Инструкция по ссылке:&nbsp;
                                                   <Link
                                                      to="https://www.gosuslugi.ru/help/faq/egrn/101769"
                                                      target="_blank" rel="noopener noreferrer">
                                                      https://www.gosuslugi.ru/help/faq/egrn/101769
                                                   </Link>
                                                </p>
                                                <p> Запросите у Продавца справки из психоневрологического диспансера и
                                                   наркологического диспансера, чтобы удостовериться в его полной
                                                   дееспособности и снять подозрения о невозможности совершения
                                                   осознанных действий. </p>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 )}
                              </div>
                              <div className="notPassed">
                                 <h3>Есть вопросы, на которые Вы не ответили:</h3>
                                 <div style={{marginLeft: "30px"}}>
                                    {answers.first.risk1.cat === -1 && (
                                       <div>
                                          <h4> Риск: Право супруга на объект</h4>
                                       </div>
                                    )}
                                    {answers.first.risk10.cat === -1 && (
                                       <div>
                                          <h4> Риск: Право собственности продавца</h4>
                                       </div>
                                    )}
                                    {answers.first.risk12.cat === -1 && (
                                       <div>
                                          <h4> Риск: Генеральная доверенность </h4>
                                       </div>
                                    )}
                                    {answers.second.risk2.cat === -1 && (
                                       <div>
                                          <h4> Риск: Границы объекта </h4>
                                       </div>
                                    )}
                                    {answers.second.risk3.cat === -1 && (
                                       <div>
                                          <h4> Риск: Целевое использование объекта</h4>
                                       </div>
                                    )}
                                    {answers.second.risk4.cat === -1 && (
                                       <div>
                                          <h4> Риск: Экология</h4>
                                       </div>
                                    )}
                                    {answers.second.risk8.cat === -1 && (
                                       <div>
                                          <h4> Риск: Юридическая история объекта</h4>
                                       </div>
                                    )}
                                    {answers.second.risk11.cat === -1 && (
                                       <div>
                                          <h4> Риск: Обременения на объект</h4>
                                       </div>
                                    )}
                                    {answers.third.risk5.cat === -1 && (
                                       <div>
                                          <h4> Риск: Банкротство продавца</h4>
                                       </div>
                                    )}
                                    {answers.third.risk6.cat === -1 && (
                                       <div>
                                          <h4> Риск: Выплата долгов продавцом</h4>
                                       </div>
                                    )}
                                    {answers.third.risk7.cat === -1 && (
                                       <div>
                                          <h4> Риск: Экстремизм</h4>
                                       </div>
                                    )}
                                    {answers.third.risk9.cat === -1 && (
                                       <div>
                                          <h4> Риск: Продавец-ответчик в судебном споре</h4>
                                       </div>
                                    )}
                                    {answers.third.risk13.q1.cat === -1 && (
                                       <div>
                                          <h4> Риск: Недееспособность продавца</h4>
                                       </div>
                                    )}
                                 </div>
                              </div>
                              <PDFDownloadLink className="downloadPDF" document={<Report answers={answers}/>}
                                               fileName={"ЗемельКа отчет_" + currentDate}>
                                 {({
                                      blob,
                                      url,
                                      loading,
                                      error
                                   }) => (loading ? 'Загрузка документа...' : 'Скачать PDF отчет')}
                              </PDFDownloadLink>
                              <h2 style={{marginLeft: "3%"}}>
                                 Рекомендуем для более подробного ознакомления с рисками перейти в раздел{' '}
                                 <Link to="/handbook">справочник</Link>!
                              </h2>
                              <p className="warning">Информируем Вас, что команда “ЗемельКа” не оказывает влияние на
                                 принятие Вами итогового
                                 решения по заключению сделки и не несет ответственность за это.</p>
                              <div className="warning">
                                 Вся информация актуальна на {currentDate}
                              </div>
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