$(function() {
    $("#dialog-form").dialog({
        autoOpen: false,
        height: 300,
        width: 350,
        modal: true,
        buttons: {
            "Start": function() {
                var bValid = true;
                allFields.removeClass("ui-state-error");
                bValid = bValid && checkLength(nameBlack, "nameBlack", 3, 16);
                bValid = bValid && checkLength(nameWhite, "nameWhite", 3, 16);
                if (bValid) {
                    $("#users tbody").append("<tr>" +
                        "<td>" + name.val() + "</td>" +
                        "<td>" + email.val() + "</td>" +
                        "<td>" + password.val() + "</td>" +
                        "</tr>");
                    $(this).dialog("close");
                }
            },
        },
        close: function() {
            allFields.val("").removeClass("ui-state-error");
        }
    });

});

function newGame() {
    $("#dialog-form").dialog("open");
}