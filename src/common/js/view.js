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
	const nav = ['走进中灵', '分支机构', '中灵资讯', '人才理念', '联系中灵'];
	const secondNav = ['集团新闻', '行业动态', '影像资料']
	const threeNav = ['企业热点', '媒体报道', '企业活动', '行业动态']
	var secondHtml = '';
	var threeHtml = '';
	var allHtml = '';
	if ($('.m:eq('+(oneNav + 1)+')').find('.hiddenBox').length == 1) {
		secondHtml = '<li><span>></span>'+ $('title').html() +'</li>'
	}
	if (three != undefined && second != undefined) {
		threeHtml = '<li><span>></span>'+ secondNav[second] +'</li>' + '<li><span>></span>'+ threeNav[three] +'</li>'
	}
	allHtml = '<li><span>您所在的位置 :</span>'+ nav[oneNav] +'</li>' + threeHtml + secondHtml;
	$('.crumbs ul').html(allHtml)
}