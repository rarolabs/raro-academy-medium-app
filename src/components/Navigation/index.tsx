import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ActivableLink } from '../ActivableLink';
export const Navigation = () => {
  const [ authentication, setAuthentication ] = useState(false)

  const navigate = useNavigate()

  useEffect( () => {
    setAuthentication(localStorage.getItem('access_token') !== null)
  }, [] )

  function logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id");
    setAuthentication(false);
    navigate('/');
  }

  if (!authentication) {  
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
      <ActivableLink 
        to="/" 
        onClick={logout} 
        type="button">
        Lougout
      </ActivableLink>
    </>
  );
     
};