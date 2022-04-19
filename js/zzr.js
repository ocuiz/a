$(function(){
    $("li").hover(function(){
        $(this).find("i").attr("class","iconfont icon-xiala-red-copy-copy")
    },function(){
        $(this).find("i").attr("class","iconfont icon-xiala-copy")
    })


    $(".nav2-con").on("mouseover","li",function(){
        $(this).find("em").css("transform","rotate(180deg)")
    })
    $(".nav2-con").on("mouseout","li",function(){
        $(this).find("em").css("transform","rotate(0deg)")
    })


    $(".slide").mouseover(function(){
        $(this).children(".slide-con").stop().slideDown()
    })
    $(".slide").mouseout(function(){
        $(this).children(".slide-con").stop().slideUp()
    })
    $(".slide").mouseover(function(){
        $(this).children(".slide-conn").stop().slideDown()
    })
    $(".slide").mouseout(function(){
        $(this).children(".slide-conn").stop().slideUp()
    })
    $(".slide").mouseover(function(){
        $(this).children(".slide-connn").stop().slideDown()
    })
    $(".slide").mouseout(function(){
        $(this).children(".slide-connn").stop().slideUp()
    })
    $(".slide").mouseover(function(){
        $(this).children(".nav2-slide").stop().slideDown()
    })
    $(".slide").mouseout(function(){
        $(this).children(".nav2-slide").stop().slideUp()
    })
    $(".map").mouseover(function(){
        $(this).children(".map-slide").stop().slideDown()
    })
    $(".map").mouseout(function(){
        $(this).children(".map-slide").stop().slideUp()
    })
    $(".search-type").click(function(){
        $(this).children(".type-content").toggle()
    })
    $(".red").click(function(){
        $(this).children(".search-box").css({"overflow":"visible","width":"432px","display":"block"})
       
    })
    
    

// 写了一个阻止事件冒泡的函数
    function stopPropagation(e) {
        // if (e.stopPropagation)
        e.stopPropagation();
        // else
        // e.cancelBubble = true;
        }
        
        $(document).bind('click',function(){
        $('.search-box').css('display','none');
        });
        
        $('.red').bind('click',function(e){
        stopPropagation(e);
        });

        

$(window).scroll(function(){
    if($(window).scrollTop()>400){
        $(".top").show()
    }else{
        $(".top").hide()
    }

})
$(".top").click(function(){
    $(window).scrollTop(0)
})
$(".swiper-slide").mouseover(function(){
    $(this).find(".zzc").stop().fadeIn()
})
$(".swiper-slide").mouseout(function(){
    $(this).find(".zzc").stop().hide()
})
$(".right").mouseover(function(){
    $(this).css("background-image","linear-gradient(to right, #bf0614, rgba(34, 0, 3, 0.77))")
})
$(".right").mouseout(function(){
    $(this).css("background-image","")
})


$(".tab-nav").on("mouseover","li",function(){
    var indx=$(this).index()
    $(".tab-con").children().eq(indx).show().siblings().hide()
})


$(".tab-nav").on("mouseover","li",function(){
    $(".before").removeClass("after")
    $(".before").find("h2").children("a").removeClass("after-a")
    $(".before").find("span").hide()
    $(this).addClass("after").find("h2").children("a").addClass("after-a")

    $(this).find("span").show()


})






})











