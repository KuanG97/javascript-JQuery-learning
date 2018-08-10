			window.onload=function(){
				$("#username").focus()
			}
		/* 失焦判断 */
			$("input").blur(function(){
				$(".note").css("color","#BD362F")
				if($(this).is("#username")){             //姓名判断
					var na=/^[\u4E00-\u9FA5]{2,4}$/
					if($("#username").val()!=""){
						if(!(na.test($("#username").val()))){
							$(".note1").text("请输入2-4个汉字");
							$(this).css("border","1px solid #BD362F")
							return false;
						}else if(na){
							$(".note1").text("");
							return true;
						}
					}else{
						$(".note1").text("");
					}
				}
				if($(this).is("#userphone")){            //手机号判断
					var ph=/^1[3|5|7|8|][0-9]{9}$/
					if($("#userphone").val()!=""){
					if(!(ph.test($("#userphone").val()))){
						$(".note2").text("请输入正确手机号");
						$(this).css("border","1px solid #BD362F")
						return false;
					}else if(ph){
						$(".note2").text("");
						return true;
					}
					}else{
						$(".note2").text("");
					}
				}
				if($(this).is("#useraddress")){            //地址判断
					var ad=/^(?=.*?[\u4E00-\u9FA5])[\dA-Za-z\u4E00-\u9FA5]{8,32}/;
					if($("#useraddress").val()!=""){
					if(!(ad.test($("#useraddress").val()))){
						$(".note3").text("请输入正确地址");
						$(this).css("border","1px solid #BD362F")
						return false;
					}else if(ad){
						$(".note3").text("");
						return true;
					}
					}else{
						$(".note3").text("");
					}
				}
			})
		/*** 聚焦提示 */
			$("input").focus(function(){
				if($(this).is("#username")){
					$(".note1").text("2-4个汉字").css("color","#aaa")
					$(this).css("border","1px solid #aaa")
				}
				if($(this).is("#userphone")){
					$(".note2").text("11位手机号码").css("color","#aaa")
					$(this).css("border","1px solid #aaa")
				}
				if($(this).is("#useraddress")){
					$(".note3").text("最少8个字符（汉字、字母和数字）").css("color","#aaa")
					$(this).css("border","1px solid #aaa")
				}
			})
		/*提交验证*/
			$("#sub").click(function(){
				var na=/^[\u4E00-\u9FA5]{2,4}$/;   //姓名正则
				var ph=/^1[3|5|7|8|][0-9]{9}$/;    //手机号正则
				var ad=/^(?=.*?[\u4E00-\u9FA5])[\dA-Za-z\u4E00-\u9FA5]{8,32}/;     //地址正则
				if(na.test($("#username").val())&&ph.test($("#userphone").val())&&ad.test($("#useraddress").val())){
					return true;
				}else{
					if($("#username").val()==""){
						$(".note1").text('请你填写用户名')
					}
					if($("#userphone").val()==""){
						$(".note2").text('请你填写手机号')
					}
					if($("#useraddress").val()==""){
						$(".note3").text('请你填写地址')
					}
					return false;
				}
			})