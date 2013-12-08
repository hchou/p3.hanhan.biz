<!DOCTYPE html>
<head>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
    <!-- jquery & jquery ui-->
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
    <link rel="stylesheet" type="text/css" href="/css/gomoku.css">
    <script src="/js/game_new.js"></script>

    <title>Gomoku</title>

    <script>
        var turnCnt = 0;
    </script>
   
</head>

<body onload="newGame()">
    
<?php
    $grids = "";
    for ($y = 0; $y <= 10; $y++) {
        for($x = 0; $x <= 10; $x++) {
            $grids = $grids . "<div class='grid'></div>";
        }
    }
?>

<!-- Displaying the Go board -->
<div class='game-box'>
    <div class='board'>
        <?=$grids?>
    </div>

    <div class='player-info'>
        <table>
            <tr>
                <td>
                    PLAYER
                </td>
                <td>
                    WINS
                </td>
            </tr>
            <tr id='player1Row' class='black'>
                <td id='player1Name'>
                    Player 1
                </td>
                <td id='player1Wins'>
                    0
                </td>
            </tr>
            <tr id='player2Row'>
                <td id='player2Name'>
                    Player 2
                </td>
                <td id='player2Wins'>
                    0
                </td>
            </tr>
        </table>
        <br>
        <div id='divCurrentTurn'>
            CURRENT PLAYER:<br>
            <span class='topMargin' id='cplayer'>Black</span>
        </div>
        <div id='divTurnCount'>
            TURN NUMBER:<br>
            <h1>
                <span id='turnCount'>0</span>
            </h1>
        </div>
        <div class='gameButtons' id='startNewGame'>START NEW GAME</div>
        <br>
        <div class='gameButtons' id='concedeRound'>CONCEDE ROUND</div>
        <br>
        <div class='gameButtons' id='howToPlay'>HOW TO PLAY</div>
        <br>
    </div>
</div>

<script src="/js/game_turn.js"></script>

<!--
    Dialog box to start a New Game
-->
<div id="newgame-form" title="Start a New Game">
    <form>
        <fieldset>
            <label for="namePlayer1">Player 1</label><br>
            <input type="text" name="namePlayer1" id="namePlayer1" value="" class="text ui-widget-content ui-corner-all" /><br>
            <label for="namePlayer2">Player 2</label><br>
            <input type="text" name="namePlayer2" id="namePlayer2" value="" class="text ui-widget-content ui-corner-all" /><br>
        </fieldset>
    </form>
</div>

<!--
    Dialog box to start a Rematch or New Game
-->
<div id="playagain-form">
    <form>
        Do you want a rematch or start a new game?<br>
    </form>    
</div>

</body>
</html>
