$(function() {

	if ($('.ydNav').hasClass('none')) {
	  	$('.text a').removeClass('scale')
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

	var Ohref=window.location.href;
	var arrhref=Ohref.split("?id=");
	var id = arrhref[1];

	detail({id: id}).then(function(res) {
		// console.log(res.data)
		$('.title').html(res.data.textTitle)
		$('title').html(res.data.title)
		$('.text').html(res.data.content)
		$('meta[name=keywords]').attr('content', res.data.keywords)
		$('meta[name=description]').attr('content', res.data.description)

		Crumbs(2, res.data.typeId, true)
	})	
})