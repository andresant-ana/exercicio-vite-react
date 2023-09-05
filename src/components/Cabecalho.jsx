import { Link } from "react-router-dom";
import "../index.css"

export default function Cabecalho() {

    return(
        <>
            <div class="cabecalho">
                <h1>FIAP SHOP</h1>
                <div class="menu-container">
                    <a href="/" class="menu-item-principal">Home</a>
                    <a href="/aparelhos" class="menu-item-principal">Aparelhos</a>
                </div>
            </div>
        </>
    )

};