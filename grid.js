// import inquirer from "inquirer";
// import { Player } from "./playerClass.js";

class GridObject {
  grid = [];
  constructor(
    rows,
    cols,
    playerLocation,
    enemyLocation,
    itemLocation
  ) {
    this.rows = rows;
    this.cols = cols;
    this.playerLocation = playerLocation;
    this.enemyLocation = enemyLocation;
    this.itemLocation = itemLocation;
  }
  createGrid = (playerLocation) => {
    // const grid = [];
    for (let row = 0; row <= this.rows; row++) {
      for (let col = 0; col <= this.cols; col++) {
        if (row === 0 && col === this.cols - 5) {
          this.grid.push(" ⭐ ");
        } else {
          this.grid.push(" 🎄 ");
        }
      }
    }
    this.grid.splice(playerLocation, 1, " 🏃‍♂️ ");
    // this.grid.splice(this.enemyLocation, 1, " 🧟‍♂️ ");
    // this.grid.splice(this.itemLocation, 1, " ⚔ ");
    return this.grid;
  };
}

// const newGrid = new GridObject(5, 9, 11, 13, 12);
// let grids = newGrid.createGrid();
// console.log(grids);

// const player = new Player(5, 3, 3, 45);
// console.log(player);
// createGrid();

// grids.splice(8, 0, ["🐾"]);
// grids.splice(9, 0, ["🐾"]);
// grids.splice(15, 0, ["🏃‍♂️"]);
// grids.splice(16, 0, ["🏃‍♂️"]);
// grids.splice(17, 0, ["🏃‍♂️"]);
// grids.splice(18, 0, ["🏃‍♂️"]);

// console.log(grids);

export { GridObject };
