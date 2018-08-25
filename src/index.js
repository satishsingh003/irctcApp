import React from 'react';
import ReactDOM from 'react-dom';
// Import routing components
import './index.css';
import App from './App';
//import { GoogleLogin } from 'react-google-login-component';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
