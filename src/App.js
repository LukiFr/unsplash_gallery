import React, { useState } from "react";
import SearchPage from "./components/SearchPage/SearchPage.js";
import ResultPage from "./components/ResultPage/ResultPage.js";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import GlobalStyle from "./globalStyles.js";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const accesKey = "NEAZh6_uDSU543kj0g8w00UNEPi5mtWDl1ySgwUfY3o";

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <SearchPage
                setSearchValue={setSearchValue}
                searchValue={searchValue}
                accesKey={accesKey}
              />
            }
          />
          <Route
            path="results"
            element={
              <ResultPage
                setSearchValue={setSearchValue}
                searchValue={searchValue}
                accesKey={accesKey}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
