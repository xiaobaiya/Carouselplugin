(function ($) {
    $.fn.slideShow = function (opt) {
        var defaults = {
            "autoPlay":true,
            "autoPlaytime":2000,
            "eType":"click"
        };
        $.extend(defaults,opt);
        return this.each(function () {
            var currentSlideShow = $(this),
                ul = currentSlideShow.find("ul"),
                nav = currentSlideShow.find(".nav span"),
                width = ul.find("li").eq(0).width(),
                timer = null,
                iNow = 0;


            nav.on(defaults.eType,function () {
                var currentSpan = $(this),
                    index = currentSpan.index();
                iNow = index;
                ul.css({
                    "left": - width * index
                });
                nav.removeClass("active");
                currentSpan.addClass("active");
            });
            if(defaults.autoPlay){
                currentSlideShow.hover(
                    function () {
                        clearInterval(timer);
                    },
                    function () {
                        autoPlay();
                    }
                );
                autoPlay();
            }
            function autoPlay(){
                timer = setInterval(function () {
                    iNow++;
                    if(iNow > nav.length - 1){
                        iNow = 0;
                    }
                    nav.eq(iNow).trigger("click");
                },defaults.autoPlaytime)
            }
        })
    }
})(jQuery);