// js实现菜单折叠
var flag=true; //开关按钮
function show_menu(){
	var menu1 = document.getElementById("menu1");
	if(flag){
		menu1.style.display="block";
		flag = false;
	}else{
		menu1.style.display="none";
		flag = true;
	}	
}

function show_menu1(){
	var menu1 = document.getElementById("menu1");
	menu1.style.display="none";
	flag = true; //鼠标离开时将flag默认回true
}

let img = new Image();
img.onload = drawWaterMarks;//图片加载成功的回调
img.src = '/images/olive.png';// 要绘制水印的图片

// 绘制水印
function drawWaterMarks(){
    // 创建画布
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    ctx.drawImage(img,0,0)
    ctx.font = "bold 18px 'Fira Sans'";
    ctx.fillStyle = 'rgba(255,255,255,0.6)'; //水印颜色

    // 绘制水印
    ctx.fillText("未命名", 10, 20);  //左上
}

