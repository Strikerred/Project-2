$('.courses').on('click', '.more-btn', display);

function display() {
    if($(this).parent().parent().children('p').children('.more').css('display') == 'none'){
        $(this).parent().parent().children('p').children('.more').css('display', 'inline');
        $(this).parent().parent().children('p').children('.dots').css('display', 'none');
        $(this).html('Read Less')

    } else {
        $(this).parent().parent().children('p').children('.more').css('display', 'none');
        $(this).parent().parent().children('p').children('.dots').css('display', 'inline');
        $(this).html('Read More')
    }

};

	
$('div.toggle-feed a').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('div.toggle-feed a').removeClass('current');
    $('.content').removeClass('current');
    $('.instructors').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
    $("#"+tab_id+1).addClass('current');
})

$('ul.toggle-feed li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.toggle-feed li').removeClass('current');
    $('.content-resources').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
})
