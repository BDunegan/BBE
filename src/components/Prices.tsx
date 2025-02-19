import { PageWrapper, Title, Subtitle, Paragraph } from './Shared';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <Title>{t('prices_title')}</Title>

      <Paragraph>{t('prices_intro')}</Paragraph>

      <Section>
        <Subtitle>{t('individual_courses')}</Subtitle>
        <PriceTable>
          <thead>
            <tr>
              <TableHeader>{t('course_type')}</TableHeader>
              <TableHeader>{t('price')}</TableHeader>
              <TableHeader>{t('units')}</TableHeader>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <TableData>{t('single_unit')}</TableData>
              <TableData>{t('single_unit_price')}</TableData>
              <TableData>{t('single_unit_details')}</TableData>
            </TableRow>
            <TableRow>
              <TableData>{t('package_20')}</TableData>
              <TableData>{t('package_20_price')}</TableData>
              <TableData>{t('package_20_details')}</TableData>
            </TableRow>
            <TableRow>
              <TableData>{t('package_40')}</TableData>
              <TableData>{t('package_40_price')}</TableData>
              <TableData>{t('package_40_details')}</TableData>
            </TableRow>
            <TableRow>
              <TableData>{t('package_60')}</TableData>
              <TableData>{t('package_60_price')}</TableData>
              <TableData>{t('package_60_details')}</TableData>
            </TableRow>
          </tbody>
        </PriceTable>
      </Section>

      <Section>
        <Subtitle>{t('group_courses')}</Subtitle>
        <PriceTable>
          <thead>
            <tr>
              <TableHeader>{t('group_size')}</TableHeader>
              <TableHeader>{t('price_per_person')}</TableHeader>
              <TableHeader>{t('notes')}</TableHeader>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <TableData>{t('pairs')}</TableData>
              <TableData>{t('pairs_price')}</TableData>
              <TableData>{t('pairs_notes')}</TableData>
            </TableRow>
            <TableRow>
              <TableData>{t('groups_3')}</TableData>
              <TableData>{t('groups_3_price')}</TableData>
              <TableData>{t('groups_3_notes')}</TableData>
            </TableRow>
            <TableRow>
              <TableData>{t('large_groups')}</TableData>
              <TableData>{t('large_groups_price')}</TableData>
              <TableData>{t('large_groups_notes')}</TableData>
            </TableRow>
          </tbody>
        </PriceTable>
      </Section>

      <Paragraph>{t('special_pricing')}</Paragraph>
    </PageWrapper>
  );
}
