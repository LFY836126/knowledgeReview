/**
 * Created by LFY on 2018/10/9.
 */
/*
点击开始游戏  -->startPaget消失
随即出现食物    出现三节蛇开始运动
上下左右  -->改变运动方向
判断吃到食物  -->食物消失 蛇+1
判断游戏结束  -->弹出框
*/
var content = document.getElementById('content');
var startPage = document.getElementById('startPage');
init();
function init(){
    /*地图属性*/
    this.mapW = parseInt(getComputedStyle(content).width);
    this.mapH = parseInt(getComputedStyle(content).height);
    this.mapDiv = content;
    /*食物属性*/
    this.foodW = 20;
    this.foodH = 20;
    this.foodX = 0;
    this.foodY = 0;
    this.snakeH = 20;
    this.snakeW = 20;
    this.snakeBody = [[3,1,"head"],[2,1,"body"],[1,1,"body"]];
    /*蛇*/
    startGame();
}
function startGame(){
    food();
    snake();
}
function food(){
    var food = document.createElement('div');
    food.style.height = this.foodH + "px";
    food.style.width = this.foodW + "px";
    food.style.position = "absolute";
    this.foodX = Math.floor(Math.random() * (this.mapW/20));
    this.foodY = Math.floor(Math.random() * (this.mapH/20));
    food.style.left = this.foodX * 20 + "px";
    food.style.top = this.foodY * 20 + "px";
    this.mapDiv.appendChild(food).setAttribute('class' , 'food');
}
function snake(){
    for(var i = 0; i < this.snakeBody.length; i++){
        var snake = document.createElement('div');
        snake.style.height = this.snakeH +"px";
        snake.style.width = this.snakeW +"px";
        snake.style.position = "absolute";
        snake.style.left = this.snakeBody[i][0] * 20 +"px";
        snake.style.top = this.snakeBody[i][1] * 20 +"px";
        snake.classList.add();
    }
}