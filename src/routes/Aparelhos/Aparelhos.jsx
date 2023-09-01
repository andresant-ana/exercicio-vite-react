import React from "react";
import { Link } from "react-router-dom";
import "./Aparelhos.css";
import { listaAparelhos } from "./AparelhosData";

export default function Aparelhos() {
  return (
    <div className="conteudo">
      <h1>Aparelhos</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {listaAparelhos.map((aparelho) => (
            <tr key={aparelho.id}>
              <td>
                <Link to={`/aparelhos/visualizar/${aparelho.id}`}>
                  {aparelho.nome}
                </Link>
              </td>
              <td>R$ {aparelho.preco}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
