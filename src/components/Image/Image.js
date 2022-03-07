import React from "react";
import styled from "styled-components";

const StyledImage = styled.div`
  width: 400px;
  height: 300px;
  background-image: url(${(props) => props.url});
  background-size: cover;

  :hover {
    -webkit-box-shadow: 0px 8px 57px -4px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 8px 57px -4px rgba(66, 68, 90, 1);
    box-shadow: 0px 8px 57px -4px rgba(66, 68, 90, 1);
  }
`;

const Image = ({
  url,
  setShowFullImage,
  setSelectedImage,
  userName,
  createdDate,
  location,
}) => {
  return (
    <>
      <StyledImage
        url={url}
        onClick={() => {
          setShowFullImage(true);
          setSelectedImage({
            url: url,
            userName: userName,
            createdDate: createdDate,
            location: location,
          });
        }}
      />
    </>
  );
};

export default Image;
