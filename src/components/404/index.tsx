import { useNavigate } from "react-router-dom"
import './style.css';

export const Error404 = () => {

    const navigate = useNavigate();

    return (
        <div className="container-404">
            <h1> 4<img alt="Página não encontrada" src="/okta.png" />4 </h1>
            <h2> Página não encontrada </h2>
            <button className="btn" onClick={() => navigate("/")}>
                Página inicial
            </button>
        </div>
    )
}