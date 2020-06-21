import * as React from 'react';
import styled from '@emotion/styled';
import { MailContent as MailContentComponent } from '../../../components/MailContent';
import { MailContext } from '../../../providers/MailProvider';

export const MailContent: React.FC = () => {
  const {mail, setMail} = React.useContext(MailContext);

  if (!setMail) {
    return <></>;
  }
  
  React.useEffect(() => {
    (async () => {
      setMail({
        subject: 'Lancersからのお知らせ',
        description: 'お世話になっております。Lancers事務局です',
        created: '2020-06-20'
      });
    })();
  }, [setMail]);
  return (
    <Wrapper>
      <Headding>
        <Nav>
          <Tab>PC</Tab>
          <Tab>Json</Tab>
        </Nav>
      </Headding>
      <MailContentComponent mail={mail} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin: 32px 0;
`;

const Headding = styled.div`
  text-align: center;
`;

const Nav = styled.div`
  border: 1px solid #333333;
  border-radius: 4px;
  display: inline-block;
  padding: 4px 0;
  width: 100%;
  max-width: 400px;
`;

const Tab = styled.button`
  padding: 0px 56px;
  width: 160px;
  text-align: center;
`;
