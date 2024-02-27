const grid = document.querySelector(".grid");
const btn = document.querySelector("button");

// for(let i = 0; i<16; i++){
//     const rowCell = document.createElement("div");
//     rowCell.classList.add("cell");
//     rowCell.classList.add("row"); 
//     grid.appendChild(rowCell).textContent="hello";
//     for(let j=0; j<16; j++){
//         const columnCell = document.createElement("div");
//         columnCell.classList.add("cell");
//         columnCell.classList.add("column");
//         rowCell.appendChild(columnCell).textContent="bye";
        
//     }
    
// }



// function createGrid(numColumns, numRows){
//     for(let i = 0; i<numColumns; i++){
//         const column = document.createElement("div");
//         column.classList.add("cell");
//         column.classList.add("column");
        
        
//         for (let j = 0; j < numRows; j++){
//             const rowCell = document.createElement("div");
//             rowCell.classList.add("cell");
//             rowCell.classList.add("row");
//             column.appendChild(rowCell);
    
//         }
//         grid.appendChild(column);
//     }
    
// }



function createGrid(size, eventFunction) {
    let dim = 768/size;
    for(let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for(let i = 0; i < size; i++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.height = dim + 'px';
            cell.style.width = dim + 'px';
            //square.addEventListener('mouseover', eventFunction);
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

// function createGrid(numCellsPerSide){
//     let dimension = 960/numCellsPerSide;
//     for (let i = 0; i<numCellsPerSide * numCellsPerSide; i++){
//         const cell = document.createElement("div");
//         cell.classList.add("cell");
//         cell.style.height = dimension + " px";
//         cell.style.width = dimension + " px";
//         //cell.classList.add("column");
//         grid.appendChild(cell);
//     }
// }

// function optimizeGridSize(){
//     let numInput = prompt("Please enter grid size (Max 100): ");
//     if(numInput<1 || numInput > 100){
//         return null;
//     }
//     createSquares
// }
createGrid(16);



btn.addEventListener("click", () => {
    const size = prompt("Please enter number of columns: ");
    const numRowsInput = prompt("Please enter number of rows: ");

    createGrid(numColumnsInput, numRowsInput);

    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "blue";
        });

        cell.addEventListener("mouseout", () => {
            cell.style.backgroundColor = "pink";
        })
    })
})


