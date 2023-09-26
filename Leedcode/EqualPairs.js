var equalPairs = function (grid) {
  let gridColumn = [];
  let column = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      gridColumn[i] = column.push(grid[j][i]);
    }

    gridColumn.push(gridColumn[i]);
  }
};
