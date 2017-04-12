$(function(){

	//二维码显示
	$("#wechat").hover(function(){
		$(this).find("span").show();
	},function(){
		$(this).find("span").hide();
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