import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ActivableLink } from '../ActivableLinkProps';

export const Navigation = () => {

  const [isAuthenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    setAuthenticated(localStorage.getItem("token") !== null);
  }, []);

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    setAuthenticated(false);
    navigate('/');
  }

  if(!isAuthenticated) { 
    return (
      <>
        <ActivableLink to="/">Home</ActivableLink>
        <ActivableLink to="/login">Login</ActivableLink>
      </>
    );
  }

  return (
    <>
      <ActivableLink to="/">Home</ActivableLink>
      <ActivableLink to="/artigos">Meus Artigos</ActivableLink>
      <ActivableLink to="/artigo/novo">Novo Artigo</ActivableLink>
      <ActivableLink to="/" onClick={logout} type="button">Logout</ActivableLink>
    </>
  );
};