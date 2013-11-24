<!DOCTYPE html>
<head>
    <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
    <!-- jquery & jquery ui-->
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
    <link rel="stylesheet" type="text/css" href="/css/gomoku.css">

    <title>Gomoku</title>

    <script>
        var turnCnt = 0;
    </script>
   
</head>

<body>
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
<div class='board'>
<?=$grids?>
</div>

<script src="/js/gomoku.js"></script>

<div id="dialog-form" title="Start a New Game">
<form>
<fieldset>
<label for="nameBlack">Black Stone Player Name</label>
<input type="text" name="nameBlack" id="nameBlack" value="" class="text ui-widget-content ui-corner-all" />
<label for="nameWhite">White Stone Player Name</label>
<input type="text" name="nameWhite" id="nameWhite" value="" class="text ui-widget-content ui-corner-all" />
</fieldset>
</form>
</div>

</body>
</html>
