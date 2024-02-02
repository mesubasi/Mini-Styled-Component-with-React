import React from "react";
import { StyledContainer } from "./components/styled/";
import { Button } from "./components/styled/Button/";
import {
  CoolButton,
  StrongButton,
  SubmitButton,
} from "./components/styled/Button/Button.styled";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
from{
transform: rotate(0deg);
}
to{
  transform: rotate(360deg);
}
`;
const CanadaIcon = styled(FaCanadianMapleLeaf)`
  font-size: 40px;
  animation: ${rotate} 3s linear infinite;
  color: ${(props) => props.theme.colors.canada};
`;

const StyledImage = styled.img`
  width: 100%;
  padding: 4px;
  border: 1px solid #bdc3c7;
  border-radius: 4px;

  &:hover {
    animation: ${rotate} 10s linear infinite;
  }
`;

function App() {
  return (
    <>
      <div>
        <StyledContainer>
          <StyledImage src="https://picsum.photos/id/1037/1200/300" alt="" />
          <hr />
          <CanadaIcon />
          <h1>Styled Component Applied</h1>
          <Button $primary className="btn mr-50">
            Inspect
          </Button>
          Emin
          <hr />
          <StrongButton>Strong Button</StrongButton>
          <CoolButton as="a" href="http://google.com" target="_blank">
            Cool Button
          </CoolButton>
          <SubmitButton $primary>Save</SubmitButton>
        </StyledContainer>
        <h1>Styled Component Applied</h1>
      </div>
    </>
  );
}

export default App;
