$(function(){

	$.ajax({
		type: "post",   
        url: "data/mien.json",
        success: function(data) { 
            if (data.status == "1") {
            	var mienTemp = data.data;
            	var mienList = '';

            	//新闻动态
            	for (var i = 0; i < mienTemp.length; i++) {
            		mienList += '<li>'+
                                    '<a href="mien-detail.html?id='+ mienTemp[i].id +'">'+
                                        '<img src="'+ mienTemp[i].img +'" alt="'+ mienTemp[i].name +'" />'+
                                        '<h3 class="title">'+ mienTemp[i].name +'</h3>'+
                                        '<span>浏览次数('+ mienTemp[i].view +') '+ mienTemp[i].date +'</span>'+
                                        '<div><img src="images/kafc_shadow.png" /></div>'+
                                    '</a>'+
                                '</li>';
            	}

            	$(".mien ul").append(mienList);

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

            }
        }
	});
});