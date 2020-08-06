;
! function ($) {
$('.login_btn').on('click',function(){
    console.log(1);
    $.ajax({
        type: "post",
        url: "http://localhost/projectnamecopy/php/database/login.php",
        data: {
            name:$('#username').val(),
            pass:$('#password').val()
        },
    }).done(function(data){
        if(!data){
            alert('账户或者密码错误');
        }else{
            $(location).attr('href','http://localhost/projectnamecopy/src/Hasee/index1.html')
        }
    })

});
}(jQuery);