import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

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

  @media (max-width: 600px) {
    height: 50px;
  }
`;

const LanguageButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  background-color: #fff;
  color: #333;
  font-size: 1rem;
  border-radius: 5px;

  &:hover {
    background-color: #ddd;
  }
`;

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <StyledHeader>
      <TitleWrapper>
        <Title>{t('header_title')}</Title>
        <Para>{t('header_subtitle')}</Para>
      </TitleWrapper>
      <LanguageButton onClick={toggleLanguage}>{t('language_switch')}</LanguageButton>
      <Logo src="/logo.png" alt="BBE Logo" />
    </StyledHeader>
  );
};

export default Header;
