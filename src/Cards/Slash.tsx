import { ICard } from "../ICard";
import { IEncounter } from "../IEncounter";
import { IPlayer } from "../IPlayer";

export const Slash: ICard = {
  name: "Slash",
  apply: (player: IPlayer, encounter: IEncounter) => {
    encounter.enemy.currentHP -= 1;
  },
};
