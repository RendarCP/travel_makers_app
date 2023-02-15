import React from "react";

import styled from "@emotion/styled";

import { EarlyBirdType } from "../types";

import CouponImage from "../static/images/coupon.svg";
import ArrowRight from "../static/images/ic-angle.svg";

const CouponContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 224px;
  padding: 0px 34px;
  background-color: rgb(237, 237, 237);
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
  @media screen and (max-width: 600px) {
    height: 144px;
    padding: 0px 20px;
  }
`;

const CouponWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 1024px;
`;

const CouponLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const CouponRight = styled.div`
  width: 494px;
  @media screen and (max-width: 600px) {
    width: 200px;
  }
`;

const CouponText = styled.div`
  font-weight: 600;
  font-size: 32px;
  color: #30373f;
  margin-bottom: 8px;
  @media screen and (max-width: 600px) {
    font-size: 16px;
    font-weight: 700;
  }
`;

const CouponButton = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 24px;
  border-radius: 100px;
  background: #03936e;
  width: fit-content;
  color: #ffffff;
  @media screen and (max-width: 600px) {
    padding: 10px 12px;
    font-size: 14px;
  }
`;

const ButtonImage = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 6px;
  @media screen and (max-width: 600px) {
    width: 8px;
    height: 8px;
  }
`;

interface CouponProps {
  earlybird: EarlyBirdType;
}

const Coupon = ({ earlybird }: any) => {
  const {
    id,
    title,
    hotel_id,
    explanation,
    event,
    url,
    custom,
    layout,
    time_limit,
    image,
  } = earlybird;
  return (
    <CouponContainer>
      <CouponWrap>
        <CouponLeft>
          <CouponText dangerouslySetInnerHTML={{ __html: title }}></CouponText>
          <CouponButton>
            {custom?.button?.name}
            <ButtonImage alt="arrow" src={ArrowRight} />
          </CouponButton>
        </CouponLeft>
        <CouponRight>
          <img alt="coupon" src={image} />
        </CouponRight>
      </CouponWrap>
    </CouponContainer>
  );
};

export default Coupon;
