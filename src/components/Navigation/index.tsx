import { Link } from 'react-router-dom';

export const Navigation = () => {

  const isLoggedIn = true

  return (
      <>
        <Link to="/">Home</Link>
        <Link to="/artigos">Meus Artigos</Link>
        <Link to="/artigos/novo">Novo Artigo</Link>
        {!isLoggedIn && <Link to="/login">Login</Link>}
        <Link to="/">Logout</Link>
      </>
  );
};