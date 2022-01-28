import { ICard } from "../ICard";
import { IEncounter } from "../IEncounter";
import { IPlayer } from "../IPlayer";

export const Fireball: ICard = {
  name: "Fireball",
  apply: (player: IPlayer, encounter: IEncounter) => {
    encounter.enemy.currentHP -= 10;
  },
};
