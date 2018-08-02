var enterSubmit = document.getElementById("enterSubmit");
	enterSubmit.onkeyup = function(e){
		e = e||window.event;//获取强兼容性事件对象
		var keycode = e.keyCode ||e.which ||e.charCode;
		if (keycode===13) {
			alert("提交成功");
		}
}

/**********方法二*************************
enterSubmit.onkeydown=function(event){
e = event ? event :(window.event ? window.event : null);
	if(e.keyCode==13){
	alert("提交成功");
	}
}
********************************************/