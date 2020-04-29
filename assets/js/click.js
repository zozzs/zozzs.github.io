jQuery(document).ready(function($) { 
    $("html,body").click(function(e){ 
        var dfs=[
			"你刚才的点击导致了小峰的头发又多了一根",
			"你刚才的点击使你的寿命增加了1ns",
            "你刚才的点击使计生局放开了"+Math.floor(Math.random()*10)+"胎政策。",
            "你刚才的点击使黄石超级火山爆发了",
            "你刚才的点击使罗辑又换了一个女朋友",
            "你刚才的点击使小米公司收购了高通公司",
            "你刚才的点击引爆了"+Math.random()*10000+"光年外的一颗恒星",
            "你刚才的点击使头发变得乌黑浓密了",
            "你刚才的点击使你的波函数坍塌了", 
            "你刚才的点击使你的银行卡被盗刷了", 
            "你刚才的点击使普朗克常数扩大了十倍", 
            "你刚才的点击熄灭了蓝色空间号二号主引擎", 
            "你刚才的点击创造了一个小宇宙", 
            "你刚才的点击使宇宙由开放转为闭合", 
            "你刚才的点击让云天明和关一帆在一起了",
            "你刚才的点击使三体第"+Math.floor(Math.random()*100)+"舰队起航了", 
            "你刚才的点击使第"+Math.floor(Math.random()*10000)+"号宇宙毁灭了", 
            "你刚才的点击向太阳发射了一颗光粒", 
            "你刚才的点击导致三体行星撞上他的主星",
            "你刚才的点击令人类文明将在"+(new Date()).getFullYear()+"年"+((new Date()).getMonth()+1)+"月"+(new Date()).getUTCDate()+"日23:59:59毁灭",
            "你刚才的点击启动了威慑系统",
            "你刚才的点击使谢顿计划脱离了正轨",
            "你刚才的点击使程心按下了威慑开关",
            "你刚才的点击引起了"+Math.random()*10000+"光年外一个行星的爆炸",
            "你刚才的点击使宇宙中产生了一些暗物质",
            "你刚才的点击引起了所有行星上的地震",
            "你刚才的点击使一台诺基亚摔碎了",
            "你刚才的点击使360云盘倒闭了",
            "你刚才的点击小米发布了MIX概念手机",
            "千万不要再次点击鼠标",
            "真的千万不要再次点击鼠标"
        ];
		function rand(){
			var r = Math.floor(Math.random() * 255 + 1) - 1
			var g = Math.floor(Math.random() * 255 + 1) - 1
			var b = Math.floor(Math.random() * 255 + 1) - 1
			return "rgb("+r+","+g+","+b+")"
		}
        var n=Math.floor(Math.random() * dfs.length + 1)-1;   //随机获取一条数据
        var $i=$("<p/>").text(dfs[n]);      //新建一个b标签，并显示随机的话语
        var x=e.pageX,y=e.pageY;            //获取鼠标点击的x，和y
        $i.css({                            //为标签赋予css值
            "z-index":9999, 
            "top":y-20, 
            "left":x, 
            "position":"absolute", 
            "color":rand(),
            "font-family":"微软雅黑",
            "-moz-user-select": "none",
            "-webkit-user-select": "none",
            "-ms-user-select": "none",
            "-khtml-user-select": "none",
            "user-select": "none",
        }); 
        $("body").append($i);               //在尾部插入
        $i.animate( {"top":y-180,"opacity":0}, 1400, function(){$i.remove();});     //动画消除
        e.stopPropagation();
    });
}); 



