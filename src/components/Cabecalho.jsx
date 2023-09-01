import { Link } from "react-router-dom";
import "../index.css"

export default function Cabecalho() {

    return(
        <>
            <header className="cabecalho">
                <h1>e-FIAP</h1>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/aparelhos">APARELHOS</Link></li>
                </ul>
            </header>
        </>
    )

};