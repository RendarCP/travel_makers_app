import React from "react";
import styled from "@emotion/styled";

const FlexCenterWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  mediaSize?: number | string;
}>`
  font-size: ${(props) => (props.size ? props.size : "12px")};
  font-weight: ${(props) => (props.weight ? props.weight : "400")};
  text-decoration: ${(props) => (props.decoration ? props.decoration : "none")};
  color: ${(props) => (props.color ? props.color : "#000000")};
  @media screen and (max-width: 600px) {
    font-size: ${(props) => (props.mediaSize ? props.mediaSize : "12px")};
  }
`;

const ProgressText = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: white;
  letter-spacing: 1.6px;
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const ProgressBtn = styled.button`
  // width: 40px;
  // height: 40px;
  border: none;
  background: none;
  cursor: pointer;
  &:hover {
  }
`;

export {
  Divider,
  ButtonGoImage,
  Text,
  ProgressText,
  ProgressBtn,
  FlexCenterWrap,
};
