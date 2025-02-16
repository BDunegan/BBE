// Header.tsx
import styled from 'styled-components';
import logo from './logo.png'; // Use your uploaded logo

// A more Material-like App Bar design
const StyledHeader = styled.header`
  width: 100%;
  background-color: #001f3f; /* Navy/blue background */
  padding: 1rem 2rem;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: 'Open Sans', Arial, sans-serif;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  /* Responsive behavior */
  @media (max-width: 600px) {
    padding: 0.75rem 1rem;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.5px;

  /* Responsive scaling */
  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

const Para = styled.p`
  margin: 0.25rem 0 0 0;
  font-size: 1rem;
  color: #d4d4d4;

  @media (max-width: 600px) {
    font-size: 0.875rem;
  }
`;

const Logo = styled.img`
  height: 60px;
  width: auto;
  object-fit: contain;
  border-radius: 50%;
  border: 2px solid #4a6fa5;
  padding: 0.5rem;
  background-color: #fff;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0px 0px 12px rgba(74, 111, 165, 0.5);
  }

  /* Responsive logo size */
  @media (max-width: 600px) {
    height: 50px;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <TitleWrapper>
        <Title>Boarnet Business English</Title>
        <Para>Let’s learn some BBE!</Para>
      </TitleWrapper>
      <Logo src={logo} alt="Boarnet Business English Logo" />
    </StyledHeader>
  );
}
