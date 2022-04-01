import './App.css';
import { Login } from './components/Login';
import { BrowserRouter, MemoryRouter, Route, Routes, useParams } from 'react-router-dom';
import { Button } from './components/Button';
import { ArtigosPage } from './pages/ArtigosPage'
import { LoginPage } from './pages/LoginPage';
import { ArtigoPage } from './pages/ArtigoPage';
import { MeusArtigosPage } from './pages/MeusArtigosPage';
import { EditarArquivoPage } from './pages/EditarArquivoPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Layout } from './components/Layout';

// const Aluno = () => {
//   const { aluno } = useParams()
//   return (
//     <Button type='button'>{aluno}</Button>
//   )
// }

function App() {
  return (
    <>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route path="/" element={<Layout/>} >
            <Route index element={<ArtigosPage />} />
            <Route path="/artigo/:id" element={<ArtigoPage />} />
            <Route path="/artigos" element={<MeusArtigosPage />} />
            <Route path="/artigos/editar/:id" element={<EditarArquivoPage />} />
            <Route path="/artigos/novo" element={<EditarArquivoPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </>
  );
}

export default App;
