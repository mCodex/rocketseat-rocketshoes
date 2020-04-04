import { createGlobalStyle } from 'styled-components';

import bg from '~/assets/images/bg.svg';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

 * {
     margin: 0;
     padding: 0;
        outline: 0;
        box-sizing: border-box;
 }

 body {
     background: #191920 url(${bg}) no-repeat center top;
     -webkit-font-smoothing: antialiased;
 }

 body, input , button {
     font: 14px Lato, sans-serif;
 }

 #root {
     max-width: 1020px;
     margin: 0 auto;
     padding: 0 20px 50px;
 }

 button {
     cursor: pointer;
 }


`;