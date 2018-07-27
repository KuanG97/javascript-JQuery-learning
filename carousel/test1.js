$(function(){
	var Count=0;//代表第一块位置
	var CountMax= $("#carousel").children().length;//轮播块数目
	var Time = 6000;//轮播时间
	var Speed = 500;//切换时间

	//默认用该函数，向右轮播
	function show(){
		var width= $("#carousel").width()*0.25;
		if(Count==0){
			Count = 1;
		}else if (Count==CountMax) {
			Count = 0;
		}
		$("#carousel").animate({left:-Count*width},Speed);//（切换动画，速度）
		Count++;
	}

	//默认用该函数，向左轮播
	function showLeft(){
		var width= $("#carousel").width()*0.25;
		Count--;
		if(Count==-1){
			Count = CountMax-1;
		}
		$("#carousel").animate({left:-Count*width},Speed);//（切换动画，速度）
	}

	//按键点击轮播下一页
	$("#carouselRight").click(function(){
		show();
	});
	$("#carouselLeft").click(function(){
		showLeft();
	});
	
	//链接
	var n=0;
	$(".dot a").each(function(){
		var width= $("#carousel").width()*0.25;
		$(this).attr("data-long",-(n*width));
		n++;
	});
	$(".dot a").click(function(){
		var L=$(this).attr("data-long");
		$("#carousel").animate({left:L},Speed);
	})
	//定时器
	setInterval(show,Time);
});