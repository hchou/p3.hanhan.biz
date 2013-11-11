// Arrays to store X,Y positions of Black and White stones
var whiteX2Y = new Array;
for (var i = 0; i <= 11; i++) {
    whiteX2Y[i] = [];
}
var blackX2Y = new Array;
for (var i = 0; i <= 11; i++) {
    blackX2Y[i] = [];
}
var whiteDiv = '<div class="stone-white"></div>';
var blackDiv = '<div class="stone-black"></div>';

$('.grid').click(function() {

    // If the box isn't already occupied by a white or black stone then proceed
    if ($(this).html() != whiteDiv && $(this).html() != blackDiv) {
        var position = $(this).position();
        var x = Math.round(position.left / 50 + 1);
        var y = Math.round(position.top / 50 + 1);
        console.log('turn: ' + (turnCnt + 1));
        console.log('x: ' + x);
        console.log('y: ' + y);
        // If modulus of turnCnt (turn count) is = that means it's black's turn
        if (turnCnt % 2 == 0) {
            $(this).append(blackDiv);
            // Storing black stone positions in array
            blackX2Y[x][y] = 1;
            // Check vertical win for Black player
            checkWinner(x, y, blackX2Y);
        } else {
            $(this).append(whiteDiv);
            // Storing white stone positions in array
            whiteX2Y[x][y] = 1;
            console.log('whiteX2Y[x][y]: ' + whiteX2Y[x][y]);
            // Check vertical win for White player
            checkWinner(x, y, whiteX2Y);
        }
        turnCnt++;

    }
    //$(this).append("<div class='stone-white'></div>");

});

function checkWinner(x, y, X2Y) {
    var adjacent_count = 0;
    for (var i = y + 1; i < y + 5; i++) {
        if (i > 11) {
            console.log('out of bound');
            break;
        }
        //console.log('checking x=' + x + ' y=' + i);
        //console.log(X2Y[x][i]);
        //if (typeof X2Y[x] != 'undefined' && X2Y[x] == i) {
        //if (typeof X2Y[x][i] != 'undefined') {
            //console.log('X2Y[' + x + '] = ' + X2Y[x]);
            if (X2Y[x][i] == 1) {
                console.log('ADJACENT STONE (' + x + ',' + i +')');
                adjacent_count++;
            }
            //console.log('adjacent vertical ' + color + ' stone');
        //}
        else {
            break;
        }
    }

    for (var i = y - 1; i > y - 5; i--) {
        if (i > 11) {
            console.log('out of bound');
            break;
        }
        //console.log('checking x=' + x + ' y=' + i);
        //console.log(X2Y[x][i]);
        //if (typeof X2Y[x] != 'undefined' && X2Y[x] == i) {
        //if (typeof X2Y[x][i] != 'undefined') {
            //console.log('X2Y[' + x + '] = ' + X2Y[x]);
            if (X2Y[x][i] == 1) {
                console.log('ADJACENT STONE (' + x + ',' + i +')');
                adjacent_count++;
            }
            //console.log('adjacent vertical ' + color + ' stone');
        //}
        else {
            break;
        }
    }
    
    if (adjacent_count == 4) {
        console.log('SOMEBODY WON, adjacent_count: ' + adjacent_count);
    }
}