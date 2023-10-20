import React, { useContext } from 'react'; // Importa o módulo 'react' e a função 'useContext'
import { GameContext } from '../../contexts/GameContext'; // Importa o contexto 'GameContext' de um arquivo local
import './style.css'; // Importa um arquivo de estilo chamado 'style.css'

export default function Player() {
  const { isXNext } = useContext(GameContext); // Obtém o valor de 'isXNext' do contexto 'GameContext'

  return <h1>Player: {isXNext ? 'X' : 'O'}</h1>; // Renderiza o componente com base no valor de 'isXNext'
}
