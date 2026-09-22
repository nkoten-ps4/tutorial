import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { Button } from './components/Button.jsx';
import TutorialREO2fpkg from './pages/tutorial-reo2fpkg.jsx';

const Home = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold text-amber-500">Home Page</h2>
    <Link to="/about" className="text-sky-400 underline mt-4 inline-block">
      Ir para About
    </Link>
    <div className="flex flex-col">
      <p><a href="https://dubsgamer.com/resident-evil-outbreak-2-pt-br-iso-ps2/" target="blank">dubsgamer</a></p>
    </div>
  </div>
);

const About = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold text-sky-500">About Page</h2>
    <Link to="/" className="text-amber-400 underline mt-4 inline-block">
      Voltar para Home
    </Link>
  </div>
);

const TutorialREO2fpkgPage = () => <TutorialREO2fpkg />;

function App() {
  return (
    <HashRouter>
      <nav className="p-4 bg-[var(--ogx-0)] flex gap-4 border-b border-slate-700">
        <Link to="/" className="hover:text-amber-400 transition-colors">
          Home
        </Link>
        <Link
          to="/tutorial-reo2fpkg"
          className="hover:text-sky-400 transition-colors"
        >
          Tutorial REO2FPKG
        </Link>
        <Link to="/about" className="hover:text-sky-400 transition-colors">
          About
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tutorial-reo2fpkg" element={<TutorialREO2fpkgPage />} />
      </Routes>
    </HashRouter>
  );
}

createRoot(document.getElementById('app_root')).render(<App />);
