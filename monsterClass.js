import { GridObject } from "./grid.js";
import { newGrid } from "./gameGrid.js";
import { player, item, enemy, grids } from "./gameGrid.js";

class Monster extends GridObject {
  constructor(health, attack, defense, enemyLocation) {
    super(
      newGrid.rows,
      newGrid.cols,
      player.playerLocation,
      enemy.enemyLocation,
      item.itemLocation
    );
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.enemyLocation = enemyLocation;
  }
}

// monsterAttack()
export { Monster };
