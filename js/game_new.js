var matchNumber = 1;

$(function() {
    $("#newgame-form").dialog({
        autoOpen: false,
        closeOnEscape: false,
        dialogClass: 'no-close',
        height: 300,
        width: 300,
        modal: true,
        buttons: {
            "Start": function() {
                    var bplayer = $("#namePlayer1").val();
                    var wplayer = $("#namePlayer2").val();
                    $(this).dialog("close");
                    $("#bplayer").html(bplayer);
                    $("#wplayer").html(wplayer);
            },
        },
    });
    $("#playagain-form").dialog({
        autoOpen: false,
        closeOnEscape: false,
        dialogClass: 'no-close',
        height: 300,
        width: 300,
        modal: true,
        buttons: {
            "Rematch": function() {
                $(this).dialog("close");
                // Increment matchNumber for a rematch
                matchNumber++;
                // Reset the board for a new match
                resetBoard();
            },
            "New Game": function() {
                $(this).dialog("close");
                // Show newGame dialog
                newGame();
                // New game, reset matchNumber
                matchNumber = 1;
                // Reset the board for a new match
                resetBoard();
            }
        },
    });
});

function newGame() {
    $("#newgame-form").dialog("open");
}

function playAgain() {
    $("#playagain-form").dialog("open");
}