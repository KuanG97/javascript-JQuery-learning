var keyWordsFilter = document.getElementById("keyWordsFilter");
keyWordsFilter.onclick = function(){
	var keyWordList = [
		"弱不禁风",
		"玫瑰花"
	],
	keyWordListLen = keyWordList.length;
	for(var i = 0;i<keyWordListLen;i++){
		keyWordsFilter.value = keyWordsFilter.value.replace(keyWordList[i],"***");//正则过滤
	}
}