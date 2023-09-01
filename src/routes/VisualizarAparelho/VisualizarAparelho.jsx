import React from 'react';
import { useParams } from 'react-router-dom';
import { listaAparelhos } from '../Aparelhos/AparelhosData';

export default function VisualizarAparelho() {
  const { id } = useParams();
  const aparelho = listaAparelhos.find((ap) => ap.id.toString() === id);

  if (!aparelho) {
    return <p>Aparelho não encontrado.</p>;
  }

  return (
    <div className="conteudo">
      <h1>{aparelho.nome}</h1>
      <img src={`../imagens/${aparelho.id}.jpg`} alt={aparelho.nome} />
      <p>Preço: R$ {aparelho.preco}</p>
      <p>Ano de Lançamento: {aparelho.anoLancamento}</p>
      <p>Capacidade: {aparelho.capacidade} GB</p>
    </div>
  );
}
