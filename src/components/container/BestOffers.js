import React, { useContext } from "react";
import styled from "styled-components";
import { DivProductList } from "./MobilePhones";
import { useTranslation } from "react-i18next";
import { Context } from "../../context";

import Item from "./Item";

export default function BestOffers() {
  const { data } = useContext(Context);

  const [t] = useTranslation();

  return (
    <DivBestOffers>
      <div className="h4 mt-3 ml-4">
        <b>{t("Products|1")}</b>
      </div>
      <DivProductList>
        {data
          .filter((dataItem) => dataItem.price === 250)
          .map((dataItem) => {
            return <Item key={dataItem.id} dataItem={dataItem} />;
          })}
      </DivProductList>
    </DivBestOffers>
  );
}

export const DivBestOffers = styled.div`
  grid-area: 2 / 1 / 3 / 3;
`;
