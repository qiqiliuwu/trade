$(function(){

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
    if(args["id"]!=undefined){
        //如果要查找参数key:
        var id = args["id"] ;
    }   

	$.ajax({
		type: "post",   
        url: "data/newsDetail.json",
        data: {"id": id},
        success: function(data) { 
            if (data.status == "1") {
            	var newsDetail = data.data;

                $(".detail h1").html(newsDetail.name);
                $(".detail span").html('发表于 '+ newsDetail.date +'  来自 '+ newsDetail.from);
                $(".detail .detail-content").html(newsDetail.content);

            }
        }
	});
});