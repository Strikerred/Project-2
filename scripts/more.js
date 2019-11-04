/* global $ */

console.log($('.more-btn'))
$('.courses').on('click', '.more-btn', display)

function display () {
  if ($(this).parent().parent().children('p').children('.more').css('display') == 'none') {
    $(this).parent().parent().children('p').children('.more').css('display', 'inline')
    $(this).parent().parent().children('p').children('.dots').css('display', 'none')
    $(this).html('Read Less')
  } else {
    $(this).parent().parent().children('p').children('.more').css('display', 'none')
    $(this).parent().parent().children('p').children('.dots').css('display', 'inline')
    $(this).html('Read More')
  }
};
