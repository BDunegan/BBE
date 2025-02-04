// PricesPage.tsx
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

const PriceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
`;

const TableHeader = styled.th`
  background-color: #0070f3;
  color: white;
  padding: 0.75rem;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableData = styled.td`
  padding: 0.75rem;
  border: 1px solid #ddd;
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
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export default function PricesPage() {
  return (
    <PageWrapper>
      <Title>Prices</Title>

      <Paragraph>
        Courses are available online or in person if you're in Munich, Rosenheim, or surrounding areas.
      </Paragraph>

      <Section>
        <Subtitle>Individual Courses</Subtitle>
        <PriceTable>
          <thead>
            <tr>
              <TableHeader>Course Type</TableHeader>
              <TableHeader>Price</TableHeader>
              <TableHeader>Units</TableHeader>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <TableData>Single Unit</TableData>
              <TableData>€37 per unit</TableData>
              <TableData>1 Unit = 45 minutes</TableData>
            </TableRow>
            <TableRow>
              <TableData>Package - 20 Units</TableData>
              <TableData>€700 (€35 per Unit)</TableData>
              <TableData>20 Units</TableData>
            </TableRow>
            <TableRow>
              <TableData>Package - 40 Units</TableData>
              <TableData>€1,320 (€33 per Unit)</TableData>
              <TableData>40 Units</TableData>
            </TableRow>
            <TableRow>
              <TableData>Package - 60 Units</TableData>
              <TableData>€1,860 (€31 per Unit)</TableData>
              <TableData>60 Units</TableData>
            </TableRow>
          </tbody>
        </PriceTable>
      </Section>

      <Section>
        <Subtitle>Group Courses</Subtitle>
        <PriceTable>
          <thead>
            <tr>
              <TableHeader>Group Size</TableHeader>
              <TableHeader>Price Per Person</TableHeader>
              <TableHeader>Notes</TableHeader>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <TableData>Pairs</TableData>
              <TableData>€16 per unit</TableData>
              <TableData>Per person</TableData>
            </TableRow>
            <TableRow>
              <TableData>Groups (3+ people)</TableData>
              <TableData>€12 per unit</TableData>
              <TableData>Per person</TableData>
            </TableRow>
            <TableRow>
              <TableData>Large Groups / Special Prices</TableData>
              <TableData>Contact for a quote</TableData>
              <TableData>Special pricing available</TableData>
            </TableRow>
          </tbody>
        </PriceTable>
      </Section>

      <Paragraph>
        For more than 20 units or for large groups, reach out to discuss special pricing options.
      </Paragraph>

      <ContactButton to="/contact">Contact Me</ContactButton>
    </PageWrapper>
  );
}
