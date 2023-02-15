import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import {
  getValueByPricing,
  getValueByTimeDiff,
  getValueByTimeZero,
} from "../modules";

// style
import { ButtonGoImage, Divider, Text } from "../style/style";

// image
import Star from "../static/images/ic-star.svg";
import TagImage from "../static/images/tag-icon.svg";
import GoImage from "../static/images/go-text.svg";
import Time from "../static/images/timesale.svg";
import { HotelType } from "../types";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 28px;
  margin-top: 30px;
  position: relative;
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
  @media screen and (max-width: 500px) {
    top: -60px;
    left: 22px;
    width: calc(100% - 45px);
    height: 179px;
  }
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
  @media screen and (max-width: 500px) {
    padding: 160px 20px 50px 20px;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const TagWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Tag = styled.span`
  border: 1px solid #b6b6b6;
  border-radius: 100px;
  padding: 5px 12px;
  font-size: 12px;
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
  @media screen and (max-width: 500px) {
    width: calc(100% - 73px);
    top: 112px;
    right: 23px;
  }
`;

const TimeDealLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TimeDealText = styled.span`
  color: #fff;
  margin-left: 8px;
  font-size: 12px;
`;

const ContentTitle = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  margin-top: 12px;
  color: #30373f;
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const RatingWrap = styled.div`
  display: flex;
  align-items: center;
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
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

interface HotelCardProps {
  hotel: HotelType;
}

const HotelCard = ({ hotel }: HotelCardProps) => {
  const {
    type,
    hotel_id,
    hotel_price_scheme,
    star,
    first_image_position_y,
    image,
    name,
    description,
    subway_station,
    tags,
    events,
    price,
    coupons,
    timesale,
  } = hotel;

  const [time, setTime] = useState<any>({});

  useEffect(() => {
    setInterval(() => {
      const time = getValueByTimeDiff(timesale[0]?.end_at);
      setTime(time);
    }, 1000);
  }, [timesale]);

  const mainPrice = price.price[0]?.sale_price;
  const totalPrice = price.price[0]?.min_night * price.price[0]?.price;
  const salePrice = price.price[0]?.min_night * price.price[0]?.sale_price;

  return (
    <Container>
      <CardWrap>
        <ImageWrap>
          <img
            alt="hotel-view"
            style={{ width: "100%", height: "100%" }}
            src={image}
          />
          <ImageLabelWrap>
            {events.map((event) => {
              return <Label color="#03936E">{event}</Label>;
            })}
          </ImageLabelWrap>
          <ImageRightLabel>{description}</ImageRightLabel>
        </ImageWrap>
        <ContentWrap>
          {timesale.length > 0 && (
            <ContentTimeDeal>
              <TimeDealLeft>
                <img alt="time" src={Time} />
                <TimeDealText>{timesale[0]?.remaining}</TimeDealText>
              </TimeDealLeft>
              <TimeDealText>
                {time?.dd}일 {`${getValueByTimeZero(time?.hh)}${time?.hh}`} :{" "}
                {`${getValueByTimeZero(time?.mm)}${time?.mm}`} :{" "}
                {`${getValueByTimeZero(time?.ss)}${time?.ss}`}
              </TimeDealText>
            </ContentTimeDeal>
          )}

          <TagWrap>
            {tags.map((tag) => {
              return <Tag>{tag}</Tag>;
            })}
          </TagWrap>

          <ContentTitle>{name}</ContentTitle>

          <RatingWrap>
            <img alt="star" src={Star} />
            <Text color="#6E7378">{star}성급</Text>
            <Divider />
            <Text color="#6E7378">호텔</Text>
          </RatingWrap>

          <div style={{ borderBottom: "2px solid gray", marginTop: 45 }}></div>

          <BottomContentWrap>
            <PricingContainer>
              <PriceWrap>
                <Text>정가</Text>
                <Text decoration="line-through">
                  {getValueByPricing(totalPrice)}원
                </Text>
                {price?.is_coupon && <img alt="coupon" src={TagImage} />}
              </PriceWrap>

              <PriceWrap>
                <Text size="18px" mediaSize="16px" weight={700} color="#DA5542">
                  {price?.price[0]?.discount}%
                </Text>
                <Text size="24px" mediaSize="22px" weight={700}>
                  {getValueByPricing(salePrice)}원 ~
                </Text>
                <Divider />
                <Text color="#616161">
                  1박 {getValueByPricing(mainPrice)}원 부터
                </Text>
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
