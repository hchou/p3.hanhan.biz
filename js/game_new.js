var rematchFlag = 0;

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
                rematchFlag = 1;
                $(".stone-black").remove();
                $(".stone-white").remove();
                resetBoard();
            },
            "New Game": function() {
                $(this).dialog("close");
                rematchFlag = 0;
                location.reload();
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