import React from "react";
import styled from "@emotion/styled";

import { Divider } from "../style/style";

// image
import { ReactComponent as Logo } from "../static/images/logo.svg";
import { ReactComponent as Search } from "../static/images/ic-search.svg";

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
    width: 199px;
    margin: 0 20px;
  }
`;

const SearbarText = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #6e7378;
`;

const Header = () => {
  return (
    <Container>
      <HeaderWrap>
        <Logo />
        <RightMenuWrap>
          <SearchBar>
            <Search />
            <SearbarText>호텔 검색</SearbarText>
          </SearchBar>
          <Divider />
          <div>마이페이지</div>
        </RightMenuWrap>
      </HeaderWrap>
    </Container>
  );
};

export default Header;
