if ($('.ydNav').hasClass('none')) {
  $('.text a').removeClass('scale')
}

jQuery(".headerNav").slide({ 
	type:"menu", 
	titCell:".m", 
	targetCell:".hiddenBox", 
	effect:"slideDown",
	delayTime:200, 
	triggerTime:0, 
	returnDefault:true,  
	defaultIndex: 4
});
//tab高亮1
var Ohref=window.location.href;
var arrhref=Ohref.split("?id=");
var active = arrhref[1];

//title标签
if (active == 0) {
	$('title').html('中灵科技集团公告|中灵科技');
}else if (active == 1) {
	$('title').html('中灵集团新闻|中灵科技');
}else if (active == 2) {
	$('title').html('行业新闻|中灵科技');
}

//更新内容
var params = {
	pageNum: 1,
	pageSize: 4,
}
function genxin(params) {
	inquire(params).then(function(res) {
		// console.log(res.data)
		var list = res.data.list
		pages = res.data.pages
		var html = ''
		for (var i = 0; i < list.length; i++) {

			var src = ''
			var text = list[i].content.replace(/<[^>]+>/g,"")
			var img = list[i].content.match(/<img.*?src="(.*?)"[^>]*?>/);
			if (img) {
				src = img[1]
			}else {
				src = '../../assets/images/news/zanwu.png'
			}

			html += '<div class="msg flex"><div class="imgBox">'+
			'<a href="../newsInfo/newsInfo.html?id='+ list[i].id +'" target="_blank"><img src="'+ src +'">'+
			'</a></div><div class="text"><a href="../newsInfo/newsInfo.html?id='+ list[i].id +'" target="_blank">'+list[i].textTitle+'</a>'+
			'<p>'+ text.substring(0,65) +'...</p></div></div>'
		}
		$('.page').html(html)
		page(res.data.pages, params.pageNum)
	})
}

//更新页码 
function page(pages, num) {
	// var html = '<ul class="flex"><li class="prev1">上一页</li>'
	// for (var i = 0; i < pages; i++) {
	// 	if (num == i + 1) {
	// 		html += '<li class="num active" value="'+ (i+1) +'">'+ (i+1) +'</li>'
	// 	}else {
	// 		html += '<li class="num" value="'+ (i+1) +'">'+ (i+1) +'</li>'
	// 	}
	// }
	// html += '<li class="next1">下一页</li></ul>'
	// $('.paging').html(html)
	$('.paging').pagination({
	    mode: 'fixed',
	    pageCount: pages,
	    current: num,
	    callback: function(e) {
	    	params.pageNum = e.getCurrent()
			genxin(params)
	    }
	});

}

//初始进来tab高亮
$('.sidebarItem').removeClass('on')
$('.sidebarItem:eq('+ active +')').addClass('on')
params.typeId = active
genxin(params)

$('.sidebarItem').click(function() {
	$('.sidebarItem').removeClass('on')
	$(this).addClass('on')
	params.pageNum = 1
	params.typeId = $(this).attr('value')
	genxin(params)
})


//x下一页
// var pages = ''

// $('.paging').on('click', '.next1', function() {
// 	var pageActive = params.pageNum
// 	pageActive++
// 	// console.log(pages)
// 	if (pageActive <= pages) {
// 		params.pageNum = pageActive
// 		genxin(params)
// 	}
// })

// //上一页
// $('.paging').on('click', '.prev1', function() {
// 	var pageActive = params.pageNum
// 	pageActive--
// 	// console.log(pages)
// 	if (pageActive > 0) {
// 		params.pageNum = pageActive
// 		genxin(params)
// 	}
// })

// //点击页码
// $('.paging').on('click', '.num', function() {
// 	params.pageNum = $(this).attr('value')
// 	genxin(params)
// })

Crumbs(2, active)


