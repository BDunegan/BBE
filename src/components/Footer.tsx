// Footer.tsx
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

// Styled component for the footer container
const StyledFooter = styled.footer`
  display: flex; /* Use flexbox for alignment */
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  width: 100%; /* Stretch footer to full width of the viewport */
  background-color: rgb(22, 48, 196); /* Blue background color */
  padding: 0.5rem; /* Add padding inside the footer */
`;

// Styled component for footer text
const FooterText = styled.p`
  margin: 0; /* Remove default margin for paragraphs */
  font-size: calc(2px + 1vw); /* Responsive font size based on viewport width */
`;

// Component for footer links
// Props: `to` - destination URL, `children` - content inside the link
const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link
      style={{
        padding: '0.5rem', /* Add padding around the link */
        margin: '0.25rem', /* Add spacing between links */
        color: '#fff', /* White text color */
        textDecoration: 'none', /* Remove underline from links */
      }}
      to={to}
    >
      {children}
    </Link>
  );
};

// Footer component rendering the footer section
export default function Footer() {
  return (
    <StyledFooter>
      {/* Footer text with a copyright link */}
      <FooterText>
        All rights reserved by Ian Boarnet:
        <FooterLink to="https://www.copyright.gov/">Credits</FooterLink> &copy; {new Date().getFullYear()}
      </FooterText>
    </StyledFooter>
  );
}
