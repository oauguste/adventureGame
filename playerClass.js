import inquirer from "inquirer";
import { GridObject } from "./grid.js";
import { newGrid, item, enemy, grids } from "./gameGrid.js";

class Player extends GridObject {
  constructor(health, attack, defense, playerLocation) {
    super(
      newGrid.rows,
      newGrid.cols,
      playerLocation,
      enemy.enemyLocation,
      item.itemLocation
    );
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.playerLocation = playerLocation;
  }
  // getParentMetaData() {
  //   console.log(this.rows + this.cols);
  //   console.log(this.rows + this.cols);
  //   return this.rows;
  // }

  //player Methods
  // playerAttack()
  moveRight() {
    if (
      this.playerLocation + 1 >
        (this.cols + 1) * (this.rows + 1) - 1 ||
      this.playerLocation + 1 < 0
    ) {
      return;
    } else {
      this.playerLocation = this.playerLocation + 1;
    }
  }
  moveLeft() {
    if (
      this.playerLocation - 1 >
        (this.cols + 1) * (this.rows + 1) - 1 ||
      this.playerLocation - 1 < 0
    ) {
      return;
    } else {
      this.playerLocation = this.playerLocation - 1;
    }
  }
  moveUp() {
    if (
      this.playerLocation - 5 >
        (this.cols + 1) * (this.rows + 1) - 1 ||
      this.playerLocation - 5 < 0
    ) {
      return;
    } else {
      this.playerLocation = this.playerLocation - 5;
    }
  }
  moveDown() {
    if (
      this.playerLocation + 5 >
        (this.cols + 1) * (this.rows + 1) - 1 ||
      this.playerLocation + 5 < 0
    ) {
      return;
    } else {
      this.playerLocation = this.playerLocation + 5;
    }
  }
}

export { Player };
