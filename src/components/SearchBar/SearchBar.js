import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledSearchBarContainer = styled.div`
  justify-content: center;
`;

const StyledSearchBar = styled.input`
  border: 1px solid black;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjMuODA5IDIxLjY0NmwtNi4yMDUtNi4yMDVjMS4xNjctMS42MDUgMS44NTctMy41NzkgMS44NTctNS43MTEgMC01LjM2NS00LjM2NS05LjczLTkuNzMxLTkuNzMtNS4zNjUgMC05LjczIDQuMzY1LTkuNzMgOS43MyAwIDUuMzY2IDQuMzY1IDkuNzMgOS43MyA5LjczIDIuMDM0IDAgMy45MjMtLjYyNyA1LjQ4Ny0xLjY5OGw2LjIzOCA2LjIzOCAyLjM1NC0yLjM1NHptLTIwLjk1NS0xMS45MTZjMC0zLjc5MiAzLjA4NS02Ljg3NyA2Ljg3Ny02Ljg3N3M2Ljg3NyAzLjA4NSA2Ljg3NyA2Ljg3Ny0zLjA4NSA2Ljg3Ny02Ljg3NyA2Ljg3N2MtMy43OTMgMC02Ljg3Ny0zLjA4NS02Ljg3Ny02Ljg3N3oiLz48L3N2Zz4=");
  background-repeat: no-repeat;
  background-position: 10px;
  padding: 15px 10px 15px 50px;
  font-size: 16px;
  width: 50vw;
  min-width: 300px;
  border-radius: 5px;

  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
    content: URL("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgMjAuMTg4bC04LjMxNS04LjIwOSA4LjItOC4yODItMy42OTctMy42OTctOC4yMTIgOC4zMTgtOC4zMS04LjIwMy0zLjY2NiAzLjY2NiA4LjMyMSA4LjI0LTguMjA2IDguMzEzIDMuNjY2IDMuNjY2IDguMjM3LTguMzE4IDguMjg1IDguMjAzeiIvPjwvc3ZnPg==");
    cursor: pointer;
    display: inline-block;
    height: 18px;
  }
`;

const SearchResultsWrapper = styled.div`
  border: 2px solid black;
`;

const StyledSearchResults = styled.div`
  border: 1px solid transparent;
  background-color: #f1f1f1;
  padding: 10px;
  font-size: 20px;
  display: relative;
  border-radius: 5px;

  :hover {
    background-color: grey;
  }
`;

const SearchBar = ({ setSearchValue, searchValue, accesKey }) => {
  const [autocomplete, setAutocomplete] = useState([]);
  const [resultsFocus, setResultsFocus] = useState(false);

  const navigate = useNavigate();

  if (searchValue) {
    navigate("/results");
  }

  const chandleSearch = (e) => {
    const result = [];

    if (e.target.value.length > 2) {
      axios
        .get(
          `https://unsplash.com/nautocomplete/${e.target.value.toLowerCase()}
      `
        )
        .then((res) => {
          for (const x of res.data.autocomplete) {
            result.push(x.query);
          }
          setAutocomplete(result);

          if (res.data.autocomplete.length === 0) {
            setAutocomplete(["No results"]);
          }
        })
        .catch((e) => new Error(e));
    } else {
      setAutocomplete([]);
    }
  };

  return (
    <StyledSearchBarContainer>
      <StyledSearchBar
        type="search"
        placeholder="Type word..."
        onChange={(e) => chandleSearch(e)}
        onBlur={() => (resultsFocus ? setAutocomplete([]) : "")}
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            setSearchValue(e.target.value);
            setAutocomplete([]);
          }
        }}
      ></StyledSearchBar>

      {autocomplete.map((x, index) => (
        <StyledSearchResults
          key={index}
          onClick={(e) => {
            setSearchValue(e.target.innerHTML);
            setAutocomplete([]);
          }}
        >
          {x}
        </StyledSearchResults>
      ))}
    </StyledSearchBarContainer>
  );
};

export default SearchBar;
