import React from "react";
import { Link } from "react-router-dom";

function GameCard({
  game: {
    id,
    difficulty,
    secret_number,
    is_over,
    range_min,
    range_max,
    rounds,
  },
  onDelete,
}) {
  return (
    <div className="gameCard">
      <h3>Game {id}</h3>
      <p>
        Level of difficulty is {difficulty}. Guessing range is {range_min} ..{" "}
        {range_max}.
      </p>
      {is_over && (
        <p>
          You guessed the secret number {secret_number} in {rounds.length}{" "}
          guesses.
        </p>
      )}

      <Link to={`/api/games/${id}`}>
        {" "}
        <button type="button" disabled={is_over}>
          Play Game
        </button>
      </Link>
      <Link to="/dashboard"></Link>
      <span>
        {" "}
        <button onClick={() => onDelete(id)}>Delete Game</button>
      </span>
    </div>
  );
}

export default GameCard;
