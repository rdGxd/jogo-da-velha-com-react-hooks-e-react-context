import React, { useContext } from 'react'; // Importa o módulo 'react' e a função 'useContext'
import { GameContext } from '../../contexts/GameContext'; // Importa o contexto 'GameContext' de um arquivo local
import './style.css'; // Importa um arquivo de estilo chamado 'style.css'

export default function Reset() {
  const { setSquares, setIsXNext, setWhoIsWinner, setHistory } =
    useContext(GameContext); // Obtém funções do contexto 'GameContext'

  function handleClick() {
    // Lida com o clique no botão de redefinição
    setSquares(Array(9).fill(null)); // Reseta os quadrados para um array vazio
    setIsXNext(true); // Define que o próximo jogador é 'X'
    setWhoIsWinner(false); // Define que não há um vencedor
    setHistory([]); // Limpa o histórico de jogadas
  }

  return (
    <p className="reset">
      <button type="button" onClick={handleClick}>
        Reset
      </button>
    </p>
  );
}
