
const board = document.querySelector('.board');

// function to clear board
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function resetBlocks() {
    var elements = document.getElementsByClassName('blocks'); // get all elements
    for (let i = 0; i < elements.length; i++)
    {
        elements[i].style.backgroundColor = "white";
    }
}

function createGrid(number, colour)
{
    let col = "black";
    if (colour)
    {
        col = Math.floor(Math.random()*16777215).toString(16);
    }

    let a = Math.sqrt(number);
    let size = 512/a;
    removeAllChildNodes(board);

    for (let row = 0; row < a; row++)
    {
        const rowBlock = document.createElement('div');
        rowBlock.classList.add('row');
        board.appendChild(rowBlock);

        for (let i = 0; i < a; i++)
        {
            const blocks = document.createElement('div');
            blocks.classList.add('blocks');
            blocks.setAttribute("id", `${row}${i}`);
            blocks.style.height = `${size}px`;
            blocks.style.width = `${size}px`;
            rowBlock.appendChild(blocks);

            const element = document.getElementById(`${row}${i}`);
            
            element.addEventListener("mouseenter", (event) => { 
                event.target.style.backgroundColor = `${col}`;});
        }
    }
}

createGrid(16);

let trip = false;

// create buttons to listen to grid size and adjust s
const reset = document.getElementById("clear");
reset.addEventListener("click", function () {
    resetBlocks();
    });

const small = document.getElementById("16");
small.addEventListener("click", function () {
    createGrid(16, trip);
    });

const medium = document.getElementById("64");
medium.addEventListener("click", function() { 
    createGrid(64, trip);
    });

const large = document.getElementById("128");
large.addEventListener("click", function() { 
    createGrid(128, trip);
    });

const trippy = document.getElementById("trippy");
trippy.addEventListener("click", function() { 
    trip = true;
    });
    

// create listen to mouse hover over div's, change colour or mouse is clicked and hovering

// on click - turn on on hover
// on click-release - turn off on hover




