function make2dArray(rows, cols) {
    console.log("in make2dArray");
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

let grid;
let cols;
let rows;
let resolution = 40;

function setup() {
    console.log("in setup");
    createCanvas(400, 400);
    cols = width / resolution;
    rows = height / resolution;

    grid = make2dArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = floor(random(2));
        }
    }
}

function draw() {
    console.log("in draw");
    background(0);


    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {



            let x = i * resolution;
            let y = j * resolution;
            if (grid[i][j] == 1) {
                fill(255);
                stroke(255);
                rect(x, y, resolution, resolution);
            }
        }
    }

    let next = make2dArray(cols, rows);

    // compute next based on grid;
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let state = grid[i][j];
            //edges
            if (i == 0 || i == cols - 1 || j == 0 || j == rows - 1) {
                next[i][j] = grid [i][j];
            }
            
            // count live neighbors!
            let sum = 0;
            let neighbors = count(grid, i, j) 

            
            if (state == 0 && neighbors == 3) {
                next[i][j] = 1;
            } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
                next[i][j] == 0;
            } else  {
                next[i][j] = state;
            }
        }
    }

    grid = next;
}

function countNeighbors(grid, x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -j; j < 2; j++) {
            sum += grid[i][j];
        }
    }
    sum -= grid[x][y];
    return sum;
}
