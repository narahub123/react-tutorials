// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];

// export default function GameBoard({ onSelectSquare, turns }) {
export default function GameBoard({ onSelectSquare, board }) {
  //   let gameBoard = initialGameBoard;

  //   for (const turn of turns) {
  //     const { square, player } = turn;
  //     const { row, col } = square;

  //     gameBoard[row][col] = player;
  //   } // for ends
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  // if the button was selected the button is disabled
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
