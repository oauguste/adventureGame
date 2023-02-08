import { GridObject } from "./grid.js";
import { newGrid } from "./gameGrid.js";
import { player, enemy } from "./gameGrid.js";

class Item extends GridObject {
  constructor(health, attack, defense, itemLocation) {
    super(
      newGrid.rows,
      newGrid.cols,
      player.playerLocation,
      enemy.enemyLocation,
      itemLocation
    );
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.itemLocation = itemLocation;
  }
}

// monsterAttack()
export { Item };
