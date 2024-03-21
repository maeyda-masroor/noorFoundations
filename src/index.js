import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Suspense } from "react";
import App from './App';
import "./il8n";
import reportWebVitals from './reportWebVitals';
import Wrapper from "./component/Wrapper";
import { IntlProvider } from 'react-intl';
const root = ReactDOM.createRoot(document.getElementById('root'));
const Loader = () => <div>loading...</div>;
root.render(
  <React.StrictMode>
    <Wrapper>
      <App/>
    </Wrapper>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
