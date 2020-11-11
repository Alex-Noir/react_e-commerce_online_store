import React, { useEffect, useContext } from "react";
import { Context } from "../../context";
import { useTranslation } from "react-i18next";

export default function I18nButtons() {
  const { changeCurrency } = useContext(Context);

  const [t, i18n] = useTranslation();

  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <div className="d-flex flex-column justify-content-around align-items-center">
      <div className="bg-success mb-4 p-2 text-light rounded">
        {t("I18nButtons|1")}
        <select
          className="ml-2 bg-success text-light border border-success"
          onChange={changeLanguage}
        >
          <option value="en">English</option>
          <option value="de">Deutsche</option>
          <option value="fr">Française</option>
          <option value="es">Español</option>
          <option value="it">Italiano</option>
          <option value="ru">Русский</option>
          <option value="zh">中文</option>
          <option value="ja">日本語</option>
          <option value="ko">한국어</option>
          <option value="hi">हिंदी</option>
        </select>
      </div>
      <div className="d-flex no-wrap bg-info mb-4 p-2 text-light rounded">
        {t("I18nButtons|2")}
        <select
          className="ml-2 bg-info text-light border border-info"
          onChange={changeCurrency}
        >
          <option value="€">€ (EUR) {t("Currencies|1")}</option>
          <option value="$">$ (USD) {t("Currencies|2")}</option>
          <option value="₽">₽ (RUB) {t("Currencies|3")}</option>
          <option value="Ch¥">¥ (CNY) {t("Currencies|4")}</option>
          <option value="Jp¥">¥ (JPY) {t("Currencies|5")}</option>
          <option value="₩">₩ (KRW) {t("Currencies|6")}</option>
          <option value="₹">₹ (INR) {t("Currencies|7")}</option>
        </select>
      </div>
      <div className="bg-primary p-2 text-light rounded">
        {t("I18nButtons|3")}
        <select className="ml-2 bg-primary text-light border border-primary">
          <option value="UK">{t("Countries|1")}</option>
          <option value="USA">{t("Countries|2")}</option>
          <option value="Germany">{t("Countries|3")}</option>
          <option value="France">{t("Countries|4")}</option>
          <option value="Spain">{t("Countries|5")}</option>
          <option value="Italy">{t("Countries|6")}</option>
          <option value="Russia">{t("Countries|7")}</option>
          <option value="China">{t("Countries|8")}</option>
          <option value="Japan">{t("Countries|9")}</option>
          <option value="Korea">{t("Countries|10")}</option>
          <option value="India">{t("Countries|11")}</option>
        </select>
      </div>
    </div>
  );
}
