import t from 'prop-types'; // Importa o módulo 'prop-types' para definir as propriedades esperadas
import React, { createContext, useState } from 'react'; // Importa o módulo 'react', a função 'createContext' e 'useState'

export const GameContext = createContext(); // Cria o contexto 'GameContext'

export default function GameContextProvider({ children }) {
  const [squares, setSquares] = useState(Array(9).fill(null)); // Inicializa o estado dos quadrados com um array vazio
  const [isXNext, setIsXNext] = useState(true); // Inicializa o estado para indicar se 'X' é o próximo jogador
  const [whoIsWinner, setWhoIsWinner] = useState(false); // Inicializa o estado para indicar o vencedor
  const [history, setHistory] = useState([]); // Inicializa o estado do histórico

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const state = {
    squares,
    setSquares,
    isXNext,
    setIsXNext,
    whoIsWinner,
    setWhoIsWinner,
    history,
    setHistory,
  };

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
  // Cria e fornece o contexto 'GameContext' com os valores e disponibiliza os componentes filhos
}

GameContextProvider.propTypes = {
  children: t.node.isRequired, // Define que 'children' é um nó obrigatório
};
