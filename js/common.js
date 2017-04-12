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

	//口岸风采图片滚动
	var mienLi = $(".mien ul li"),clickNum = 0;;
	if (mienLi.length > 3) {
		$(".mien .forward").click(function(){
			if (clickNum < mienLi.length-3) {
				mienLi.eq(clickNum).hide();
				mienLi.eq(clickNum+3).show();
				clickNum++;
			}
		});
		$(".mien .back").click(function(){
			if (clickNum > 0) {
				mienLi.eq(clickNum+3).hide();
				clickNum--;
				mienLi.eq(clickNum).show();
			}
		});
	}
	

})