import { PageWrapper, Title, Subtitle, Paragraph } from './Shared';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const List = styled.ul`
  list-style: disc;
  margin: 1rem auto;
  padding-left: 1.5rem;
  max-width: 600px;
  color: #555;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const ContactButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #4a6fa5;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s;
  margin-top: 2rem;

  &:hover {
    background-color: #365f91;
  }
`;

const Section = styled.div`
  margin-top: 2rem;
`;

export default function FreeTrialPage() {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <Title>{t('free_trial_title')}</Title>

      <Paragraph>{t('free_trial_intro')}</Paragraph>

      <Section>
        <Subtitle>{t('what_to_expect')}</Subtitle>
        <List>
          <ListItem>{t('expect_1')}</ListItem>
          <ListItem>{t('expect_2')}</ListItem>
          <ListItem>{t('expect_3')}</ListItem>
          <ListItem>{t('expect_4')}</ListItem>
        </List>
      </Section>

      <Paragraph>{t('trial_conclusion')}</Paragraph>

      <ContactButton href="#contact">{t('contact_me')}</ContactButton>
    </PageWrapper>
  );
}
