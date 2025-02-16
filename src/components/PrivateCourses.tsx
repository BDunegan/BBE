// PrivateCourses.tsx
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

const Section = styled.div`
  margin-top: 2rem;
`;

export default function PrivateCourses() {
  return (
    <PageWrapper>
      <Title>Private Courses</Title>

      <Paragraph>
        Take your Business English skills to the next level with personalized lessons tailored to your specific needs and professional goals. 
        Whether you're aiming to improve communication with international clients, enhance your presentation skills, or refine your business writing, our Private Pay Business English Lessons offer a flexible, focused approach to language learning.
      </Paragraph>

      <Section>
        <Subtitle>Key Features</Subtitle>
        <List>
          <ListItem>
            <strong>Customized Curriculum:</strong> Each lesson is designed around your unique requirements, whether it's mastering industry-specific terminology, preparing for high-stakes meetings, or improving fluency in everyday business interactions.
          </ListItem>
          <ListItem>
            <strong>Flexible Scheduling:</strong> Learn at your own pace, with flexible scheduling that fits into your busy professional life. Choose from online or in-person lessons at times that are convenient for you.
          </ListItem>
          <ListItem>
            <strong>Experienced Instructors:</strong> Work with highly qualified teachers who specialize in business English and have extensive experience helping professionals like you succeed.
          </ListItem>
          <ListItem>
            <strong>Focused Learning:</strong> Whether you're a beginner or an advanced learner, lessons are structured to challenge you and promote continuous improvement in key areas, such as speaking, writing, listening, and reading.
          </ListItem>
          <ListItem>
            <strong>Real-World Application:</strong> Focus on practical, real-life business scenarios, including email communication, presentations, negotiations, and cross-cultural interaction.
          </ListItem>
        </List>
      </Section>

      <Section>
        <Subtitle>Ideal for</Subtitle>
        <List>
          <ListItem>
            <strong>Professionals & Executives:</strong> Enhance your leadership communication, client relations, and decision-making skills.
          </ListItem>
          <ListItem>
            <strong>Business Owners & Entrepreneurs:</strong> Develop language skills to manage global teams, engage with international clients, and expand your business network.
          </ListItem>
          <ListItem>
            <strong>Job Seekers & Career Advancers:</strong> Sharpen your English for interviews, networking, and personal branding.
          </ListItem>
          <ListItem>
            <strong>Non-Native Speakers:</strong> Improve fluency and accuracy in English, focusing on language that enhances career growth in an international setting.
          </ListItem>
        </List>
      </Section>
    </PageWrapper>
  );
}
