import React from "react";
import styled from "styled-components";
import UserInfo from "../UserInfo/UserInfo";

const FullImageContainer = styled.div`
  position: fixed;
  z-index: 1;
  padding: 10px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: white;
  transform: translateY(10%);

  -webkit-box-shadow: 0px 8px 59px 25px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 8px 59px 25px rgba(66, 68, 90, 1);
  box-shadow: 0px 8px 59px 25px rgba(66, 68, 90, 1);
`;

const StyledFullImage = styled.div`
  display: block;
  margin: 20px auto;
  width: 70vw;
  height: 70vh;
  background-image: url(${(props) => props.selectedImage.url});
  background-size: cover;
`;

const FullImage = ({ selectedImage }) => {
  return (
    <FullImageContainer>
      <UserInfo selectedImage={selectedImage} />
      <StyledFullImage selectedImage={selectedImage} />
    </FullImageContainer>
  );
};

export default FullImage;
