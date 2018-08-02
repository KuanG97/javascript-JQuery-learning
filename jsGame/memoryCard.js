var ctx;
var firstpick=true;
var firstcard;
var secondcard;
var frontbgcolor="rgb(251,215,73)";
var polycolor="rgb(254,11,0)";
var backcolor="rgb(128,0,128)";
var tablecolor="rgb(255,255,255)";
var cardrad=30; //多边形半径
var deck=[];//声明一副牌
var firstsx=30;//第一张牌的x位置
var firstsy=50;//第一张牌的y位置
var margin=30;//设置牌之间的间隔
var cardwidth=4*cardrad;
var cardheight=4*cardrad;
var matched;//这个变量在choose中设置，在flipback中使用
var starttime;//这个变量在init中设置，用来计算耗用时间

function Card(sx,sy,swidth,sheight,info){
	this.sx=sx;
	this.sy=sy;
	this.swidth=swidth;
	this.sheight=sheight;
	this.info=info;
	this.draw=drawback;
}

function makedeck(){
	var i;
	var acard;//保存一对牌中的第一张牌
	var bcard;//保存一对牌中的第二张牌
	var cx=firstsx;
	var cy=firstsy;
	for(i=3;i<9;i++){ //循环，生成三角形到八边形的牌
		acard=new Card(cx,cy,cardwidth,cardheight,i);
		deck.push(acard);
		bcard=new  Card(cx,cy+cardheight+margin,cardwidth,cardheight,i);
		deck.push(bcard);
		cx=cx+cardwidth+margin;
		acard.draw();
		bcard.draw();
	}

	shuffle();//洗牌
}

function shuffle(){
	var i;
	var k;
	var holder;//完成交换所需的变量
	var dl=deck.length;//保存一副牌中的数量
	var nt;
	for(nt=0;nt<3*dl;nt++){
		i=Math.floor(Math.random()*dl);//得到一张随机的牌
		k=Math.floor(Math.random()*dl);//得到一张随机的牌
		holder=deck[i].info;//存储对应i的信息
		deck[i].info=deck[k].info;
		deck[k].info=holder; 
	} 
}

function Polycard(sx,sy,rad,n){
	this.sx=sx;
	this.sy=sy;
	this.rad=rad;
	this.draw=drawpoly;
	this.n=n;//绘制边数
	this.angle=(2*Math.PI)/n;
}

function drawpoly(){ //绘制多边形
	ctx.fillStyle=frontbgcolor;
	ctx.fillRect(this.sx-2*this.rad,this.sy-2*this.rad,4*this.rad,4*this.rad);//矩形的左上角位于多边形中心的左上方
	ctx.beginPath();
	ctx.fillStyle=polycolor;
	var i;
	var rad=this.rad;
	ctx.moveTo(this.sx+rad*Math.cos(-.5*this.angle),this.sy+rad*Math.sin(-.5*this.angle));
	for(i=1;i<this.n;i++){
	ctx.lineTo(this.sx+rad*Math.cos((i-.5)*this.angle),this.sy+rad*Math.sin((i-.5)*this.angle));
}
	ctx.fill();
}

function drawback(){
	ctx.fillStyle=backcolor;
	ctx.fillRect(this.sx,this.sy,this.swidth,this.sheight);
}

function choose(ev){
	var mx;
	var my;
	var pick1;
	var pick2;
	if(ev.layerX || ev.layerX==0){
		mx=ev.layerX;
		my=ev.layerY;
	}
	else if(ev.offsetX || ev.offsetX==0){
		mx=ev.offsetX;
		my=ev.offsetY;
	}
	var i;
	for(i=0;i<deck.length;i++){
		var card=deck[i];
		if(card.sx>=0)//检查这张牌是否标记为已删
		if((mx>card.sx)&&(mx<card.sx+card.swidth)&&(my>card.sy)&&(my<card.sy+card.sheight)){
		if((firstpick) || (i!=firstcard))
		break;
	}
}


	if(i<deck.length){
		if(firstpick){
			firstcard=i;
			firstpick=false;
			pick1=new Polycard(card.sx+cardwidth*.5,card.sy+cardheight*.5,cardrad,card.info);//用这张牌的坐标中心创建多边形
			pick1.draw();
		}
		else{
			secondcard=i;
			pick2=new Polycard(card.sx+cardwidth*.5,card.sy+cardheight*.5,cardrad,card.info);
			pick2.draw();

			if(deck[i].info==deck[firstcard].info){ //是否配对
				matched=true;
				var nm=1+Number(document.f.count.value);//将配对数加1
				document.f.count.value=String(nm);
				if(nm>=.5*deck.length){
					var now=new Date();
					var nt=Number(now.getTime());
					var seconds=Math.floor(.5+(nt-starttime)/1000);//计算经过了多少秒
					document.f.elapsed.value=String(seconds);//输出时间
				}
			}else{
				matched=false;
			}
			firstpick=true;
			setTimeout(flipback,1000);//设置暂停
		}
	}
}

function flipback(){
	if(!matched){
		deck[firstcard].draw();
		deck[secondcard].draw();
	}
	else{
		ctx.fillStyle=tablecolor;
		ctx.fillRect(deck[secondcard].sx,deck[secondcard].sy,deck[secondcard].swidth,deck[secondcard].sheight);
		deck[secondcard].sx=-1;//不会再检查这张牌
		deck[firstcard].sx=-1;
	}
}

function init(){
	ctx=document.getElementById('canvas').getContext('2d');
	canvas1=document.getElementById('canvas');
	canvas1.addEventListener('click',choose,false);//设置事件处理程序
	makedeck();//创建一副牌
	document.f.count.value="0";
	document.f.elapsed.value="";
	starttime=new Date();
	starttime=Number(starttime.getTime());
	shuffle();//对牌的info洗牌
}