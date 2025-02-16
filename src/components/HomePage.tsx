// HomePage.tsx
import { PageWrapper, Title, Subtitle, Paragraph } from './Shared';
import styled from 'styled-components';
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
  return (
    <PageWrapper>
      <Title>From Hesitation to Conversation</Title>

      <Section>
        <Subtitle>Are you struggling with school?</Subtitle>
        <Subtitle>Do you feel unprepared for business?</Subtitle>
        <Subtitle>Are you preparing for a new job?</Subtitle>
        <Subtitle>Does speaking English make you anxious?</Subtitle>
        <Subtitle>Do your current English courses leave you frustrated?</Subtitle>
      </Section>

      <Section>
        <Subtitle>Boarnet Business English will...</Subtitle>
        <List>
          <ListItem>Improve your English knowledge</ListItem>
          <ListItem>Improve your confidence when speaking English</ListItem>
          <ListItem>Provide you with situation-specific knowledge</ListItem>
          <ListItem>Help you transfer skills from the classroom to the real world</ListItem>
        </List>
      </Section>

      <Section>
        <Paragraph>
          I understand the frustrations and anxiety that come with learning a new language. I know that English classes do not always help in real-life situations. I can help.
        </Paragraph>
      </Section>

      <Section>
        <Paragraph>
          I have taught over 700 students from over 50 different countries.
        </Paragraph>

        <Testimonial>
          “To say that he has been an essential resource to this school is simply an understatement.” – Former School
        </Testimonial>
        <Testimonial>
          “I’m a firm believer today that not everyone has a gift to teach across an array of different populations, but Ian is a true natural.” – Former Student
        </Testimonial>
      </Section>

      <Section>
        <Subtitle>My students go on to work and go to school in English with confidence.</Subtitle>
      </Section>

      <Section>
        <Subtitle>Improve your English in 3 easy steps</Subtitle>
        <StepsList>
          <Step>Download your free study guide</Step>
          <Step>Schedule a free consultation</Step>
          <Step>Take your first class</Step>
        </StepsList>
      </Section>

      <ContactButton href="#contact">Contact Me</ContactButton>
    </PageWrapper>
  );
}
