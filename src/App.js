import React from 'react';
import { toast } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

// import GlobalStyle from './styles/global';

import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const App = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes />
        {/* <GlobalStyle /> */}
    </BrowserRouter>
);

export default App;
