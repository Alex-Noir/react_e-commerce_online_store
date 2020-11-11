import React, { useEffect, useContext } from "react";
import { Context } from "../../context";
import styled from "styled-components";

import SearchResult from "./SearchResult";

export default function SearchResults() {
  const { results, makeResultsInvisible, nullifySearchValue } = useContext(
    Context
  );

  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {
      makeResultsInvisible();
      nullifySearchValue();
    };
  }, []);

  return (
    <DivSearchResults className="d-flex flex-column">
      {results.map((result) => {
        return <SearchResult key={result.id} result={result} />;
      })}
    </DivSearchResults>
  );
}

export const DivSearchResults = styled.div`
  grid-area: 1 / 1 / 3 / 3;
  > div {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto 1fr 1fr 1fr;
    > :first-child {
      grid-area: 1 / 1 / 2 / 2;
      margin-right: 1rem;
    }
    > :nth-child(2) {
      grid-area: 1 / 2 / 2 / 3;
      align-self: start;
      justify-self: start;
      > a,
      a:hover,
      a:focus {
        text-decoration: none;
      }
      > a:hover,
      a:focus {
        text-shadow: 2px 2px 20px;
      }
    }
    > :nth-child(3) {
      grid-area: 1 / 3 / 2 / 4;
      align-self: center;
      justify-self: end;
      > :nth-child(2),
      :last-child {
        width: auto;
      }
    }
    > :nth-child(4) {
      grid-area: 1 / 4 / 2 / 5;
      align-self: start;
      justify-self: end;
    }
  }

  @media only screen and (max-width: 600px) {
    > div {
      grid-template-rows: auto auto;
      grid-template-columns: auto 1fr;
      > :nth-child(2) {
        grid-area: 1 / 2 / 2 / 3;
        justify-self: center;
      }
      > :nth-child(3) {
        grid-area: 2 / 1 / 3 / 2;
      }
      > :nth-child(4) {
        grid-area: 2 / 2 / 3 / 3;
      }
    }
  }
`;
