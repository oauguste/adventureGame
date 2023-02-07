import inquirer from "inquirer";
import { GridObject } from "./grid.js";

class Player extends GridObject {
  constructor(
    health,
    attack,
    defense,
    playerLocation,
    rows,
    cols,
    enemyLocation,
    itemLocation
  ) {
    super(
      rows,
      cols,
      playerLocation,
      enemyLocation,
      itemLocation
    );
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.playerLocation = playerLocation;
  }

  //player Methods
  moveRight() {
    if (
      this.playerLocation + 1 > this.cols * this.rows ||
      this.playerLocation < 0
    ) {
      return;
    } else {
      this.playerLocation = this.playerLocation + 1;
    }
  }
  moveLeft() {
    if (
      this.playerLocation - 1 > this.cols * this.rows ||
      this.playerLocation < 0
    ) {
      return;
    } else {
      this.playerLocation = this.playerLocation - 1;
    }
  }
  moveUp() {
    if (
      this.playerLocation - 5 > this.cols * this.rows ||
      this.playerLocation < 0
    ) {
      return;
    } else {
      this.playerLocation = this.playerLocation - 5;
    }
  }
  moveDown() {
    if (
      this.playerLocation + 5 > 59 ||
      this.playerLocation < 0
    ) {
      return;
    } else {
      this.playerLocation = this.playerLocation + 5;
    }
  }
}

export { Player };
