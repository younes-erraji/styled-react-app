import styled from "styled-components";

export const Nav = styled.nav`
  background-color: darkcyan;
  color: #fff;
  overflow: hidden;
`;

export const NavH2 = styled.h2`
  float: left;
`;

export const NavH2Span = styled.span`
  color: #2ecc71;
`;
export const NavUl = styled.ul`
  list-style: none;
  padding-left: 0;
  overflow: hidden;
  float: right;
`;

export const NavLi = styled.li`
  float: left;
  padding: 10px;
`;

export const NavLiAnchor = styled.a`
  color: #fff;
  &:hover,
  &.active {
    color: #30b576;
  }
`;
