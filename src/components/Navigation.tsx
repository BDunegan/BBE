// Navigation.tsx
import styled from 'styled-components';
import logo from './logo.png';

const StyledNav = styled.nav`
  width: 100%;
  background-color: #333;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* Make it sticky */
  position: sticky;
  top: 0;
  z-index: 999;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const NavInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  gap: 0.75rem;
`;

const NavCard = styled.div`
  background-color: #444;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: #555;
    transform: scale(1.2);
  }
`;

// Replace NavLink with a styled <a> that points to our div ids
const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: calc(1vh + 10px);

  &:hover {
    text-decoration: underline;
  }

  /* If you want an "active" style, you'd need custom logic
     e.g., using IntersectionObserver or a scroll library,
     or do simpler styling here for demonstration. */
`;

const SmallLogo = styled.img`
  height: 40px;
  border-radius: 50%;
  border: 2px solid #4a6fa5;
  background-color: #fff;
  margin-right: 0.75rem;

  @media (max-width: 600px) {
    margin-bottom: 0.5rem;
  }
`;

export default function Navigation() {
  return (
    <StyledNav>
      <NavInner>
        <SmallLogo src={logo} alt="BBE Logo" />
        <NavCard>
          <NavItem href="#home">Home</NavItem>
        </NavCard>
        <NavCard>
          <NavItem href="#contact">Contact</NavItem>
        </NavCard>
        <NavCard>
          <NavItem href="#corporate-courses">Corporate Courses</NavItem>
        </NavCard>
        <NavCard>
          <NavItem href="#private-courses">Private Courses</NavItem>
        </NavCard>
        <NavCard>
          <NavItem href="#about">About</NavItem>
        </NavCard>
        <NavCard>
          <NavItem href="#free-trial">Free Trial</NavItem>
        </NavCard>
        <NavCard>
          <NavItem href="#prices">Prices</NavItem>
        </NavCard>
      </NavInner>
    </StyledNav>
  );
}
