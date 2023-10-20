import React, { useContext, useEffect } from 'react'; // Importa o módulo 'react' e as funções 'useContext' e 'useEffect'
import { v4 as uuid } from 'uuid'; // Importa a função 'uuid' do módulo 'uuid'

import { GameContext } from '../../contexts/GameContext'; // Importa o contexto 'GameContext' de um arquivo local
import calculateWinner from '../../utils/calculateWinner'; // Importa a função 'calculateWinner' de um arquivo de utilitário
import './style.css'; // Importa um arquivo de estilo chamado 'style.css'

import History from '../History'; // Importa o componente 'History' de um arquivo local
import Player from '../Player'; // Importa o componente 'Player' de um arquivo local
import Reset from '../Reset'; // Importa o componente 'Reset' de um arquivo local
import Square from '../Square'; // Importa o componente 'Square' de um arquivo local
import Winner from '../Winner'; // Importa o componente 'Winner' de um arquivo local

export default function Board() {
  const { squares, setWhoIsWinner, history } = useContext(GameContext); // Obtém dados do contexto 'GameContext'

  useEffect(() => {
    // Executa um efeito sempre que 'squares', 'setWhoIsWinner' ou 'history' mudam
    const winner = calculateWinner(squares); // Calcula o vencedor do jogo

    if (winner) setWhoIsWinner(winner); // Atualiza o estado do vencedor se houver um vencedor
  }, [squares, setWhoIsWinner, history]); // Lista de dependências para o useEffect

  return (
    <div className="board-container">
      {' '}
      {/* Cria um contêiner para o tabuleiro */}
      <Player /> {/* Renderiza o componente 'Player' */}
      <Winner /> {/* Renderiza o componente 'Winner' */}
      <Reset /> {/* Renderiza o componente 'Reset' */}
      <div className="board">
        {' '}
        {/* Cria o tabuleiro com a classe CSS 'board' */}
        {squares.map((value, index) => (
          <Square key={uuid()} value={value} index={index} />
        ))}
        {/* Mapeia os valores de 'squares' e renderiza um componente 'Square' para cada quadrado do tabuleiro */}
      </div>
      <History /> {/* Renderiza o componente 'History' */}
    </div>
  );
}
