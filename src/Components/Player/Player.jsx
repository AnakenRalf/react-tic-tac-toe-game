import React, { useState } from "react";
function Player({ name, playerSymbol, isActive, onChangeName }) {
  const [editMode, setEditMode] = useState(false);
  const [editedName, setEditedName] = useState(name);
  // const [editedSymbol, setEditedSymbol] = useState(playerSymbol);

  const toggleEditMode = () => {
    // if (!editMode) {
    //   setEditedName(editedName);
    // }
    // !!!!!!!!!!! callback is needed!!!
    setEditMode((editing) => !editing);
    if (editMode) {
      onChangeName(playerSymbol, editedName);
    }
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!editMode && <span className="player-name">{editedName}</span>}
        {editMode && (
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
        )}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={toggleEditMode}>{editMode ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
