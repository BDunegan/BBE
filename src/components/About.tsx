// AboutPage.tsx
import { PageWrapper, Title, Subtitle, Paragraph } from './Shared';
import styled from 'styled-components';

const Section = styled.div`
  margin-top: 2rem;
`;

export default function AboutPage() {
  return (
    <PageWrapper>
      <Title>About Me</Title>

      <Section>
        <Subtitle>Who Am I?</Subtitle>
        <Paragraph>
          My name is Ian Boarnet, and I have dedicated my career to helping students and professionals master English for real-world situations. 
          With years of experience teaching Business English, I understand the challenges learners face when trying to build confidence in speaking and writing English fluently.
        </Paragraph>
      </Section>

      <Section>
        <Subtitle>My Experience</Subtitle>
        <Paragraph>
          I have taught over 700 students from more than 50 countries, assisting them in improving their English for academic, business, and personal growth.
          My expertise lies in tailoring lessons to each student's needs, ensuring that learning English becomes a practical and empowering experience.
        </Paragraph>
      </Section>

      <Section>
        <Subtitle>Why Boarnet Business English?</Subtitle>
        <Paragraph>
          Unlike traditional language courses, my approach focuses on real-life application, helping students transition smoothly from classroom learning to professional environments.
          I provide training in business communication, presentations, interviews, and workplace interactions to help learners gain confidence in their English skills.
        </Paragraph>
      </Section>
    </PageWrapper>
  );
}
