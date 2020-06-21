import * as React from 'react';

const initialValue: Mail = {
  subject: '',
  description: '',
  created: '',
}

export const MailContext = React.createContext<
  {mail: Mail, setMail: React.Dispatch<React.SetStateAction<Mail>>|undefined}
>({mail: initialValue, setMail: undefined});

export const MailProvider: React.FC = ({ children }) => {
  const [mail, setMail] = React.useState<Mail>({
    subject: '',
    description: '',
    created: '',
  });

  return (
    <MailContext.Provider value={{mail, setMail}}>
      {children}
    </MailContext.Provider>
  );
};
