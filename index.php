<!DOCTYPE html>
<head>
    <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
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
        <span id='cplayer'>Black</span>
    </div>
</div>

<script src="/js/game_turn.js"></script>

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

<div id="playagain-form">
    <form>
        Do you want a rematch or play a new game?<br>
    </form>    
</div>

</body>
</html>
