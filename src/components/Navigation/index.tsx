/* src/components/Navigation/index.tsx */
import { Link } from 'react-router-dom';


export const Navigation = () => {
  return (
      <>
        <Link to="/">Home</Link>
        <Link to="/artigos">Meus Artigos</Link>
        <Link to="/artigos/novo">Novo Artigo</Link>
        <Link to="/login">Login</Link>
        <Link to="/">Sair</Link>
      </>
  );
};