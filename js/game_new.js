var rematchFlag = 0;

$(function() {
    $("#newgame-form").dialog({
        autoOpen: false,
        height: 300,
        width: 300,
        modal: true,
        buttons: {
            "Start": function() {
                    //$("#users tbody").append("<tr>" +
                    //    "<td>" + name.val() + "</td>" +
                    //    "<td>" + email.val() + "</td>" +
                    //    "<td>" + password.val() + "</td>" +
                    //    "</tr>");
                    var bplayer = $("#nameBlack").val();
                    var wplayer = $("#nameWhite").val();
                    $(this).dialog("close");
                    $("#bplayer").html(bplayer);
                    $("#wplayer").html(wplayer);
            },
        },
    });
    $("#playagain-form").dialog({
        autoOpen: false,
        height: 150,
        width: 300,
        modal: true,
        buttons: {
            "Rematch": function() {
                $(this).dialog("close");
                rematchFlag = 1;
                alert('rematchFlag:' + rematchFlag);
                blackX2Y = [];
                whiteX2Y = [];
                $(".stone-black").remove();
                $(".stone-white").remove();
            },
            "New Game": function() {
                $(this).dialog("close");
                rematchFlag = 0;
                alert('rematchFlag:' + rematchFlag);
                location.reload();
            }
        },
    });
});

function newGame() {
    alert('rematchFlag: ' + rematchFlag);
    $("#newgame-form").dialog("open");
}

function playAgain() {
    $("#playagain-form").dialog("open");
}