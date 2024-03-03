$('[data-anchor]').on('click', function(){
  let id = $(this).attr('data-anchor');
  if($(document).find('#'+id).length > 0) {
    let posY = $(document).find('#'+id).offset().top;
    $('html,body').animate({
      scrollTop: posY
    }, 1000);
  }
  return false;
});