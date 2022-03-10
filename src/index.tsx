import React from 'react';
import {App} from './App';
import {createStore} from './redux/store';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/global';
import './index.scss';

const store = createStore();

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
        <GlobalStyles />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

