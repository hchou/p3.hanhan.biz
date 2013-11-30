var matchNumber = 1;

$(function() {
    $("#newgame-form").dialog({
        autoOpen: false,
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
        height: 300,
        width: 300,
        modal: true,
        buttons: {
            "Rematch": function() {
                $(this).dialog("close");
                // Clear all the stones on board
                resetBoard();
                // Increment matchNumber for a rematch
                matchNumber++;
            },
            "New Game": function() {
                $(this).dialog("close");
                // Reload page
                location.reload();
                // New game, reset matchNumber
                matchNumber = 1;
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