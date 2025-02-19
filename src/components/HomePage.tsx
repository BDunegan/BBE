import { PageWrapper, Title, Subtitle, Paragraph } from './Shared';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const List = styled.ul`
  list-style: disc;
  margin: 1rem 0;
  padding-left: 1.5rem;
  color: #555;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const Testimonial = styled.blockquote`
  font-style: italic;
  margin: 1rem auto;
  padding: 1rem;
  background: #fff;
  border-left: 5px solid #d4a017;
  max-width: 600px;
  color: #333;
  border-radius: 8px;
`;

const StepsList = styled.ol`
  margin: 1rem 0;
  padding-left: 1.5rem;
  max-width: 600px;
  color: #555;
`;

const Step = styled.li`
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

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <Title>{t('home_title')}</Title>

      <Section>
        <Subtitle>{t('struggle_school')}</Subtitle>
        <Subtitle>{t('unprepared_business')}</Subtitle>
        <Subtitle>{t('preparing_job')}</Subtitle>
        <Subtitle>{t('anxious_english')}</Subtitle>
        <Subtitle>{t('frustrated_courses')}</Subtitle>
      </Section>

      <Section>
        <Subtitle>{t('bbe_will')}</Subtitle>
        <List>
          <ListItem>{t('improve_knowledge')}</ListItem>
          <ListItem>{t('improve_confidence')}</ListItem>
          <ListItem>{t('situation_specific')}</ListItem>
          <ListItem>{t('transfer_skills')}</ListItem>
        </List>
      </Section>

      <Section>
        <Paragraph>{t('personal_understanding')}</Paragraph>
      </Section>

      <Section>
        <Paragraph>{t('taught_students')}</Paragraph>

        <Testimonial>{t('testimonial_1')}</Testimonial>
        <Testimonial>{t('testimonial_2')}</Testimonial>
      </Section>

      <Section>
        <Subtitle>{t('students_confidence')}</Subtitle>
      </Section>

      <Section>
        <Subtitle>{t('improve_steps')}</Subtitle>
        <StepsList>
          <Step>{t('step_1')}</Step>
          <Step>{t('step_2')}</Step>
          <Step>{t('step_3')}</Step>
        </StepsList>
      </Section>

      <ContactButton href="#contact">{t('contact_me')}</ContactButton>
    </PageWrapper>
  );
}
