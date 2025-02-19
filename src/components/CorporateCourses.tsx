// CorporateCourses.tsx
import { useState } from 'react';
import { PageWrapper, Title, Subtitle, Paragraph } from './Shared';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

const ExpandableSection = styled.div`
  margin-top: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const Header = styled.div`
  padding: 1rem;
  background-color: #4a6fa5;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background-color: #365f91;
  }
`;

const Content = styled.div<{ isOpen: boolean }>`
  padding: 1rem;
  background-color: #fff;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  color: #555;
`;

const Arrow = styled.span<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => (isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
  transition: transform 0.2s ease-in-out;
`;

const List = styled.ul`
  list-style: disc;
  margin: 1rem 0;
  padding-left: 1.5rem;
  color: #555;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

export default function CorporateCourses() {
  const { t } = useTranslation();

  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const industries = [
    { key: "cc_corporate_finance", examples: [1, 2, 3, 4, 5] },
    { key: "cc_marketing_advertising", examples: [1, 2, 3, 4, 5] },
    { key: "cc_healthcare_pharma", examples: [1, 2, 3, 4, 5] },
    { key: "cc_hospitality_tourism", examples: [1, 2, 3, 4, 5] },
    { key: "cc_it_tech", examples: [1, 2, 3, 4, 5] },
    { key: "cc_legal_compliance", examples: [1, 2, 3, 4, 5] },
    { key: "cc_manufacturing_engineering", examples: [1, 2, 3, 4, 5] },
    { key: "cc_retail_ecommerce", examples: [1, 2, 3, 4, 5] },
    { key: "cc_hr", examples: [1, 2, 3, 4, 5] },
    { key: "cc_real_estate", examples: [1, 2, 3, 4, 5] },
  ];

  return (
    <PageWrapper>
      <Title>{t('corporate_courses_title')}</Title>

      <Section>
        <Paragraph>{t('corporate_courses_intro')}</Paragraph>
      </Section>

      <Section>
        <Subtitle>{t('corporate_courses_key_features')}</Subtitle>
        <List>
          <ListItem>{t('corporate_courses_key_feature_1')}</ListItem>
          <ListItem>{t('corporate_courses_key_feature_2')}</ListItem>
          <ListItem>{t('corporate_courses_key_feature_3')}</ListItem>
          <ListItem>{t('corporate_courses_key_feature_4')}</ListItem>
        </List>
      </Section>

      <Section>
        <Subtitle>{t('cc_industries_title')}</Subtitle>
        {industries.map((industry) => {
          const isOpen = openSections[industry.key] ?? false;
          return (
            <ExpandableSection key={industry.key}>
              <Header onClick={() => toggleSection(industry.key)}>
                {t(industry.key)}
                <Arrow isOpen={isOpen}>&#8250;</Arrow>
              </Header>
              <Content isOpen={isOpen}>
                <List>
                  {industry.examples.map((num) => (
                    <ListItem key={num}>{t(`${industry.key}_${num}`)}</ListItem>
                  ))}
                </List>
              </Content>
            </ExpandableSection>
          );
        })}
      </Section>
    </PageWrapper>
  );
}
