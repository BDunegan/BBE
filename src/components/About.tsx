import { PageWrapper, Title, Subtitle, Paragraph } from './Shared';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Section = styled.div`
  margin-top: 2rem;
`;

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <Title>{t('about_title')}</Title>

      <Section>
        <Subtitle>{t('who_am_i')}</Subtitle>
        <Paragraph>{t('about_intro')}</Paragraph>
      </Section>

      <Section>
        <Subtitle>{t('my_experience')}</Subtitle>
        <Paragraph>{t('about_experience')}</Paragraph>
      </Section>

      <Section>
        <Subtitle>{t('why_bbe')}</Subtitle>
        <Paragraph>{t('about_why_bbe')}</Paragraph>
      </Section>
    </PageWrapper>
  );
}
