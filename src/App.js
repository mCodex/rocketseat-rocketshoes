import React from 'react';
import { toast } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Routes from './routes';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import 'react-toastify/dist/ReactToastify.css';

import store from './store';

toast.configure();

const App = () => (
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header />
            <Routes />
            <GlobalStyle />
        </BrowserRouter>
    </Provider>
);

export default App;
