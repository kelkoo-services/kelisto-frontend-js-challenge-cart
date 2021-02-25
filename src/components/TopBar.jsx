import React from "react";
import Basket from "./Basket";
import styled from "styled-components";

const StyledTopBar = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: purple;
  font-weight: bold;
  font-size: 25px;
`;

const StyledTitle = styled.div`
  margin-left: 5px;
`;

function TopBar() {
  return (
    <StyledTopBar>
      <StyledTitle>
        <div>kelisto</div>
        <div>shopping</div>
      </StyledTitle>
      <Basket />
    </StyledTopBar>
  );
}

export default TopBar;
