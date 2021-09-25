$('#showBtn').on('click', function () {
    $('.menu').removeClass('hide').addClass('show');
    shadowMenu();
})
$('#closeBtn').on('click', function () {
    $('.menu').removeClass('show').addClass('hide');
    shadowMenu();
})

$(window).resize(shadowMenu);
//当菜单弹出的时候，不要让body出现滚动条，当菜单消失的时候再让body出现滚动条
function shadowMenu() {
    //只有当屏幕尺寸小于992并且menu菜单显示
    if ($(window).innerWidth() <= 992 && $('.menu').hasClass('show')) {
        $('body').css('overflow', 'hidden');
    } else {
        $('body').css('overflow', 'auto');
    }
}

//滚动内容
var scrollLeft = document.getElementsByClassName("scrollBtn")[0];
var scrollRight = document.getElementsByClassName("scrollBtn")[1];
var scroll = document.getElementsByClassName('scroll')[0];
var ul = scroll.getElementsByTagName('ul')[0];
var x = "-288px"; 
var y = "0px"
scrollLeft.onclick = function(){
    ul.style.transform = "translateX(" + y + ")";
    scrollLeft.style.display = 'none';
}
scrollRight.onclick = function(){
    ul.style.transform = "translateX(" + x + ")";
    scrollLeft.style.display = 'block';
}