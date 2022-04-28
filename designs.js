const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWidth');
const sizePick = document.querySelector('#sizePicker');
const getCanvas = document.querySelector('#pixelCanvas');

getCanvas.innerHTML = '';


function makeGrid(height, width) {
    document.querySelector("#pixelCanvas").innerHTML = "";
    let grid;

    // Your code goes here!
    for (let i = 0; i < height; i++) {
        grid = `<tr class="pixelRow" id="${'row'+i}">`;
        console.log(grid)
        for (let j = 0; j < width; j++) {
            grid += `<td class="cell" id="row-${i}_cell-${j}"></td>`;
        }
        grid += '</tr>'
        getCanvas.innerHTML += grid;
    }
    getCanvas.addEventListener('click', respondToTheClick);
}



//Click Color Event 
function respondToTheClick() {
    const cells = document.getElementsByClassName('cell');
    const colorPicker = document.getElementById('colorPicker');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function(event) {
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = colorPicker.value;
            console.log('test');
        });
    }
}

// Validate User Input
function validateInput(height, width) {
    if ((height > 100) || (width > 100)) {
        alert("Please pick a lower number"); //you may want to change what this says.
        return 0; //return 0 = grid no be made
    }
    return 1; //return 1 = grid be made
}


//Click Color Event End

document.getElementById('sizePicker').onsubmit = function() {
    formSubmission();
};

const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let h = document.querySelector("#inputHeight").value;
    let w = document.querySelector("#inputWidth").value;
    if (validateInput(h, w)) {

        makeGrid(h, w);
    }
});