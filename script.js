
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

function createGrid(number)
{
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
        }
    }
}

createGrid(16);

// create buttons to listen to grid size and adjust s
const reset = document.getElementById("clear");
reset.addEventListener("click", function () {
    resetBlocks();
    });

const small = document.getElementById("16");
small.addEventListener("click", function () {
    createGrid(16);
    });

const medium = document.getElementById("64");
medium.addEventListener("click", function() { 
    createGrid(64);
    });

const large = document.getElementById("128");
large.addEventListener("click", function() { 
    createGrid(128);
    });

// create listen to mouse hover over div's, change colour or mouse is clicked and hovering

// on click - turn on on hover
// on click-release - turn off on hover




