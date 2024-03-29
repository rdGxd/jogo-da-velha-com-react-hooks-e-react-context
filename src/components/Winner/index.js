import React, { useContext } from 'react'; // Importa o módulo 'react' e a função 'useContext'
import { GameContext } from '../../contexts/GameContext'; // Importa o contexto 'GameContext' de um arquivo local
import './style.css'; // Importa um arquivo de estilo chamado 'style.css'

export default function Winner() {
  const { whoIsWinner } = useContext(GameContext); // Obtém o valor de 'whoIsWinner' do contexto 'GameContext'

  if (!whoIsWinner) return ''; // Se não houver um vencedor, retorna uma string vazia

  return <p className="winner">{whoIsWinner} ganhou!!</p>; // Renderiza o vencedor se houver um
}
