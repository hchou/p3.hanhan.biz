<!DOCTYPE html>
<head>
    <!-- jquery & jquery ui-->
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>

    <title>Class Practice</title>

    <style type='text/css'>

    .grid {
        border: 1px solid black;
        width: 48px;
        height: 48px;
        float: left;

    }

   .board {
        border: 1px solid black;
        width:553px;
        height:553px;
        background-image: url(/images/bamboo.jpg);
        position: absolute;
    }
    
    .stone-black {
        /*
         *margin: auto;
         */
        /*
         *border: 1px;
         */
        position: absolute;
        margin-top: 1px;
        margin-left: 1px;
        border-radius: 50%;
        width: 46px;
        height: 46px;
        /*
         * background-color: black;
         */

        background-image: url(/images/stone-black.png);
        background-size: 46px 46px;
        background-repeat:no-repeat;
        /*
         * float: left;
         */
    }

    .stone-white {
        /*
         *margin: auto;
         */
        /*
         *border: 1px;
         */
        position: absolute;
        margin-top: 1px;
        margin-left: 1px;
        border-radius: 50%;
        width: 46px;
        height: 46px;
        /*
         * background-color: black;
         */

        background-image: url(/images/stone-white.png);
        background-size: 46px 46px;
        background-repeat:no-repeat;
        /*
         * float: left;
         */
    }
    
    </style>
    <script>
        var turnCnt = 0;
    </script>
   
</head>

<body>
    
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


</body>
</html>
