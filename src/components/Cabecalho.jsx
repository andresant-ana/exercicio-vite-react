import { Link } from "react-router-dom";
import "../index.css"

export default function Cabecalho() {

    return(
        <>
            <div className="cabecalho">
                <h1>FIAP SHOP</h1>
                <div className="menu-container">
                    <a href="/" className="menu-item-principal">Home</a>
                    <a href="/aparelhos" className="menu-item-principal">Aparelhos</a>
                </div>
            </div>
        </>
    )

};