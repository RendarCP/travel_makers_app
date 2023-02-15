import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import { Divider } from "../style/style";

// image
import Logo from "../static/images/logo.svg";
import Search from "../static/images/ic-search.svg";
import Profile from "../static/images/ic-profile.svg";
import Spacer from "./Spacer";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 100;
  background: #ffffff;
`;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
`;

const RightMenuWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 40px;
  background-color: #ededed;
  border-radius: 22px;
  cursor: pointer;
  user-select: none;
  @media screen and (max-width: 600px) {
  }
`;

const SearbarText = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #6e7378;
`;

const RightMenu = styled.div`
  display: flex;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const RightImageMenu = styled.img`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
  }
`;

const Header = () => {
  return (
    <Container>
      <HeaderWrap>
        <img alt="logo" src={Logo} />
        <RightMenuWrap>
          <SearchBar>
            <img alt="search-icon" src={Search} />
            <SearbarText>호텔 검색</SearbarText>
          </SearchBar>
          <RightMenu>
            <Divider />
            <Spacer right={8} left={8} />
            마이페이지
          </RightMenu>
          <RightImageMenu src={Profile} />
        </RightMenuWrap>
      </HeaderWrap>
    </Container>
  );
};

export default Header;
