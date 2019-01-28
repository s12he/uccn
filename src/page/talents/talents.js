// 文字轮播
jQuery(".slideText").slide({
	mainCell:".bd ul",
	autoPlay:true,
	effect:"leftMarquee",
	vis:3,
	interTime:50,
	mouseOverStop: false
});

// 职位tab切换
jQuery(".recruit-content").slide({
	delayTime: 0,
	titCell: '.postList li',
	mainCell: '.tab-content'
});

// 长期招聘信息轮动
jQuery(".long").slide({
	mainCell:".slide ul",
	autoPlay:true,
	effect:"topMarquee",
	vis:4,
	interTime:50
});

//职位介绍详情内容分页
var index = [];
for (var i = 0; i < $('.tab-main').length; i++) {
	var num = 0;
	index.push(num)
	paging($('.tab-main:eq('+i+')'), index[i], i)
}

function paging(name, num, i) {
	//隐藏所有jobUl,以及删除分页器高亮状态
	function hideRemove(jobUl) {
		for (var j = 0; j < jobUl.length; j++) {
			name.find('.jobUl:eq('+j+')').hide();
			name.find('.num:eq('+j+')').removeClass('active');
		}
	}
	//显示当前jobUl,以及当前分页器页码
	function showAdd(num) {
		name.find('.jobUl:eq('+num+')').show();
		name.find('.num:eq('+num+')').addClass('active')
	}
	//点击下一页
	name.find('.next1').click(function() {
		var jobUl = name.find('.jobUl')
		num++;
		if (num < jobUl.length) {
			hideRemove(jobUl);
			showAdd(num);
		}else {
			num = jobUl.length - 1
		}
	})
	//点击上一页
	name.find('.prev1').click(function() {
		var jobUl = name.find('.jobUl')
		num--;
		if (num >= 0) {
			hideRemove(jobUl);
			showAdd(num);
		}else{
			num = 0;
		}
	})
	//点击页码 
	name.find('.num').click(function() {
		hideRemove(name.find('.jobUl'));
		showAdd(this.innerHTML - 1);
		num = this.innerHTML - 1;
	})
}

// 顶部导航
jQuery(".headerNav").slide({ 
	type:"menu", //效果类型
	titCell:".m", // 鼠标触发对象
	targetCell:".hiddenBox", // 效果对象，必须被titCell包含
	effect:"slideDown",//下拉效果
	delayTime:200, // 效果时间
	triggerTime:0, //鼠标延迟触发时间
	returnDefault:true,  //返回默认状态
	defaultIndex: 4
});