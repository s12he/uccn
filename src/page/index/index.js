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
  jQuery(".headrNav").slide({ 
      type:"menu", //效果类型
      titCell:".m", // 鼠标触发对象
      targetCell:".hiddenBox", // 效果对象，必须被titCell包含
      effect:"slideDown",//下拉效果
      delayTime:300, // 效果时间
      triggerTime:0, //鼠标延迟触发时间
      returnDefault:true  //返回默认状态
  });
}


// // 跳转顶部
$('.top').click(function() {
	swiper.slideTo(0, 1000, function() {
	    swiperAnimate(this);
	});
})

// // 箭头点击事件
$('.arrows').click(function() {
	swiper.slideTo(1, 1000, function() {
	    swiperAnimate(this);
	});
})