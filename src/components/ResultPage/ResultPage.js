import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar.js";
import styled from "styled-components";
import axios from "axios";
import Image from "../Image/Image.js";
import FullImage from "../FullImage/FullImage.js";

const accesKey = "NEAZh6_uDSU543kj0g8w00UNEPi5mtWDl1ySgwUfY3o";

const MainContainer = styled.div`
  positione: relative;
  margin: 0px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    display: block;
    margin: 150px 0px 40px;
    text-transform: capitalize;
  }
`;

const SearchBarWrapper = styled.div`
  position: absolute;
  z-index: 0;
  top: 80px;
`;

const ImagesContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 50px 50px;
  width: 100%;
`;

const ButtonsContainer = styled.div`
  margin: 50px 0px;
`;

const StyledButton = styled.button`
  margin: 0px 50px;
  height: 50px;
  width: 150px;
`;

const ResultPage = ({ setSearchValue, searchValue }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [showFullImage, setShowFullImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchValue}&client_id=${accesKey}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setImages(res.data.results))
      .catch((e) => console.log(e.data));
  }, [url]);

  return (
    <MainContainer
      onClick={() => (showFullImage ? setShowFullImage(false) : "")}
    >
      {showFullImage === true ? (
        <FullImage selectedImage={selectedImage} />
      ) : (
        ""
      )}
      <SearchBarWrapper>
        <SearchBar setSearchValue={setSearchValue} />
      </SearchBarWrapper>
      <h1>{searchValue}</h1>
      <ImagesContainer>
        {images.length === 0 ? (
          "Nothing to show..."
        ) : (
          <>
            {images.map((x, index) => (
              <Image
                key={index}
                setShowFullImage={setShowFullImage}
                setSelectedImage={setSelectedImage}
                url={x.urls.regular}
                userName={x.user.name}
                createdDate={x.created_at}
                location={x.user.location}
              />
            ))}
          </>
        )}
      </ImagesContainer>
      <ButtonsContainer>
        <StyledButton onClick={() => (page > 1 ? setPage(page - 1) : "")}>
          PREVIOUS PAGE
        </StyledButton>
        <StyledButton
          onClick={() => {
            setPage(page + 1);
          }}
        >
          NEXT PAGE
        </StyledButton>
      </ButtonsContainer>
    </MainContainer>
  );
};

export default ResultPage;
