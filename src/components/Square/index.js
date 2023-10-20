import React, { useContext } from 'react'; // Importa o módulo 'react' e a função 'useContext'
import t from 'prop-types'; // Importa o módulo 'prop-types' para definir as propriedades esperadas
import { GameContext } from '../../contexts/GameContext'; // Importa o contexto 'GameContext' de um arquivo local

export default function Square({ value, index }) {
  const {
    squares,
    setSquares,
    isXNext,
    setIsXNext,
    whoIsWinner,
    setHistory,
    history,
  } = useContext(GameContext); // Obtém dados e funções do contexto 'GameContext'

  function handleClick() {
    // Lida com o clique em um quadrado
    if (squares[index]) return; // Retorna se o quadrado já foi preenchido
    if (whoIsWinner) return; // Retorna se já houver um vencedor

    const newSquares = [...squares]; // Cria uma cópia dos quadrados
    newSquares[index] = isXNext ? 'X' : 'O'; // Define 'X' ou 'O' no quadrado clicado
    setSquares(newSquares); // Atualiza o estado dos quadrados

    setIsXNext(!isXNext); // Alterna o próximo jogador (de 'X' para 'O' ou vice-versa)

    setHistory([
      ...history,
      {
        squares: [...squares], // Cria uma cópia dos quadrados para o histórico
        isNext: !isXNext, // Inverte o próximo jogador para o histórico
        whoIsWinner, // Mantém o valor do vencedor no histórico
      },
    ]); // Atualiza o histórico com a jogada atual
  }

  return (
    <button type="button" onClick={handleClick}>
      {value}
    </button>
  );
}

Square.defaultProps = {
  value: null, // Define um valor padrão para 'value' como nulo
};

Square.propTypes = {
  value: t.string, // Define que 'value' deve ser uma string
  index: t.number.isRequired, // Define que 'index' deve ser um número obrigatório
};
