const html = document.documentElement;
const whtml = parseInt(html.getBoundingClientRect().width);
if (whtml < 900) {
	html.style.fontSize = whtml / 50 + 'px'
}

if ($('.ydNav').hasClass('none')) {
  $('.m>a').click(function() {
    $(this).next('.hiddenBox').slideToggle("normal")
  })
  $('.ydNav').click(function() {
    $('.pcNav').slideToggle('normal')
  })
}