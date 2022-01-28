import { IEncounter } from "./IEncounter";
import { IPlayer } from "./IPlayer";

export interface ICard {
  name: string;
  apply(player: IPlayer, encounter: IEncounter): void;
}
