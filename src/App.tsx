import './App.css';
import {  Route, Routes } from 'react-router-dom';
import { ArtigosPage } from './pages/ArtigosPage'
import { LoginPage } from './pages/LoginPage';
import { ArtigoPage } from './pages/ArtigoPage';
import { MeusArtigosPage } from './pages/MeusArtigosPage';
import { EditarArquivoPage } from './pages/EditarArquivoPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Layout } from './components/Layout';
import { RequireAuth } from './components/RequireAuth';

function App() {
  return (
    <>
      <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<ArtigosPage />} />
        <Route path="/artigo/:id" element={<ArtigoPage />} />

        <Route element={ <RequireAuth /> }>
          <Route path="/artigos" element={<MeusArtigosPage />} />
          <Route path="/artigos/editar/:id" element={<EditarArquivoPage />} />
          <Route path="/artigos/novo" element={<EditarArquivoPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
