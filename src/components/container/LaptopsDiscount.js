import React, { useContext } from "react";
import { DivCountdown, DivDiscountList } from "./MobilePhonesDiscount";
import { Context } from "../../context";

import Timer from "./Timer";
import Item from "./Item";

export default function LaptopsDiscount() {
  const { data } = useContext(Context);

  return (
    <>
      <DivCountdown className="d-flex flex-column">
        <img src={require("../../img/carousel/02.webp")} alt="Laptops sale" />
        <hr />
        <Timer />
      </DivCountdown>
      <DivDiscountList>
        {data
          .filter(
            (dataItem) =>
              dataItem.category === "Laptops" && dataItem.hasDiscount === true
          )
          .map((dataItem) => {
            return <Item key={dataItem.id} dataItem={dataItem} />;
          })}
      </DivDiscountList>
    </>
  );
}
