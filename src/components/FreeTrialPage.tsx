// FreeTrialPage.tsx
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

// Styled components
const PageWrapper = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 2rem auto;
  font-family: Arial, sans-serif;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Paragraph = styled.p`
  line-height: 1.6;
  margin-bottom: 1rem;
  text-align: justify;
`;

const List = styled.ul`
  list-style: disc;
  text-align: left;
  margin: 1rem auto;
  padding-left: 1.5rem;
  max-width: 600px;
`;

const ListItem = styled.li`
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

      <ContactButton to="/contact">Contact Me</ContactButton>
    </PageWrapper>
  );
}
