//头部header
;
! function ($) {
    // 头部登录栏
    // 鼠标移入移出字体变色,
    $('.head_in_right>a').hover(function () {
        $(this).css('color', ' #f33c11');
    }, function () {
        $(this).css('color', '');
    })
    // ----------------------------------------
    // 下拉菜单
    //鼠标移入导航栏，使每个a标签显示颜色
    $('#reveal').mouseover(function () {
        $('.head_select_box').show();
        $('.box_ol').show('normal');
        // $('.box_ol').slideDown();
    })
    //鼠标移入下拉框时，让下拉菜单不消失
    $('.box_ol').mouseover(function () {
        $('.box_ol').show();
        $('.head_select_box').show();
    })
    // 鼠标移入到导航栏的a标签，背景色变化
    $('.head_buttom_in>li>a').hover(function () {
        $(this).css('background', ' #f33c11');
    }, function () {
        $(this).css('background', '');
        $('.box_ol ').hide();
    })

    $('.head_select_box').mouseout(function () {
        $('.box_ol').hide();
        // $('.box_ol').slideUp();
    })

}(jQuery);




;
! function () {
    // 轮播图
    let ban = document.querySelector('.banner');
    let banner = document.querySelectorAll('.banner .banner_jpg li'); //四张图片
    let btnList = document.querySelectorAll('.banner .banner_list li'); //四个圆点
    var num = 0;
    var timer = null;
    // 当点击小圆点的时候，图片也会跟着一起动
    for (var i = 0; i < btnList.length; i++) {
        btnList[i].index = i;
        btnList[i].onclick = function () { //给每个小圆点点击事件
            num = this.index;
            for (let i = 0; i < btnList.length; i++) {
                btnList[i].className = '';
                banner[i].style.display = 'none';
            }
            banner[num].style.display = 'block';
            btnList[num].className = 'active';
        }

    }
    automatic();
    // 让图片自动动起来
    function automatic() {
        timer = window.setInterval(function () {
            num++;
            if (num > 3) {
                num = 0;
            }
            for (let i = 0; i < btnList.length; i++) {
                btnList[i].className = '';
                banner[i].style.display = 'none';
            }
            banner[num].style.display = 'block';
            btnList[num].className = 'active';
        }, 3000);
    }
    // 当鼠标移入ban时，停止轮播，清除定时器
    ban.onmouseenter = function () {
        clearInterval(timer);
    }
    //当鼠标移出ban时，继续轮播，重新调用定时器
    ban.onmouseleave = function () {
        automatic();
    }
}();

;
! function ($) {
    $.ajax({
        url: "http://localhost/projectname/php/database/heass.php",
        dataType: "json",
    }).done(function (data) {
        console.log(data);
        let listhtml = '<ul class="content_in_list">';
        for (let value of data) {

            listhtml += `
            <li class="content_in_li">
                        <div class="content_in_li_up">
                            <a href="javascript:;">
                                <p>${value.title}</p>
                                <span>${value.title}</span>
                                <img src="${value.url}" alt="">
                            </a>
                            <div class="content_in_list_down">
                                <em>￥</em>
                                <strong>&nbsp;${value.price}</strong>
                                <a href="javascript:;">
                                    <p>立即抢购</p>
                                </a>
                            </div>
                        </div>
                    </li>
            `

        }
        listhtml += '</ul>';
        $('.content_in_list').html(listhtml);
    })
}(jQuery);