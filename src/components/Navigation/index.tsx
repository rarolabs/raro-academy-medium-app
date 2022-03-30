import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/articles">Meus Artigos</Link>
      <Link to="/articles/new">Novo Artigo</Link>
    </>
  );
};
