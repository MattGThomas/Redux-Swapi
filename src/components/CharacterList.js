import React from "react";

import Character from "./Character";

const CharacterList = props => {
  console.log(props)
  return (
    <p>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </p>
  );
};

export default CharacterList;
