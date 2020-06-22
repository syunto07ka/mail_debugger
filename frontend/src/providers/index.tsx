import * as React from 'react';
import { MailsProvider } from './MailsProvider';
import { MailProvider } from './MailProvider';

export const Providers: React.FC = ({ children }) => (
  <MailsProvider>
    <MailProvider>
      {children}
    </MailProvider>
  </MailsProvider>
);
