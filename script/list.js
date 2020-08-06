// 渲染列表
;
! function ($) {

    let array_default = []; //排序前的li数组
    let array = []; //排序中的数组
    let prev = null;
    let next = null;

    $.ajax({
        url: "http://localhost/projectname/php/database/heass.php",
        dataType: "json",
    }).done(function (data) {
        let listhtml = '<ul>';
        $.each(data, function (index, value) {
            listhtml += `
            <li><a href="../details.html" class="pro_img">
                            <img class="lazy" data-original="${value.url}" width="298" height="298"></a>
                        <a href="prodetail.aspx?id=11065">
                            <h2>&nbsp;</h2>
                        </a>
                        <p>${value.title}</p>
                        <h3 class="price">￥${value.price}</h3>
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
            // console.log(value);

        })
        listhtml += '</ul>';
        $('.product_list').html(listhtml);
        // 添加懒加载
        $(function () {
            $("img.lazy").lazyload({
                effect: "fadeIn"
            });
        });

        console.log(array);
        array_default = []; //排序前的li数组-默认排序的数组
        // array = data; //排序中的数组
        prev = null;
        next = null;

        //4.将页面的li元素加载到两个数组中
        $('.product_list>ul>li').each(function (index, element) {
            array[index] = $(this);
            array_default[index] = $(this);
        });
        // console.log(array);

    })
    // console.log(array);
    // 排序
    //默认排序
    $('.synthesize').on('click', function () {
        $.each(array_default, function (index, value) { //value就是li标签
            $('.product_list>ul').append(value);
            console.log(value);
        });
        return;
    });
    //升序排序 - array数组
    $('.jiage').on('click', function () {
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                //取出array的价格，price进行排序
                prev = parseFloat(array[j].find('.price').html().substring(1));
                next = parseFloat(array[j + 1].find('.price').html().substring(1));
                //通过价格的判断，改变的是li的位置。
                if (prev > next) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    // console.log(temp)
                }

            }
        }

        //换完li位置，进行渲染。
        $.each(array, function (index, value) {
            // console.log(value); //n.fn.init [li, context: li]
            $('product_list>ul').append(value);
            // console.log(value);

            // console.log(array);
        });
    });
}(jQuery);