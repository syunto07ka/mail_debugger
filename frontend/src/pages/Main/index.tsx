import * as React from 'react';
import styled from '@emotion/styled';
import { Header } from '../../components/Header';
import { MailList } from './MailList';
import { MailContent } from './MailContent';

export const Main: React.FC = () => {
  return(
    <>
      <Header />
      <ContentWrapper>
        <MailList />
        <MailContent />
      </ContentWrapper>
    </>
  );
};

const ContentWrapper = styled.div`
  display: flex;
`;
