import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import styled from 'styled-components';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
// Import bootstrap css
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const AppContainer = styled.section `
`;


const app =
  <BrowserRouter>
    <AppContainer>
      <App />
    </AppContainer>
  </BrowserRouter>

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
