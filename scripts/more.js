console.log($('.more-btn'))
$('.courses').on('click', '.more-btn', display);

function display() {
    console.log($(this))
    $(this).css('background-color', 'red')
    console.log($(this).find('.more').first())
    console.log($(this).closest('span') )
    if($(this).closest('.more').css('display') == 'none'){
        $(this).closest('.more').css('display', 'inline');
    }

};