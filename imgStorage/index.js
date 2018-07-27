		function showPic(whichPic){
			var source = whichPic.getAttribute("href");//获取链接
			var title = whichPic.getAttribute("title");
			var obj = document.getElementById("showBox");
			var showTitle = document.getElementById("showTitle");
			obj.setAttribute("src",source);//将对应链接放到展示处
			showTitle.textContent = title;
		}