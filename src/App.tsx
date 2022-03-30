import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

import { LoginPage } from './pages/LoginPage'

import { Layout } from './components/Layout';
import { ArtigosPage } from './pages/ArtigosPage';
import { ArtigoPage } from './pages/ArtigoPage';
import { MeusArtigosPage } from './pages/MeusArtigosPage';
import { EditarArquivoPage } from './pages/EditarArquivoPage';

import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />

        <Route path='/' element={<Layout/>}>
          <Route index element={<ArtigosPage />} />
          <Route path='/artigo/:id' element={<ArtigoPage />} />
          <Route path='/artigos' element={<MeusArtigosPage />} />
          <Route path='/artigo/edit/:id' element={<EditarArquivoPage />} />
          <Route path='/artigos/novo' element={<EditarArquivoPage />} />
        </Route>

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
