window.onload=function squareButton() {
    document.body.innerHTML += '<button id="button"onclick="addSquare()">Add Square</button>';
    document.body.innerHTML += '<div id="squarerow" class="row" ></div>';
}

var num = 0;

function addSquare() {
    num++;
    var square = document.getElementById('squarerow');
    square.innerHTML += `<div id="${num}"class="col-md-1 square" onclick="randomize();removeSquare()">${num}</div>`;
    console.log(num)
    //var square = document.getElementById('square')
}



function randomize() {
    var squares = document.getElementsByClassName('square');
    var letters = '0123456789ABCDEF';
    var randomColor = '#';
    document.addEventListener('click', function (e) {
        var divToDisplay = event.target.id
        console.log(divToDisplay)
        randomColor += letters[Math.floor(Math.random() * 16)];
        for (i = 0; i < squares.length; i++) {
           if (squares[i].id === divToDisplay) {
                return squares[i].style.backgroundColor = randomColor;
            }
        }
    })
}

function removeSquare() {
    var squares = document.getElementsByClassName('square');
    document.addEventListener('dblclick', function (e) {
        var divToDisplay = Number(event.target.id) + 1;
        var divToDisplay1 = Number(event.target.id) - 1;
        console.log(divToDisplay)
        for (i = 0; i < squares.length; i++) {
            if (squares[i].id == divToDisplay && squares[i].id%2 == 1) {
                return squares[i].remove();
            }
            if (squares[i].id == divToDisplay1 && squares[i].id%2 == 0) {
                return squares[i].remove();
            }
        }
    })
}
