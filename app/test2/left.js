var color={};
color.leftBlack="rgb2b2b38";
color.leftBlue="rgb428bca";


var elei=$("<i class='leftDian '></i>");
$(".left-list ul ul li>a").prepend(elei);

$(".left-list>ul>li>a").on("click",function () {
    $(this).children('.fa-angle-down').toggleClass('jiantou');
    $(this).parent('li').siblings('li').children('a').children('.fa-angle-down').removeClass('jiantou');
    $(this).siblings("ul").stop(true,false).slideToggle(300);
    $(this).parent("li").siblings("li").children("ul").stop(false,true).slideUp(300);
    $(this).parent('li').siblings('li').removeClass(color.leftBlack);
    $(this).parent('li').addClass(color.leftBlack);
    if($(this).siblings('ul').length==0){
        $(".left-list>ul li").removeClass(color.leftBlue);
        $(this).parent('li').addClass(color.leftBlue);
    }else{}
});
$(".left-list>ul li li a").on("click",function () {
    $(".left-list>ul li").removeClass(color.leftBlue);
    $(this).parent('li').addClass(color.leftBlue)
});




