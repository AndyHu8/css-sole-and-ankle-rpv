import React from "react";
import styled from "styled-components/macro";

import { COLORS, QURIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileNav>
          <div>
            <Icon id="shopping-bag" />
          </div>
          <div>
            <Icon id="search" />
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => setShowMobileMenu(true)}
          >
            <Icon id="menu" />
          </div>
        </MobileNav>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QURIES.normal} {
    border-top: 4px solid ${COLORS.gray[900]};
    justify-content: space-between;
    align-items: center;
  }

  @media ${QURIES.small} {
    padding: 18px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${QURIES.normal} {
    display: none;
  }
`;

const MobileNav = styled.div`
  display: none;

  @media ${QURIES.normal} {
    display: flex;
    gap: 32px;
  }

  @media ${QURIES.small} {
    display: flex;
    gap: 20px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QURIES.normal} {
    flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;

  @media ${QURIES.normal} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
