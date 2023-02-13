import React from "react";
import styled from "@emotion/styled";
import { StringLiteral } from "typescript";

const Divider = styled.span`
  display: block;
  width: 1px;
  height: 16px;
  background-color: rgb(151, 155, 159);
`;

const ButtonGoImage = styled.img`
  width: 60px;
  height: 30px;
`;

const Text = styled.span<{
  size?: number | string;
  weight?: number | string;
  decoration?: string;
  color?: string;
}>`
  font-size: ${(props) => (props.size ? props.size : "12px")};
  font-weight: ${(props) => (props.weight ? props.weight : "400")};
  text-decoration: ${(props) => (props.decoration ? props.decoration : "none")};
  color: ${(props) => (props.color ? props.color : "#000000")};
`;

export { Divider, ButtonGoImage, Text };
