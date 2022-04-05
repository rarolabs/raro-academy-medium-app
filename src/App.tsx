import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ArtigoPage } from "./pages/Artigo/Index";
import { ArtigosPage } from "./pages/Artigos/Index";
import { NotFoundPage } from "./pages/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArtigosPage/> } />
        <Route path="/artigo/:id" element={<ArtigoPage />} />
        
        {/* <Route path="/login" element={<LoginPage />} />
    <Route path="/" element={<ArtigosPage />} />
    <Route path="/artigos" element={<MeusArtigosPage />} />
    <Route path="/artigos/editar/:id" element={<EditarArquivoPage />} />
    <Route path="/artigos/novo" element={<EditarArquivoPage />} /> */}

        <Route path="*" element={<NotFoundPage />} />
      
      </Routes>
    </BrowserRouter>
  );
};
export default App