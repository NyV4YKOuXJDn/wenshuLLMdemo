import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScenePreview from './scene-preview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScenePreview />} />
      </Routes>
    </Router>
  );
}

export default App;
