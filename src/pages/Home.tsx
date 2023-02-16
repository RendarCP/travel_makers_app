import React, { useRef, useState, useEffect } from "react";

// components
import Header from "../components/Header";
import HeadLine from "../components/HeadLine";
import HotelCard from "../components/HotelCard";
import Coupon from "../components/Coupon";

// style
import {
  Divider,
  ProgressBtn,
  ProgressText,
  FlexCenterWrap,
} from "../style/style";

// img
import next from "../static/images/btn-next-icon.svg";
import prev from "../static/images/btn-prev-icon.svg";

// lib
import axios from "axios";
import Slider from "react-slick";
import styled from "@emotion/styled";
import Spacer from "../components/Spacer";

const Container = styled.div`
  overflow: hidden;
`;

const BannerContainer = styled.div`
  height: 650px;
  @media screen and (max-width: 600px) {
    height: ;
  }
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

const SliderWrap = styled.div`
  position: relative;
`;

const BannerWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  bottom: 5%;
`;

const HotelContainer = styled.div`
  padding: 100px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #30373f;
  color: #fff;
`;

const HotelWrap = styled.div`
  display: flex;
  margin: 80px 24px;
`;

const HotelContentWrap = styled.div`
  width: 100%;
`;

const HotelCityText = styled.span<{ color: string }>`
  display: flex;
  text-align: center;
  padding: 0 50px;
  text-align: center;
  font-size: 24px;
  cursor: pointer;
  color: ${(props) => (props.color ? props.color : "#fff")};
  @media screen and (max-width: 600px) {
    font-size: 16px;
    padding: 0 15px;
  }
`;

const Home = () => {
  const bannerSlider = useRef<any>(null);
  const catalogSlider = useRef<any>(null);
  const [banners, setBanners] = useState([]); // 배너 리스트 상태

  const [catalogs, setCatalogs] = useState([]); // 카타로그 리스트 상태
  const [catalogItems, setCatalogItems] = useState([]); // 카탈로그 아이템
  const [selectCity, setSelectCity] = useState(null);

  const [earlyBird, setEarlyBird] = useState([]); // 얼리버드 상태

  const [bannerIndex, setBannerIndex] = useState(0); // 배너 슬라이드 상태
  const [catalogIndex, setCatalogIndex] = useState(0); // 카탈로그 슬라이드 상태

  useEffect(() => {
    axios
      .get("https://api.livinginhotel.com/api/v2/main")
      .then((res) => {
        const { catalogs, banners, earlyBird } = res.data;
        setBanners(banners);
        setCatalogs(catalogs);
        setEarlyBird(earlyBird);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  useEffect(() => {
    catalogs.map((catalog: any, index) => {
      if (index === 0) {
        setCatalogItems(catalog.items);
        setSelectCity(catalog.city);
      }
    });
  }, [catalogs]);

  // 배너 이전
  const handlePrevious = () => {
    bannerSlider.current?.slickPrev();
  };

  // 배너 다음
  const handleNext = () => {
    bannerSlider.current?.slickNext();
  };

  const catalogPrevious = () => {
    catalogSlider.current?.slickPrev();
  };

  const catalogNext = () => {
    catalogSlider.current?.slickNext();
  };

  const handleCatalog = (city: string) => {
    setCatalogIndex(0);
    catalogSlider.current?.slickGoTo(0, false);
    catalogs.map((catalog: any) => {
      if (catalog.city === city) {
        setSelectCity(catalog.city);
        setCatalogItems(catalog.items);
      }
    });
  };

  const BannerSettings = {
    dots: false,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setBannerIndex(next),
  };

  const CatalogSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current: number, next: number) => setCatalogIndex(next),
  };

  return (
    <Container>
      <Header />
      <SliderWrap>
        <Slider ref={bannerSlider} {...BannerSettings}>
          {banners.map((banner: any) => {
            return (
              <BannerContainer>
                <Banner key={banner.hotel_id}>
                  <BannerImage url={banner.images} />
                  {/* <TestImage src={banner.images} /> */}
                </Banner>
                <BannerWrap>
                  <HeadLine
                    slideIndex={bannerIndex}
                    total={banners.length}
                    handlePrevious={handlePrevious}
                    handleNext={handleNext}
                    banner={banner}
                    width={(100 / banners.length) * (bannerIndex + 1)}
                  />
                </BannerWrap>
              </BannerContainer>
            );
          })}
        </Slider>
      </SliderWrap>

      <Coupon earlybird={earlyBird} />

      <HotelContainer>
        <h2>
          <span
            style={{ background: "#30373f", padding: "0 10px", fontSize: 40 }}
          >
            Local Hotels
          </span>
        </h2>
        <HotelWrap>
          {catalogs.map((catalog: any, index: number) => {
            return (
              <>
                <HotelCityText
                  color={catalog.city === selectCity ? "#FFFFFF" : "#979B9F"}
                  onClick={() => handleCatalog(catalog.city)}
                >
                  {catalog.city}
                </HotelCityText>
                {catalogs.length !== index + 1 ? <Divider /> : null}
              </>
            );
          })}
        </HotelWrap>

        <HotelContentWrap>
          <Slider ref={catalogSlider} {...CatalogSettings}>
            {catalogItems?.map((item: any) => {
              return <HotelCard hotel={item} />;
            })}
          </Slider>
        </HotelContentWrap>
        <Spacer top={20} />

        <FlexCenterWrap>
          <ProgressBtn onClick={catalogPrevious}>
            <img src={prev} />
          </ProgressBtn>
          <Spacer right={20} />
          <ProgressText>{`${catalogIndex + 1} / ${
            catalogItems.length
          }`}</ProgressText>
          <Spacer left={20} />
          <ProgressBtn onClick={catalogNext}>
            <img src={next} />
          </ProgressBtn>
        </FlexCenterWrap>
      </HotelContainer>
    </Container>
  );
};

export default Home;
