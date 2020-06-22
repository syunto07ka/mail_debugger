import * as React from 'react';
import styled from '@emotion/styled';

interface Props {
  mail: {
    description: string
  }
}

export const MailContent: React.FC<Props> = ({ mail }) => (
  <Wrapper>
    <div>
      {mail.description}
    </div>
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 32px;
`;
