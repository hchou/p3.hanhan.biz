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
        margin: 0;
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

<div class='board'>
<?=$grids?>
</div>



 <script>
    $('.grid').click(function() {   

        // If the box isn't already occupied by a white or black stone then proceed
        if ($(this).html() != '<div class="stone-white"></div>' && $(this).html() != '<div class="stone-black"></div>') {
            var position = $(this).position();
            var x = Math.round(position.left / 50 + 1);
            var y = Math.round(position.top / 50 + 1);
            console.log('turn: ', turnCnt); 
            console.log('x: ' + x);
            console.log('y: ' + y);
            // If modulus of turnCnt (turn count) is = that means it's black's turn
            if (turnCnt % 2 == 0) {
                $(this).append("<div class='stone-black'></div>");
                // Check if black's won
                testFunction(x, y, 'black');
                checkVertical(x, y, 'black');
            }
            else {
                $(this).append("<div class='stone-white'></div>");
                // Check if white's won
                testFunction(x, y, 'white');
                checkVertical(x, y, 'white');
            }
            turnCnt++;

        }
        //$(this).append("<div class='stone-white'></div>");

    });
    
    function testFunction(x, y, color) {
        console.log('executing testFunction ' + color);
    }
    
    function checkVertical(x, y, color) {

        for (var i = y + 1; i < y + 5; i++) {
            if (i > 11) {
                console.log('out of bound');
                break;
            }
            console.log(color + ': checking x=' + x + ' y=' + i);
        }
        
        for (var i = y - 1; i > y - 5; i--) {
            if (i > 11) {
                console.log('out of bound');
                break;
            }
            console.log(color + ': checking x=' + x + ' y=' + i);
        }
    }
</script>

</body>
</html>
