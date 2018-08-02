// 轮播图
$(function(){
	var Count=0;//代表第一块位置
	var CountMax= 6;//轮播块数目
	var CountMax2 = 1/CountMax;
	var Time = 6000;//轮播时间
	var Speed = 400;//切换时间
	var title;
	title = $(".itemBox:eq(0)").attr("data-title");
	$(".dotHeadLine").text(title);

	function show(){
		var width= $("#xx-carousel").width()*CountMax2;
		if(Count==0){
			Count = 1;
		}else if (Count==CountMax) {
			Count = 0;
		}
		title = $(".itemBox:eq("+Count+")").attr("data-title");
		$(".dotHeadLine").text(title);
		$(".dot .floatL").siblings().removeClass("active");
		$(".dot .floatL:eq("+Count+")").addClass("active");
		$("#xx-carousel").animate({left:-Count*width},Speed);//切换动画
		Count++;
	}
	var n=0;
	$(".dot .floatL").each(function(){
		$(this).attr("data-long",n);
		n++;
	});
	$(".dot .floatL").hover(function(){
		var width= $("#xx-carousel").width()*CountMax2;
		var active = $(this).attr("data-long");
		title = $(".itemBox:eq("+active+")").attr("data-title");
		$(".dotHeadLine").text(title);
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		Count = active;
		$("#xx-carousel").animate({left:-active*width},200);
	})
	setInterval(show,Time);
});