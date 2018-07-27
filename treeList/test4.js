    $(function(){
        var count = $(".linkTree").children('li').length;
        var i=new Array(count);
        var o =  $(".linkTree").children('.open').find('a').attr('data-num');
        for(var n=0;n<count;n++){
            if (n==o) {
                i[n]=0;
            }else{
                i[n]=1;
            }
        }
        $(".linkTree>li>a").on("click",function(){
            // 显示关闭
            $(this).parent().siblings('li').find('a').next().hide();
            $(this).next().slideToggle(400);
            var num = $(this).attr("data-num");
            // 一级菜单左侧图片效果
            if(i[num]==1){//点击打开
                $(this).parent().siblings('li').removeClass('open');
                $(this).parent().addClass('open');
                for(var n=0;n<count;n++){
                    i[n]=1;
                }
                i[num]++;
            }else{//点击关闭
                $(this).parent().siblings('li').removeClass('open');
                $(this).parent().removeClass('open');
                for(var n=0;n<count;n++){
                    i[n]=1;
                }
            }
        });
    })