// components/Navigation.tsx
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

// Styled component for the navigation bar container
const StyledNav = styled.nav`
  display: flex; /* Arrange navigation items in a row */
  justify-content: center; /* Center the items horizontally */
  align-items: center; /* Align items vertically */
  background-color: #333; /* Dark background color for the navigation bar */
  position: sticky; /* Stick to the top of the viewport */
  top: 0; /* Position it at the very top */
  z-index: 1000; /* Ensure it appears above other elements */
  padding: 1rem; /* Add padding inside the navigation bar */
`;

// Styled component for individual navigation cards
const NavCard = styled.div`
  background-color: #444; /* Slightly lighter background for navigation cards */
  border-radius: 8px; /* Rounded corners for the card */
  padding: 1rem; /* Add padding inside the card */
  margin: 0.5rem; /* Space between cards */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  transition: transform 0.2s, background-color 0.2s; /* Smooth transition for hover effects */

  &:hover {
    transform: scale(1.05); /* Slight zoom effect on hover */
    background-color: #555; /* Darker background on hover */
  }
`;

// Styled component for navigation links
const NavItem = styled(NavLink)`
  color: white; /* Text color */
  text-decoration: none; /* Remove underline from links */
  font-size: 1rem; /* Standard font size */

  &:hover {
    text-decoration: underline; /* Add underline on hover for emphasis */
  }

  &.active {
    color: #0070f3; /* Highlight active link with a blue color */
    font-weight: bold; /* Make the active link text bold */
  }
`;

// Functional component for the navigation bar
export default function Navigation() {
  return (
    <StyledNav>
      {/* Navigation card for the Home tab */}
      <NavCard>
        <NavItem to="/">Home</NavItem>
      </NavCard>
      {/* Navigation card for the Contact tab */}
      <NavCard>
        <NavItem to="/contact">Contact</NavItem>
      </NavCard>
      {/* Navigation card for the Corporate Courses tab */}
      <NavCard>
        <NavItem to="/corporate-courses">Corporate Courses</NavItem>
      </NavCard>
      {/* Navigation card for the Private Courses tab */}
      <NavCard>
        <NavItem to="/private-courses">Private Courses</NavItem>
      </NavCard>
      {/* Navigation card for the About tab */}
      <NavCard>
        <NavItem to="/about">About</NavItem>
      </NavCard>
      {/* Navigation card for the Free Trial tab */}
      <NavCard>
        <NavItem to="/free-trial">Free Trial</NavItem>
      </NavCard>
      {/* Navigation card for the Prices tab */}
      <NavCard>
        <NavItem to="/prices">Prices</NavItem>
      </NavCard>
    </StyledNav>
  );
}
