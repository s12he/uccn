// 文字轮播
jQuery(".slideText").slide({
	mainCell:".bd ul",
	autoPlay:true,
	effect:"leftMarquee",
	vis:3,
	interTime:50,
	mouseOverStop: false
});

// tab切换
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