import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { Layout } from "./components/Layout/Index";
import { ArtigoPage } from "./pages/Artigo/Index";
import { ArtigosPage } from "./pages/Artigos/Index";
import LoginPage from "./pages/Login/Index";
import { MeusArtigosPage } from "./pages/MeusArtigos/Index";
import { NotFoundPage } from "./pages/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />

        <Route path='/' element={<Layout />}>
          <Route index element={<ArtigosPage />} />
          <Route path="/artigo/:id" element={<ArtigoPage />} />

          <Route path="/artigos" element={<MeusArtigosPage />} />
        </Route>


        {/* 
    
    <Route path="/artigos/editar/:id" element={<EditarArquivoPage />} />
    <Route path="/artigos/novo" element={<EditarArquivoPage />} /> */}

        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </BrowserRouter>
  );
};
export default App