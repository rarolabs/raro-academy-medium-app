import { Link } from 'react-router-dom';
import { ArticleThumbnailProps } from '../ArticleThumbnail/ArticleThumbnail.types';


export const Navigation = () => {

  const auth = false

  return (
      <>
        <Link to="/">Home</Link>
        <Link to="/artigos">Meus Artigos</Link>
        <Link to="/artigos/novo">Novo Artigo</Link>
        {auth ? <Link to="/login">Login</Link> : <Link to="/login">Logout</Link>}
      </>
  );
};