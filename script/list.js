// 渲染列表

;
! function ($) {
    $.ajax({
        url: "http://localhost/projectname/php/database/heass.php",
        dataType: "json",
    }).done(function (data) {
        // console.log(data);
        let listhtml = '<ul>';
        for (let value of data) {

            listhtml += `
            <li><a href="javascript:;" class="pro_img">
                            <img class="lazy" data-original="${value.url}" width="298" height="298"></a>
                        <a href="prodetail.aspx?id=11065">
                            <h2>&nbsp;</h2>
                        </a>
                        <p>${value.title}</p>
                        <h3>￥${value.price}</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td><a href="javascript:" onclick="addToCart(this);" class="pro_shop_car">加入购物车</a>
                                        <input type="hidden" class="hdProID" value="11065">
                                        <input type="hidden" class="hdProDefaultAttr" value="">
                                    </td>
                                    <td><a href="javascript:" class="pro_tb_a2">${value.sailnumber}人评论</a></td>
                                </tr>
                            </tbody>
                        </table>
                        </li>
            `

        }
        listhtml += '</ul>';
        $('.product_list').html(listhtml);
        // 添加懒加载
        $(function () {
            $("img.lazy").lazyload({
                effect: "fadeIn"
            });
        });

        console.log(data);


    })



}(jQuery);