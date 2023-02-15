import React from "react";
import styled from "@emotion/styled";

// style
import { ButtonGoImage } from "../style/style";

import { BannerType } from "../types";

// img
import GoImage from "../static/images/go-text.svg";
import next from "../static/images/btn-next-icon.svg";
import prev from "../static/images/btn-prev-icon.svg";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: 100%;
  max-width: 1024px;
  @media screen and (max-width: 500px) {
  }
`;

const ProgressWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 14px 0px;
`;

const ProgressBtn = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-left: 10px;
`;

const ProgressText = styled.div`
  font-family: "PT Serif", serif;
  font-size: 20px;
  font-weight: 700;
  color: white;
  margin-right: 16px;
  letter-spacing: 1.6px;
`;

const HeadLineWrap = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  padding: 24px 40px;
  border-radius: 2px;
  box-shadow: rgb(48 55 63 / 20%) 4px 4px 20px 0px;
  background-color: rgb(255, 255, 255);
  background: #ffffff;
`;

const SubHeadLine = styled.span`
  font-family: "Noto Serif KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 10px;
`;

const HeadLineText = styled.span`
  font-family: "Noto Serif KR";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
`;

const BottomWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Description = styled.span`
  margin-top: 20px;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #03936e;
`;

const NewTextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0d5e49;
  color: #ffffff;
  border-radius: 2px;
  width: 30px;
  height: 80px;
`;

const NewText = styled.span`
  writing-mode: vertical-rl;
  font-size: 20px;
`;

interface HeadLineProps {
  banner: BannerType;
  handlePrevious: () => void;
  handleNext: () => void;
  slideIndex: number;
  total: number;
}

const HeadLine = ({
  banner,
  handlePrevious,
  handleNext,
  slideIndex,
  total,
}: HeadLineProps) => {
  const {
    depth,
    description,
    hotel_id,
    images,
    link,
    mobile_images,
    name,
    promotion,
    route,
    tab,
    tags,
    view,
  } = banner;

  return (
    <Container>
      <ProgressWrap>
        <ProgressText>{`${slideIndex + 1} / ${total}`}</ProgressText>
        <div style={{ display: "flex" }}>
          <ProgressBtn alt="prev button" src={prev} onClick={handlePrevious} />
          <ProgressBtn alt="next button" src={next} onClick={handleNext} />
        </div>
      </ProgressWrap>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        {false ? (
          <NewTextWrap>
            <NewText>New</NewText>
          </NewTextWrap>
        ) : null}

        <HeadLineWrap>
          <SubHeadLine>{description}</SubHeadLine>

          <HeadLineText>{name}</HeadLineText>

          <BottomWrap>
            <Description>{promotion}</Description>
            <ButtonGoImage src={GoImage} />
          </BottomWrap>
        </HeadLineWrap>
      </div>
    </Container>
  );
};

export default HeadLine;
