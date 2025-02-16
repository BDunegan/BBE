// Footer.tsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #001f3f;
  padding: 1rem;
  margin-top: 2rem;
  box-shadow: 0px -2px 6px rgba(0, 0, 0, 0.1);
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: #fff;
  font-family: 'Open Sans', Arial, sans-serif;

  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

const FooterLink = styled(Link)`
  padding: 0.25rem;
  margin: 0.25rem;
  color: #d4a017;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterLogo = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-right: 0.75rem;
  border: 2px solid #4a6fa5;
  background-color: #fff;
  object-fit: contain;
  @media (max-width: 600px) {
    margin-right: 0.5rem;
    height: 40px;
    width: 40px;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <FooterLogo src="/logo.png" alt="BBE Logo" />
      <FooterText>
        All rights reserved by Ian Boarnet:
        <FooterLink to="https://www.copyright.gov/">
          Credits
        </FooterLink>
        &copy; {new Date().getFullYear()}
      </FooterText>
    </StyledFooter>
  );
}
