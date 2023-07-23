import React from 'react';
import { Page, View, Text, Document, StyleSheet, Font, Image, Link } from '@react-pdf/renderer';
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
                    <Text style={styles.textRisk}>Риск: Право супруга на объект </Text>
                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                  </View>
                )}
                {answers.first.risk10.cat === 0 && (
                  <View style={styles.RiskNameGreen}>
                    <Text style={styles.textRisk}>Риск: Право собственности продавца</Text>
                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                  </View>
                )}
                {answers.first.risk12.cat === 0 && (
                  <View style={styles.RiskNameGreen}>
                    <Text style={styles.textRisk}>Риск: Генеральная доверенность</Text>
                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                  </View>
                )}
                {answers.second.risk2.cat === 0 && (
                  <View style={styles.RiskNameGreen}>
                    <Text style={styles.textRisk}>Риск: Границы объекта</Text>
                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                  </View>
                )}
                {answers.second.risk3.cat === 0 && (
                  <View style={styles.RiskNameGreen}>
                    <Text style={styles.textRisk}>Риск: Целевое использование объекта</Text>
                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                  </View>
                )}
                {answers.second.risk4.cat === 0 && (
                  <View style={styles.RiskNameGreen}>
                    <Text style={styles.textRisk}>Риск: Экология</Text>
                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                  </View>
                )}
                {answers.second.risk8.cat === 0 && (
                  <View style={styles.RiskNameGreen}>
                    <Text style={styles.textRisk}>Риск: Юридическая история объекта</Text>
                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                  </View>
                )}
                {answers.second.risk11.cat === 0 && (
                  <View style={styles.RiskNameGreen}>
                    <Text style={styles.textRisk}>Риск: Обременения на объект</Text>
                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                  </View>
                )}
                {answers.third.risk5.cat === 0 && (
                  <View style={styles.RiskNameGreen}>
                    <Text style={styles.textRisk}>Риск: Банкротство продавца</Text>
                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                  </View>
                )}
                {answers.third.risk6.cat === 0 && (
                  <View style={styles.RiskNameGreen}>
                    <Text style={styles.textRisk}>Риск: Выплата долгов продавцом</Text>
                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                  </View>
                )}
                {answers.third.risk7.cat === 0 && (
                  <View style={styles.RiskNameGreen}>
                    <Text style={styles.textRisk}>Риск: Экстремизм</Text>
                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                  </View>
                )}
                {answers.third.risk9.cat === 0 && (
                  <View style={styles.RiskNameGreen}>
                    <Text style={styles.textRisk}>Риск: Продавец-ответчик в судебном споре</Text>
                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                  </View>
                )}
                {answers.third.risk13.q1.cat === 0 && (
                  <View style={styles.RiskNameGreen}>
                    <Text style={styles.textRisk}>Риск: Недееспособность продавца</Text>
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
                      <View wrap={false} >
                          {answers.first.risk1.cat > -1 && (
                            <View style={styles.riskBlock}>
                                {answers.first.risk1.cat === 0 ? (
                                  <View style={styles.RiskNameGreen}>
                                    <Text style={styles.textRisk}>Риск: Право супруга на объект </Text>
                                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                                  </View>
                                ) : (
                                  <View>
                                    <View style={styles.RiskNameOrange}>
                                      <Text style={styles.textRisk}>Риск: Право супруга на объект </Text>
                                      <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                    </View>
                                    <View style={styles.Rec}>
                                      <Text style={styles.recTitle}>Рекомендации:</Text>
                                      <Text style={styles.text}>Есть риск претензий со стороны супруга Продавца, поэтому: </Text>
                                      <Text style={styles.text}>Необходимо уточнить наличие брачного договора между супругами.
                                                   Нотариальное согласие второго супруга не требуется в случае, если
                                                   заключен брачный договор, в котором прописано условие о праве
                                                   распоряжения земельным участком. </Text>
                                      <Text style={styles.text}>Необходимо выяснить, когда земельный участок был приобретен
                                                   продавцом. Если до брака путем личного приобретения, дарения или
                                                   наследства, то второй супруг не может препятствовать совершению
                                                   сделки; если в браке, то второй супруг должен выразить свое согласие
                                                   на продажу, которое будет нотариально заверено. </Text>
                                      <Text style={styles.text}>Ознакомиться с законодательством вы можете по ссылке (ч. 1 ст. 256 ГК РФ): </Text>
                                      <Link src='https://www.consultant.ru/document/cons_doc_LAW_5142/ec0c88d23cfe0b75563d574872c1457827b3607f/?ysclid=lkb23oaxga358628244'
                                            style={{
                                              fontSize: '12px',
                                            }}>
                                        ГК РФ Статья 256. Общая собственность супругов \ КонсультантПлюс
                                      </Link>
                                      <Text style={styles.text}>Попросите Продавца обратиться к нотариусу для получения
                                                   нотариального согласия. <br/>
                                                   Записаться на прием к нотариусу можно на Госуслугах по ссылке: </Text>
                                      <Link src='https://www.gosuslugi.ru/help/faq/notary/102751'
                                            style={{
                                              fontSize: '12px',
                                            }}>
                                        https://www.gosuslugi.ru/help/faq/notary/102751
                                      </Link>
                                    </View>
                                  </View>
                                )}
                            </View>
                          )}
                      </View>
                      <View wrap={false} >
                          {answers.first.risk10.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.first.risk10.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск: Право собственности продавца</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameRed}>
                                  <Text style={styles.textRisk}>Риск: Право собственности продавца</Text>
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
                                                   выписку из ЕГРН, даже если у собственника ее никогда не было.<br/>
                                                   Ознакомиться с законодательством Вы можете по ссылке(ст. 62 ГК РФ):</Text>
                                  <Link src='https://www.consultant.ru/document/cons_doc_LAW_182661/e064cc95b1bdffa4d12abb92fdfc56dea94198df/'
                                        style={{
                                          fontSize: '12px',
                                        }}>
                                    Статья 62. Порядок предоставления сведений, содержащихся в Едином
                                                      государственном реестре недвижимости \ КонсультантПлюс
                                  </Link>
                                  <Text style={styles.text}>На любой зарегистрированный объект недвижимости можно получить
                                                   выписку из ЕГРН, даже если у собственника ее никогда не было.
                                                   Заказать выписку Вы (или Продавец) можете, перейдя по ссылке: </Text>
                                  <Link src='https://rosreestor.net/vipiska-o-perehode-prav'
                                        style={{
                                          fontSize: '12px',
                                        }}>
                                    https://rosreestor.net/vipiska-o-perehode-prav
                                  </Link>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View wrap={false}>
                          {answers.first.risk12.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.first.risk12.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск: Генеральная доверенность</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameRed}>
                                  <Text style={styles.textRisk}>Риск: Генеральная доверенность</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск, что генеральная доверенность не является достоверной,
                                      поэтому: </Text>
                                  <Text style={styles.text}>Проверьте генеральную доверенность по ссылке: </Text>
                                  <Link src='https://reestr-dover.ru/'
                                        style={{
                                          fontSize: '12px',
                                        }}>
                                    https://reestr-dover.ru/
                                  </Link>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View wrap={false}>
                          {answers.second.risk2.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.second.risk2.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск: Границы объекта</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameRed}>
                                  <Text style={styles.textRisk}>Риск: Границы объекта</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                {answers.second.risk2.number === 1 ? (
                                  <View style={styles.Rec}>
                                    <Text style={styles.recTitle}>Рекомендации:</Text>
                                    <Text style={styles.text}>Есть риск, что межевание не проведено, поэтому: </Text>
                                    <Text style={styles.text}>Необходимо провести межевание земельного участка и поставить
                                                         его на кадастровый учет. Попросите Продавца воспользоваться
                                                         услугами кадастрового инженера. Он поможет провести проверку
                                                         межевания. </Text>
                                    <Text style={styles.text}>Аккредитованные кадастровые инженеры есть в реестре. </Text>
                                    <Text style={styles.text}>Ознакомиться с ним Вы можете по ссылке: </Text>
                                    <Link src='https://rosreestr.gov.ru/'
                                          style={{
                                            fontSize: '12px',
                                          }}>
                                      https://rosreestr.gov.ru/
                                    </Link>
                                  </View>
                                ) : (
                                  <View style={styles.Rec}>
                                    <Text style={styles.recTitle}>Рекомендации:</Text>
                                    <Text style={styles.text}>Есть риск, что межевание не соответствует выписке ЕГРН,
                                        поэтому: </Text>
                                    <Text style={styles.text}>Проверьте межевой план и акт согласования границ с помощью
                                                         публичной кадастровой карты
                                                         Росреестра:
                                    </Text>
                                    <Text style={styles.text}>Ссылка №1 </Text>
                                    <Link src='https://www.gosuslugi.ru/378659/1/info'
                                          style={{
                                            fontSize: '12px',
                                          }}>
                                      https://www.gosuslugi.ru/378659/1/info
                                    </Link>
                                    <Text style={styles.text}>Ссылка №2 </Text>
                                    <Link src='https://pkk.rosreestr.ru/?source=subscribe#/search/63.60201437832657,65.56074746184491/4/@bzbws4844'
                                          style={{
                                            fontSize: '12px',
                                          }}>
                                      https://pkk.rosreestr.ru/?source=subscribe#/search/63.60201437832657,65.56074746184491/4/@bzbws4844
                                    </Link>  
                                    <Text style={styles.text}>Воспользуйтесь услугами кадастрового инженера. Он поможет Вам
                                        провести проверку межевания. </Text>
                                  </View>
                                )}
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View wrap={false}>
                          {answers.second.risk3.cat > -1 && (
                            <View style={styles.riskBlock}>
                                {answers.second.risk3.cat === 0 ? (
                                  <View style={styles.RiskNameGreen}>
                                    <Text style={styles.textRisk}>Риск: Целевое использование объекта</Text>
                                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                                  </View>
                                ) : (
                                  <View>
                                      <View style={styles.RiskNameOrange}>
                                        <Text style={styles.textRisk}>Риск: Целевое использование объекта</Text>
                                        <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                      </View>
                                      {answers.second.risk3.number === 1 ? (
                                        <View>
                                            <View className="Rec">
                                              <Text style={styles.recTitle}>Рекомендации:</Text>
                                              <Text style={styles.text}>Есть риск, что использование объекта для ваших нужд
                                                         недопустимо, поэтому: </Text>
                                              <Text style={styles.text}>ы можете заключить данную сделку, однако ваши планы на
                                                         земельный участок могут быть не реализованы.
                                                         Вид разрешенного использования земельного участка предполагает,
                                                         что объект должен использоваться в соответствии с назначением и
                                                         требованиями. Это ограничивает свободу ваших действий при
                                                         пользовании объектом. </Text>
                                            </View>
                                        </View>
                                      ) : (
                                        <View>
                                            {answers.second.risk3.number === 2 ? (
                                              <View style={styles.Rec}>
                                                <Text style={styles.recTitle}>Рекомендации:</Text>
                                                <Text style={styles.text}>Есть риск, что разрешение на использование объекта не
                                                               подтверждено официально: </Text>
                                                <Link src='https://genplanmos.ru/project/generalnyy_plan_moskvy_do_2035_goda/'
                                                      style={{
                                                        fontSize: '12px',
                                                      }}>
                                                  https://genplanmos.ru/project/generalnyy_plan_moskvy_do_2035_goda/
                                                </Link>              
                                                <Text style={styles.text}>Есть риск, что разрешение на использование объекта не
                                                подтверждено официально: </Text>
                                                <Link src='https://www.mos.ru/mka/documents/pravila-zemlepolzovaniya-i-zastrojki-goroda-moskvy/'
                                                      style={{
                                                        fontSize: '12px',
                                                      }}>
                                                  https://www.mos.ru/mka/documents/pravila-zemlepolzovaniya-i-zastrojki-goroda-moskvy/
                                                </Link>
                                              </View>
                                            ) : (
                                              <View style={styles.Rec}>
                                                <Text style={styles.recTitle}>Рекомендации:</Text>
                                                <Text style={styles.text}>Есть риск, что объект попадает в зону особого
                                                    назначения, поэтому: </Text>
                                                <Text style={styles.text}>Проверьте информацию по земельному участку на портале
                                                               ФГИС ТП по ссылке:
                                                </Text>
                                                <Link src='https://fgistp.economy.gov.ru/'
                                                      style={{
                                                        fontSize: '12px',
                                                      }}>
                                                  https://fgistp.economy.gov.ru/
                                                </Link>
                                              </View>
                                            )}
                                        </View>
                                      )}
                                  </View>
                                )}
                            </View>
                          )}
                      </View>
                      <View wrap={false}>
                          {answers.second.risk4.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.second.risk4.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск: Экология</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameOrange}>
                                  <Text style={styles.textRisk}>Риск: Экология</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск того, что Вы не проинформированы об экологической ситуации
                                      земельного участка, поэтому: </Text>
                                  <Text style={styles.text}>Запросите информацию об экологической ситуации по ссылке:
                                  </Text>
                                  <Link src='https://www.gosuslugi.ru/72281/1/info'
                                        style={{
                                          fontSize: '12px',
                                        }}>
                                    https://www.gosuslugi.ru/72281/1/info
                                  </Link>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View wrap={false}>
                          {answers.second.risk8.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.second.risk8.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск: Юридическая история объекта</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameOrange}>
                                  <Text style={styles.textRisk}>Риск: Юридическая история объекта</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск того, что Вы не проинформированы о юридической истории
                                      земельного участка, поэтому: </Text>
                                  <Text style={styles.text}>Ознакомьтесь с информацией о переходе прав на объект недвижимости,
                                      заказав выписку из ЕГРН по ссылке:</Text>
                                      <Link src='https://rosreestor.net/vipiska-o-perehode-prav'
                                            style={{
                                              fontSize: '12px',
                                            }}>
                                        https://rosreestor.net/vipiska-o-perehode-prav
                                      </Link>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View wrap={false}>
                          {answers.second.risk11.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.second.risk11.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск: Обременения на объект</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameOrange}>
                                  <Text style={styles.textRisk}>Риск: Обременения на объект</Text>
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
                      <View wrap={false}>
                          {answers.third.risk5.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.third.risk5.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск: Банкротство продавца</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameOrange}>
                                  <Text style={styles.textRisk}>Риск: Банкротство продавца</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск, что Продавец является банкротом, поэтому: </Text>
                                  <Text style={styles.text}>Проверьте наличие Продавца в списках банкротов в соотвествующем
                                      реестре:</Text>
                                  <Link src='https://old.bankrot.fedresurs.ru/?ysclid=ljpmeb4npx361137021&attempt=2'
                                        style={{
                                          fontSize: '12px',
                                        }}>
                                    https://old.bankrot.fedresurs.ru/?ysclid=ljpmeb4npx361137021&attempt=2
                                  </Link>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View wrap={false}>
                          {answers.third.risk6.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.third.risk6.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск: Выплата долгов продавцом</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameOrange}>
                                  <Text style={styles.textRisk}>Риск: Выплата долгов продавцом</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск, что Продавец является злостным должником, поэтому: </Text>
                                  <Text style={styles.text}>Проверьте Продавца в соответствующем реестре:
                                      https://fssp.gov.ru/ </Text>
                                  <Link src='https://fssp.gov.ru/'
                                        style={{
                                          fontSize: '12px',
                                        }}>
                                    https://fssp.gov.ru/
                                  </Link>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View wrap={false}>
                          {answers.third.risk7.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.third.risk7.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск: Экстремизм</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameRed}>
                                  <Text style={styles.textRisk}>Риск: Экстремизм</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск, что Продавец причастен к экстремизму или иным
                                      преступлениям, поэтому: </Text>
                                  <Text style={styles.text}>Проверьте Продавца в соответствующем реестре лиц, причастных к
                                      экстремизму:</Text>
                                  <Link src='https://www.fedsfm.ru/documents/terr-list?ysclid=ljpmkslzio263245615'
                                        style={{
                                          fontSize: '12px',
                                        }}>
                                    https://www.fedsfm.ru/documents/terr-list?ysclid=ljpmkslzio263245615
                                  </Link>
                                  <Text style={styles.text}>Наличие иных преступлений продавца можно проверить в сервисе МВД
                                      "Внимание, розыск!":</Text>
                                      <Link src='https://мвд.рф/wanted'
                                            style={{
                                              fontSize: '12px',
                                            }}>
                                        https://мвд.рф/wanted
                                      </Link>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View wrap={false}>
                          {answers.third.risk9.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.third.risk9.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск: Продавец-ответчик в судебном споре</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameOrange}>
                                  <Text style={styles.textRisk}>Риск: Продавец-ответчик в судебном споре</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск, что Продавец участвует в судебном производстве в качестве
                                      ответчика, поэтому: </Text>
                                  <Text style={styles.text}>Проверьте продавца в соответствующем реестре: <br/>
                                      Это нужно для того, чтобы удостовериться, что в отношении продавца
                                      нет возбужденных судебных дел, которые бы могли угрожать совершению
                                      сделки (например, развод). </Text>
                                  <Link src='https://mos-gorsud.ru/mgs/services/cases/first-civil'
                                        style={{
                                          fontSize: '12px',
                                        }}>
                                    https://mos-gorsud.ru/mgs/services/cases/first-civil
                                  </Link>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View wrap={false}>
                          {answers.third.risk13.q1.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.third.risk13.q1.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск: Недееспособность продавца</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameRed}>
                                  <Text style={styles.textRisk}>Риск: Недееспособность продавца</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск, что Продавец является недееспособным, поэтому:</Text>
                                  <Text style={styles.text}>Получите выписку из ЕГРН о признании правообладателя недееспособным
                                      или ограниченно дееспособным. Инструкция по ссылке: </Text>
                                  <Link src='https://www.gosuslugi.ru/help/faq/egrn/101769'
                                        style={{
                                          fontSize: '12px',
                                        }}>
                                    https://www.gosuslugi.ru/help/faq/egrn/101769
                                  </Link>
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
                      <View wrap={false} >
                          {answers.first.risk1.cat > -1 && (
                            <View style={styles.riskBlock}>
                                {answers.first.risk1.cat === 0 ? (
                                  <View style={styles.RiskNameGreen}>
                                    <Text style={styles.textRisk}>Риск: Право супруга на объект </Text>
                                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                                  </View>
                                ) : (
                                  <View>
                                    <View style={styles.RiskNameOrange}>
                                      <Text style={styles.textRisk}>Риск: Право супруга на объект </Text>
                                      <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                    </View>
                                    <View style={styles.Rec}>
                                      <Text style={styles.recTitle}>Рекомендации:</Text>
                                      <Text style={styles.text}>Есть риск претензий со стороны супруга Продавца, поэтому: </Text>
                                      <Text style={styles.text}>Необходимо уточнить наличие брачного договора между супругами.
                                                   Нотариальное согласие второго супруга не требуется в случае, если
                                                   заключен брачный договор, в котором прописано условие о праве
                                                   распоряжения земельным участком. </Text>
                                      <Text style={styles.text}>Необходимо выяснить, когда земельный участок был приобретен
                                                   продавцом. Если до брака путем личного приобретения, дарения или
                                                   наследства, то второй супруг не может препятствовать совершению
                                                   сделки; если в браке, то второй супруг должен выразить свое согласие
                                                   на продажу, которое будет нотариально заверено. </Text>
                                      <Text style={styles.text}>Ознакомиться с законодательством вы можете по ссылке (ч. 1 ст. 256 ГК РФ): </Text>
                                      <Link src='https://www.consultant.ru/document/cons_doc_LAW_5142/ec0c88d23cfe0b75563d574872c1457827b3607f/?ysclid=lkb23oaxga358628244'
                                            style={{
                                              fontSize: '12px',
                                            }}>
                                        ГК РФ Статья 256. Общая собственность супругов \ КонсультантПлюс
                                      </Link>
                                      <Text style={styles.text}>Попросите Продавца обратиться к нотариусу для получения
                                                   нотариального согласия. <br/>
                                                   Записаться на прием к нотариусу можно на Госуслугах по ссылке: </Text>
                                      <Link src='https://www.gosuslugi.ru/help/faq/notary/102751'
                                            style={{
                                              fontSize: '12px',
                                            }}>
                                        https://www.gosuslugi.ru/help/faq/notary/102751
                                      </Link>
                                    </View>
                                  </View>
                                )}
                            </View>
                          )}
                      </View>
                      <View wrap={false} >
                          {answers.first.risk10.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.first.risk10.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск: Право собственности продавца</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameRed}>
                                  <Text style={styles.textRisk}>Риск: Право собственности продавца</Text>
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
                                                   выписку из ЕГРН, даже если у собственника ее никогда не было.<br/>
                                                   Ознакомиться с законодательством Вы можете по ссылке(ст. 62 ГК РФ):</Text>
                                  <Link src='https://www.consultant.ru/document/cons_doc_LAW_182661/e064cc95b1bdffa4d12abb92fdfc56dea94198df/'
                                        style={{
                                          fontSize: '12px',
                                        }}>
                                    Статья 62. Порядок предоставления сведений, содержащихся в Едином
                                                      государственном реестре недвижимости \ КонсультантПлюс
                                  </Link>
                                  <Text style={styles.text}>На любой зарегистрированный объект недвижимости можно получить
                                                   выписку из ЕГРН, даже если у собственника ее никогда не было.
                                                   Заказать выписку Вы (или Продавец) можете, перейдя по ссылке: </Text>
                                  <Link src='https://rosreestor.net/vipiska-o-perehode-prav'
                                        style={{
                                          fontSize: '12px',
                                        }}>
                                    https://rosreestor.net/vipiska-o-perehode-prav
                                  </Link>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View wrap={false}>
                          {answers.first.risk12.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.first.risk12.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск: Генеральная доверенность</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameRed}>
                                  <Text style={styles.textRisk}>Риск: Генеральная доверенность</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск, что генеральная доверенность не является достоверной,
                                      поэтому: </Text>
                                  <Text style={styles.text}>Проверьте генеральную доверенность по ссылке: </Text>
                                  <Link src='https://reestr-dover.ru/'
                                        style={{
                                          fontSize: '12px',
                                        }}>
                                    https://reestr-dover.ru/
                                  </Link>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View wrap={false}>
                          {answers.second.risk2.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.second.risk2.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск: Границы объекта</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameRed}>
                                  <Text style={styles.textRisk}>Риск: Границы объекта</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                {answers.second.risk2.number === 1 ? (
                                  <View style={styles.Rec}>
                                    <Text style={styles.recTitle}>Рекомендации:</Text>
                                    <Text style={styles.text}>Есть риск, что межевание не проведено, поэтому: </Text>
                                    <Text style={styles.text}>Необходимо провести межевание земельного участка и поставить
                                                         его на кадастровый учет. Попросите Продавца воспользоваться
                                                         услугами кадастрового инженера. Он поможет провести проверку
                                                         межевания. </Text>
                                    <Text style={styles.text}>Аккредитованные кадастровые инженеры есть в реестре. </Text>
                                    <Text style={styles.text}>Ознакомиться с ним Вы можете по ссылке: </Text>
                                    <Link src='https://rosreestr.gov.ru/'
                                          style={{
                                            fontSize: '12px',
                                          }}>
                                      https://rosreestr.gov.ru/
                                    </Link>
                                  </View>
                                ) : (
                                  <View style={styles.Rec}>
                                    <Text style={styles.recTitle}>Рекомендации:</Text>
                                    <Text style={styles.text}>Есть риск, что межевание не соответствует выписке ЕГРН,
                                        поэтому: </Text>
                                    <Text style={styles.text}>Проверьте межевой план и акт согласования границ с помощью
                                                         публичной кадастровой карты
                                                         Росреестра:
                                    </Text>
                                    <Text style={styles.text}>Ссылка №1 </Text>
                                    <Link src='https://www.gosuslugi.ru/378659/1/info'
                                          style={{
                                            fontSize: '12px',
                                          }}>
                                      https://www.gosuslugi.ru/378659/1/info
                                    </Link>
                                    <Text style={styles.text}>Ссылка №2 </Text>
                                    <Link src='https://pkk.rosreestr.ru/?source=subscribe#/search/63.60201437832657,65.56074746184491/4/@bzbws4844'
                                          style={{
                                            fontSize: '12px',
                                          }}>
                                      https://pkk.rosreestr.ru/?source=subscribe#/search/63.60201437832657,65.56074746184491/4/@bzbws4844
                                    </Link>  
                                    <Text style={styles.text}>Воспользуйтесь услугами кадастрового инженера. Он поможет Вам
                                        провести проверку межевания. </Text>
                                  </View>
                                )}
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View wrap={false}>
                          {answers.second.risk3.cat > -1 && (
                            <View style={styles.riskBlock}>
                                {answers.second.risk3.cat === 0 ? (
                                  <View style={styles.RiskNameGreen}>
                                    <Text style={styles.textRisk}>Риск: Целевое использование объекта</Text>
                                    <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                                  </View>
                                ) : (
                                  <View>
                                      <View style={styles.RiskNameOrange}>
                                        <Text style={styles.textRisk}>Риск: Целевое использование объекта</Text>
                                        <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                      </View>
                                      {answers.second.risk3.number === 1 ? (
                                        <View>
                                            <View className="Rec">
                                              <Text style={styles.recTitle}>Рекомендации:</Text>
                                              <Text style={styles.text}>Есть риск, что использование объекта для ваших нужд
                                                         недопустимо, поэтому: </Text>
                                              <Text style={styles.text}>ы можете заключить данную сделку, однако ваши планы на
                                                         земельный участок могут быть не реализованы.
                                                         Вид разрешенного использования земельного участка предполагает,
                                                         что объект должен использоваться в соответствии с назначением и
                                                         требованиями. Это ограничивает свободу ваших действий при
                                                         пользовании объектом. </Text>
                                            </View>
                                        </View>
                                      ) : (
                                        <View>
                                            {answers.second.risk3.number === 2 ? (
                                              <View style={styles.Rec}>
                                                <Text style={styles.recTitle}>Рекомендации:</Text>
                                                <Text style={styles.text}>Есть риск, что разрешение на использование объекта не
                                                               подтверждено официально: </Text>
                                                <Link src='https://genplanmos.ru/project/generalnyy_plan_moskvy_do_2035_goda/'
                                                      style={{
                                                        fontSize: '12px',
                                                      }}>
                                                  https://genplanmos.ru/project/generalnyy_plan_moskvy_do_2035_goda/
                                                </Link>              
                                                <Text style={styles.text}>Есть риск, что разрешение на использование объекта не
                                                подтверждено официально: </Text>
                                                <Link src='https://www.mos.ru/mka/documents/pravila-zemlepolzovaniya-i-zastrojki-goroda-moskvy/'
                                                      style={{
                                                        fontSize: '12px',
                                                      }}>
                                                  https://www.mos.ru/mka/documents/pravila-zemlepolzovaniya-i-zastrojki-goroda-moskvy/
                                                </Link>
                                              </View>
                                            ) : (
                                              <View style={styles.Rec}>
                                                <Text style={styles.recTitle}>Рекомендации:</Text>
                                                <Text style={styles.text}>Есть риск, что объект попадает в зону особого
                                                    назначения, поэтому: </Text>
                                                <Text style={styles.text}>Проверьте информацию по земельному участку на портале
                                                               ФГИС ТП по ссылке:
                                                </Text>
                                                <Link src='https://fgistp.economy.gov.ru/'
                                                      style={{
                                                        fontSize: '12px',
                                                      }}>
                                                  https://fgistp.economy.gov.ru/
                                                </Link>
                                              </View>
                                            )}
                                        </View>
                                      )}
                                  </View>
                                )}
                            </View>
                          )}
                      </View>
                      <View wrap={false}>
                          {answers.second.risk4.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.second.risk4.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск: Экология</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameOrange}>
                                  <Text style={styles.textRisk}>Риск: Экология</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск того, что Вы не проинформированы об экологической ситуации
                                      земельного участка, поэтому: </Text>
                                  <Text style={styles.text}>Запросите информацию об экологической ситуации по ссылке:
                                  </Text>
                                  <Link src='https://www.gosuslugi.ru/72281/1/info'
                                        style={{
                                          fontSize: '12px',
                                        }}>
                                    https://www.gosuslugi.ru/72281/1/info
                                  </Link>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View wrap={false}>
                          {answers.second.risk8.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.second.risk8.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск: Юридическая история объекта</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameOrange}>
                                  <Text style={styles.textRisk}>Риск: Юридическая история объекта</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск того, что Вы не проинформированы о юридической истории
                                      земельного участка, поэтому: </Text>
                                  <Text style={styles.text}>Ознакомьтесь с информацией о переходе прав на объект недвижимости,
                                      заказав выписку из ЕГРН по ссылке:</Text>
                                      <Link src='https://rosreestor.net/vipiska-o-perehode-prav'
                                            style={{
                                              fontSize: '12px',
                                            }}>
                                        https://rosreestor.net/vipiska-o-perehode-prav
                                      </Link>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View wrap={false}>
                          {answers.second.risk11.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.second.risk11.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск: Обременения на объект</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameOrange}>
                                  <Text style={styles.textRisk}>Риск: Обременения на объект</Text>
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
                      <View wrap={false}>
                          {answers.third.risk5.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.third.risk5.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск: Банкротство продавца</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameOrange}>
                                  <Text style={styles.textRisk}>Риск: Банкротство продавца</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск, что Продавец является банкротом, поэтому: </Text>
                                  <Text style={styles.text}>Проверьте наличие Продавца в списках банкротов в соотвествующем
                                      реестре:</Text>
                                  <Link src='https://old.bankrot.fedresurs.ru/?ysclid=ljpmeb4npx361137021&attempt=2'
                                        style={{
                                          fontSize: '12px',
                                        }}>
                                    https://old.bankrot.fedresurs.ru/?ysclid=ljpmeb4npx361137021&attempt=2
                                  </Link>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View wrap={false}>
                          {answers.third.risk6.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.third.risk6.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск: Выплата долгов продавцом</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameOrange}>
                                  <Text style={styles.textRisk}>Риск: Выплата долгов продавцом</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск, что Продавец является злостным должником, поэтому: </Text>
                                  <Text style={styles.text}>Проверьте Продавца в соответствующем реестре:
                                      https://fssp.gov.ru/ </Text>
                                  <Link src='https://fssp.gov.ru/'
                                        style={{
                                          fontSize: '12px',
                                        }}>
                                    https://fssp.gov.ru/
                                  </Link>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View wrap={false}>
                          {answers.third.risk7.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.third.risk7.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск: Экстремизм</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameRed}>
                                  <Text style={styles.textRisk}>Риск: Экстремизм</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск, что Продавец причастен к экстремизму или иным
                                      преступлениям, поэтому: </Text>
                                  <Text style={styles.text}>Проверьте Продавца в соответствующем реестре лиц, причастных к
                                      экстремизму:</Text>
                                  <Link src='https://www.fedsfm.ru/documents/terr-list?ysclid=ljpmkslzio263245615'
                                        style={{
                                          fontSize: '12px',
                                        }}>
                                    https://www.fedsfm.ru/documents/terr-list?ysclid=ljpmkslzio263245615
                                  </Link>
                                  <Text style={styles.text}>Наличие иных преступлений продавца можно проверить в сервисе МВД
                                      "Внимание, розыск!":</Text>
                                      <Link src='https://мвд.рф/wanted'
                                            style={{
                                              fontSize: '12px',
                                            }}>
                                        https://мвд.рф/wanted
                                      </Link>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View wrap={false}>
                          {answers.third.risk9.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.third.risk9.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск: Продавец-ответчик в судебном споре</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameOrange}>
                                  <Text style={styles.textRisk}>Риск: Продавец-ответчик в судебном споре</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск, что Продавец участвует в судебном производстве в качестве
                                      ответчика, поэтому: </Text>
                                  <Text style={styles.text}>Проверьте продавца в соответствующем реестре: <br/>
                                      Это нужно для того, чтобы удостовериться, что в отношении продавца
                                      нет возбужденных судебных дел, которые бы могли угрожать совершению
                                      сделки (например, развод). </Text>
                                  <Link src='https://mos-gorsud.ru/mgs/services/cases/first-civil'
                                        style={{
                                          fontSize: '12px',
                                        }}>
                                    https://mos-gorsud.ru/mgs/services/cases/first-civil
                                  </Link>
                                </View>
                              </View>
                            )}
                        </View>
                          )}
                      </View>
                      <View wrap={false}>
                          {answers.third.risk13.q1.cat > -1 && (
                            <View style={styles.riskBlock}>
                            {answers.third.risk13.q1.cat === 0 ? (
                              <View style={styles.RiskNameGreen}>
                                <Text style={styles.textRisk}>Риск: Недееспособность продавца</Text>
                                <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риска нет</Text>
                              </View>
                            ) : (
                              <View>
                                <View style={styles.RiskNameRed}>
                                  <Text style={styles.textRisk}>Риск: Недееспособность продавца</Text>
                                  <Text style={[styles.textRisk, { textAlign: 'right' }]}>Риск есть</Text>
                                </View>
                                <View style={styles.Rec}>
                                  <Text style={styles.recTitle}>Рекомендации:</Text>
                                  <Text style={styles.text}>Есть риск, что Продавец является недееспособным, поэтому:</Text>
                                  <Text style={styles.text}>Получите выписку из ЕГРН о признании правообладателя недееспособным
                                      или ограниченно дееспособным. Инструкция по ссылке: </Text>
                                  <Link src='https://www.gosuslugi.ru/help/faq/egrn/101769'
                                        style={{
                                          fontSize: '12px',
                                        }}>
                                    https://www.gosuslugi.ru/help/faq/egrn/101769
                                  </Link>
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