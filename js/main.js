function displayImages()
{
	"use strict";$(".m-photo-slider").find("img").each(function()
		{var a=$(this);a.removeClass("--hidden"),a.addClass("--visible")})
}
function resizeImages()
{
	"use strict";var a=5,b=1500;$(".m-photo-slider").find("img").each(function()
		{var c=$(this);c.attr("height","100%");var d=c.width(),e=c.height(),f=d/e;c.height($(".page").height()-88-44),c.parent().width(c.height()*f),b=b+c.height()*f+a}),b=Math.ceil(b)-a,$(".m-photo-slider").width(b)
}
function resizeScrolls()
{
	"use strict";$(".page__content").getNiceScroll().resize()
}
function initScrolls()
{
	"use strict";$(".page__content").niceScroll({zindex:"99",cursorcolor:"#000",cursorborder:"0px",cursorwidth:"5px",cursorborderradius:"0px",autohidemode:"false",scrollingspeed:60,mousescrollstep:80,touchbehavior:!0})
}
!function(a)
{
	"use strict";if(a(".m-photo-slider").waitForImages(function(){resizeImages(),displayImages(),initScrolls(),resizeScrolls()}),
		a(window).resize(function(){resizeImages(),resizeScrolls()}),window.addEventListener("orientationchange",
			function(){0!==window.orientation?a(".alert").addClass("alert--landscape"):a(".alert").removeClass("alert--landscape")},!1),!a)throw new Error("Requires jQuery.")}(jQuery);