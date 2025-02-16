// Prices.tsx
import { PageWrapper, Title, Subtitle, Paragraph } from './Shared';
import styled from 'styled-components';

const PriceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  font-size: 0.95rem;
`;

const TableHeader = styled.th`
  background-color: #4a6fa5;
  color: #fff;
  padding: 0.75rem;
  border: 1px solid #ddd;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableData = styled.td`
  padding: 0.75rem;
  border: 1px solid #ddd;
  color: #555;
`;


const Section = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.03);
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

    </PageWrapper>
  );
}
