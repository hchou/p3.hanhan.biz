$(function() {
    $("#dialog-form").dialog({
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

});

function newGame() {
    $("#dialog-form").dialog("open");
}