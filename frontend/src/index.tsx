import * as React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './pages/Main';
import {Global, css} from '@emotion/core';
import { Providers } from './providers';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={css`
      * {
        padding: 0;
        margin: 0;
        button {
          border: none;
          background-color: #ffffff;
        }
      }
    `} />
    <Providers>
      <Main />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);
