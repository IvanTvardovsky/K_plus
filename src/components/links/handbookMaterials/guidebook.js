import React from "react";
import {BsFillInfoCircleFill} from "react-icons/bs"
import {BsFillExclamationTriangleFill} from "react-icons/bs"
import {BsBook} from "react-icons/bs"

class Guidebook extends React.Component {
   render() {
      return (
         <div>
            <h1 className="title" id="guidebookTitle">Справочник</h1>
            <p id="afterGuidebook" className="bigger">В этом разделе хранится список всех рисков, связанных с
               покупкой
               земли, с кратким
               описанием,
               предупреждениями и примечаниями.</p>

            <div style={{marginBottom: '40px', marginLeft: '30px'}}>

               <p className="thisShouldBeBold bigger" id="specialAfterGuidebook">Специальные обозначения:</p>

               <p className="normal bigger" id="specialElement"><BsFillInfoCircleFill size={24}/>&nbsp;&nbsp;&nbsp;<span
                  className="upper">–&nbsp; краткое
               описание риска;</span>
               </p>

               <p className="attention bigger" id="specialElement">
                  <BsFillExclamationTriangleFill size={24}/>&nbsp;&nbsp;&nbsp;
                  <span className="upper">–&nbsp;
                     предупреждение, связанное с
               риском;
                  </span>
               </p>

               <p className="attention bigger" id="specialElement"><BsBook size={24}/>&nbsp;&nbsp;&nbsp;
                  <span
                     className="upper">–&nbsp; более узкая проблема
               по риску, с которой мы советуем Вам ознакомиться.
               </span>
               </p>
            </div>

            <div className="handbookBlock">
               <h2 className="risk-title">Риск №1: Право супруга на объект </h2>
               <p className="normal bigger"><BsFillInfoCircleFill size={24}
                                                                  id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                     className="medium">Риск
                  оспоримости договора
                  супругом
                  заключается в том, что обязательным условием является предоставление нотариального согласия второго
                  супруга.</span></p>
               <p className="attention bigger"><BsFillExclamationTriangleFill size={24}
                                                                              id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                     className="medium"> Впоследствии при невыполнении
                  условия,
                  сделка может быть признана недействительной.</span></p>
               <p className="attention bigger"><BsBook size={24} id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;<span
                  className="medium"> Справка из ЗАГСа об отсутствии записи акта о гражданском состоянии
                  эквивалентна
                  штампу в паспорте.</span></p>
            </div>

            <div className="handbookBlock">
               <h2 className="risk-title">Риск №2: Право собственности продавца </h2>
               <p className="normal bigger"><BsFillInfoCircleFill size={24}
                                                                  id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                     className="medium">Риск приобретения земельного
                  участка, где
                  продавец не обладает правом собственности, заключается в возможности оспаривания сделки и потери права
                  собственности покупателем.</span></p>
               <p className="attention bigger"><BsFillExclamationTriangleFill size={24}
                                                                              id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                     className="medium">Впоследствии покупатель может
                  столкнуться с судебными спорами и потерей вложенных денежных средств.</span></p>
               <p className="attention bigger"><BsBook size={24} id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;<span
                  className="medium"> Продавец может неправомерно заключить сделку купли-продажи чужого
                  земельного
                  участка, который принадлежит его близким родственникам.</span></p>
            </div>

            <div className="handbookBlock">
               <h2 className="risk-title">Риск №3: Границы объекта</h2>
               <p className="normal bigger"><BsFillInfoCircleFill size={24}
                                                                  id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                     className="medium">Риск неопределенности границ
                  земельного
                  участка возникает, когда точные границы не определены или спорны.</span></p>
               <p className="attention bigger"><BsFillExclamationTriangleFill size={24}
                                                                              id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                     className="medium">Впоследствии у собственников
                  могут
                  возникнуть правовые и финансовые проблемы, потенциально приводящие к судебным разбирательствам, а
                  также влияющие на возможности использования участка для строительства или других целей.</span></p>
               <p className="attention bigger"><BsBook size={24} id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;<span
                  className="medium">Кадастровый инженер составит акт согласования местоположения границ
                  участка. Это
                  предотвратит самовольное занятие Вашего земельного участка соседями.</span></p>
            </div>

            <div className="handbookBlock">
               <h2 className="risk-title">Риск №4: Целевое использование объекта</h2>
               <p className="normal bigger"><BsFillInfoCircleFill size={24}
                                                                  id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                     className="medium">Риск целевого использования
                  земельного
                  участка заключается в возможности нарушения законных требований по использованию земли.</span></p>
               <p className="attention bigger"><BsFillExclamationTriangleFill size={24}
                                                                              id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                     className="medium">Вследствие этого риска могут
                  возникнуть различные правовые последствия, включая штрафы, изъятие земельного участка, снос частного
                  объекта.</span></p>
               <p className="attention bigger"><BsBook size={24} id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;<span
                  className="medium">Если планируется жилищная постройка, то Вам необходимо подать уведомление
                  о
                  строительстве в местную администрацию на согласование соответствия требованиям использования
                  земельного участка. Если администрация выявит противоречия, сделка недействительна.</span></p>
            </div>

            <div className="handbookBlock">
               <h2 className="risk-title">Риск №5: Экология</h2>
               <p className="normal bigger"><BsFillInfoCircleFill size={24}
                                                                  id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                     className="medium">Риск связан с природными и
                  природно-антропогенными условиями района, где находится земельный участок, и заключается в возможности
                  возникновения неблагоприятных факторов: наводнения, землетрясения, оползни, загрязнение почвы
                  химическими веществами, эрозия почвы и др.</span></p>
               <p className="attention bigger"><BsFillExclamationTriangleFill size={24}
                                                                              id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                     className="medium">Впоследствии неблагоприятные
                  факторы
                  способны нарушить планы использования участка.</span></p>
               <p className="attention bigger"><BsBook size={24} id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;<span
                  className="medium">Распространенная ситуация - незнание о весенних паводках. Экологические
                  особенности участка не всегда прописаны в документах. Поэтому Вам лучше проверить земельный участок
                  самостоятельно.</span></p>
            </div>

            <div className="handbookBlock">
               <h2 className="risk-title">Риск №6: Юридическая история объекта</h2>
               <p className="normal bigger"><BsFillInfoCircleFill size={24}
                                                                  id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                     className="medium">Риск приобретения земельного
                  участка с
                  нечистой юридической историей заключается в возможных проблемах с правом собственности, наличии
                  ограничений или обременений на участке, а также в возможности оспаривания законности перехода права
                  собственности.</span></p>
               <p className="attention bigger"><BsFillExclamationTriangleFill size={24}
                                                                              id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                     className="medium">Вследствие
                  этого риска могут
                  возникнуть юридические споры, потеря прав на участок и дополнительные затраты.</span></p>
            </div>

            <div className="handbookBlock">
               <h2 className="risk-title">Риск №7: Обременения на объект</h2>
               <p className="normal bigger"><BsFillInfoCircleFill size={24}
                                                                  id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                     className="medium">Риск приобретения земельного
                  участка с
                  наличием обременений заключается в ограничениях и обязательствах, которые могут влиять на возможности
                  покупателя. Обременения могут включать ипотеку, залоги и иные права третьих лиц.</span></p>
               <p className="attention bigger"><BsFillExclamationTriangleFill size={24}
                                                                              id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                     className="medium">Вследствие этого риска может
                  быть
                  ограничена свобода распоряжения участком.</span></p>
               <p className="attention bigger"><BsBook size={24} id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;<span
                  className="medium">Покупатель будет признан добросовестным по решению суда, если он не мог
                  узнать об
                  обременениях по вине Продавца.</span></p>
            </div>

            <div className="handbookBlock">
               <h2 className="risk-title">Риск №8: Банкротство продавца</h2>
               <p className="normal bigger"><BsFillInfoCircleFill size={24}
                                                                  id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                     className="medium">Риск связан с возможностью
                  признания
                  продавца банкротом, что негативно отразится на намерениях покупателя совершить сделку.</span></p>
               <p className="attention bigger"><BsFillExclamationTriangleFill size={24}
                                                                              id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                     className="medium">Вследствие этого риска
                  покупатель не
                  сможет заключить сделку с продавцом и получить право собственности на участок. Если же сделка
                  заключена и продавец становится банкротом, его активы могут быть использованы для погашения его долгов
                  перед кредиторами, что может привести к расторжению договора купли-продажи и потере денежных средств,
                  вложенных в приобретение участка.</span></p>
               <p className="attention bigger"><BsBook size={24} id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;<span
                  className="medium">Продавец может не числиться в реестре банкротов вследствие недавно
                  возбужденного
                  процесса банкротства или ошибки онлайн-системы.</span></p>
            </div>

            <div className="handbookBlock">
               <h2 className="risk-title">Риск №9: Выплата долгов продавцом</h2>
               <p className="normal bigger"><BsFillInfoCircleFill size={24}
                                                                  id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                     className="medium">Опасность для покупателя
                  земельного
                  участка в случае наличия исполнительных производств в отношении продавца заключается в возможности
                  ограничения права собственности на участок и наложения ареста на него.</span></p>
               <p className="attention bigger"><BsFillExclamationTriangleFill size={24}
                                                                              id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                     className="medium">Впоследствии,
                  если у продавца есть
                  задолженности перед кредиторами и решение суда о взыскании долга, судебные органы могут принять меры
                  для исполнения решения, включая принудительное реализацию имущества, в том числе земельного участка.
                  Это может привести к проблемам с передачей права собственности на участок покупателю и возможным
                  юридическим спорам.</span></p>
            </div>

            <div className="handbookBlock">
               <h2 className="risk-title">Риск №10: Экстремизм</h2>
               <p className="normal bigger"><BsFillInfoCircleFill size={24}
                                                                  id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                     className="medium">Риск приобретения земельного
                  участка у
                  продавца, причастного к экстремизму и другим преступлениям, заключается в возможных юридических
                  проблемах, неопределенности сделки и возможности оспаривания договора купли-продажи.</span></p>
               <p className="attention bigger"><BsFillExclamationTriangleFill size={24}
                                                                              id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                     className="medium">Вследствие этого риска могут
                  возникнуть юридические споры, потенциальная недействительность сделки и сложности в получении
                  компенсации.</span></p>
               <p className="attention bigger"><BsBook size={24} id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;<span
                  className="medium">Сделки с лицами-экстремистами подлежат обязательному контролю
                  уполномоченным
                  органом.</span></p>
            </div>

            <div className="handbookBlock">
               <h2 className="risk-title">Риск №11: Продавец-Ответчик в судебном споре</h2>
               <p className="normal bigger"><BsFillInfoCircleFill size={24}
                                                                  id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                     className="medium">Риск приобретения земельного
                  участка, где
                  продавец является ответчиком в судах общей юрисдикции, заключается в возможных судебных спорах и
                  задержках в процессе покупки.</span></p>
               <p className="attention bigger"><BsFillExclamationTriangleFill size={24}
                                                                              id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                     className="medium">Впоследствии могут образоваться
                  неопределенность и неудобства для покупателя.</span></p>
               <p className="attention bigger"><BsBook size={24} id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;<span
                  className="medium">Продавец может не числиться в реестре ответчиков судов общей юрисдикции
                  вследствие недавно возбужденного судебного процесса или ошибки онлайн-системы.</span></p>
            </div>

            <div className="handbookBlock">
               <h2 className="risk-title">Риск №12: Генеральная доверенность</h2>
               <p className="normal bigger"><BsFillInfoCircleFill size={24}
                                                                  id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                     className="medium">Риск приобретения земельного
                  участка с недействительной генеральной доверенностью заключается в том, что продавец может не обладать
                  полномочиями для совершения сделки.</span></p>
               <p className="attention bigger"><BsFillExclamationTriangleFill size={24}
                                                                              id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                     className="medium">Вследствие этого риска при
                  недействительности генеральной доверенности, покупатель может столкнуться с проблемами при регистрации
                  сделки и установлении своего права собственности на участок.</span></p>
               <p className="attention bigger"><BsBook size={24} id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;<span
                  className="medium">Уделите внимание полномочиям, прописанным в генеральной доверенности.
                  Собственник может ограничить доверенное лицо в действиях.</span></p>
            </div>

            <div className="handbookBlock">
               <h2 className="risk-title">Риск №13: Недееспособность продавца</h2>
               <p className="normal bigger"><BsFillInfoCircleFill size={24}
                                                                  id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                     className="medium">Невозможность самостоятельного
                  принятия решения продавцом земельного участка означает, что он не имеет полной свободы для продажи
                  земельного участка.</span></p>
               <p className="attention bigger"><BsFillExclamationTriangleFill size={24}
                                                                              id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                     className="medium">Впоследствии продавец может
                  оказаться зависимым от различных сторон, от которых требуется разрешение на сделку, что может привести
                  к задержкам и сложностям в процессе продажи.</span></p>
               <p className="attention bigger"><BsBook size={24} id="specialElement"/>&nbsp;&nbsp;&nbsp;&nbsp;<span
                  className="medium">Дополнительным способом узнать психическое состояние Продавца является
                  наличие у него водительских прав.</span></p>
            </div>
         </div>
      )
         ;
   }
}

export default Guidebook;