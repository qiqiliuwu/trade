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
	if(args["name"]!=undefined){
        //如果要查找参数key:
        var name = args["name"];
        switch (name){
            case "index":
                $(".head ul li").eq(7).addClass("current");
                break;
            case "news":
                $(".head ul li").eq(6).addClass("current");
                break;
            case "service":
                $(".head ul li").eq(5).addClass("current");
                break;
            case "government":
                $(".head ul li").eq(4).addClass("current");
                break;
            case "user":
                $(".head ul li").eq(3).addClass("current");
                break;
            case "practical":
                $(".head ul li").eq(2).addClass("current");
                break;
            case "handle":
                $(".head ul li").eq(1).addClass("current");
                break;
            case "mien":
                $(".head ul li").eq(0).addClass("current");
                break;
            default:
            	$(".head ul li").eq(7).addClass("current");
                break;
        }
    } else {
    	$(".head ul li").eq(7).addClass("current");
    }
	

})