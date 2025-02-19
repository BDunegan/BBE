import { PageWrapper, Title, Subtitle, Paragraph } from './Shared';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const List = styled.ul`
  list-style: disc;
  margin: 1rem 0;
  padding-left: 1.5rem;
  color: #555;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const Section = styled.div`
  margin-top: 2rem;
`;

export default function PrivateCourses() {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <Title>{t('private_title')}</Title>

      <Paragraph>{t('private_intro')}</Paragraph>

      <Section>
        <Subtitle>{t('key_features')}</Subtitle>
        <List>
          <ListItem>{t('feature_1')}</ListItem>
          <ListItem>{t('feature_2')}</ListItem>
          <ListItem>{t('feature_3')}</ListItem>
          <ListItem>{t('feature_4')}</ListItem>
          <ListItem>{t('feature_5')}</ListItem>
        </List>
      </Section>

      <Section>
        <Subtitle>{t('ideal_for')}</Subtitle>
        <List>
          <ListItem>{t('ideal_1')}</ListItem>
          <ListItem>{t('ideal_2')}</ListItem>
          <ListItem>{t('ideal_3')}</ListItem>
          <ListItem>{t('ideal_4')}</ListItem>
        </List>
      </Section>
    </PageWrapper>
  );
}
