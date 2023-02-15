import React from "react";
import styled from "@emotion/styled";

interface SpacerProps {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

const Container = styled.div<{
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}>`
  margin-top: ${(props) => (props.top ? props.top : 0)}px;
  margin-bottom: ${(props) => (props.bottom ? props.bottom : 0)}px;
  margin-left: ${(props) => (props.left ? props.left : 0)}px;
  margin-right: ${(props) => (props.right ? props.right : 0)}px;
`;

const Spacer = ({ top, bottom, left, right }: SpacerProps) => {
  return <Container top={top} bottom={bottom} left={left} right={right} />;
};

export default Spacer;
