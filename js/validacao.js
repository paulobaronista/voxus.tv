$(document).ready(function () {
    $("input").blur(function () {
        if ($(this).val() != "") {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
});
$.validator.setDefaults({
    submitHandler: function () {
        $(".btn-send").css("display", "none");
        $(".display-item").css("display", "block");
    }
});

$(document).ready(function () {
    $("#signupForm").validate({
        rules: {
            name: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            empresa: {
                required: true
            },
            url: {
                required: true
            },
            verba: {
                required: true
            },
        },
        messages: {
            name: "Este campo é obrigatório!",
            telefone: "Telefone inválido.",
            email: "E-mail inválido.",
            empresa: "Este campo é obrigatório!",
            url: "Domínio inválido.",
            verba: "Este campo é obrigatório!",
        }
    });
});