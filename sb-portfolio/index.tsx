import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './app/page';
const container = document.getElementById('react');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
