import React from 'react';
import { toast } from 'react-toastify';
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import GlobalStyle from './styles/global';

import Header from './components/Header';

import store from './store';

toast.configure();

const App = () => (
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Router history={history}>
                <Header />
                <Routes />
                <GlobalStyle />
            </Router>
        </BrowserRouter>
    </Provider>
);

export default App;
