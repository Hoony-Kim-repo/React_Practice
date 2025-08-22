import { useState } from "react";

const Player = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(props.name);

  const onEdit = () => {
    setIsEditing((prev) => !prev);

    if (isEditing) {
      props.onChangeName(props.symbol, playerName);
    }
  };

  return (
    <li className={props.isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            required
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{props.symbol}</span>
      </span>
      <button onClick={onEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
