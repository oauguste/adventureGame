import inquirer from "inquirer";

const grid = [];
for (let row = 1; row <= 5; row++) {
  for (let col = 1; col <= 10; col++) {
    grid.push({ name: `${row},${col}`, value: `${row}${col}`, prefix: "🔵 " });
  }
}

function chooseCell(previousCell) {
  const currentRow = previousCell ? Number(previousCell.slice(0, 1)) : 1;
  const adjecentCells = grid.filter(
    cell =>
      (Math.abs(Number(cell.value.slice(0, 1)) - currentRow) === 1 ||
        Number(cell.value.slice(0, 1)) === currentRow) &&
      (previousCell
        ? Math.abs(cell.value.slice(1) - previousCell.slice(1)) === 1
        : true)
  );

  inquirer
    .prompt([
      {
        type: "list",
        name: "cell",
        message: "Select a cell:",
        choices: adjecentCells
      }
    ])
    .then(answers => {
      console.log("Selected cell:", answers.cell);
      chooseCell(answers.cell);
    });
}

chooseCell();