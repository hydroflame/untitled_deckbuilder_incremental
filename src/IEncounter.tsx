import { ICard } from "./ICard";
import { IEnemy } from "./IEnemy";

export interface IEncounter {
  enemy: IEnemy;
  deck: ICard[];
  discard: ICard[];
}
