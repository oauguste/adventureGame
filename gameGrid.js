import inquirer from "inquirer";

class Generic {
  constructor(name, health, attack, defense, sprite, x, y) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.sprite = sprite;
    this.x = x;
    this.y = y;
  }
  attack() {
    if (this.health === 0) return;
    this.health -= this.attack - this.defense;
    attack();
  }
}

class Player extends Generic {
  constructor(name, health, attack, defense, sprite, x, y) {
    super(name, health, attack, defense, sprite, x, y);
    this.sprite = "🚶‍♂️";
  }
  moveRight() {
    if (x === 0) return;
    this.x = x + 1;
  }
  moveleft() {
    if (x === 0) return;
    this.x = x - 1;
  }
  moveUp() {
    if (y === 0) return;
    this.y = y + 1;
  }
  moveDown() {
    if (y === 0) return;
    this.y = y - 1;
  }
}

class Enemy extends Generic {
  constructor(name, health, attack, defense, sprite, x, y) {
    super(name, health, attack, defense, sprite, x, y);
    this.sprite = "🕷";
  }

  evolve(x, y) {
    this.health += x;
    this.attack += x;
    this.defense += y;
  }
}

class Item extends Generic {
  constructor(name, health, attack, defense, sprite, x, y) {
    super(name, health, attack, defense, sprite, x, y);
    this.sprite = "⚔";
  }
}

export { Item, Enemy, Player, Generic };
