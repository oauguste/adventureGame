import inquirer from "inquirer";
import {
  Item,
  Enemy,
  Player,
  Generic,
} from "./gameGrid.js";

// const grid = [];
// for (let row = 1; row <= 5; row++) {
//   for (let col = 1; col <= 10; col++) {
//     grid.push({
//       name: `${row},${col}`,
//       value: `${row}${col}`,
//       prefix: "🔵 ",
//     });
//   }
// }

// function chooseCell(previousCell) {
//   const currentRow = previousCell ? Number(previousCell.slice(0, 1)) : 1;
//   const adjecentCells = grid.filter(
//     cell =>
//       (Math.abs(Number(cell.value.slice(0, 1)) - currentRow) === 1 ||
//         Number(cell.value.slice(0, 1)) === currentRow) &&
//       (previousCell
//         ? Math.abs(cell.value.slice(1) - previousCell.slice(1)) === 1
//         : true)
//   );

//   inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "cell",
//         message: "Select a cell:",
//         choices: adjecentCells
//       }
//     ])
//     .then(answers => {
//       console.log("Selected cell:", answers.cell);
//       chooseCell(answers.cell);
//     });
// }

// chooseCell();

class Grid {
  constructor(row, col, sprite, enemy, item) {
    this.row = row;
    this.col = col;
    this.sprite = sprite;
    this.enemy = enemy;
    this.item = item;
  }
  buildGrid() {
    let grid = "";
    for (let row = 0; row <= this.row; row++) {
      for (let col = 0; col <= this.col; col++) {
        if (row === 0 && col === this.col) {
          grid += "⭐";
        } else {
          let randomNumber = Math.random();
          if (randomNumber < 0.33) {
            grid += "🌳  ";
          } else if (randomNumber < 0.66) {
            grid += "🌴  ";
          } else {
            grid += "🎄  ";
          }
        }
      }
      grid += "\n";
    }
    console.log(grid);
  }
}

const newGrid = new Grid(20, 10);
const builtGrid = newGrid.buildGrid();
// console.log(builtGrid);

const questions = [
  {
    type: "list",
    name: "where",
    Message: "Move?",
    choices: [
      "Move up",
      "Move down",
      "Move left",
      "Move right",
    ],
  },
];

async function promptUser() {
  const answers = await inquirer.prompt(questions);
  if (answers.where) {
    builtGrid;
    promptUser();
  }
}

promptUser();
