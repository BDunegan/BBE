// FreeTrialPage.tsx
import { PageWrapper, Title, Subtitle, Paragraph } from './Shared';
import styled from 'styled-components';

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
  return (
    <PageWrapper>
      <Title>45-Minute Free Trial</Title>

      <Paragraph>
        The 45-minute free trial at Boarnet Business English is designed to give you a taste of a lesson. During the trial, you'll experience how the lessons are tailored to suit your professional goals and learning style.
        Whether you want to improve your communication skills for meetings, presentations, or business writing, the free trial will allow you to decide if Boarnet Business English is a good fit for you.
      </Paragraph>

      <Section>
        <Subtitle>Here's what you can expect:</Subtitle>
        <List>
          <ListItem>
            <strong>Personalized Needs Assessment:</strong> The session will begin with a brief conversation to understand your current level, areas for improvement, and specific business English goals.
          </ListItem>
          <ListItem>
            <strong>Interactive Learning:</strong> You’ll engage in activities such as role-playing business scenarios, practicing writing emails, or discussing industry-specific topics, ensuring that the content is relevant to your professional needs.
          </ListItem>
          <ListItem>
            <strong>Expert Feedback:</strong> Throughout the session, you will be provided with real-time feedback on grammar, vocabulary, pronunciation, and overall fluency.
          </ListItem>
          <ListItem>
            <strong>Next Steps:</strong> At the end of the trial, we'll discuss your progress and recommend a learning plan to continue advancing your Business English skills.
          </ListItem>
        </List>
      </Section>

      <Paragraph>
        This trial is perfect for anyone looking to enhance their professional language abilities in a supportive, results-driven environment.
      </Paragraph>

      <ContactButton href="#contact">Contact Me</ContactButton>
    </PageWrapper>
  );
}
