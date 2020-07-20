
// for login button
$('#login-button').click(function () {
    $('body').css({
        'background-color':'lightgreen'

    });
    $('#form-card-header').removeClass("bg-teal bg-warning").addClass("bg-success");
    $('#submit-button').removeClass("btn-teal btn-warning").addClass("btn-success");

});

// for Register button
$('#register-button').click(function () {
    $('body').css({
        'background-color':'lightsalmon'

    });
    $('#form-card-header').removeClass("bg-teal bg-success").addClass("bg-warning");
    $('#submit-button').removeClass("btn-teal btn-success").addClass("btn-warning");
});

// for Signup button
$('#signup-button').click(function () {
    $('body').css({
        'background-color':'lightskyblue'

    });
    $('#form-card-header').removeClass("bg-success bg-warning").addClass("bg-teal");
    $('#submit-button').removeClass("btn-warning btn-success").addClass("btn-teal");
});