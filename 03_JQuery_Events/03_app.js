/*
    1) Click Event for a button BS Styles
    2) dblClick event for a button BS Styles
    3) Hover on an Image with opacity
    4) Focus Event & blur Event
    5) MouseEnter Event to show a BS Modal
 */
 // click event
$('#danger-btn').click(function () {
    $(this).text("register");
});

// double-click event
$('#success-btn').dblclick(function () {
    $(this).text("login");
});

// toggle effect
$('#toggle-btn').click(function() {
    if($(this).text() === 'register'){
        $(this).removeClass('btn-primary').addClass('btn-danger').text('login');
    }
    else{
        $(this).removeClass('btn-danger').addClass('btn-primary').text('register');
    }
});


// keyup event
$('#input-text').keyup(function () {
   $('#display-ele').text($(this).val());
});

// change event
$('#select-box').change(function () {
    $('#display-change').text($(this).val());
});