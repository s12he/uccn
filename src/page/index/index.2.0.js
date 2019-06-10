$(function () {
    $(".slideBox").slide({
        mainCell: ".bd ul",
        autoPlay: true,
        delayTime: 500,
        interTime: 6500,
        effect: "fold",
        mouseOverStop: "false"
    });  
    //事实获取屏幕宽度
	window.onresize = function(){
		$(".slideWrap,section,.banner .slideBox .bd li").width($(window).width()); 
		$(".slideWrap,section,.banner .slideBox .bd li").height($(window).height()); 
	}
	//导航二级菜单
	$("nav").slide({ 
	    type:"menu", //效果类型
	    titCell:".headNav>li", // 鼠标触发对象
	    targetCell:".hiddenBox", // 效果对象，必须被titCell包含
	    effect:"slideDown",//下拉效果
	    delayTime:300, // 效果时间
	    triggerTime:0, //鼠标延迟触发时间
	    returnDefault:true  //返回默认状态
  	});

	// console.log($('.headNav').offset().top)
	// 顶部导航切换样式
	$(window).scroll(function() {
		var H = $('.banner').height() - 72
		if ($('header').offset().top > H) {
			$("header").addClass("navCollapse");
			$('.toTop').css('opacity', 1)
		}else {
			$("header").removeClass("navCollapse");
			$('.toTop').css('opacity', 0)
		}
	})

	$('.headNav>li').mouseover(function() {
		if ($(this).find('hiddenBox')) {
			$(this).removeClass('on')
		}
	})

	//旗下品牌
	$('.brandItem').mouseover(function() {
		$('.brandItem').removeClass('activeBrandItem')
		$(this).addClass('activeBrandItem')
	})
	//招聘按钮悬浮新增动画
	$('.joinBtn').mouseover(function() {
		$(this).find('i').addClass('animatedI')
	})
	$('.joinBtn').mouseout(function() {
		$('.joinBtn i').removeClass('animatedI')
	})
	//点击回到顶部
	$('.up').click(function() {
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, 1000
		);
	})
	//点击向下跳到第二屏
	$('.down').find('i').click(function() {
		var e = $('.page2').offset().top - 42;
		$("body, html").animate({
			scrollTop: e
		}, 800)
	})

	//遮罩层
	var active = 0;
	$('.close').click(function() {
		$('.mask').css('visibility', 'hidden')
	})
	$('.brandItemBtn').click(function() {
		$('.mask').css('visibility', 'visible')
		active = $(this).attr('value')
		$(".focusBox").slide({ 
			mainCell:".pic",
			effect:"left", 
			delayTime:600, 
			trigger:"click",
			defaultIndex: active
		});
	})
	$(".focusBox").hover(function(){ 
		$(this).find(".prev,.next").stop(true,true).fadeTo("show",0.2) 
	},function(){ 
		$(this).find(".prev,.next").fadeOut() 
	});
	/*SuperSlide图片切换*/

	//公告
	var gg = {
		typeId: 0,
		pageNum: 1,
		pageSize: 4
	}

	function rendering(res, gg, id) {
		var list = res.data.list;
		var html = ''
		// console.log(list)
		for (var i = 0; i < list.length; i++) {
			// console.log(list[i])
			if (i == 0) {
				$('#'+ id +' .msgTitle a').attr('href', './page/news/news.html?id='+ gg.typeId)
				$('#'+ id +' .textTitle').html(list[i].textTitle)
				$('#'+ id +' .textTitle').attr('title', list[i].textTitle)
				$('#'+ id +' .textTitle').attr('href', './page/newsInfo/newsInfo.html?id='+ list[i].id)

				var src = ''
				var content = list[i].content.replace(/<[^>]+>/g,"")
				var img = list[i].content.match(/<img.*?src="(.*?)"[^>]*?>/);
				if (img) {
					src = img[1]
				}else {
					src = './assets/images/news/zanwu.png'
				}
				$('#'+ id +' .imgBox').html('<a href="./page/newsInfo/newsInfo.html?id='+list[i].id+'" target="_blank"><img src="'+src+'"></a>')
				$('#'+ id +' .headlineText').html(content.substring(0,57) + '...')
				$('#'+ id +' .time').html('<span>'+ list[i].mydate +'</span>')
				$('#'+ id +' .lookMore').html('<a href="./page/news/news.html?id='+ gg.typeId +'">查看更多</a>')
			}else {
				html += '<li class="flex"><span class="cutFont">'+
				'<a href="./page/newsInfo/newsInfo.html?id='+ list[i].id +'" target="_blank" title="'+ list[i].textTitle +'">'+ list[i].textTitle +'</a>'+
				'</span><em>'+ list[i].mydate +'</em></li>'
			}
		}
		$('#'+ id +' .list').html(html)
	}

	//集团公告
	inquire(gg).then(function(res) {
		rendering(res, gg, 'announcement')
	})

	//集团新闻
	var xw = {
		typeId: 1,
		pageNum: 1,
		pageSize: 4
	}
	inquire(xw).then(function(res) {
		rendering(res, xw, 'jtNews')
	})
	//行业新闻
	var hy = {
		typeId: 2,
		pageNum: 1,
		pageSize: 4
	}
	inquire(hy).then(function(res) {
		rendering(res, hy, 'industry')
	})
	
});