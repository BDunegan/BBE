import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const StyledNav = styled.nav`
  width: 100%;
  background-color: #333;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: calc(1vh + 10px);

  &:hover {
    text-decoration: underline;
  }
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
  const { t } = useTranslation();

  return (
    <StyledNav>
      <NavInner>
        <SmallLogo src="/logo.png" alt="BBE Logo" />
        <NavCard>
          <NavItem href="#home">{t('home')}</NavItem>
        </NavCard>
        <NavCard>
          <NavItem href="#contact">{t('contact')}</NavItem>
        </NavCard>
        <NavCard>
          <NavItem href="#corporate-courses">{t('corporate_courses')}</NavItem>
        </NavCard>
        <NavCard>
          <NavItem href="#private-courses">{t('private_courses')}</NavItem>
        </NavCard>
        <NavCard>
          <NavItem href="#about">{t('about')}</NavItem>
        </NavCard>
        <NavCard>
          <NavItem href="#free-trial">{t('free_trial')}</NavItem>
        </NavCard>
        <NavCard>
          <NavItem href="#prices">{t('prices')}</NavItem>
        </NavCard>
      </NavInner>
    </StyledNav>
  );
}
