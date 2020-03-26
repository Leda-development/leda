import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Docs } from './Docs';
import { Root } from './system/layout/Root';

const element = (
  <Router>
    <React.StrictMode>
      <Root>
        <Docs />
      </Root>
    </React.StrictMode>
  </Router>
);

const container = document.createElement('div');

document.body.appendChild(container);

ReactDOM.render(element, container);
