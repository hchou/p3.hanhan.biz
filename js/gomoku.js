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
            checkWinner(x, y, blackX2Y, 'Black');
        } else {
            $(this).append(whiteDiv);
            // Storing white stone positions in array
            whiteX2Y[x][y] = 1;
            // Check vertical win for White player
            checkWinner(x, y, whiteX2Y, 'White');
        }
        turnCnt++;

    }
    //$(this).append("<div class='stone-white'></div>");

});

function checkWinner(x, y, X2Y, player) {

    /*
     * Checking for vertical win
     */
    var vertical_adjacent_ct = 0;

    for (var i = y + 1; i < y + 5; i++) {
        if (i > 11) {
            console.log('out of bound');
            break;
        }
        if (X2Y[x][i] == 1) {
            console.log('ADJACENT STONE (' + x + ',' + i + ')');
            vertical_adjacent_ct++;
        }
        // If no stone or a stone of opposite color in adjacent grid
        // break out of loop
        else {
            break;
        }
    }

    for (var i = y - 1; i > y - 5; i--) {
        if (i > 11) {
            console.log('out of bound');
            break;
        }
        if (X2Y[x][i] == 1) {
            console.log('ADJACENT STONE (' + x + ',' + i + ')');
            vertical_adjacent_ct++;
        }
        // If no stone or a stone of opposite color in adjacent grid
        // break out of loop
        else {
            break;
        }
    }

    if (vertical_adjacent_ct == 4) {
        console.log(player + ' wins, adjacent_count: ' + vertical_adjacent_ct);
        return;
    }

    /*
     * Checking for horizontal win
     */
    var horizontal_adjacent_ct = 0;

    for (var i = x + 1; i < x + 5; i++) {
        if (i > 11) {
            console.log('out of bound');
            break;
        }
        if (X2Y[i][y] == 1) {
            console.log('ADJACENT STONE (' + i + ',' + y + ')');
            horizontal_adjacent_ct++;
        }
        // If no stone or a stone of opposite color in adjacent grid
        // break out of loop
        else {
            break;
        }
    }

    for (var i = x - 1; i > x - 5; i--) {
        if (i > 11) {
            console.log('out of bound');
            break;
        }
        if (X2Y[i][y] == 1) {
            console.log('ADJACENT STONE (' + i + ',' + y + ')');
            horizontal_adjacent_ct++;
        }
        // If no stone or a stone of opposite color in adjacent grid
        // break out of loop
        else {
            break;
        }
    }

    if (horizontal_adjacent_ct == 4) {
        console.log(player + ' wins, adjacent_count: ' + horizontal_adjacent_ct);
        return;
    }

    /*
     * Checking for diagonal descending win
     */
    var descending_adjacent_ct = 0;

    var tmpY = y;
    for (var i = x + 1; i < x + 5; i++) {
        if (i > 11) {
            console.log('out of bound');
            break;
        }
        console.log('Checking [' + i + '][' + (tmpY + 1) + ']');
        if (X2Y[i][++tmpY] == 1) {
            console.log('ADJACENT STONE (' + i + ',' + tmpY + ')');
            descending_adjacent_ct++;
        }
        // If no stone or a stone of opposite color in adjacent grid
        // break out of loop
        else {
            break;
        }
    }

    var tmpY = y;
    for (var i = x - 1; i > x - 5; i--) {
        if (i > 11) {
            console.log('out of bound');
            break;
        }
        console.log('Checking [' + i + '][' + (tmpY - 1) + ']');
        if (X2Y[i][--tmpY] == 1) {
            console.log('ADJACENT STONE (' + i + ',' + tmpY + ')');
            descending_adjacent_ct++;
        }
        // If no stone or a stone of opposite color in adjacent grid
        // break out of loop
        else {
            break;
        }
    }

    if (descending_adjacent_ct == 4) {
        console.log(player + ' wins, adjacent_count: ' + descending_adjacent_ct);
        return;
    }

    /*
     * Checking for diagonal descending win
     */
    var ascending_adjacent_ct = 0;

    var tmpY = y;
    for (var i = x + 1; i < x + 5; i++) {
        if (i > 11) {
            console.log('out of bound');
            break;
        }
        console.log('Checking [' + i + '][' + (tmpY - 1) + ']');
        if (X2Y[i][--tmpY] == 1) {
            console.log('ADJACENT STONE (' + i + ',' + tmpY + ')');
            ascending_adjacent_ct++;
        }
        // If no stone or a stone of opposite color in adjacent grid
        // break out of loop
        else {
            break;
        }
    }

    var tmpY = y;
    for (var i = x - 1; i > x - 5; i--) {
        if (i > 11) {
            console.log('out of bound');
            break;
        }
        console.log('Checking [' + i + '][' + (tmpY + 1) + ']');
        if (X2Y[i][++tmpY] == 1) {
            console.log('ADJACENT STONE (' + i + ',' + tmpY + ')');
            ascending_adjacent_ct++;
        }
        // If no stone or a stone of opposite color in adjacent grid
        // break out of loop
        else {
            break;
        }
    }

    if (ascending_adjacent_ct == 4) {
        console.log(player + ' wins, adjacent_count: ' + ascending_adjacent_ct);
        return;
    }

}

$(function() {
    $("#dialog-form").dialog({
        autoOpen: false,
        height: 300,
        width: 350,
        modal: true,
        buttons: {
            "Start": function() {
                var bValid = true;
                allFields.removeClass("ui-state-error");
                bValid = bValid && checkLength(nameBlack, "nameBlack", 3, 16);
                bValid = bValid && checkLength(nameWhite, "nameWhite", 3, 16);
                if (bValid) {
                    $("#users tbody").append("<tr>" +
                        "<td>" + name.val() + "</td>" +
                        "<td>" + email.val() + "</td>" +
                        "<td>" + password.val() + "</td>" +
                        "</tr>");
                    $(this).dialog("close");
                }
            },
        },
        close: function() {
            allFields.val("").removeClass("ui-state-error");
        }
    });

});

function newGame() {
    $("#dialog-form").dialog("open");
}