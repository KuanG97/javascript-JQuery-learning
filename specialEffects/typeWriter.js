window.onload=function(){
	var twArr = [],//打字的数据库队列
		twing = false,//用于判断打字机的线程是否开启
		twID = [],//打字机线程ID
		twTime = 10,//用于定时调用的时间
		obj1 = document.getElementById("typeWriterEffect"),
		obj2 = document.getElementById("typeWriterEffect2"),
		twEffect = function(e,str){//添加显示的元素
			twArr.push({
				"context":e,//目标元素上下文
				"str":str,//显示的元素
				"lening":0,//截取的进度
				"maxL":str.length//最大的进度
			})
		},
		closeTw = function(){//关闭定时调用
			clearTimeout(twID);//关闭线程
			twing = true;
		},
		twUi = function(){//定时调用
			var i = 0,
				L = twArr.length,
				eing = null;
				for (var i = 0; i < L; i++) {
					eing = twArr[i]//效果同时加载多对象数组
					eing.lening++;
					if (eing.lening>eing.maxL) {//不设置关闭线程则打字效果循环
						eing.lening = 0;
					}
					eing.context.innerHTML = eing.str.substring(0,eing.lening)+"_";
				}
				var num = Math.floor(Math.random()*50+1);//1-50个随机数
				twID = setTimeout(twUi,num*twTime);//开启线程
				if(twID==eing.maxL){//到达最后关闭线程
					closeTw();
				}
		},
		//开启定时调用，参数为设置定时调用的时间
		startTw = function (twTime) {
			if (!twing) {//如果没有开启才开启
				twTime = twTime;
				twUi();//开始定时调用
			}
		};
		//设置内容对象数组
		twEffect(obj1,"这就是打字机效果,打字速度随机哦！！！！！");
		//开始调用线程
		startTw(twTime);
}