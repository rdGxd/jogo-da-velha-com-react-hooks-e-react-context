import React, { useContext } from 'react'; // Importa o módulo 'react' e a função 'useContext'
import { v4 as uuid } from 'uuid'; // Importa a função 'uuid' do módulo 'uuid'
import { GameContext } from '../../contexts/GameContext'; // Importa o contexto 'GameContext' de um arquivo local
import './style.css'; // Importa um arquivo de estilo chamado 'style.css'

export default function History() {
  const { history, setHistory, setSquares, setIsXNext, setWhoIsWinner } =
    useContext(GameContext); // Obtém dados do contexto 'GameContext'

  function handleClick(index) {
    // Lida com o clique em um item do histórico
    const newHistory = [...history]; // Cria uma cópia do histórico
    newHistory.splice(index, Number.MAX_SAFE_INTEGER); // Remove os itens após o índice selecionado
    setHistory(newHistory); // Atualiza o histórico com a nova cópia

    setSquares(history[index].squares); // Atualiza os quadrados com a cópia de quadrados do histórico
    setIsXNext(history[index].isXNext); // Atualiza o estado do próximo jogador com o valor do histórico
    setWhoIsWinner(history[index].whoIsWinner); // Atualiza o vencedor com o valor do histórico
  }

  return (
    <div>
      {history.map((data, index) => (
        <div key={uuid()} className="history">
          <button type="button" onClick={() => handleClick(index)}>
            Voltar para jogada {index}
          </button>
        </div>
      ))}
      {/* Mapeia os itens do histórico e cria botões para voltar para jogadas anteriores */}
    </div>
  );
}
