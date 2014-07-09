$(document).on('mouseover', '.hover', function() {
  if ($(this).find('.tag').length > 0) return;
  var tag  = document.createElement('div'),
      text = $(this).data('val'),
      x    = $(this).offset().left + $(this).width() + 'px',
      y    = $(this).offset().top - $(this).height() + 'px';
  $(tag).css({ 'left'      : x,
               'top'       : y })
        .text(text)
        .addClass('tag');
  $(this).append(tag);
});
