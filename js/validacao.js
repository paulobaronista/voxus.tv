$(document).ready(function() {
    $("#countries").msDropdown();
    $("input").blur(function() {
        if ($(this).val() != "") {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
})