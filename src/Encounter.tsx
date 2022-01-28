import { IEncounter } from "./IEncounter";
import { IPlayer } from "./IPlayer";
import { Slash } from "./Cards/Slash";
import { Fireball } from "./Cards/Fireball";
import * as _ from "lodash";

export function NewEncounter(): IEncounter {
  return {
    enemy: { name: "A rat", currentHP: 10, maxHP: 10 },
    deck: [Slash, Slash, Slash, Slash, Fireball],
    discard: [],
  };
}

export function Play(
  player: IPlayer,
  encounter: IEncounter
): [IPlayer, IEncounter] {
  const enemy = encounter.enemy;
  if (encounter.deck.length === 0) {
    encounter.deck = encounter.discard.slice();
    _.shuffle(encounter.deck);
    encounter.discard = [];
  }
  const card = encounter.deck.pop();
  if (card === undefined) {
    throw new Error("Deck was empty");
  }
  encounter.discard.push(card);
  card.apply(player, encounter);
  if (enemy.currentHP < 0) {
    enemy.currentHP = enemy.maxHP;
    player.might += 1;
  }
  return [
    player,
    {
      enemy: enemy,
      deck: encounter.deck,
      discard: encounter.discard,
    },
  ];
}
