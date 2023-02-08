import { GridObject } from "./grid.js";
import { Player } from "./playerClass.js";
import { Monster } from "./monsterClass.js";
import { Item } from "./itemClass.js";

const newGrid = new GridObject(5, 9, 11, 13, 12);

const player = new Player(5, 3, 3, 55);
const enemy = new Monster(3, 2, 1, 9);
const item = new Item(1, 2, 2, 7);
let playerLocal = player.playerLocation;
let enemyLocal = enemy.enemyLocation;
let itemLocal = item.itemLocation;

let grids = newGrid.createGrid(
  playerLocal,
  enemyLocal,
  itemLocal
);

// player.moveDown();
// player.moveDown();
// player.moveLeft();
// player.moveLeft();
// player.moveUp();
// player.moveUp();
// player.moveRight();
// player.moveRight();
// player.moveUp();
// player.moveUp();
// player.moveUp();
// player.moveUp();
// player.moveUp();
// player.moveRight();

playerLocal = player.playerLocation;

// (player.createGrid(player.playerLocation));

console.log(grids);
// console.log(playerLocal);

// console.log(player.getParentMetaData());
console.log(player.rows + player.cols);
console.log(player);
console.log(enemy);
console.log(item.itemLocation);

export { newGrid, grids };
export { player, enemy, item };
