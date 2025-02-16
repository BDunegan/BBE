// Shared.ts (optional file for reuse) 
import styled from 'styled-components';

// A central card-like wrapper (Material style)
export const PageWrapper = styled.div`
  background-color: #fff;
  border-radius: 12px;
  margin: 2rem auto;
  padding: 2rem 3rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-family: 'Open Sans', Arial, sans-serif;

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.2rem;
  color: #333;
  text-align: left;
  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.8rem;
  color: #333;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

export const Paragraph = styled.p`
  line-height: 1.6;
  margin-bottom: 1rem;
  text-align: left;
  color: #555;
`;

export const StyledList = styled.ul`
  list-style: disc;
  margin: 1rem 0;
  padding-left: 1.5rem;
  color: #555;
`;

export const StyledButton = styled.button`
  padding: 0.75rem 1.5rem;
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
