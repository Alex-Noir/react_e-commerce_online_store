import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Context } from "../../context";
import { mobile_phones } from "../../components/data";

import Item from "./Item";
import Pagination from "./Pagination";

export default function MobilePhones() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data } = useContext(Context);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(mobile_phones.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [t] = useTranslation();

  function paginate(e, pageNumber) {
    e.preventDefault();
    window.scrollTo(0, 58);
    setCurrentPage(pageNumber);
  }

  function goToPrevOrNextPage(e, pageNumber) {
    e.preventDefault();
    window.scrollTo(0, 58);
    if (e.currentTarget.id === "Previous") {
      setCurrentPage(pageNumber - 1);
    } else if (e.currentTarget.id === "Next") {
      setCurrentPage(pageNumber + 1);
    }
  }

  return (
    <DivProducts className="d-flex flex-column justify-content-center">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">{t("MobilePhones|1")}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {t("Nav|1")}
          </li>
        </ol>
      </nav>
      <DivProductList>
        {data
          .filter((dataItem) => dataItem.category === "Mobile Phones")
          .slice(indexOfFirstPost, indexOfLastPost)
          .map((dataItem) => {
            return <Item key={dataItem.id} dataItem={dataItem} />;
          })}
      </DivProductList>
      <Pagination
        currentPage={currentPage}
        pageNumbers={pageNumbers}
        paginate={paginate}
        goToPrevOrNextPage={goToPrevOrNextPage}
      />
    </DivProducts>
  );
}

export const DivProducts = styled.div`
  grid-area: 1 / 1 / 2 / 3;
`;

export const DivProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 290px);
  grid-row-gap: 0.5rem;
  grid-column-gap: 0.5rem;
  justify-content: center;
`;
