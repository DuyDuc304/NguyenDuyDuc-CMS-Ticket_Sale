import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/App.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import ServicePack from './component/ServicePack/ServicePack';
import TicketChange from './component/TicketChange/TicketChange';
import TicketManager from './component/TicketManager/TicketManager';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ServicePack" element={<ServicePack />} />
        <Route path="/TicketManager" element={<TicketManager />} />
        <Route path="/TicketChange" element={<TicketChange />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

