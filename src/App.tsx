import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import {ErrorPage} from './pages/ErrorPage'
import { LoginPage } from './pages/LoginPage';
import { Layout } from './components/Layout';
import { ArtigosPage } from './pages/ArtigosPage';
import { ArtigoPage } from './pages/ ArtigoPage';
import { MeusArtigosPage } from './pages/MeusArtigos';
import { EditarArquivoPage } from './pages/EditarArquivo';
const auth = true
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>} />
        <Route path="/" element={ auth ?  <Layout /> : <LoginPage/> } >
          <Route index element={<ArtigosPage />} />
          <Route path="/artigo/:id" element={<ArtigoPage />} />
          <Route path="/artigos" element={<MeusArtigosPage />} />
          <Route path="/artigos/editar/:id" element={<EditarArquivoPage />} />
          <Route path="/artigos/novo" element={<EditarArquivoPage />} />
        </Route>

        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

