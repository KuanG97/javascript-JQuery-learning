$(function(){
	var noteCount=0;//代表第一块位置
	var noteCountMax= $("#note").children().length/3;//轮播块数目
	var noteTime = 6000;//轮播时间
	var noteSpeed = 500;//切换时间

	function show(){
		var notewidth= $("#note").width()*0.25;
		if(noteCount==0){
			noteCount = 1;
		}else if (noteCount==noteCountMax) {
			noteCount = 0;
		}
		$("#note").animate({left:-noteCount*notewidth},noteSpeed);//（切换向左动画，速度）
		noteCount++;
	}
	//按键点击轮播下一页
	$("#noteRight").click(function(){
		show();
	});
	setInterval(show,noteTime);
});