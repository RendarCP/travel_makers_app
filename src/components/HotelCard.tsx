import React from "react";
import styled from "@emotion/styled";

// style
import { ButtonGoImage, Divider, Text } from "../style/style";

// image
import Star from "../static/images/ic-star.svg";
import TagImage from "../static/images/tag-icon.svg";
import GoImage from "../static/images/go-text.svg";
import Time from "../static/images/timesale.svg";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 28px;
  margin-top: 30px;
`;

const ImageWrap = styled.div`
  align-items: end;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  display: flex;
  height: 344px;
  justify-content: center;
  left: 22px;
  overflow: hidden;
  position: absolute;
  bottom: 30px;
  width: calc(50% - 11px);
`;

const ImageLabelWrap = styled.span`
  position: absolute;
  top: 5px;
  left: 10%;
`;

const ImageRightLabel = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  color: #ffffffcc;
  font-size: 16px;
`;

const Label = styled.span`
  background: ${(props) => props.color};
  color: #ffffff;
  padding: 5px 16px;
  font-size: 14px;
`;

const CardWrap = styled.div`
  display: flex;
  position: relative;
  -webkit-box-pack: end;
  justify-content: flex-end;
  width: 1076px;
  padding: 60px 78px 60px 24px;
  border-radius: 2px;
  box-shadow: rgb(0 0 0 / 20%) 0px 4px 20px 0px;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const TagWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const Tag = styled.span`
  border: 1px solid #b6b6b6;
  border-radius: 100px;
  padding: 5px 12px;
  color: #b6b6b6;
`;

const ContentTimeDeal = styled.span`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  width: calc(50% - 39px);
  top: 0px;
  right: 0px;
  padding: 10px 14px;
  background-color: rgb(3, 147, 110);
`;

const TimeDealLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TimeDealText = styled.span`
  color: #fff;
  margin-left: 8px;
`;

const ContentTitle = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  margin-top: 12px;
`;

const RatingWrap = styled.div`
  display: flex;
  margin-top: 12px;
  gap: 10px;
`;

const BottomContentWrap = styled.div`
  display: flex;
`;

const PricingContainer = styled.div`
  margin-right: 40px;
`;

const PriceWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  gap: 5px;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const HotelCard = () => {
  return (
    <Container>
      <CardWrap>
        <ImageWrap>
          <img
            alt="hotel-view"
            style={{ width: "100%", height: "100%" }}
            src="https://d2pyzcqibfhr70.cloudfront.net/images/0/2022-08-12/gCmzkC7XjVHxdvLBEq1JR3erXLVIj1H76afgZETI.png"
          />
          <ImageLabelWrap>
            <Label color="green">레이블</Label>
            <Label color="blue">레이블</Label>
          </ImageLabelWrap>
          <ImageRightLabel>성수역 3분거리</ImageRightLabel>
        </ImageWrap>
        <ContentWrap>
          <ContentTimeDeal>
            <TimeDealLeft>
              <img alt="time" src={Time} />
              <TimeDealText>3,446명이 예약한 호텔 타임세일</TimeDealText>
            </TimeDealLeft>
            <TimeDealText>23 : 04 : 31</TimeDealText>
          </ContentTimeDeal>

          <TagWrap>
            <Tag>#레이블</Tag>
            <Tag>#레이블</Tag>
            <Tag>#레이블</Tag>
          </TagWrap>

          <ContentTitle>호텔 이름</ContentTitle>

          <RatingWrap>
            <img alt="star" src={Star} />
            <div>5성급</div>
            <Divider />
            <div>호텔</div>
          </RatingWrap>

          <div style={{ borderBottom: "2px solid gray", marginTop: 45 }}></div>

          <BottomContentWrap>
            <PricingContainer>
              <PriceWrap>
                <Text>정가</Text>
                <Text decoration="line-through">000,000원</Text>
                <img alt="coupon" src={TagImage} />
              </PriceWrap>

              <PriceWrap>
                <Text size="18px" weight={700} color="#DA5542">
                  00%
                </Text>
                <Text size="24px" weight={700}>
                  000,000원 ~
                </Text>
                <Divider />
                <Text color="#616161">1박 000,000원 부터</Text>
              </PriceWrap>
            </PricingContainer>

            <ButtonWrap>
              <ButtonGoImage alt="go" src={GoImage} />
            </ButtonWrap>
          </BottomContentWrap>
        </ContentWrap>
      </CardWrap>
    </Container>
  );
};

export default HotelCard;
