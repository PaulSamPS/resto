import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {App} from './App';
import {Layout} from './layout/Layout';

ReactDOM.render(
    <React.StrictMode>
      <Layout>
        <App />
      </Layout>
    </React.StrictMode>,
    document.getElementById('root'),
);

