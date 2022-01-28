import { IPlayer } from "./IPlayer";
import { IEncounter } from "./IEncounter";

export type PlayerEffect = (p: IPlayer) => IPlayer;
export type EncounterEffect = (p: IEncounter) => IEncounter;
