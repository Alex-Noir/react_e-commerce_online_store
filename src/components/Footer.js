import React, { useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import Lists from "./footer/Lists";
import I18nButtons from "./footer/I18nButtons";
import Social from "./footer/Social";

export default function Footer() {
  const [t, i18n] = useTranslation();

  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);

  return (
    <StyledFooter className="bg-dark mt-5 py-3">
      <Lists />
      <I18nButtons />
      <Social />
    </StyledFooter>
  );
}

export const StyledFooter = styled.footer`
  grid-area: 3 / 1 / 4 / 4;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr repeat(4, auto) 1fr;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  > :first-child {
    grid-column: 2 / 3;
  }
  > :nth-child(2) {
    grid-column: 3 / 4;
  }
  > :nth-child(3) {
    grid-column: 4 / 5;
  }
  > :last-child {
    grid-column: 5 / 6;
  }

  @media only screen and (max-width: 1067px) {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: repeat(2, 1fr);
    > :first-child {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    }
    > :nth-child(2) {
      grid-row: 1 / 2;
      grid-column: 2 / 3;
    }
    > :nth-child(3) {
      grid-row: 2 / 3;
      grid-column: 1 / 2;
    }
    > :last-child {
      grid-row: 2 / 3;
      grid-column: 2 / 3;
    }
  }

  @media only screen and (max-width: 686px) {
    grid-template-rows: repeat(4, auto);
    grid-template-columns: 1fr auto 1fr;
    > :first-child {
      grid-column: 2 / 3;
    }
    > :nth-child(2) {
      grid-row: 2 / 3;
    }
    > :nth-child(3) {
      grid-row: 3 / 4;
      grid-column: 2 / 3;
      align-items: center;
    }
    > :last-child {
      grid-row: 4 / 5;
      align-items: center;
    }
  }
`;
