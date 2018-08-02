/***************************
字符权重及规则：
数字1，字母2，其他字符3
党密码长度小于6时不符合标准；
长度>=6，强度<10；————弱
长度>=6，强度>=10且<15；————中
长度>=6，强度>=15；————强
****************************/
window.onload = function(){
	// 设置属性
	function setBar(_this,optionType) {
		for(var cs in optionType){//for in遍历optionType
			_this.style[cs] = optionType[cs];
		}
		return _this;
	}

	function pwdStren(pwdStren,show) {
		var self = this;
		pwdStren.onkeyup = function() {//每输入一个触发
			var barColor = ["red","rgba(255,165,0,0.8)","rgba(230,219,94,0.8)","rgba(0,128,0,0.5)","#fff"],
			style1 = {
				"width":"35px",
				"color":barColor[4],
				"background":barColor[1],
			},
			style2 = {
				"width":"70px",
				"color":barColor[4],
				"background":barColor[2],
			},
			style3 = {
				"width":"105px",
				"color":barColor[4],
				"background":barColor[3],
			},
			msgs = ["密码太短","弱","中","强"],
			pwd = pwdStren.value,
			pwdL = pwd.length,
			streng = 0;

			console.log("密码："+pwd);
			var charStreng =function(char){
				if(char>=48 && char<=57){//数字
					return 1;
				}else if(char>=97 && char <=122){//字母
					return 2;
				}else{//其他特殊字符
					return 3;
				}
			}

			if(pwdL<6){
				show.innerText=msgs[0];
				setBar(show,{
					"color":barColor[0],
					"background":barColor[4],
					"width":"66px"
				});
			}else{
				//计算总强度
				for(var i=0;i<pwdL;i++){
					streng +=charStreng(pwd.toLocaleLowerCase().charCodeAt(i));
				}

				if (streng<10) {
					show.innerText = msgs[1];
					setBar(show,{
						"color":style1.color,
						"background":style1.background,
						"width":style1.width
					})
				}else if (streng<15) {
					show.innerText = msgs[2];
					setBar(show,{
						"color":style2.color,
						"background":style2.background,
						"width":style2.width
					})
				}else if (streng>=15) {
					show.innerText = msgs[3];
					setBar(show,{
						"color":style3.color,
						"background":style3.background,
						"width":style3.width
					})
				}
			}

		}
	}

	pwdStren(document.getElementById("pwdStren"),document.getElementById("show"));
}