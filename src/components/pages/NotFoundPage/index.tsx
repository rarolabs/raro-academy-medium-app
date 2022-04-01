import { Link } from "react-router-dom";
import './style.css';

export const NotFoundPage = () => {
    return (
        <div className="notfound">
            <div>
                <h1 className="h1">404 - Página Não encontrada</h1>
            </div>
            <div className="link">
                <Link to={"/login"}>Voltar à Tela Principal</Link>
            </div>
        </div>
    );
}