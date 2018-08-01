// 搜索框的出现&&隐藏
$(".searchBtn").click(function(){
    $(".searchBtn").slideToggle(300);
    $(".search").slideToggle(300);
    $(".topList").slideToggle(100);
});
$(document).mousedown(function(e){
    if(!($(".search").is(":hidden"))){
        if($(e.target).parents(".search").length==0){
            $(".searchBtn").slideToggle(300);
            $(".search").slideToggle(300);
            $(".topList").slideToggle(100);
        }
    }else{
        return false;
    }
})