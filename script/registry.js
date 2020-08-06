;
! function ($) {
    //验证用户名
    let usernameflag = true;
    let passwordflag = true;
    let passflag = true;
    $('#userName').focus(function () {
        $('span').eq(0).html('* 请用邮箱或手机号');
        $('span').eq(0).css('color', 'red');
    });
    $('#userName').blur(function () {
        if (this.value !== '') {
            let reg = (/^1[3578]\d{9}$ || ^(\w+[+-.]*\w+)\@(\w+\w+)\.(\w+\w+)$/);
            if (reg.test(this.value)) {
                $('span').eq(0).html('√');
                $('span').eq(0).css('color', 'green');
                usernameflag = true;
            }
        } else {
            $('span').eq(0).html('* 用户名不能为空');
            $('span').eq(0).css('color', 'red');
            usernameflag = false;

        }
    })

    //验证密码
    $('#password').focus(function () {
        $('span').eq(1).html('* 6-20位字符，建议由字母，数字和符号两种以上组合');
        $('span').eq(1).css('color', 'red');
    })
    $('#password').blur(function () {
        if (this.value !== '') {
            let reg = /^[a-z0-9_-]{6,18}$/;
            if ($('#password').val().length >= 6 && $('#password').val().length <= 20) {
                $('span').eq(1).html('√');
                $('span').eq(1).css('color', 'green');
                passwordflag = true;
            } else {
                $('span').eq(1).html('* 密码长度有误');
                $('span').eq(1).css('color', 'red');
                passwordflag = false;
            }

        } else {
            $('span').eq(1).html('* 密码不能为空');
            $('span').eq(1).css('color', 'red');
            passwordflag = false;
        }
    })
    //确认密码
    $('#pass').focus(function () {
        $('span').eq(2).html('* 请再次输入密码');
        $('span').eq(2).css('color', 'red');
    })
    $('#pass').blur(function () {
        if (this.value !== '') {
            if ($('#pass').val() != $('#password').val()) {
                $('span').eq(2).html('* 密码不同,请重新输入');
                $('span').eq(2).css('color', 'red');
                passflag = false;
            } else {
                $('span').eq(2).html('√');
                $('span').eq(2).css('color', 'green');
                passflag = true;
            }
        } else {
            $('span').eq(2).html('* 确认密码不能为空');
            $('span').eq(2).css('color', 'red');
            passflag = false;
        }
    })
    console.log(123)
    $('.login_btn').on('click', function () {
        if ($('#userName').val() === '') {
             $('span').eq(0).html('* 用户名不能为空');
             $('span').eq(0).css('color', 'red');
            usernameflag = false;
        }
        if ($('#password').val() === '') {
             $('span').eq(1).html('* 密码不能为空');
            $('span').eq(1).css('color', 'red');
            passwordflag = false;
        }
        if ($('#pass').val() === '') {
            $('span').eq(2).html('* 确认密码不能为空');
            $('span').eq(2).css('color', 'red');
            passflag = false;
        }
        $.ajax({
            type: "POST",
            url: "http://localhost/projectnamecopy/php/database/registry.php",
            data: {
                username:$('#userName').val(),
                password:$('#password').val(),
                pass:$('#pass').val()
            },
            success: function(){
                console.log(126);
                $(location).attr('href','http://localhost/projectnamecopy/src/Hasee/login.html');
            }
        });
        console.log($('#userName').val());
    });
}(jQuery);