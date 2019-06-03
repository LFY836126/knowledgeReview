/**
 * Created by LFY on 2018/10/7.
 */
/*这个代码要更改两点：
1.更改一下逻辑过程，就是不要把标记的剩余雷数作为游戏结束的依据
逻辑应该更改为揭示出的方块数 = 总方块数 - 总雷数
2.最好不要在点开方块的啥时候才计算方块周围的雷数，会产生重复计算
改正：生成雷之后就把雷周围的8个数字+1

点击开始游戏
1.动态生成100个格
2.leftClick
没有雷
    数字 代表周围八个方格的雷数
    空格 扩散
有雷：游戏结束
3.rightClick
没有标记并且没有数字：做标记
 判断标记是否正确
 10个正确标记：提示成功
没有标记并且有数字：不做任何操作
有标记：取消标记
*/
var startBtn = document.getElementById('btn');
var box = document.getElementById('box');
var flagbox = document.getElementById('flagBox');
var alertBox = document.getElementById('alertBox');
var alertImg = document.getElementById('alertImg');
var closeBtn = document.getElementById('closeBtn');
var score = document.getElementById('score');
var minesNum;/*雷的数量*/
var mineOver;/*标记出雷的数量*/
var minrTrue;
var mineMap = [];
var block;
var lock = true;
bindEvent();
function bindEvent(){
    /*点击开始出现雷盘和剩余雷的数目*/
    startBtn.onclick = function(){
        if(lock){
            box.style.display = "block";
            flagbox.style.display = "block";
            init();/*随机生成10*10的雷盘*/
            lock = false;
        }
    }
    box.oncontextmenu = function(){
        return false;
    }
    box.onmousedown = function(e){
        var event = e || window.event;
        var target = event.target || event.srcElement;
        if(e.which == 1){
            leftClick(target);
        } else if(e.which == 3){
            rightClick(target);
        }
    }
    /*游戏失败点击× 触发事件
     1.弹出失败框消失
     2.所有归零，就是把box棋盘隐藏
     3.把flagBox剩余雷数字样也清空
     4.将box棋盘中的内容div啥的全部清空，一切归零
    */
    closeBtn.onclick = function(){
        alertBox.style.display = "none";
        box.style.display = "none";
        flagBox.style.display = "none";
        box.innerHTML = null;
        lock = true;
    }
}
function init(){
    minesNum = 10;
    mineOver = 10;
    mineTrue = 10;	
    score.innerHTML = mineOver;
    for(var i = 0; i < 10; i++){
        for(var j = 0; j < 10; j++){
            var con = document.createElement('div');
            con.classList.add("block"); /*给每个雷添加一个类名*/
            con.setAttribute('id' , i + "-" + j);/*每个独特的id记录自己的位置*/
            box.appendChild(con); /*将每个小盒子插入到box中*/
            mineMap.push({mine:0});
        }
    }
    block = document.getElementsByClassName('block');
    while(minesNum){
        var mineIndex = Math.floor(Math.random() * 100);
        if(mineMap[mineIndex].mine === 0){
            mineMap[mineIndex].mine = 1;/*这也是标记雷，mineMap就是个数组，和block一样大，每位都存着一个对象，里面有个mine属性有雷为1，没雷为0*/
            block[mineIndex].classList.add('isLei'); /*给选中的雷再添加一个类名标记这是雷*/
            minesNum--;
        }
    }
}
function leftClick(dom){
    /*如果被插旗就不能左键点击了*/
    if(dom.classList.contains('flag')){
        return ;
    }
    var isLei = document.getElementsByClassName('isLei');
    if(dom && dom.classList.contains('isLei')){
        /*点击到雷触发事件
         1.所有雷显示出来
         2.出现游戏失败图片
         */
        for(var i = 0; i < isLei.length; i++) {
            isLei[i].classList.add('show');
        }
       setTimeout(function(){
           alertBox.style.display = "block";
           alertImg.style.backgroundImage = "url('img/defeat.png')";
       },800);
    }
    else{
        var n = 0 ;
        /*点开不是雷
        1.将id值分割为坐标
        2.将坐标周围8个点通过id也选出来、
        3.用n累加周围雷数
        4.当 n == 0 证明周围没有雷，那么只要是不越界也就是不在棋盘外的话，就设置为左键点击的状态，翻开再判断是不是0，这就是一个递归的过程
        5.当n等于0就终止，不在翻开周围的坐标，
        */
        var posArr = dom && dom.getAttribute('id').split('-');
        var posX = posArr && +posArr[0];
        var posY = posArr && +posArr[1];
        dom && dom.classList.add('num');
        for(var i = posX - 1; i <= posX + 1; i++){
            for(var j = posY - 1 ; j <= posY + 1 ; j ++){
                var aroundBox = document.getElementById(i + '-' + j);
                if(aroundBox && aroundBox.classList.contains('isLei')){
                    /*如果周围有雷就+1*/
                    n ++;
                }
            }
        }
        if(dom && n != 0){
            dom.innerText = n;
        }
        /*n == 0代表周围没有雷，那么只要是不越界的，并且没有被翻开过的地方，就都翻开，然后再对翻开的进行判断周围有没有雷，递归*/
        if(n == 0){
            for(var i = posX - 1; i <= posX + 1; i++) {
                for (var j = posY - 1; j <= posY + 1; j++) {
                    var nearBox = document.getElementById(i + "-" + j);
                    if(nearBox){
                        if(!nearBox.classList.contains('check')){
                            nearBox.classList.add('check');
                            leftClick(nearBox);
                        }
                    }
                }
            }
        }
    }
}
function rightClick(dom){
    if(dom.classList.contains('num')){
        /*点到的是数字那么什么都不做*/
        return;
    }
    /*切换 ：如果标记了就取消，如果未标记，那就标记
    也就是如果类名中有flag，那就变为没有，如果没有，那就加上flag
    */
    dom.classList.toggle("flag");
    if(dom.classList.contains('flag')){
    	if(dom.classList.contains('isLei')){
			mineTrue --;
    	}
    	mineOver --;
    }
    if(!dom.classList.contains('flag')){
    	if(dom.classList.contains('isLei')){
    		mineTrue ++;	
    	}
        mineOver ++;
    }
    score.innerHTML = mineOver;
    if(mineOver == 0 && mineTrue == 0){
        alertBox.style.display = "block";
        alertImg.style.backgroundImage = "url('img/victory.png')";
    }
    else if(mineOver == 0 && mineTrue !== 0){
    	alertBox.style.display = "block";
        alertImg.style.backgroundImage = "url('img/defeat.png')";
    }
}