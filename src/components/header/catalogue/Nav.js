import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Nav({ showNav }) {
  const [t] = useTranslation();

  return (
    <StyledNav>
      <ul className="nav flex-column bg-light">
        <li className="nav-item">
          <Link to="/mobile-phones" className="nav-link" onClick={showNav}>
            {t("Nav|1")}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/laptops" className="nav-link" onClick={showNav}>
            {t("Nav|2")}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/tablets" className="nav-link" onClick={showNav}>
            {t("Nav|3")}
          </Link>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link" onClick={showNav}>
            Lorem ipsum sin amet
          </a>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link" onClick={showNav}>
            Lorem ipsum sin amet
          </a>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link" onClick={showNav}>
            Lorem ipsum sin amet
          </a>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link" onClick={showNav}>
            Lorem ipsum sin amet
          </a>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link" onClick={showNav}>
            Lorem ipsum sin amet
          </a>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link" onClick={showNav}>
            Lorem ipsum sin amet
          </a>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link" onClick={showNav}>
            Lorem ipsum sin amet
          </a>
        </li>
      </ul>
    </StyledNav>
  );
}

export const StyledNav = styled.nav`
  min-width: 255px;
  max-width: 255px;
  position: absolute;
  top: 48px;
  left: -163px;
  > ul > li {
    border-left: 2px solid red;
    border-bottom: 1px solid #acacac;
    border-right: 1px solid #acacac;
    font-size: 0.8125rem;
  }

  @media only screen and (max-width: 686px) {
    top: 107px;
  }
`;
