import React from 'react';
import { Page, View, Text, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';
import {BsCheckCircle} from "react-icons/bs"
import {BsExclamationCircle} from "react-icons/bs"
import {BsDashCircle} from "react-icons/bs"
import {BsXCircle} from "react-icons/bs"


Font.register({
  family: "Roboto",
  src:
    "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf"
});;

const Report = ({ answers }) => {
  return (
    <Document>
      <Page style={styles.page}>
        <View>
          <Text style={styles.title}>Отчёт</Text>
          {((answers.first.risk1.cat < 1) && (answers.first.risk10.cat < 1) && (answers.second.risk2.cat < 1) && (answers.second.risk3.cat < 1)
              && (answers.second.risk4.cat < 1) && (answers.second.risk8.cat < 1) && (answers.second.risk11.cat < 1) && (answers.third.risk5.cat < 1)
              && (answers.third.risk6.cat < 1) && (answers.third.risk7.cat < 1) && (answers.third.risk9.cat < 1) && (answers.first.risk12.cat < 1)
              && (answers.third.risk13.q1.cat < 1) && (answers.third.risk13.q2.cat < 1)) ? (
              <View>
                <View>
                  <Text style={styles.subTitle}>Риски не выявлены! </Text>
                </View>
                {answers.first.risk1.cat === 0 && (
                  <View style={styles.RiskNameGreen}>
                    <Text style={styles.textRisk}>Риск 1: Право супруга на объект </Text>
                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                  </View>
                )}
                {answers.first.risk10.cat === 0 && (
                  <View style={styles.RiskNameGreen}>
                    <Text style={styles.textRisk}>Риск 2: Право собственности продавца</Text>
                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                  </View>
                )}
                {answers.second.risk2.cat === 0 && (
                  <View style={styles.RiskNameGreen}>
                    <Text style={styles.textRisk}>Риск 3: Границы объекта</Text>
                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                  </View>
                )}
                {answers.second.risk3.cat === 0 && (
                  <View style={styles.RiskNameGreen}>
                    <Text style={styles.textRisk}>Риск 4: Целевое использование объекта</Text>
                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                  </View>
                )}
                {answers.second.risk4.cat === 0 && (
                  <View style={styles.RiskNameGreen}>
                    <Text style={styles.textRisk}>Риск 5: Экология</Text>
                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                  </View>
                )}
                {answers.second.risk8.cat === 0 && (
                  <View style={styles.RiskNameGreen}>
                    <Text style={styles.textRisk}>Риск 6: Юридическая история объекта</Text>
                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                  </View>
                )}
                {answers.second.risk11.cat === 0 && (
                  <View style={styles.RiskNameGreen}>
                    <Text style={styles.textRisk}>Риск 7: Обременения на объект</Text>
                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                  </View>
                )}
                {answers.third.risk5.cat === 0 && (
                  <View style={styles.RiskNameGreen}>
                    <Text style={styles.textRisk}>Риск 8: Банкротство продавца</Text>
                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                  </View>
                )}
                {answers.third.risk6.cat === 0 && (
                  <View style={styles.RiskNameGreen}>
                    <Text style={styles.textRisk}>Риск 9: Выплата долгов продавцом</Text>
                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                  </View>
                )}
                {answers.third.risk7.cat === 0 && (
                  <View style={styles.RiskNameGreen}>
                    <Text style={styles.textRisk}>Риск 10: Экстремизм</Text>
                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                  </View>
                )}
                {answers.third.risk9.cat === 0 && (
                  <View style={styles.RiskNameGreen}>
                    <Text style={styles.textRisk}>Риск 11: Продавец-ответчик в судебном споре</Text>
                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                  </View>
                )}
                {answers.first.risk12.cat === 0 && (
                  <View style={styles.RiskNameGreen}>
                    <Text style={styles.textRisk}>Риск 12: Генеральная доверенность</Text>
                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                  </View>
                )}
                {answers.third.risk13.q1.cat === 0 && (
                  <View style={styles.RiskNameGreen}>
                    <Text style={styles.textRisk}>Риск 13: Недееспособность продавца</Text>
                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                  </View>
                )}
              </View>
          ) : (
              <View>
                {((answers.first.risk1.cat < 2) && (answers.first.risk10.cat < 2) && (answers.second.risk2.cat < 2) && (answers.second.risk3.cat < 2)
                  && (answers.second.risk4.cat < 2) && (answers.second.risk8.cat < 2) && (answers.second.risk11.cat < 2) && (answers.third.risk5.cat < 2)
                  && (answers.third.risk6.cat < 2) && (answers.third.risk7.cat < 2) && (answers.third.risk9.cat < 2) && (answers.first.risk12.cat < 2)
                  && (answers.third.risk13.q1.cat < 2) && (answers.third.risk13.q2.cat < 2)) ? (
                    <View>
                      <Text style={styles.subTitle}>Сделка может быть заключена, но выявлены следующие риски: </Text>
                      <View >
                          {answers.first.risk1.cat > -1 && (
                            <View style={styles.riskBlock}>
                                {answers.first.risk1.cat === 0 ? (
                                  <View style={styles.RiskNameGreen}>
                                    <Text style={styles.textRisk}>Риск 1: Право супруга на объект </Text>
                                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                                  </View>
                                ) : (
                                  <View>
                                    <View style={styles.RiskNameOrange}>
                                      <Text style={styles.textRisk}>Риск 1: Право супруга на объект </Text>
                                      <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                    </View>
                                    <View style={styles.Rec}>
                                      <Text style={styles.recTitle}>Рекомендации:</Text>
                                      <Text style={styles.text}>Есть риск претензий со стороны супруга Продавца, поэтому: </Text>
                                      <Text style={styles.text}>Необходимо уточнить наличие брачного договора между супругами.
                                          Нотариальное согласие второго супруга не требуется в случае, если
                                          заключен брачный договор. </Text>
                                      <Text style={styles.text}>Необходимо выяснить, когда земельный участок был приобретен
                                          продавцом. Если до брака путем личного приобретения, дарения или
                                          наследства, то второй супруг не может препятствовать совершению
                                          сделки; если в браке, то второй супруг должен выразить свое согласие
                                          на продажу, которое будет нотариально заверено. </Text>
                                      <Text style={styles.text}>Попросите Продавца обратиться к нотариусу для получения
                                          нотариального согласия. <br/>
                                          Записаться на прием к нотариусу можно на Госуслугах по ссылке: </Text>
                                      <Text style={styles.text}>https://www.gosuslugi.ru/help/faq/notary/102751 </Text>
                                    </View>
                                  </View>
                                )}
                            </View>
                          )}
                      </View>
                      <View >
                          {answers.first.risk10.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.first.risk10.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск 2: Право собственности продавца</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameRed}>
                                  <Text style={styles.textRisk}>Риск 2: Право собственности продавца</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Право собственности Продавца на землю не проверено, поэтому: </Text>
                                  <Text style={styles.text}>Запросите у Продавца подтверждение права собственности на объект.
                                      Это могут быть разные документы в зависимости от года
                                      регистрации: <br/>
                                      21.01.1998 - 01.09.2013 - свидетельство о регистрации права
                                      собственности; <br/>
                                      01.09.2013 - 15.07.2016 - свидетельство о регистрации или выпиской из
                                      ЕГРН; <br/>
                                      15.07.2016 - по настоящее время - только выписка из ЕГРН. </Text>
                                  <Text style={styles.text}>На любой зарегистрированный объект недвижимости можно получить
                                      выписку из ЕГРН, даже если у собственника ее никогда не было.
                                      Заказать ее Вы можете, перейдя по ссылке:
                                      https://rosreestor.net/vipiska-o-perehode-prav</Text>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View >
                          {answers.second.risk2.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.second.risk2.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск 3: Границы объекта</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameRed}>
                                  <Text style={styles.textRisk}>Риск 3: Границы объекта</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                {answers.second.risk2.number === 1 ? (
                                  <View style={styles.Rec}>
                                    <Text style={styles.recTitle}>Рекомендации:</Text>
                                    <Text style={styles.text}>Есть риск, что межевание не проведено, поэтому: </Text>
                                    <Text style={styles.text}>Необходимо провести межевание земельного участка и поставить
                                        его на кадастровый учет. </Text>
                                  </View>
                                ) : (
                                  <View style={styles.Rec}>
                                    <Text style={styles.recTitle}>Рекомендации:</Text>
                                    <Text style={styles.text}>Есть риск, что межевание не соответствует выписке ЕГРН,
                                        поэтому: </Text>
                                    <Text style={styles.text}>Проверьте с помощью публичной кадастровой карты
                                        Росреестра: <br/>
                                        Сылка №1 https://www.gosuslugi.ru/378659/1/info <br/>
                                        Ссылка № 2
                                        https://pkk.rosreestr.ru/?source=subscribe#/search/63.60201437832657,65.56074746184491/4/@bzbws4844
                                    </Text>
                                    <Text style={styles.text}>Воспользуйтесь услугами кадастрового инженера. Он поможет Вам
                                        провести проверку межевания. </Text>
                                  </View>
                                )}
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View >
                          {answers.second.risk3.cat > -1 && (
                            <View style={styles.riskBlock}>
                                {answers.second.risk3.cat === 0 ? (
                                  <View style={styles.RiskNameGreen}>
                                    <Text style={styles.textRisk}>Риск 4: Целевое использование объекта</Text>
                                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                                  </View>
                                ) : (
                                  <View>
                                      <View style={styles.RiskNameOrange}>
                                        <Text style={styles.textRisk}>Риск 4: Целевое использование объекта</Text>
                                        <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                      </View>
                                      {answers.second.risk3.number === 1 ? (
                                        <View>
                                            <View className="Rec">
                                              <Text style={styles.recTitle}>Рекомендации:</Text>
                                              <Text style={styles.text}>Советуем Вам не заключать данную сделку. </Text>
                                            </View>
                                        </View>
                                      ) : (
                                        <View>
                                            {answers.second.risk3.number === 2 ? (
                                              <View>
                                                  <View className="Rec">
                                                    <Text style={styles.recTitle}>Рекомендации:</Text>
                                                    <Text style={styles.text}>Запросите Продавца предоставить официально
                                                        подтвержденную информацию. </Text>
                                                  </View>
                                              </View>
                                            ) : (
                                              <View>
                                                  <View className="Rec">
                                                    <Text style={styles.recTitle}>Рекомендации:</Text>
                                                    <Text style={styles.text}>Есть риск, что объект попадает в зону особого
                                                        назначения, поэтому: </Text>
                                                    <Text style={styles.text}>Проверьте с помощью публичной кадастровой карты
                                                        Росреестра. <br/>
                                                        Ссылка № 1: https://www.gosuslugi.ru/378659/1/info <br/>
                                                        Ссылка № 2:
                                                        https://pkk.rosreestr.ru/?source=subscribe#/search/63.60201437832657,65.56074746184491/4/@bzbws4844
                                                    </Text>
                                                    <Text style={styles.text}>Проверьте генеральный план развития местности,
                                                        утвержденный местной администрацией. Например, Генплан
                                                        Москвы до 2035 г. можно посмотреть по ссылке:
                                                        https://genplanmos.ru/project/generalnyy_plan_moskvy_do_2035_goda/ </Text>
                                                    <Text style={styles.text}>Проверьте Правила землепользования и застройки.
                                                        Например, Правила землепользования и застройки города
                                                        Москвы можно посмотреть по ссылке:
                                                        https://www.mos.ru/mka/documents/pravila-zemlepolzovaniya-i-zastrojki-goroda-moskvy/</Text>
                                                    <Text style={styles.text}>Проверьте информацию по земельному участку на портале
                                                        ФГИС ТП по ссылке: https://fgistp.economy.gov.ru/ </Text>
                                                  </View>
                                              </View>
                                            )}
                                        </View>
                                      )}
                                  </View>
                                )}
                            </View>
                          )}
                      </View>
                      <View >
                          {answers.second.risk4.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.second.risk4.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск 5: Экология</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameOrange}>
                                  <Text style={styles.textRisk}>Риск 5: Экология</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск того, что Вы не проинформированы об экологической ситуации
                                      земельного участка, поэтому: </Text>
                                  <Text style={styles.text}>Запросите информацию об экологической ситуации по ссылке:
                                      https://www.gosuslugi.ru/72281/1/info</Text>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View >
                          {answers.second.risk8.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.second.risk8.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск 6: Юридическая история объекта</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameOrange}>
                                  <Text style={styles.textRisk}>Риск 6: Юридическая история объекта</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск того, что Вы не проинформированы о юридической истории
                                      земельного участка, поэтому: </Text>
                                  <Text style={styles.text}>Ознакомьтесь с информацией о переходе прав на объект недвижимости,
                                      заказав выписку из ЕГРН по ссылке:
                                      https://rosreestor.net/vipiska-o-perehode-prav </Text>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View >
                          {answers.second.risk11.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.second.risk11.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск 7: Обременения на объект</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameOrange}>
                                  <Text style={styles.textRisk}>Риск 7: Обременения на объект</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                {answers.second.risk11.number === 1 ? (
                                  <View style={styles.Rec}>
                                    <Text style={styles.recTitle}>Рекомендации:</Text>
                                    <Text style={styles.text}>Есть риск, что Вы не ознакомлены с возможными обременениями на
                                        земельный участок, поэтому: </Text>
                                    <Text style={styles.text}>Узнайте информацию о наличии обременений на участок можно
                                        тремя способами: <br/>
                                        1) сделать запрос через МФЦ (Мои документы); <br/>
                                        2) обратиться в территориальный орган надзора за недвижимостью,
                                        в ведении которого находится интересующая недвижимость; <br/>
                                        3) воспользоваться личным кабинетом на сайте государственных
                                        услуг ( gosuslugi.ru ) и подать заявление; </Text>
                                    <Text style={styles.text}>Для осуществления запроса, достаточно иметь кадастровый
                                        паспорт или номер участка и его местоположение. По итогам
                                        обращения, Вам выдается выписка
                                        с полным перечнем всех сведений об интересующем объекте,
                                        включая типы наложенных арестов, обременений и иных
                                        ограничений.</Text>
                                  </View>
                                ) : (
                                  <View style={styles.Rec}>
                                    <Text style={styles.recTitle}>Рекомендации:</Text>
                                    <Text style={styles.text}> Есть риск, что Продавец откажется погасить обременения,
                                        поэтому: </Text>
                                    <Text style={styles.text}> Предложите включить условие в договор о погашении обременений
                                        продавцом. </Text>
                                  </View>
                                )}
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View >
                          {answers.third.risk5.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.third.risk5.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск 8: Банкротство продавца</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameOrange}>
                                  <Text style={styles.textRisk}>Риск 8: Банкротство продавца</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск, что Продавец является банкротом, поэтому: </Text>
                                  <Text style={styles.text}>Проверьте наличие Продавца в списках банкротов в соотвествующем
                                      реестре:
                                      https://old.bankrot.fedresurs.ru/?ysclid=ljpmeb4npx361137021&attempt=2 </Text>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View >
                          {answers.third.risk6.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.third.risk6.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск 9: Выплата долгов продавцом</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameOrange}>
                                  <Text style={styles.textRisk}>Риск 9: Выплата долгов продавцом</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск, что Продавец является должником, поэтому: </Text>
                                  <Text style={styles.text}>Проверьте Продавца в соответствующем реестре:
                                      https://fssp.gov.ru/ </Text>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View >
                          {answers.third.risk7.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.third.risk7.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск 10: Экстремизм</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameRed}>
                                  <Text style={styles.textRisk}>Риск 10: Экстремизм</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск, что Продавец причастен к экстремизму или иным
                                      преступлениям, поэтому: </Text>
                                  <Text style={styles.text}>Проверьте Продавца в соответствующем реестре лиц, причастных к
                                      экстремизму:
                                      https://www.fedsfm.ru/documents/terr-list?ysclid=ljpmkslzio263245615 </Text>
                                  <Text style={styles.text}>Наличие иных преступлений продавца можно проверить в сервисе МВД
                                      "Внимание, розыск!": https://мвд.рф/wanted </Text>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View >
                          {answers.third.risk9.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.third.risk9.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск 11: Продавец-ответчик в судебном споре</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameOrange}>
                                  <Text style={styles.textRisk}>Риск 11: Продавец-ответчик в судебном споре</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск, что Продавец участвует в судебном производстве в качестве
                                      ответчика, поэтому: </Text>
                                  <Text style={styles.text}>Проверьте продавца в соответствующем реестре:
                                      https://mos-gorsud.ru/mgs/services/cases/first-civil. <br/>
                                      Это нужно для того, чтобы удостовериться, что в отношении продавца
                                      нет возбужденных судебных дел, которые бы могли угрожать совершению
                                      сделки (например, развод). </Text>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View >
                          {answers.first.risk12.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.first.risk12.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск 12: Генеральная доверенность</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameRed}>
                                  <Text style={styles.textRisk}>Риск 12: Генеральная доверенность</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск, что генеральная доверенность не является достоверной,
                                      поэтому: </Text>
                                  <Text style={styles.text}>Проверьте генеральную доверенность по ссылке:
                                      https://reestr-dover.ru/ </Text>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View >
                          {answers.third.risk13.q1.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.third.risk13.q1.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск 13: Недееспособность продавца</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameRed}>
                                  <Text style={styles.textRisk}>Риск 13: Недееспособность продавца</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск, что Продавец является недееспособным, поэтому:</Text>
                                  <Text style={styles.text}>Получите выписку из ЕГРН о признании правообладателя недееспособным
                                      или ограниченно дееспособным. Инструкция по ссылке:
                                      https://www.gosuslugi.ru/help/faq/egrn/101769 </Text>
                                  <Text style={styles.text}>Запросите у Продавца справки из психоневрологического диспансера и
                                      наркологического диспансера, чтобы удостовериться в его полной
                                      дееспособности и снять подозрения о невозможности совершения
                                      осознанных действий. </Text>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                    </View>
                ) : (
                  <View>
                    <View>
                      <Text style={styles.subTitle}>Сделка не может быть заключена! </Text>
                      <Text style={styles.subTitle}>Выявлены следующие риски: </Text>
                    </View>
                    <View>
                    <View >
                          {answers.first.risk1.cat > -1 && (
                            <View style={styles.riskBlock}>
                                {answers.first.risk1.cat === 0 ? (
                                  <View style={styles.RiskNameGreen}>
                                    <Text style={styles.textRisk}>Риск 1: Право супруга на объект </Text>
                                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                                  </View>
                                ) : (
                                  <View>
                                    <View style={styles.RiskNameOrange}>
                                      <Text style={styles.textRisk}>Риск 1: Право супруга на объект </Text>
                                      <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                    </View>
                                    <View style={styles.Rec}>
                                      <Text style={styles.recTitle}>Рекомендации:</Text>
                                      <Text style={styles.text}>Есть риск претензий со стороны супруга Продавца, поэтому: </Text>
                                      <Text style={styles.text}>Необходимо уточнить наличие брачного договора между супругами.
                                          Нотариальное согласие второго супруга не требуется в случае, если
                                          заключен брачный договор. </Text>
                                      <Text style={styles.text}>Необходимо выяснить, когда земельный участок был приобретен
                                          продавцом. Если до брака путем личного приобретения, дарения или
                                          наследства, то второй супруг не может препятствовать совершению
                                          сделки; если в браке, то второй супруг должен выразить свое согласие
                                          на продажу, которое будет нотариально заверено. </Text>
                                      <Text style={styles.text}>Попросите Продавца обратиться к нотариусу для получения
                                          нотариального согласия. <br/>
                                          Записаться на прием к нотариусу можно на Госуслугах по ссылке: </Text>
                                      <Text style={styles.text}>https://www.gosuslugi.ru/help/faq/notary/102751 </Text>
                                    </View>
                                  </View>
                                )}
                            </View>
                          )}
                      </View>
                      <View >
                          {answers.first.risk10.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.first.risk10.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск 2: Право собственности продавца</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameRed}>
                                  <Text style={styles.textRisk}>Риск 2: Право собственности продавца</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Право собственности Продавца на землю не проверено, поэтому: </Text>
                                  <Text style={styles.text}>Запросите у Продавца подтверждение права собственности на объект.
                                      Это могут быть разные документы в зависимости от года
                                      регистрации: <br/>
                                      21.01.1998 - 01.09.2013 - свидетельство о регистрации права
                                      собственности; <br/>
                                      01.09.2013 - 15.07.2016 - свидетельство о регистрации или выпиской из
                                      ЕГРН; <br/>
                                      15.07.2016 - по настоящее время - только выписка из ЕГРН. </Text>
                                  <Text style={styles.text}>На любой зарегистрированный объект недвижимости можно получить
                                      выписку из ЕГРН, даже если у собственника ее никогда не было.
                                      Заказать ее Вы можете, перейдя по ссылке:
                                      https://rosreestor.net/vipiska-o-perehode-prav</Text>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View >
                          {answers.second.risk2.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.second.risk2.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск 3: Границы объекта</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameRed}>
                                  <Text style={styles.textRisk}>Риск 3: Границы объекта</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                {answers.second.risk2.number === 1 ? (
                                  <View style={styles.Rec}>
                                    <Text style={styles.recTitle}>Рекомендации:</Text>
                                    <Text style={styles.text}>Есть риск, что межевание не проведено, поэтому: </Text>
                                    <Text style={styles.text}>Необходимо провести межевание земельного участка и поставить
                                        его на кадастровый учет. </Text>
                                  </View>
                                ) : (
                                  <View style={styles.Rec}>
                                    <Text style={styles.recTitle}>Рекомендации:</Text>
                                    <Text style={styles.text}>Есть риск, что межевание не соответствует выписке ЕГРН,
                                        поэтому: </Text>
                                    <Text style={styles.text}>Проверьте с помощью публичной кадастровой карты
                                        Росреестра: <br/>
                                        Сылка №1 https://www.gosuslugi.ru/378659/1/info <br/>
                                        Ссылка № 2
                                        https://pkk.rosreestr.ru/?source=subscribe#/search/63.60201437832657,65.56074746184491/4/@bzbws4844
                                    </Text>
                                    <Text style={styles.text}>Воспользуйтесь услугами кадастрового инженера. Он поможет Вам
                                        провести проверку межевания. </Text>
                                  </View>
                                )}
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View >
                          {answers.second.risk3.cat > -1 && (
                            <View style={styles.riskBlock}>
                                {answers.second.risk3.cat === 0 ? (
                                  <View style={styles.RiskNameGreen}>
                                    <Text style={styles.textRisk}>Риск 4: Целевое использование объекта</Text>
                                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                                  </View>
                                ) : (
                                  <View>
                                      <View style={styles.RiskNameOrange}>
                                        <Text style={styles.textRisk}>Риск 4: Целевое использование объекта</Text>
                                        <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                      </View>
                                      {answers.second.risk3.number === 1 ? (
                                        <View>
                                            <View className="Rec">
                                              <Text style={styles.recTitle}>Рекомендации:</Text>
                                              <Text style={styles.text}>Советуем Вам не заключать данную сделку. </Text>
                                            </View>
                                        </View>
                                      ) : (
                                        <View>
                                            {answers.second.risk3.number === 2 ? (
                                              <View>
                                                  <View className="Rec">
                                                    <Text style={styles.recTitle}>Рекомендации:</Text>
                                                    <Text style={styles.text}>Запросите Продавца предоставить официально
                                                        подтвержденную информацию. </Text>
                                                  </View>
                                              </View>
                                            ) : (
                                              <View>
                                                  <View className="Rec">
                                                    <Text style={styles.recTitle}>Рекомендации:</Text>
                                                    <Text style={styles.text}>Есть риск, что объект попадает в зону особого
                                                        назначения, поэтому: </Text>
                                                    <Text style={styles.text}>Проверьте с помощью публичной кадастровой карты
                                                        Росреестра. <br/>
                                                        Ссылка № 1: https://www.gosuslugi.ru/378659/1/info <br/>
                                                        Ссылка № 2:
                                                        https://pkk.rosreestr.ru/?source=subscribe#/search/63.60201437832657,65.56074746184491/4/@bzbws4844
                                                    </Text>
                                                    <Text style={styles.text}>Проверьте генеральный план развития местности,
                                                        утвержденный местной администрацией. Например, Генплан
                                                        Москвы до 2035 г. можно посмотреть по ссылке:
                                                        https://genplanmos.ru/project/generalnyy_plan_moskvy_do_2035_goda/ </Text>
                                                    <Text style={styles.text}>Проверьте Правила землепользования и застройки.
                                                        Например, Правила землепользования и застройки города
                                                        Москвы можно посмотреть по ссылке:
                                                        https://www.mos.ru/mka/documents/pravila-zemlepolzovaniya-i-zastrojki-goroda-moskvy/</Text>
                                                    <Text style={styles.text}>Проверьте информацию по земельному участку на портале
                                                        ФГИС ТП по ссылке: https://fgistp.economy.gov.ru/ </Text>
                                                  </View>
                                              </View>
                                            )}
                                        </View>
                                      )}
                                  </View>
                                )}
                            </View>
                          )}
                      </View>
                      <View >
                          {answers.second.risk4.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.second.risk4.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск 5: Экология</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameOrange}>
                                  <Text style={styles.textRisk}>Риск 5: Экология</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск того, что Вы не проинформированы об экологической ситуации
                                      земельного участка, поэтому: </Text>
                                  <Text style={styles.text}>Запросите информацию об экологической ситуации по ссылке:
                                      https://www.gosuslugi.ru/72281/1/info</Text>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View >
                          {answers.second.risk8.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.second.risk8.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск 6: Юридическая история объекта</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameOrange}>
                                  <Text style={styles.textRisk}>Риск 6: Юридическая история объекта</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск того, что Вы не проинформированы о юридической истории
                                      земельного участка, поэтому: </Text>
                                  <Text style={styles.text}>Ознакомьтесь с информацией о переходе прав на объект недвижимости,
                                      заказав выписку из ЕГРН по ссылке:
                                      https://rosreestor.net/vipiska-o-perehode-prav </Text>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View >
                          {answers.second.risk11.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.second.risk11.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск 7: Обременения на объект</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameOrange}>
                                  <Text style={styles.textRisk}>Риск 7: Обременения на объект</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                {answers.second.risk11.number === 1 ? (
                                  <View style={styles.Rec}>
                                    <Text style={styles.recTitle}>Рекомендации:</Text>
                                    <Text style={styles.text}>Есть риск, что Вы не ознакомлены с возможными обременениями на
                                        земельный участок, поэтому: </Text>
                                    <Text style={styles.text}>Узнайте информацию о наличии обременений на участок можно
                                        тремя способами: <br/>
                                        1) сделать запрос через МФЦ (Мои документы); <br/>
                                        2) обратиться в территориальный орган надзора за недвижимостью,
                                        в ведении которого находится интересующая недвижимость; <br/>
                                        3) воспользоваться личным кабинетом на сайте государственных
                                        услуг ( gosuslugi.ru ) и подать заявление; </Text>
                                    <Text style={styles.text}>Для осуществления запроса, достаточно иметь кадастровый
                                        паспорт или номер участка и его местоположение. По итогам
                                        обращения, Вам выдается выписка
                                        с полным перечнем всех сведений об интересующем объекте,
                                        включая типы наложенных арестов, обременений и иных
                                        ограничений.</Text>
                                  </View>
                                ) : (
                                  <View style={styles.Rec}>
                                    <Text style={styles.recTitle}>Рекомендации:</Text>
                                    <Text style={styles.text}> Есть риск, что Продавец откажется погасить обременения,
                                        поэтому: </Text>
                                    <Text style={styles.text}> Предложите включить условие в договор о погашении обременений
                                        продавцом. </Text>
                                  </View>
                                )}
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View >
                          {answers.third.risk5.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.third.risk5.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск 8: Банкротство продавца</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameOrange}>
                                  <Text style={styles.textRisk}>Риск 8: Банкротство продавца</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск, что Продавец является банкротом, поэтому: </Text>
                                  <Text style={styles.text}>Проверьте наличие Продавца в списках банкротов в соотвествующем
                                      реестре:
                                      https://old.bankrot.fedresurs.ru/?ysclid=ljpmeb4npx361137021&attempt=2 </Text>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View >
                          {answers.third.risk6.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.third.risk6.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск 9: Выплата долгов продавцом</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameOrange}>
                                  <Text style={styles.textRisk}>Риск 9: Выплата долгов продавцом</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск, что Продавец является должником, поэтому: </Text>
                                  <Text style={styles.text}>Проверьте Продавца в соответствующем реестре:
                                      https://fssp.gov.ru/ </Text>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View >
                          {answers.third.risk7.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.third.risk7.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск 10: Экстремизм</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameRed}>
                                  <Text style={styles.textRisk}>Риск 10: Экстремизм</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск, что Продавец причастен к экстремизму или иным
                                      преступлениям, поэтому: </Text>
                                  <Text style={styles.text}>Проверьте Продавца в соответствующем реестре лиц, причастных к
                                      экстремизму:
                                      https://www.fedsfm.ru/documents/terr-list?ysclid=ljpmkslzio263245615 </Text>
                                  <Text style={styles.text}>Наличие иных преступлений продавца можно проверить в сервисе МВД
                                      "Внимание, розыск!": https://мвд.рф/wanted </Text>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View >
                          {answers.third.risk9.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.third.risk9.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск 11: Продавец-ответчик в судебном споре</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameOrange}>
                                  <Text style={styles.textRisk}>Риск 11: Продавец-ответчик в судебном споре</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск, что Продавец участвует в судебном производстве в качестве
                                      ответчика, поэтому: </Text>
                                  <Text style={styles.text}>Проверьте продавца в соответствующем реестре:
                                      https://mos-gorsud.ru/mgs/services/cases/first-civil. <br/>
                                      Это нужно для того, чтобы удостовериться, что в отношении продавца
                                      нет возбужденных судебных дел, которые бы могли угрожать совершению
                                      сделки (например, развод). </Text>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View >
                          {answers.first.risk12.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.first.risk12.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск 12: Генеральная доверенность</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameRed}>
                                  <Text style={styles.textRisk}>Риск 12: Генеральная доверенность</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск, что генеральная доверенность не является достоверной,
                                      поэтому: </Text>
                                  <Text style={styles.text}>Проверьте генеральную доверенность по ссылке:
                                      https://reestr-dover.ru/ </Text>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View >
                          {answers.third.risk13.q1.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.third.risk13.q1.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск 13: Недееспособность продавца</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameRed}>
                                  <Text style={styles.textRisk}>Риск 13: Недееспособность продавца</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск, что Продавец является недееспособным, поэтому:</Text>
                                  <Text style={styles.text}>Получите выписку из ЕГРН о признании правообладателя недееспособным
                                      или ограниченно дееспособным. Инструкция по ссылке:
                                      https://www.gosuslugi.ru/help/faq/egrn/101769 </Text>
                                  <Text style={styles.text}>Запросите у Продавца справки из психоневрологического диспансера и
                                      наркологического диспансера, чтобы удостовериться в его полной
                                      дееспособности и снять подозрения о невозможности совершения
                                      осознанных действий. </Text>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                    </View>
                  </View>
                )}
              </View>
          )}
        </View>
      </Page>
    </Document>
  );
};
  
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Roboto',
    paddingTop: 30,
    paddingBottom: 60,
    paddingHorizontal: 30,
    marginBottom: '10px',
    marginTop: '10px',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  Risk: {
    marginBottom: 20,
    marginTop: 20,
    padding: 5,
  },
  RiskNameGreen: {
    backgroundColor: '#3bd511',
    padding: '5px',
    borderRadius: '1px',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '8px',
  },
  RiskNameOrange: {
    backgroundColor: '#ffa708',
    padding: '5px',
    borderRadius: '1px',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '8px',
  },
  RiskNameRed: {
    backgroundColor: '#ff0713',
    padding: '5px',
    borderRadius: '1px',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '8px',
  },
  textRisk:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },

  recTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  Rec: {
    backgroundColor: '#f0f0f0',
    borderRadius: '1px',
    padding: '5px',
  }
});
  
  export default Report;