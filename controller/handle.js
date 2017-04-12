$(function(){

    var page = 1;
    //获取url参数
    function GetUrlParms(){
        var args=new Object();  
        var query=location.search.substring(1);//获取查询串   
        var pairs=query.split("&");//在逗号处断开   
        for(var i=0; i<pairs.length; i++){   
            var pos=pairs[i].indexOf('=');//查找name=value   
                if(pos==-1)   continue;//如果没有找到就跳过  
                var argname=pairs[i].substring(0,pos);//提取name 
                var value=pairs[i].substring(pos+1);//提取value  
                args[argname]=unescape(value);//存为属性   
        }
        return args;
    }

    var args = new Object();
    args = GetUrlParms();
    //如果要查找参数key:
    if(args["page"]!=undefined){
        //如果要查找参数key:
        var page = args["page"] ;
    }   

	$.ajax({
		type: "post",   
        url: "data/handle.json",
        data: {"page": page},
        success: function(data) { 
            if (data.status == "1") {
            	var newsTemp = data.data;
            	var newsList = '',newsDdList = '';

            	//新闻动态
            	for (var i = 0; i < newsTemp.length; i++) {
            		newsList += '<li>'+
                                    '<a href="handle-detail.html?id='+ newsTemp[i].id +'"">'+
                                        '<span><b>'+ newsTemp[i].year +'</b><br />'+ newsTemp[i].date +'</span>'+
                                        '<h3>'+ newsTemp[i].name +'</h3>'+
                                        '<p>'+ newsTemp[i].des +'</p>'+
                                    '</a>'+
                                '</li>';
                    newsDdList += '<dd>'+ Number(i+1) +'</dd>';
            	}

            	$(".newList ul").append(newsList);
                $(".newList dl").append(newsDdList);
                $(".newList dl dd").eq(Number(page)-1).addClass("current");

                $(".newList ul li").eq(0).addClass("current");

                $(".newList dl dd").on("click", function(){
                    location.href = "handle.html?page="+Number($(this).index()+1);
                });

            }
        }
	});
});