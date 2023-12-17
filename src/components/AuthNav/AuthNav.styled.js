import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  border-radius: 6px;
  padding: 4px 6px;
  background: rgb(190, 248, 255);
  background: radial-gradient(
    circle,
    rgba(190, 248, 255, 1) 0%,
    rgba(168, 221, 255, 1) 96%
  );
`;
