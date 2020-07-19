/*
    1) SMS App
    2) Enable Submit Button if file selected
    3) Show Password with check Box
    4) Change Images with button
    5) Display Triangle Strings with Text Box

 */

let countLike = 0;
let countDislike = 0;
let totalCount = 0;

$('#like-Btn').click(function () {
    countLike++;
    totalCount++;
    $('#like-display').text(countLike);
    $('#count-total').text(totalCount);
});

$('#dislike-Btn').click(function () {
    countDislike++;
    totalCount++;
    $('#dislike-display').text(countDislike);
    $('#count-total').text(totalCount);
});


// Hobbies Selection App
$('#eating-check').change(function() {
    toggleCard($('#eating-card'));
});

$('#coding-check').change(function() {
    toggleCard($('#coding-card'));
});

$('#sleeping-check').change(function() {
    toggleCard($('#sleeping-card'));
});

// toggle Card
let toggleCard = (card) => {
    if(card.hasClass('d-none')){
        card.removeClass('d-none');
    }
    else{
        card.addClass('d-none');
    }
};