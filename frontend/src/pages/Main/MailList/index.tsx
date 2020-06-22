import * as React from 'react';
import styled from '@emotion/styled';
import { MailRow } from '../../../components/MailRow';
import { MailsContext } from '../../../providers/MailsProvider';

export const MailList: React.FC = () => {
  const { mails, setMails } = React.useContext(MailsContext);
  console.log('hogehoge');

  if (!setMails) {
    return <></>;
  }

  React.useEffect(() => {
    (async () => {
      setMails([
        {
          subject: 'Lancersからのお知らせ',
          description: 'お世話になっております。Lancers事務局です',
          created: '2020-06-20'
        },
        {
          subject: 'Lancersからのお知らせ',
          description: 'お世話になっております。Lancers事務局です',
          created: '2020-06-20'
        },
        {
          subject: 'Lancersからのお知らせ',
          description: 'お世話になっております。Lancers事務局です',
          created: '2020-06-20'
        },
      ]);
    })();
  }, [setMails]);

  return (
    <Wrapper>
      {mails !== [] && mails.map((mail: Mail, index: number) => (
        <MailRow key={String(index)} mail={mail} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 480px;
  height: 100%;
  min-height: 100vh;
  border-right: 1px solid #333333;
`;
