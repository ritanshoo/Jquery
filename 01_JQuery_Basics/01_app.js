
$('#danger-btn').click(function () {
    ( $(this).text() === 'hide') ? $(this).text('show') : $(this).text('hide');
    $('#dan-card').toggle(1000);
    // ($(this).text() === 'hide') ? $(this).text('show') : $(this).text('hide');
});