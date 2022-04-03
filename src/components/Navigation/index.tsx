import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ActivableLink } from '../ActivableLink';

export const Navigation = () => {

  const [isAuthenticated, setAuthenticated] = useState(false);
  
  useEffect(() => {
    setAuthenticated(localStorage.getItem('access_token') != null);
  }, []);


  const navigate = useNavigate();

  function logout () {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id');
    setAuthenticated(false);
    navigate('/');
  }

  if (!isAuthenticated) {
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
        <ActivableLink to="/artigos/novo">Novo Artigo</ActivableLink>
        <ActivableLink to="/" onClick={logout} type={'button'}>Logout</ActivableLink>
      </>
  );
};