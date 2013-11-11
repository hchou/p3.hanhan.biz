var whiteX = new Array();
var whiteY = new Array();
var blackX = new Array();
var blackY = new Array();

$('.grid').click(function() {

    // If the box isn't already occupied by a white or black stone then proceed
    if ($(this).html() != '<div class="stone-white"></div>' && $(this).html() != '<div class="stone-black"></div>') {
        var position = $(this).position();
        var x = Math.round(position.left / 50 + 1);
        var y = Math.round(position.top / 50 + 1);
        console.log('turn: ', turnCnt);
        console.log('x: ' + x);
        console.log('y: ' + y);
        // If modulus of turnCnt (turn count) is = that means it's black's turn
        if (turnCnt % 2 == 0) {
            $(this).append("<div class='stone-black'></div>");
            whiteX.push(x);
            whiteY.push(y);
            // Check if black's won
            checkVertical(x, y, 'black');
        } else {
            $(this).append("<div class='stone-white'></div>");
            blackX.push(x);
            blackY.push(y);
            // Check if white's won
            checkVertical(x, y, 'white');
        }
        turnCnt++;

    }
    //$(this).append("<div class='stone-white'></div>");

});

function checkVertical(x, y, color) {

    for (var i = y + 1; i < y + 5; i++) {
        if (i > 11) {
            console.log('out of bound');
            break;
        }
        console.log(color + ': checking x=' + x + ' y=' + i);
    }

    for (var i = y - 1; i > y - 5; i--) {
        if (i > 11) {
            console.log('out of bound');
            break;
        }
        console.log(color + ': checking x=' + x + ' y=' + i);
    }
}