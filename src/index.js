import React from "react";
import * as ReactDOMClient from 'react-dom/client'
import './css/styles.css';
import './images/logo.png';
import App from './App';

const app = ReactDOMClient.createRoot(document.getElementById("app"))

app.render(<App/>)