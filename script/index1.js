// ;
//  function () {
// const goodslist = document.querySelector('.goodslist')
// $ajaxpromise({
// url: 'http://localhost/projectname/php/database/heass.php'
// }).then(function (data) {
// console.log(data);
// let taobaoarr = JSON.parse(data)
// console.log(taobaoarr);

// let strhtml = '<ul>';
// for (let value of taobaoarr) {
//     strhtml += `
//     <a href="details.html?sid=${value.sid}">
//         <li>
//             <img src="${value.url}">
//             <p>${value.title}</p>
//             <span>${value.price}</span>
//             <span>${value.sailnumber}</span>
//         </li>   
//     </a>         
//  `;
// }
// strhtml += '</ul>';
// goodslist.innerHTML = strhtml;
//     })
// }();
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