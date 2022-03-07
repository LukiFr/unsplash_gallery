import React from "react";
import styled from "styled-components";

const StyledUserInfo = styled.div`
  .userName {
    font-size: 20px;
    font-weight: bold;
    margin: 0 0;
  }

  .location {
    font-weight: bold;
    margin: 0 0;
  }

  .createdDate {
    margin: 0 0;
  }
`;

const UserInfo = ({ selectedImage }) => {
  const createdDate = new Date(selectedImage.createdDate);

  return (
    <StyledUserInfo>
      <p className="userName">{selectedImage.userName}</p>
      <p className="location">{selectedImage.location}</p>
      <p className="createdDate">{`${createdDate.toLocaleString("en-us", {
        month: "long",
      })} ${createdDate.getFullYear()}`}</p>
    </StyledUserInfo>
  );
};
export default UserInfo;
