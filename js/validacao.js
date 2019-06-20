$(document).ready(function() {
    $("input").blur(function() {
        if ($(this).val() != "") {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
})