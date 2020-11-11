import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../../context";

import Timer from "./Timer";
import Item from "./Item";

export default function MobilePhonesDiscount() {
  const { data } = useContext(Context);

  return (
    <>
      <DivCountdown className="d-flex flex-column">
        <img
          src={require("../../img/carousel/01.webp")}
          alt="Mobile phones sale"
        />
        <hr />
        <Timer />
      </DivCountdown>
      <DivDiscountList>
        {data
          .filter(
            (dataItem) =>
              dataItem.category === "Mobile Phones" &&
              dataItem.hasDiscount === true
          )
          .map((dataItem) => {
            return <Item key={dataItem.id} dataItem={dataItem} />;
          })}
      </DivDiscountList>
    </>
  );
}

export const DivCountdown = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  justify-self: center;
  width: 100%;
  > img {
    width: 100%;
    height: 100%;
  }
  > :last-child {
    margin: auto;
  }
`;
export const DivDiscountList = styled.div`
  grid-area: 2 / 1 / 3 / 3;
  display: grid;
  grid-template-columns: repeat(auto-fit, 290px);
  grid-row-gap: 0.5rem;
  grid-column-gap: 0.5rem;
  justify-content: center;
`;
