import * as React from 'react';

export const MailsContext = React.createContext<
  {mails: Mail[], setMails: React.Dispatch<React.SetStateAction<Mail[]>>|null}
>({mails: [], setMails: null});

export const MailsProvider: React.FC = ({ children }) => {
  const [mails, setMails] = React.useState<Mail[]>([]);

  const value = React.useMemo(() => ({
    mails,
    setMails
  }), [mails])

  return (
    <MailsContext.Provider value={value}>
      {children}
    </MailsContext.Provider>
  );
};
