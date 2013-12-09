var matchNumber = 1;
var player1Wins = 0;
var player2Wins = 0;

$(function() {
    $("#newgame-form").dialog({
        autoOpen: false,
        closeOnEscape: false,
        dialogClass: 'no-close',
        height: 300,
        width: 300,
        modal: true,
        draggable: false,
        buttons: {
            "HOW TO PLAY": function() {
                $("#howtoplay-form").dialog("open");
            },
            "START NEW GAME": function() {
                    var namePlayer1 = $("#namePlayer1").val();
                    var namePlayer2 = $("#namePlayer2").val();
                    if (namePlayer1.length == 0) {
                        namePlayer1 = 'Player 1';
                    }
                    if (namePlayer2.length == 0) {
                        namePlayer2 = 'Player 2';
                    }
                    player1Wins = 0;
                    player2Wins = 0;
                    $(this).dialog("close");
                    $("#player1Name").html(namePlayer1);
                    $("#player2Name").html(namePlayer2);
                    refreshPlayerWins();
            },
        },
    });
    
    $("#howtoplay-form").dialog({
        autoOpen: false,
        closeOnEscape: true,
        dialogClass: 'no-close',
        height: 300,
        width: 300,
        //modal: true,
        draggable: false,
        buttons: {
            "OK": function() {
                $("#howtoplay-form").dialog("close");
            },
        },
    });
    
    $("#howToPlay").click(function() {
        $("#howtoplay-form").dialog("open");
    });
    
    $("#startNewGame").click(function() {
        $("#newgame-form").dialog("open"); 
    });
    
    $("#concedeRound").click(function() {
        //var turnCnt = $("#namePlayer1").val();
        //alert(turnCnt);
        if (turnCnt % 2 == 1) {
            // Black concedes White Wins
            playAgain('Black');
        }
        else {
            // White concedes Black Wins
            playAgain('White');
        }
    });
    
    $(".board").css('cursor', 'pointer');
    
    $(".gameButtons").css('cursor', 'pointer');
    
    $(".gameButtons").mousedown(function() {
        $(this).addClass("gameButtonsInset");
    });
    $(".gameButtons").mouseup(function() {
        $(this).removeClass("gameButtonsInset");
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
                // Toggle black row on rematch start
                $("#player1Row").toggleClass("black");
                $("#player2Row").toggleClass("black");
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

function howToPlay() {
    $("#howtoplay-form").dialog("open");
}

function playAgain(winner) {
    if (winner == 'Black') {
        // Player 1 plays Black
        if (matchNumber % 2 == 1) {
            player1Wins++;
        }
        else {
            player2Wins++;
        }
    }
    // Winner is White
    else if (winner == 'White') {
        // Player 1 plays White
        if (matchNumber % 2 == 0) {
            player1Wins++;
        }
        else {
            player2Wins++;
        }
    }
      
    refreshPlayerWins();
    $("#playagain-form")
        .dialog("open");
    if (winner == 'Tie') {
        // Do not increment playerNWins number for tied game
        $("#playagain-form")
            .dialog('option', 'title', 'Draw!');
    }
    else {
        $("#playagain-form")
            .dialog('option', 'title', winner + ' Wins!');
    }
}

function refreshPlayerWins() {
    $("#player1Wins").html(player1Wins);
    $("#player2Wins").html(player2Wins);
}