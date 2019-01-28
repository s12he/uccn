
if ($('.ydNav').hasClass('none')) {
  $('.m>a').click(function() {
    $(this).next('.hiddenBox').slideToggle("normal")
  })
  $('.ydNav').click(function() {
    $('.pcNav').slideToggle('normal')
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
	defaultIndex: 1
});