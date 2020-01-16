/* eslint-disable import/no-extraneous-dependencies, no-console, no-alert, react/no-multi-comp, react/prop-types */
import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CypressLayout } from './CypressLayout';
import { Demo } from './Demo';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.render(
    <Router>
      <React.StrictMode>
        <Route exact path="/" component={Demo} />
        <CypressLayout />
      </React.StrictMode>
    </Router>,
    rootElement,
  );
}
