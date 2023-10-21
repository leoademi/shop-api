import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from "./components/registration/AuthProvider";

ReactDOM.render(
    <AuthProvider>
    <Router>
        <App />
    </Router>
    </AuthProvider>,
    document.getElementById('root')
);

reportWebVitals();
