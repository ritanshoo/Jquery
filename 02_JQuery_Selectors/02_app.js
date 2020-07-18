// Tag Selector , id selection , class selection
$('.lead').click(function () {
   $(this).css({
       'background-color':'lightpink',
       'padding':'5px',
       'box-shadow':'0 0 10px black'
   }) ;
});


// Attribute Selection
$('input[type="text"]').focus(function () {
    $(this).css({
        'background-color' : 'black',
        'color' : 'white'
    });
}).blur(function () {
    $(this).css({
        'background-color' : 'white'
    });
});