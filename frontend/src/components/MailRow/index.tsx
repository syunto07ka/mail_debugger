import * as React from 'react';
import styled from '@emotion/styled';

interface Props {
  mail: Mail
}

export const MailRow: React.FC<Props> = ({ mail }) => (
  <Wrapper>
    <div>{mail.subject}</div>
    <Created>{mail.created}</Created>
  </Wrapper>
);

const Wrapper = styled.a`
  display: block;
  padding: 16px;
  margin: 0 8px;
  border-bottom: 1px solid #d9d9d9;
`;

const Created = styled.div`
  margin-top: 8px;
  font-size: 12px;
`;
