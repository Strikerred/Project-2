console.log($('.more-btn'))
$('.courses').on('click', '.more-btn', display);

function display() {
    console.log($(this).closest('.more').css('display') )
    if($(this).closest('.more').css('display') == 'none'){
        $(this).closest('.more').css('display', 'inline');
    }

};