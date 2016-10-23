/*!
 * 小牛资本
 * @Author http://www.lonwin.net huabin.
 * @Copyright 2016
 */
$(function () {
    $("#dowebok").fullpage({
        navigation: true,
        anchors: ["section0","banner", "section2", "section1", "section3", "section5", "section4", "footer"],
        onLeave: function (e, d, f) {
            if (e == 1) {
                $(".s0_img1").removeClass('a-fadeinL').addClass('a-fadeoutL');
                $(".s0_img2 .i1").removeClass('a-bounceinT').addClass('a-bounceoutT');
                $(".s0_img3").removeClass('a-fadeinR1').addClass('a-fadeoutR');
                $(".s0p_img1").removeClass('a-fadeinT').addClass('a-fadeoutT');
                $(".s0p_img2").removeClass('a-bounceinL').addClass('a-bounceoutL');
                $(".s0p_img3").removeClass('a-fadeinB').addClass('a-fadeoutB');
                $(".s0p_img4").removeClass('a-fadeinB').addClass('a-fadeoutB');
            }
            if (e == 2) {
                $(".banner .slogan").removeClass('a-fadeinT').addClass('a-fadeoutT');
                $(".banner .ft").removeClass('a-fadeinB').addClass('a-fadeoutB');
                $(".toTop").show();
            }
            if (e == 3) {
                $(".section2 .r-line").removeClass('a-fadeinB').addClass('a-fadeoutB');
                $(".section2 .s2-txt .img3").removeClass('a-fadeinT').addClass('a-fadeoutT');
                $(".section2 .s2-txt .img2").removeClass('a-fadeinT1').addClass('a-fadeoutT');
                $(".section2 .s2-txt .img1").removeClass('a-fadeinT2').addClass('a-fadeoutT');
                $(".section2 .s2-txt1 .img3,.section2 .s2-txt2 .img3").removeClass('a-fadeinL2').addClass('a-fadeoutL');
                $(".section2 .s2-txt1 .img2,.section2 .s2-txt2 .img2").removeClass('a-fadeinL1').addClass('a-fadeoutL');
                $(".section2 .s2-txt1 .img1,.section2 .s2-txt2 .img1").removeClass('a-fadeinL').addClass('a-fadeoutL');
                $(".s2-ul li").find("span").css({"transition": ".1s", "width": "0"});
                $(".s2-ul li").css({"transition": ".1s", "width": "0"});
                $(".s2-ul li").find("a").css({"transition": ".1s", "opacity": "0"});
            }
            if (e == 4) {
                $(".section1 .tit").removeClass('a-fadeinT2').addClass('a-fadeoutT');
                $(".section1 .tit2").removeClass('a-fadeinT1').addClass('a-fadeoutT');
                $(".section1 .tit11,.section1 .tit111").removeClass('a-fadeinR').addClass('a-fadeoutR');
                $(".section1 .tit22").removeClass('a-fadeinR1').addClass('a-fadeoutR');
                $(".section1 .desc").removeClass('a-fadeinT').addClass('a-fadeoutT');
                $(".section1 .desc1").removeClass('a-fadeinR2').addClass('a-fadeoutR');
                $(".section1 .models li").eq(0).removeClass('a-fadeinB').addClass('a-fadeoutB');
                $(".section1 .models li").eq(1).removeClass('a-fadeinB1').addClass('a-fadeoutB');
                $(".section1 .models li").eq(2).removeClass('a-fadeinB2').addClass('a-fadeoutB');
                $(".section1 .models li").eq(3).removeClass('a-fadeinB3').addClass('a-fadeoutB');
                $(".section1 .models li").eq(4).removeClass('a-fadeinB4').addClass('a-fadeoutB');
            }
            if (e == 5) {
                $(".section3 .tit,.section3 .tit11,.section3 .tit111").removeClass('a-fadeinL').addClass('a-fadeoutL');
                $(".section3 .tit2,.section3 .tit22").removeClass('a-fadeinL1').addClass('a-fadeoutL');
                $(".section3 .desc,.section3 .desc1").removeClass('a-fadeinL2').addClass('a-fadeoutL');
            }
            if (e == 6) {
                $(".section5 .tit,.section5 .tit11,.section5 .tit111").removeClass('a-fadeinR').addClass('a-fadeoutR');
                $(".section5 .tit2,.section5 .tit22").removeClass('a-fadeinR1').addClass('a-fadeoutR');
                $(".section5 .desc,.section5 .desc1").removeClass('a-fadeinR2').addClass('a-fadeoutR');
            }
            if (e == 7) {
                $(".section4 .tit,.section4 .tit11,.section4 .tit111").removeClass('a-fadeinL').addClass('a-fadeoutL');
                $(".section4 .tit2,.section4 .tit22").removeClass('a-fadeinL1').addClass('a-fadeoutL');
                $(".section4 .desc,.section4 .desc1").removeClass('a-fadeinL2').addClass('a-fadeoutL');
            }
            if (e == 8) {
                $(".footer .tit").removeClass('a-fadeinT2').addClass('a-fadeoutT');
                $(".footer .tit2").removeClass('a-fadeinT1').addClass('a-fadeoutT');
                $(".footer .desc").removeClass('a-fadeinT').addClass('a-fadeoutT');
                $(".footer .tit11,.footer .tit111").removeClass('a-fadeinR').addClass('a-fadeoutR');
                $(".footer .tit22").removeClass('a-fadeinR1').addClass('a-fadeoutR');
                $(".footer .desc").removeClass('a-fadeinT').addClass('a-fadeoutT');
                $(".footer .desc1").removeClass('a-fadeinR2').addClass('a-fadeoutR');
            }
        },
        afterLoad: function (f, e) {
            if (e == 1) {
                $(".s0_img1").removeClass('a-fadeoutL').addClass('a-fadeinL');
                $(".s0_img2 .i1").removeClass('a-bounceoutT').addClass('a-bounceinT');
                $(".s0_img3").removeClass('a-fadeoutR').addClass('a-fadeinR1');
                $(".s0p_img1").removeClass('a-fadeoutT').addClass('a-fadeinT');
                $(".s0p_img2").removeClass('a-bounceoutL').addClass('a-bounceinL');
                $(".s0p_img3").removeClass('a-fadeoutB').addClass('a-fadeinB');
                $(".s0p_img4").removeClass('a-fadeoutB').addClass('a-fadeinB');
                $(".toTop").hide();
            }
            if (e == 2) {
                $(".banner .slogan").removeClass('a-fadeoutT').addClass('a-fadeinT');
                $(".banner .ft").removeClass('a-fadeoutB').addClass('a-fadeinB');
                $(".toTop").show();
            }
            if (e == 3) {
                $(".section2 .r-line").removeClass('a-fadeoutB').addClass('a-fadeinB');
                $(".section2 .s2-txt .img3").removeClass('a-fadeoutT').addClass('a-fadeinT');
                $(".section2 .s2-txt .img2").removeClass('a-fadeoutT').addClass('a-fadeinT1');
                $(".section2 .s2-txt .img1").removeClass('a-fadeoutT').addClass('a-fadeinT2');
                $(".section2 .s2-txt1 .img3,.section2 .s2-txt2 .img3").removeClass('a-fadeoutL').addClass('a-fadeinL2');
                $(".section2 .s2-txt1 .img2,.section2 .s2-txt2 .img2").removeClass('a-fadeoutL').addClass('a-fadeinL1');
                $(".section2 .s2-txt1 .img1,.section2 .s2-txt2 .img1").removeClass('a-fadeoutL').addClass('a-fadeinL');
                $(".s2-ul li").find("span").css({"transition": ".1s", "width": "0"});
                $(".s2-ul li").css({"transition": ".1s", "width": "0"});
                $(".s2-ul li").find("a").css({"transition": ".1s", "opacity": "0"});
                s2move();
            }
            if (e == 4) {
                $(".section1 .tit").removeClass('a-fadeoutT').addClass('a-fadeinT2');
                $(".section1 .tit2").removeClass('a-fadeoutT').addClass('a-fadeinT1');
                $(".section1 .desc").removeClass('a-fadeoutT').addClass('a-fadeinT');
                $(".section1 .tit11,.section1 .tit111").removeClass('a-fadeoutR').addClass('a-fadeinR');
                $(".section1 .tit22").removeClass('a-fadeoutR').addClass('a-fadeinR1');
                $(".section1 .desc1").removeClass('a-fadeoutR').addClass('a-fadeinR2');
                $(".section1 .models li").eq(0).removeClass('a-fadeoutB').addClass('a-fadeinB');
                $(".section1 .models li").eq(1).removeClass('a-fadeoutB').addClass('a-fadeinB1');
                $(".section1 .models li").eq(2).removeClass('a-fadeoutB').addClass('a-fadeinB2');
                $(".section1 .models li").eq(3).removeClass('a-fadeoutB').addClass('a-fadeinB3');
                $(".section1 .models li").eq(4).removeClass('a-fadeoutB').addClass('a-fadeinB4');
            }
            if (e == 5) {
                $(".section3 .tit,.section3 .tit11,.section3 .tit111").removeClass('a-fadeoutL').addClass('a-fadeinL');
                $(".section3 .tit2,.section3 .tit22").removeClass('a-fadeoutL').addClass('a-fadeinL1');
                $(".section3 .desc,.section3 .desc1").removeClass('a-fadeoutL').addClass('a-fadeinL2');
            }
            if (e == 6) {
                $(".section5 .tit,.section5 .tit11,.section5 .tit111").removeClass('a-fadeoutR').addClass('a-fadeinR');
                $(".section5 .tit2,.section5 .tit22").removeClass('a-fadeoutR').addClass('a-fadeinR1');
                $(".section5 .desc,.section5 .desc1").removeClass('a-fadeoutR').addClass('a-fadeinR2');
            }
            if (e == 7) {
                $(".section4 .tit,.section4 .tit11,.section4 .tit111").removeClass('a-fadeoutL').addClass('a-fadeinL');
                $(".section4 .tit2,.section4 .tit22").removeClass('a-fadeoutL').addClass('a-fadeinL1');
                $(".section4 .desc,.section4 .desc1").removeClass('a-fadeoutL').addClass('a-fadeinL2');
            }
            if (e == 8) {
                $(".footer .tit").removeClass('a-fadeoutT').addClass('a-fadeinT2');
                $(".footer .tit2").removeClass('a-fadeoutT').addClass('a-fadeinT1');
                $(".footer .desc").removeClass('a-fadeoutT').addClass('a-fadeinT');
                $(".footer .tit11,.footer .tit111").removeClass('a-fadeoutR').addClass('a-fadeinR');
                $(".footer .tit22").removeClass('a-fadeoutR').addClass('a-fadeinR1');
                $(".footer .desc1").removeClass('a-fadeoutR').addClass('a-fadeinR2');
            }
        }
    });
    $("#fp-nav").removeClass("right").addClass("left");
    /*var id=setInterval(t,3000);var oT=$(".b-news ul li").css("height").slice(0,-2);var i=$(".b-news ul li").size();var c=0;function t(){$(".b-news ul").animate({"margin-top":-oT*c+"px"});c++;if(c==i){c=0;}}$(".b-news ul li").hover(function(){clearInterval(id);},function(){id=setInterval(t,3000);})*/
});
function s2move() {
    $(".section2 .wrap .s2-txt").hover(function () {
        $(".mainxz1 img").css({
            "animation": "none",
            "-webkit-animation": "none",
            "-moz-animation": "none",
            "-o-animation": "none",
            "opacity": "1"
        });
        $(".mainxz2 img").css({
            "animation": "none",
            "-webkit-animation": "none",
            "-moz-animation": "none",
            "-o-animation": "none",
            "opacity": "1"
        });
        s2I(0, "0s", "0.3s", ".6s");
        s2I(5, "0s", "0.3s", ".6s");
        s2I(2, ".6s", ".9s", "1.2s");
        s2I(3, ".6s", ".9s", "1.2s");
        s2I(1, "1.2s", "1.5s", "1.8s");
        s2I(4, "1.2s", "1.5s", "1.8s");
    }, function () {
        $(".mainxz1 img").css({
            "animation": " mainzx1 120s infinite linear",
            "-webkit-animation": "mainzx1 120s infinite linear",
            "-moz-animation": "mainzx1 120s infinite linear",
            "-o-animation": "mainzx1 120s infinite linear",
            "opacity": "0.7"
        });
        $(".mainxz2 img").css({
            "animation": " mainzx2 60s infinite linear",
            "-webkit-animation": "mainzx2 60s infinite linear",
            "-moz-animation": "mainzx2 60s infinite linear",
            "-o-animation": "mainzx2 60s infinite linear",
            "opacity": "0.7"
        })
    });
}
function s2I(i, t1, t2, t3) {
    $(".s2-ul li").eq(i).find("span").css({"transition": "width .3s linear " + t1, "width": "129px"});
    if (i == 1 || i == 4) {
        $(".s2-ul li").eq(i).find("span").css({"transition": "width .3s linear " + t1, "width": "116px"});
    }
    $(".s2-ul li").eq(i).css({"transition": "width .3s linear " + t2, "width": "136px"});
    $(".s2-ul li").eq(i).find("a").css({"transition": "opacity .1s linear " + t3, "opacity": "1"})
}