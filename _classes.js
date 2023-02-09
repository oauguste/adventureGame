/*
Class template and class that we can print multiple of, for our monster and our item
Class template for our player
Our game map needs to be aware of our player, monster, item, and stepped on squares instances on it
Our game map needs to be displayed as a string
Our game map needs to be able to be called with a different size??
Once thats done we need to implement logic to play the game
Our player and our monster can both attack
Our player and our monster can both die
Stepped on squares dont have anything on them but their stepped on emoji
We need to return a new array map after every player movement
When we return our array map we have to turn it into a string 
---------------------------------------------------------------------
HUD display
keep a running display of our players updated stats
if a player found an item annouce it
if a player found an enemy annouce the encounter and the win
If a player reaches the star annouce "Win"
--------------------------------------------------------------------
Game logic
If our player reaches the star the game ends (is over)
If not then our player can move around the map to reach our star
Our player can move Up down left and right on our map as long as they dont leave the map, the cannot move out of bounds
When our player moves to a spot on the map the spot he was on before becomes a "stepped on" square meaning theres no monsters or items on that square and the square emoji changes to footsteps
If our player moves on to a square which an item was already placed on he picks up that item meaning the items stats get added to his stats and the items dissapears from the square and the square becomes a stepped on square
if our player moves on to a square which a monster was already placed on the fight that monster.
While the player' s health is greater than 0 he continues to fight the monster until the monsters health becomes zero
While the monsters health is greater than 0 the monster fight until the players health becomes zero
Fighting means the player attacks then the monster attacks in a loop
Attacking means scoring a hit. a hit reduces health by that amount, The Hit is player attack - enemy Defense and enemy attack - player defense
The fight ends as a result of whichever happens first, player health goes to 0 or monsters health goes to 0
If the players health gets to zero they DIE and the game ends (is over)
If the monsters health goes to 0 the are "Defeated" and removed from the square 
*/

import inquirer from "inquirer";
// import Choice from "inquirer/lib/objects/choice.js";

function createMonsters(monster) {
  return class Monster {
    constructor(health, attack, defense, location) {
      this.monster = monster;
      this.health = health;
      this.attack = attack;
      this.defense = defense;
      this.location = location;
    }
    attacks(target) {
      const damage = this.attack - target.defense;
      target.health -= damage;
      console.log(
        `Monster attacks ${target.sprite} for ${damage} damage.`
      );
      if (target.health <= 0) {
        console.log(`Zombie Slayed ${target.sprite}`);
        return;
      }
      // death()
    }
  };
}

function createItem(gear) {
  return class Item {
    constructor(health, attack, defense, location) {
      this.gear = gear;
      this.health = health;
      this.attack = attack;
      this.defense = defense;
      this.location = location;
    }
  };
}

class Player {
  constructor(health, attack, defense, sprite, location) {
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.sprite = sprite;
    this.location = location;
  }
  moveRight() {
    const oldLocation = this.location;
    if (
      this.location + 1 < 0 ||
      this.location + 1 > grid.col * grid.row - 1
    ) {
      return;
    } else {
      this.location = this.location + 1;
      grid.grid.splice(oldLocation, 1, "🐾");
      grid.insertPlayer(
        this.location,
        zombieLocations,
        swordLocations
      );
    }
  }
  moveLeft() {
    const oldLocation = this.location;
    if (
      this.location - 1 < 0 ||
      this.location - 1 > grid.col * grid.row - 1
    ) {
      return;
    } else {
      this.location = this.location - 1;
      grid.grid.splice(oldLocation, 1, "🐾");
      grid.insertPlayer(
        this.location,
        zombieLocations,
        swordLocations
      );
    }
  }
  moveUp() {
    const oldLocation = this.location;
    if (
      this.location - 5 < 0 ||
      this.location - 5 > grid.col * grid.row - 1
    ) {
      return;
    } else {
      this.location = this.location - grid.row;
      grid.grid.splice(oldLocation, 1, "🐾");
      grid.insertPlayer(
        this.location,
        zombieLocations,
        swordLocations
      );
    }
  }
  moveDown() {
    const oldLocation = this.location;
    if (
      this.location + 5 < 0 ||
      this.location + 5 > grid.col * grid.row - 1
    ) {
      return;
    } else {
      this.location = this.location + grid.row;
      grid.grid.splice(oldLocation, 1, "🐾");
      grid.insertPlayer(
        this.location,
        zombieLocations,
        swordLocations
      );
    }
  }
  attacks(target) {
    let damage = this.attack - target.defense;
    target.health -= damage;
    console.log(
      `player attacks ${target.monster} for ${damage} damage`
    );
    if (target.health <= 0) {
      console.log(`Player Slayed ${target.monster}`);
    }
  }
  pickupItem(item) {
    this.health += item.health;
    this.attack += item.attack;
    this.defense += item.defense;
    console.log(
      `player pick up ${item.gear} player's health is now ${this.health}, 
      player's attack is now ${this.attack}, 
      players defense is now ${this.defense}`
    );
  }
}

class GameGrid {
  constructor(
    row,
    col,
    playerLocation,
    zombieLocation,
    swordLocation
  ) {
    this.row = row;
    this.col = col;
    this.playerLocation = playerLocation;
    this.zombieLocation = zombieLocation;
    this.swordLocation = swordLocation;
    this.grid = this.createGrid();
    this.insertPlayer(
      this.playerLocation,
      this.zombieLocation,
      this.swordLocation
    );
  }
  createGrid() {
    let grid = [];
    for (let row = 0; row < this.row; row++) {
      for (let col = 0; col < this.col; col++) {
        if (row === 0 && col === this.row - 1) {
          grid.push("⭐");
        } else {
          grid.push("🌳");
        }
      }
    }

    return grid;
  }
  insertPlayer(
    playerLocation,
    zombieLocations,
    swordLocations
  ) {
    this.grid.splice(playerLocation, 1, playerOne.sprite);
    zombieLocations.forEach((zombie) => {
      this.grid.splice(zombie, 1, "🌳");
      swordLocations.forEach((sword) => {
        this.grid.splice(sword, 1, "🌳");
      });
    });
  }
}

const Zombie = createMonsters("Zombie");

const numberOfZombies = Math.floor(Math.random() * 3 + 1);
const zombies = [];

for (let i = 0; i < numberOfZombies; i++) {
  const x = Math.floor(Math.random() * 50 + 1);
  const zombie = new Zombie(50, 100, 25, x);
  zombies.push(zombie);
}

const Sword = createItem("Sword");
const numberOfSwords = Math.floor(Math.random() * 3 + 1);
const swords = [];
for (let i = 0; i < numberOfSwords; i++) {
  const x = Math.floor(Math.random() * 50 + 1);
  const sword = new Sword(10, 15, 20, x);
  swords.push(sword);
}

const playerOne = new Player(100, 25, 50, "🏃‍♂️", 56);

const zombieLocations = zombies.map(
  (zombie) => zombie.location
);
const swordLocations = swords.map(
  (sword) => sword.location
);
const grid = new GameGrid(
  7,
  9,
  playerOne.location,
  zombieLocations,
  swordLocations
);

const choiceArray = [
  function () {
    playerOne.moveUp();
  },
  function () {
    playerOne.moveDown();
  },
  function () {
    playerOne.moveLeft();
  },
  function () {
    playerOne.moveRight();
  },
];

async function PromptPlayer() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "theme",
        message: "What do you want to do",
        choices: [
          "Go up",
          "Go Down",
          "Go left",
          "Go Right",
          "end Game",
        ],
      },
    ])
    .then(async (answers) => {
      if (
        answers.theme === "end Game" ||
        playerOne.location === 6
      ) {
        return;
      } else {
        playerChoice(answers);
      }
    })

    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

PromptPlayer();

async function gameFlow() {
  for (let i = 0; i < zombies.length; i++) {
    if (playerOne.location === zombies[i].location) {
      console.log("Player found a zombie");
      playerOne.attacks(zombies[i]);
      console.log(zombies[i].health);
      if (zombies[i].health >= 0) {
        zombies[i].attacks(playerOne);
      }
      if (zombies[i].health <= 0) {
        zombies.splice(i, 1);
      }
      if (playerOne.health <= 0) {
        console.log("you died");
        answers.theme = "end Game";
      }
    }
  }
}
function playerChoice(choices) {
  if (choices.theme === "Go up") {
    choiceArray[0]();
  }
  if (choices.theme === "Go Down") {
    choiceArray[1]();
  }
  if (choices.theme === "Go left") {
    choiceArray[2]();
  }
  if (choices.theme === "Go Right") {
    choiceArray[3]();
  }
  console.log(grid);
  console.log(`  Player' Health is: ${playerOne.health}, 
  Player' Attack is: ${playerOne.attack}, 
  Player' Defense is: ${playerOne.defense}`);
  gameFlow();
  gameFlowSwords();
  PromptPlayer();
}

async function gameFlowSwords() {
  for (let i = 0; i < swords.length; i++) {
    if (playerOne.location === swords[i].location) {
      console.log("Player found a weapon");
      playerOne.pickupItem(swords[i]);
      console.log(playerOne.attack);
      swords.splice(i, 1);
      break;
    }
  }
}

// console.log(sword.attack);
