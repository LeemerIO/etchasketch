
const board = document.querySelector('.board');
let s = 16;
let a = Math.sqrt(s);
let size = 512/a;

function createGrid(number)
{
    for (let row = 0; row < a; row++)
    {
        const rowBlock = document.createElement('div');
        rowBlock.classList.add('row');
        board.appendChild(rowBlock);

        for (let i = 0; i < a; i++)
        {
            const blocks = document.createElement('div');
            blocks.classList.add('blocks');
            blocks.style.height = `${size}px`;
            blocks.style.width = `${size}px`;
            rowBlock.appendChild(blocks);
        }
    }
}

createGrid(s);

// create buttons to listen to grid size and adjust s

// create listen to mouse hover over div's, change colour or mouse is clicked and hovering




