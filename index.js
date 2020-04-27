function make2dArray(rows, cols) {
    let arr = new Array(cols);
    for (let i = o; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

let grid;
let cols = 10;
let rows = 10;

function setup() {

    grid = make2dArray(10, 10);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = floor(random(2)); 
        }
    }
}