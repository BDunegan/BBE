// Header.tsx
import { styled } from 'styled-components'; // Importing styled-components for defining CSS styles

// Styled component for the header container
const StyledHeader = styled.header`
  width: 100%; /* Header spans the full width of the viewport */
  background-color: rgb(22, 48, 196); /* Set a blue background color */
  padding: 1rem; /* Add padding inside the header for spacing */
`;

// Styled component for the header title
const Title = styled.h1`
  margin: 0; /* Remove default margin around the heading */
  font-size: calc(10px + 2vw); /* Set a responsive font size based on viewport width */
`;

// Styled component for the subtitle/paragraph in the header
const Para = styled.p`
  margin: 0; /* Remove default margin */
  font-size: calc(6px + 1vw); /* Set a responsive font size slightly smaller than the title */
`;

// Functional component for rendering the header
export default function Header() {
  return (
    <StyledHeader>
      {/* Main title of the application */}
      <Title>Boarnet Business English</Title>
      {/* Subtitle or tagline for the application */}
      <Para>Let's learn some BBE!</Para>
    </StyledHeader>
  );
}
