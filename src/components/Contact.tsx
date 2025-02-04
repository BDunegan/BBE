// ContactPage.tsx
import { styled } from 'styled-components';

// Styled components
const PageWrapper = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin: 0.5rem 0 0.2rem;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
`;

const SubmitButton = styled.button`
  margin-top: 1rem;
  padding: 0.75rem;
  font-size: 1.2rem;
  color: white;
  background-color: #0070f3;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #005bb5;
  }
`;

export default function ContactPage() {
  return (
    <PageWrapper>
      <Title>Contact Me</Title>
      <Subtitle>Get in Touch</Subtitle>
      <Form>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" required />

        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" required />

        <Label htmlFor="message">Message</Label>
        <TextArea id="message" name="message" required />

        <SubmitButton type="submit">Send Message</SubmitButton>
      </Form>
    </PageWrapper>
  );
}
