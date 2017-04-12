$(function(){
	$.ajax({
		type: "post",   
        url: "data/home.JSON",
        contentType: "application/json",
        dataType: 'json',
        success: function(data) { 
            if (data.status == "1") {
            	var dongtaiTemp = data.data.dongtai,
            		tongzhiTemp = data.data.tongzhi,
            		focusTemp = data.data.focus,
            		zhengceTemp = data.data.zhengce,
            		zhinanTemp = data.data.zhinan,
            		shiwuTemp = data.data.shiwu;
            	var dongtaiList = '',
            		tongzhiList = '',
            		focusList = '',
            		zhengceList = '',
            		zhinanList='',
            		shiwuList='';

            	//新闻动态
            	for (var i = 0; i < dongtaiTemp.length; i++) {
            		dongtaiList += '<li><a href="news-detail.html?id='+ dongtaiTemp[i].id +'">'+ dongtaiTemp[i].name +'</a><span>'+ dongtaiTemp[i].date +'</span></li>';
            	}
            	$(".tab-list1-content ul").eq(0).append(dongtaiList);

            	//公告通知
            	for (var i = 0; i < tongzhiTemp.length; i++) {
            		tongzhiList += '<li><a href="news-detail.html?id='+ tongzhiTemp[i].id +'">'+ tongzhiTemp[i].name +'</a><span>'+ tongzhiTemp[i].date +'</span></li>';
            	}
            	$(".tab-list1-content ul").eq(1).append(tongzhiList);

            	//焦点图
            	for (var i = 0; i < focusTemp.length; i++) {
            		focusList += '<li><a href="news-detail.html?id='+ focusTemp[i].id +'"><img src="'+ focusTemp[i].img +'" alt="" /></a><span>'+ focusTemp[i].name +'</span></li>';
            	}
            	$(".banner ul").append(focusList);

				//首页焦点图动画效果
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

            	//口岸政策
            	for (var i = 0; i < zhengceTemp.length; i++) {
            		zhengceList += '<li><a href="news-detail.html?id='+ zhengceTemp[i].id +'">'+ zhengceTemp[i].name +'</a><span>'+ zhengceTemp[i].date +'</span></li>';
            	}
            	$(".tab-list2-content ul").append(zhengceList);

            	//操作指南
            	for (var i = 0; i < zhinanTemp.length; i++) {
            		zhinanList += '<li><a href="news-detail.html?id='+ zhinanTemp[i].id +'">'+ zhinanTemp[i].name +'</a><span>'+ zhinanTemp[i].date +'</span></li>';
            	}
            	$(".tab-list3-content ul").eq(0).append(zhinanList);

            	//口岸实务
            	for (var i = 0; i < shiwuTemp.length; i++) {
            		shiwuList += '<li><a href="news-detail.html?id='+ shiwuTemp[i].id +'">'+ shiwuTemp[i].name +'</a><span>'+ shiwuTemp[i].date +'</span></li>';
            	}
            	$(".tab-list3-content ul").eq(1).append(shiwuList);

            }
        }
	});
});