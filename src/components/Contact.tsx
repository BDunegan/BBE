// Contact.tsx
import { useState } from 'react';
import { PageWrapper, Title, Subtitle, Paragraph } from './Shared';
import styled from 'styled-components';

// 1) Import the necessary EmailJS functions
import { init, send } from 'emailjs-com';
init('t3ClDFpRX8kqY_t6O');

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const Label = styled.label`
  margin: 0.5rem 0 0.2rem;
  font-weight: 600;
  color: #333;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 1rem;
  font-family: 'Open Sans', Arial, sans-serif;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Open Sans', Arial, sans-serif;
  resize: vertical;
  min-height: 100px;
  margin-bottom: 1rem;
`;

const SubmitButton = styled.button`
  margin-top: 1rem;
  padding: 0.75rem;
  font-size: 1rem;
  color: #fff;
  background-color: #4a6fa5;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background-color: #365f91;
  }
`;

export default function ContactPage() {
  // 2) Store form data in state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form field changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3) Send the email via EmailJS when form is submitted
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await send(
        'service_nk3aj6t',   // e.g. service_xxx
        'template_7l1l74m',  // e.g. template_xxx
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );
      alert('Message sent successfully!');
      // Optionally, clear form or reset state
      setFormData({ name: '', email: '', message: '' });
     } catch (error) {
      console.error('Email send error:', error);
      alert('Failed to send message, please try again.');
    }
  };

  return (
    <PageWrapper>
      <Title>Contact Me</Title>
      <Subtitle>Get in Touch</Subtitle>
      <Paragraph>
        Fill out the form below and I’ll get back to you as soon as possible.
      </Paragraph>

      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Label htmlFor="message">Message</Label>
        <TextArea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <SubmitButton type="submit">Send Message</SubmitButton>
      </Form>
    </PageWrapper>
  );
}
