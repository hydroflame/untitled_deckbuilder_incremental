import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import Box from "@mui/material/Box";
import { Resource } from "./Resource";

import { Enemy } from "./Enemy";
import { Play } from "../Encounter";

import { IPlayer } from "../IPlayer";
import { IEncounter } from "../IEncounter";

interface IProps {
  setPlayer(p: IPlayer): void;
  player: IPlayer;
  encounter: IEncounter;
}

export function Encounter(props: IProps): React.ReactElement {
  const [encounter, setEncounter] = useState(props.encounter);
  useEffect(() => {
    setTimeout(() => {
      const [p, e] = Play(props.player, encounter);
      props.setPlayer(p);
      setEncounter(e);
    }, 500);
  });
  return (
    <>
      <Box display="flex">
        <Box sx={{ m: "auto", my: 20 }}>
          {encounter.discard.length > 0 && (
            <Card
              title={encounter.discard[encounter.discard.length - 1].name}
            />
          )}

          <Resource color={"#0f0"} v={20} max={100} />
          <Resource color={"#00f"} v={40} max={100} />
        </Box>
        <Box sx={{ m: "auto", my: 20 }}>
          <Enemy enemy={encounter.enemy} />
        </Box>
      </Box>
    </>
  );
}
