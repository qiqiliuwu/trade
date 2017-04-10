$(function(){

	//二维码显示
	$("#wechat").hover(function(){
		$(this).find("span").show();
	},function(){
		$(this).find("span").hide();
	});

	//首页轮播图
	var bannerImg = $(".banner ul li");
	var bannerDl = $(".banner dl dd");
	var num = 0,adTimer = null;
	function bannerScroll(){
		num++;
		bannerImg.eq(num).show().siblings().hide();
		bannerDl.eq(num).addClass("current").siblings().removeClass("current");
		if (num == 3) {
			num = -1;
		}
	};
	var adTimer = setInterval(bannerScroll,2000);
	$(".banner").hover(function(){
		clearInterval(adTimer);
	},function(){
		adTimer = setInterval(bannerScroll,2000);
	});

	bannerDl.on("click",function(){
		$(this).addClass("current").siblings().removeClass("current");
		bannerImg.eq($(this).index()).show().siblings().hide();
		num = $(this).index();
		if (num == 3) num = -1;
	});

	//新闻列表页列表切换
	$(".tab-list1-nav li").on("click",function(){
		$(this).addClass("current").siblings().removeClass("current");
		$(".tab-list1-content ul").eq($(this).index()).show().siblings().hide();
	});
	$(".tab-list3-nav li").on("click",function(){
		$(this).addClass("current").siblings().removeClass("current");
		$(".tab-list3-content ul").eq($(this).index()).show().siblings().hide();
	});

})