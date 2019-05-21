import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.scss';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
// Import bootstrap css
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdbreact/dist/css/mdb.css';

//import * as serviceWorker from './serviceWorker';

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
