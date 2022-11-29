import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Preview } from "./Components/Preview"

const formBuilder = ReactDOM.createRoot(document.getElementById('form-builder'));
const previewPane = ReactDOM.createRoot(document.getElementById("preview-pane"));

formBuilder.render(
    <App />
);

previewPane.render(
  <Preview />
)
