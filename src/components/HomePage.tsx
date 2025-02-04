// HomePage.tsx
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

// Styled components
const PageWrapper = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 960px;
  margin: 2rem auto;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
`;

const Paragraph = styled.p`
  line-height: 1.6;
  margin-bottom: 1rem;
  text-align: center;
`;

const List = styled.ul`
  list-style: disc;
  margin: 1rem auto;
  padding-left: 1.5rem;
  max-width: 600px;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const Testimonial = styled.blockquote`
  font-style: italic;
  margin: 1rem auto;
  padding: 1rem;
  background: #f9f9f9;
  border-left: 5px solid #0070f3;
  max-width: 600px;
  text-align: center;
`;

const StepsList = styled.ol`
  margin: 1rem auto;
  padding-left: 1.5rem;
  max-width: 600px;
`;

const Step = styled.li`
  margin-bottom: 0.5rem;
`;

const ContactButton = styled(Link)`
  display: block;
  width: max-content;
  margin: 2rem auto 0;
  padding: 0.75rem 1.5rem;
  font-size: 1.2rem;
  color: white;
  background-color: #0070f3;
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background-color: #005bb5;
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
          <Step>1. Download your free study guide</Step>
          <Step>2. Schedule a free consultation</Step>
          <Step>3. Take your first class</Step>
        </StepsList>
      </Section>

      <ContactButton to="/contact">Contact Me</ContactButton>
    </PageWrapper>
  );
}
