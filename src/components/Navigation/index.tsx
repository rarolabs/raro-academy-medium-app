import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArticleThumbnailProps } from '../ArticleThumbnail/ArticleThumbnail.types';


export const Navigation = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    setAuthenticated(localStorage.getItem("access_token") !== null);
  }, []);

  function logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id");
    setAuthenticated(false);
    navigate('/');
  }

  if(!isAuthenticated) { 
    return (
      <>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </>
    );
  }

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/artigos">Meus Artigos</Link>
      <Link to="/artigos/novo">Novo Artigo</Link>
      <Link to="/login">Login</Link>
      <Link to="/"  onClick={logout}>Sair</Link>
    </>
  );
}