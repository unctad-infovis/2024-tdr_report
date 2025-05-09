import React from 'react';

import { createRoot } from 'react-dom/client';

import App from './jsx/App.jsx';

import Figure1 from './jsx/Figure1.jsx';

import Figure2 from './jsx/Figure2.jsx';

const container_app = document.getElementById('app-root-2024-tdr_report_app');
if (container_app) {
  const root_app = createRoot(container_app);
  root_app.render(<App />);
}

const container_figure1 = document.getElementById('app-root-2024-tdr_report_figure1');
if (container_figure1) {
  const root_figure1 = createRoot(container_figure1);
  root_figure1.render(<Figure1 />);
}

const container_figure2 = document.getElementById('app-root-2024-tdr_report_figure2');
if (container_figure2) {
  const root_figure2 = createRoot(container_figure2);
  root_figure2.render(<Figure2 />);
}
