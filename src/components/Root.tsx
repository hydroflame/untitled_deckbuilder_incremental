import { Encounter } from "./Encounter";
import AppBar from "@mui/material/AppBar";
import { NewEncounter } from "../Encounter";
import React, { useEffect, useState } from "react";

export function Root(): React.ReactElement {
  const [player, setPlayer] = useState({ might: 0, mystic: 0 });
  const [X, setX] = useState({ foo: 0 });
  useEffect(() => {
    setInterval(() => {
      setX((old) => {
        old.foo++;
        console.log(old);
        return old;
      });
    }, 1000);
  }, []);
  return (
    <>
      <AppBar position="static">
        Might Essence: {player.might}, Mystic essence: {player.mystic}, {X.foo}
      </AppBar>
      <Encounter
        player={player}
        setPlayer={setPlayer}
        encounter={NewEncounter()}
      />
    </>
  );
}
