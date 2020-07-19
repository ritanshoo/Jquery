/*  USE BS Cards
    1) Show + Hide => Toggle
    2) FadeIn + FadeOut => FadeToggle
    3) slideUp + SlideDown => SlideToggle
    4) animate
    5) Stop
 */
// hide() , show()
$('#btn-hide-show').click(function () {
    if($(this).text() == 'hide'){
        $(this).text('show');
        $('#display-hide-show').hide(1500);
    }
    else{
        $(this).text('hide');
        $('#display-hide-show').show(1500);
    }

});

// toggle()
$('#btn-toggle').click(function () {
    ( $(this).text() == 'hide' ) ? ( $(this).text('show') ) : ( $(this).text('hide') );
    $('#display-toggle').toggle(1000)
});

// fadeIn , FadeOut()
$('#btn-fadeIn').click(function () {
    if($(this).text() == 'hide'){
        $(this).text('show');
        $('#display-fadeIn').fadeIn(1000);
    }
    else{
        $(this).text('hide');
        $('#display-fadeIn').fadeOut(1000);
    }

});

// FadeToggle()
$('#btn-fadeToggle').click(function () {
    ( $(this).text() == 'hide' ) ? ( $(this).text('show') ) : ( $(this).text('hide') );
    $('#display-fadeToggle').fadeToggle(1000);
});


// slidUp() , slideDown()

// slideToggle()
