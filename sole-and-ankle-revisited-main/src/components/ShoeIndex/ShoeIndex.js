import React from "react";
import styled from "styled-components/macro";

import { WEIGHTS, QURIES } from "../../constants";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

const ShoeIndex = ({ sortId, setSortId }) => {
  const ShoeBreadcrumbs = () => {
    //Wird mehrmals verwendet
    return (
      <Breadcrumbs>
        <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
      </Breadcrumbs>
    );
  };

  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <div>
            <SmallBreadcrumbs>
              <ShoeBreadcrumbs />
            </SmallBreadcrumbs>
            <Title>Running</Title>
          </div>
          <SortWrapper>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </SortWrapper>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <LargeBreadcrumbs>
          <ShoeBreadcrumbs />
        </LargeBreadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${QURIES.normal} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${QURIES.normal} {
    align-items: flex-end;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

const LargeBreadcrumbs = styled.div`
  @media ${QURIES.normal} {
    display: none;
  }
`;

const SmallBreadcrumbs = styled.div`
  display: none;

  @media ${QURIES.normal} {
    display: revert;
  }
`;

const SortWrapper = styled.div`
  @media ${QURIES.small} {
    display: none;
  }
`;

export default ShoeIndex;
