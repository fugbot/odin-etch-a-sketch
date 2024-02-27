const grid = document.querySelector(".grid");
const btn = document.querySelector("button");

btn.addEventListener("click", changeGridSize);

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
            //cell.addEventListener('mouseover', eventFunction);
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}




function changeGridSize(){
    const size = prompt("Please enter number of grid size (Max 100): ");
    if(size<1 || size > 100){
        return null;
    }
    removeGrid();
    createGrid(size);

    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "blue";
        });

        cell.addEventListener("mouseout", () => {
            cell.style.backgroundColor = "pink";
        })
    })
}

function removeGrid(){
    grid.innerHTML="";
}


