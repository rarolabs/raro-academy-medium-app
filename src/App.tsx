import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


import { LoginPage } from './components/pages/LoginPage';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { ArtigosPage } from './components/pages/Artigos';
import { ArtigoPage } from './components/pages/Artigo';
import { MeusArtigosPage } from './components/pages/MeusArtigos';
import { EditarArtigoPage } from './components/pages/EditarArtigo';
import { Layout } from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<ArtigosPage />} />
          <Route path="/artigo/:id" element={<ArtigoPage />} />
          <Route path="/artigos" element={<MeusArtigosPage />} />
          <Route path="/artigos/editar/:id" element={<EditarArtigoPage />} />
          <Route path="/artigos/novo" element={<EditarArtigoPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
