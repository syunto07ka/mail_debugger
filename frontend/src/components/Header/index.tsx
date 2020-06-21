import * as React from 'react';
import styled from '@emotion/styled';

export const Header: React.FC = () => (
  <Wrapper>
    Mail Debugger
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 16px 0;
  text-align: center;
  background: black;
  color: white;
`;
