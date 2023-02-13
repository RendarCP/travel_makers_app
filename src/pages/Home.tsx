import React, { useState, useEffect } from "react";

// components
import Header from "../components/Header";
import HeadLine from "../components/HeadLine";
import HotelCard from "../components/HotelCard";

// img
import next from "../static/images/btn-next-icon.svg";
import prev from "../static/images/btn-prev-icon.svg";
import CouponImage from "../static/images/coupon.svg";

// lib
import axios from "axios";
import Slider from "react-slick";
import styled from "@emotion/styled";

const BannerContainer = styled.div`
  height: 650px;
`;

const Banner = styled.div`
  height: 530px;
`;

const BannerImage = styled.div<{ url: string }>`
  display: block;
  position: absolute;
  width: 100%;
  height: 530px;
  cursor: pointer;
  background-image: url(${(props) => props?.url});
  background-size: cover;
  background-position: center center;
`;

const TestImage = styled.img`
  position: absolute;
  width: 100%;
  height: 530px;
  cursor: pointer;
  object-fit: cover;
  background-size: cover;
  background-position: center center;
`;

const SliderWrap = styled.div`
  position: relative;
`;

const BannerWrap = styled.div`
  position: absolute;
  width: 100%;
  bottom: 5%;
`;

const CouponWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 224px;
  padding: 0px 34px;
  background-color: #ededed;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
`;

const CouponLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Home = () => {
  const [banners, setBanners] = useState([]);
  const [catalogs, setCatalogs] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.livinginhotel.com/api/v2/main")
      .then((res) => {
        const { catalogs, banners } = res.data;
        setBanners(banners);
        setCatalogs(catalogs);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log("banner", banners);
  console.log("catalogs", catalogs);

  return (
    <div>
      <Header />
      <SliderWrap>
        <Slider {...settings}>
          {banners.map((banner: any) => {
            return (
              <BannerContainer>
                <Banner key={banner.hotel_id}>
                  <BannerImage url={banner.images} />
                  {/* <TestImage src={banner.images} /> */}
                </Banner>
                <BannerWrap>
                  <HeadLine banner={banner} />
                </BannerWrap>
              </BannerContainer>
            );
          })}
        </Slider>
      </SliderWrap>
      <CouponWrap>
        <CouponLeft>
          <div>텍스트 부분</div>
          <div>버튼 부분</div>
        </CouponLeft>
        <img src={CouponImage} />
      </CouponWrap>
      <HotelCard />
    </div>
  );
};

export default Home;
