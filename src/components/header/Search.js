import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Context } from "../../context";

export default function Search() {
  const { searchValue, handleSearch, setSearchValue } = useContext(Context);

  const history = useHistory();

  function redirectToSearchResults() {
    history.push("/");
  }

  return (
    <FormSearchBar
      className="d-flex no-wrap my-3 mx-3"
      id="formSearchBar"
      onSubmit={(e) => {
        handleSearch(e);
        redirectToSearchResults();
      }}
    >
      <input
        type="search"
        name="search"
        value={searchValue}
        className="border border-dark border-right-0 rounded-left"
        onChange={setSearchValue}
      />
      <button
        type="submit"
        value="submit"
        form="formSearchBar"
        className="bg-warning border border-warning text-danger rounded-right"
      >
        <i className="fas fa-search"></i>
      </button>
    </FormSearchBar>
  );
}

export const FormSearchBar = styled.form`
  align-self: center;
  > input {
    width: 100%;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
  > button {
    width: auto;
  }
`;
