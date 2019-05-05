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

// 面包屑
function Crumbs(oneNav, second, three) {
	const nav = ['走进中灵', '集团品牌', '中灵资讯', '中灵生态', '联系中灵'];
	const secondNav = ['集团公告', '集团新闻', '行业新闻']
	var secondHtml = '';
	var threeHtml = '';
	var allHtml = '';
	if (three) {
		secondHtml = '<li><span>></span>'+ $('title').html() +'</li>'
	}
	if (second != undefined) {
		threeHtml = '<li><span>></span>'+ secondNav[second] +'</li>'
	}
	allHtml = '<li><span>您所在的位置 :</span>'+ nav[oneNav] +'</li>' + threeHtml + secondHtml;
	$('.crumbs ul').html(allHtml)
}

//如果主题内容太少，底部导航固定到页面最下面
// var jianju = $('footer').offset().top
// var itsHeight = $('footer').outerHeight()
// var Height = $(window).height();
// if ((jianju + itsHeight) < Height) {
// 	$('footer').css({
// 		'position': 'fixed',
// 		'width': '100%',
// 		'bottom': 0,
// 		'left': 0
// 	})
// }
