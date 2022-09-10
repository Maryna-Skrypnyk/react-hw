import React from 'react';
import ReactDOM from 'react-dom/client';
import LocalizationContext from './context/localization';

import 'modern-normalize/modern-normalize.css';
import './styles/index.scss';

import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LocalizationContext>
      <App />
    </LocalizationContext>
  </React.StrictMode>,
);
