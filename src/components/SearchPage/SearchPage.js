import React from "react";
import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar.js";

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 100px;
  width: 80vw;

  h1 {
    display: block;
    color: black;
  }
`;

const SearchPage = ({ setSearchValue, searchValue }) => {
  return (
    <MainContainer>
      <SearchContainer>
        <h1>Search Unsplash Images</h1>
        <SearchBar
          setSearchValue={setSearchValue}
          searchValue={searchValue}
          className="searchBar"
        />
      </SearchContainer>
    </MainContainer>
  );
};

export default SearchPage;
