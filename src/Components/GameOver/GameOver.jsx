export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game OVER!</h2>
      {winner && <p>{winner} WON!</p>}
      {!winner && <p>This is DRAW!</p>}
      <p>
        {winner && <button onClick={onRestart}>Revache!</button>}
        {!winner && <button onClick={onRestart}>Play Again!</button>}
      </p>
    </div>
  );
}
