        window.onload=function(){
            /*
             *初始化数据
             */
            var linkDatas = {
                depart : [{
                    "code":0,
                    "name":"请选择"
                },{
                    "code":1,
                    "name":"办公室"
                },{
                    "code":2,
                    "name":"技术组"
                },],
            
                job :{
                    0:[
                        "请选择"
                    ],
                    1:[
                        "办公室主任",
                        "办公室副主任",
                        "干事"
                    ],
                    2:[
                        "技术总监",
                        "技术副总监",
                        "小青"
                    ]
                }
            }

            /*
             * 添加option
             *target为目标select，options为数据
             */
            function addOptions(target,options){
                var option = null;
                    optionsLength = options.length;
                
                for(var i =0;i<optionsLength;i++){
                    option = document.createElement("option");
                    option.value = options[i].value;
                    option.text = options[i].text;
                    target.options.add(option);
                }
            }

            /*
             * 实现二级联动的函数
             * parents为第一个选择器，childs为第二个
             */
            function linkage(parents,childs){
                var getDatas_1 = linkDatas.depart,
                    getDatas_2 = linkDatas.job,
                    init = getDatas_2[0],
                    pushData = [];

                // 初始化数据
                for(var i in getDatas_1){
                    pushData.push({
                        "text":getDatas_1[i].name,
                        "value":getDatas_1[i].code,
                    })
                }

                addOptions(parents,pushData);

                addOptions(childs,[{
                    "text" : init,
                    "value" : init
                }]);

                // 一旦改变，则二级内容也跟着改变
                parents.onchange = function(){
                    // 寻找与上级相关的数据
                    var findData = getDatas_2[this.value],
                        findDataLength = findData.length,//获取对应二级数据长度
                        pushChangeData = [];
                    childs.innerHTML = "";//每次更改清空二级select
                    for(var i =0 ;i<findDataLength;i++){
                        pushChangeData.push({
                            "value":findData[i],
                            "text":findData[i],
                        });
                    }
                    console.log(pushChangeData);
                    addOptions(childs,pushChangeData);
                }
            }

            // 调用联动函数
            linkage(document.getElementById("depart"),document.getElementById("job"));
        };