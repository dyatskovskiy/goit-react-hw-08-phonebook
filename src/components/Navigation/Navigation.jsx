import { StyledNavLink } from 'components/AuthNav/AuthNav.styled';
import { StyledNav } from './Navigation.styled';

export const Navigation = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/contacts">Contacts</StyledNavLink>
    </StyledNav>
  );
};
