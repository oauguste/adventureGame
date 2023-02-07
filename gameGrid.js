import { GridObject } from "./grid.js";
import { Player } from "./playerClass.js";

const newGrid = new GridObject(5, 9, 11, 13, 12);

const player = new Player(5, 3, 3, 55);
console.log(player);
let playerLocal = player.playerLocation;
player.moveDown();
player.moveDown();
player.moveLeft();
player.moveLeft();
player.moveUp();
player.moveUp();
player.moveRight();
player.moveRight();
playerLocal = player.playerLocation;

// (player.createGrid(player.playerLocation));

let grids = newGrid.createGrid(playerLocal);
console.log(grids);
console.log(playerLocal);
