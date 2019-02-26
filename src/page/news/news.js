// tab切换
jQuery(".content").slide({
	delayTime: 0,
	titCell: '.sidebar li',
	mainCell: '.trendsMessage'
});

//职位介绍详情内容分页
var index = [];
for (var i = 0; i < $('.trendsItem').length; i++) {
	var num = 0;
	index.push(num)
	paging($('.trendsItem:eq('+i+')'), index[i], i)
}

function paging(name, num, i) {
	//隐藏所有jobUl,以及删除分页器高亮状态
	function hideRemove(page) {
		for (var j = 0; j < page.length; j++) {
			name.find('.page:eq('+j+')').hide();
			name.find('.num:eq('+j+')').removeClass('active');
		}
	}
	//显示当前page,以及当前分页器页码
	function showAdd(num) {
		name.find('.page:eq('+num+')').show();
		name.find('.num:eq('+num+')').addClass('active')
	}
	//点击下一页
	name.find('.next1').click(function() {
		var page = name.find('.page')
		num++;
		if (num < page.length) {
			hideRemove(page);
			showAdd(num);
		}else {
			num = page.length - 1
		}
	})
	//点击上一页
	name.find('.prev1').click(function() {
		var page = name.find('.page')
		num--;
		if (num >= 0) {
			hideRemove(page);
			showAdd(num);
		}else{
			num = 0;
		}
	})
	//点击页码 
	name.find('.num').click(function() {
		hideRemove(name.find('.page'));
		showAdd(this.innerHTML - 1);
		num = this.innerHTML - 1;
	})
}

Crumbs(2)