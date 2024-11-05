import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SceneExamples from './scene-preview';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SceneExamples />
  </React.StrictMode>
); 