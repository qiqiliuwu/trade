$(function(){

    $(".login button").click(function(){
        var username = $("#username").val();
        var password = $("#password").val();
        if (username.length != 0 && password.length != 0) {
            $.ajax({
                type: "post",   
                url: "data/mien.json",
                data: {"username": username, "password": password},
                success: function(data) { 
                    if (data.status == "1") {
                        alert("登录成功！");
                    } else {
                        alert("用户名或密码错误，请重新登录！")
                    }
                }
            });
        } else {
            if (username.length == 0) {
                $(".login label").eq(0).find("span").show();
            }
            if (password.length == 0) {
                $(".login label").eq(1).find("span").show();
            }
        }

        
    });
    
});