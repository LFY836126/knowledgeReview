计算机网络，数据库，数据结构，操作系统


## 77.DOM
### 1.DOM：Document Object Model （文档对象模型）
### 2.DOM作用：总之就是，DOM是编程接口，可以操作html和xml，不能操作CSS，任何东西都不能操作CSS，但是可以间接操作CSS
DOM定义了表示和修改文档所需的对象、这些对象的行为和属性以及这些对象之间的关系。
DOM对象即为宿主对象，由浏览器厂商定义，用来操作html和css功能的一类对象的集合。
也有人称DOM是对HTML以及XML的标准编程接口。
（DOM不能操作CSS，任何不能操作CSS，这个不能改变指的是，不能改变CSS样式表，但是可以通过间接的方式改变htm行间样式去改变它）

XML和HTML最大的区别：可以自定义标签，之前都是用XML但是现在已经被js中的就是json所取代
例1：
    var div = document.getElementsByTagName('div')[0];                    
//document.getElementsByTagName('div') 就可以将所有div选出来封装进一个类数组里，所有div按照类数组索引位进行排序，所以 例题中的[0]代表取出类数组中第一个div
//选出来的 div叫做dom对象，对象能做的增删改查，这个div都能做。
在ie8及ie8以下版本浏览器通过id选择的时候可能不知选择id的，name也会被选出来，而且，c可以利用多个class属性确定一个标签，例如getElementsByClassName("demo con");而且顺序无所谓，都行
例2：
    var div = document.getElementsByTagName('div')[0];
    div.style.height = "100px";
    div.style.width = "100px";
    div.style.backgroundColor = "pink";
//网页上就会出现100px长宽的粉色的区域
例3：
    var div = document.getElementsByTagName('div')[0];
    div.style.height = "100px";
    div.style.width = "100px";
    div.style.backgroundColor = "pink";
    div.onclick = function (){
        this.style.backgroundColor = "red";
        this.style.height = "200px";
        this.style.width = "200px";
        this.style.borderRadius = "50%";
    }
//接着上道题，点击后就变红了而且宽高等属性也会改变，函数里的this指的就是谁调用它this就指向谁。borderRadius属性代表变为圆角。
例4：实现一直点击。两个颜色之间来回切换
解题思路：利用点击次数奇偶判断来改变颜色
    var div = document.getElementsByTagName('div')[0];
    div.style.height = "100px";
    div.style.width = "100px";
    div.style.backgroundColor = "pink";
    var count = 0;
    div.onclick = function (){
        count ++;
        if(count % 2 == 0){
            this.style.backgroundColor = "pink";
        }
        else{
            this.style.backgroundColor = "red";
        }
    }
//点一下变红，点一下变粉，再点再变红等等

例5：选项卡功能，点击哪个按钮，按钮颜色改变，及对应的div框内的内容进行改变
解题思路：建立三个按钮和三个div，首先要令div和button都显示出来一个，然后再每次点击之后，将某些格式清除，之后再令目的div和button显示出应有格式，中间产生了闭包，要解决。
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
    <style type = text/css>
        .content{
            border : 2px solid red;
            height: 200px;
            width : 200px;
            display : none;
        }
        .active{
            background-color : pink;
        }
    </style>
</head>
<body>
<button class = "active">111</button>
<button>222</button>
<button>333</button>
<div class="content" style = "display : block">111</div>
<div class="content">222</div>
<div class="content">333</div>
<script type="text/javascript">
    var btn = document.getElementsByTagName('button');
    var div = document.getElementsByClassName('content');
    for(var i = 0 ; i < btn.length; i++){
        (function (n){                                                                      //因为在这里会产生闭包现象所以利用立即执行函数解决。
            btn[n].onclick = function (){
                for(var j = 0 ; j < btn.length;j ++){
                    btn[j].className = "";
                    div[j].style.display = "none";
                }
                this.className = "active"
                div[n].style.display = "block";
            }
        }(i))
    }
</script>
</body>
</html>
```
例6：小方块移动
解题思路：建立小方块格式，位置，颜色，大小等，然后利用一个时间的函数，改变距离和速度，然后到某点停止是利用left和top的大小
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
</head>
<body>
<script type="text/javascript">
    var div = document.createElement('div');   /*利用js创建div标签*/
    document.body.appendChild(div);          /*向body里面插入一个div标签*/
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.backgroundColor = "pink";
    div.style.position = "absolute";
    div.style.left = "0px";
    div.style.top = "0px";
    var speed = 1;
    var timer = setInterval(function (){                      /*每隔后面那个数毫秒就执行一遍函数*/
        speed += speed/20;
        div.style.left = parseInt(div.style.left) + speed + "px";
        div.style.top = parseInt(div.style.top) + speed + "px";
        if(parseInt(div.style.top)> 200 &&parseInt(div.style.left)> 200){
            clearInterval(timer);
        }
    },10)
</script>
</body>
</html>
```
例7：用键盘上的上下左右键控制小方块的移动方向
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
</head>
<body>
<script type="text/javascript">
    var div = document.createElement('div');   /*利用js创建div标签*/
    document.body.appendChild(div);          /*向body里面插入一个div标签*/
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.backgroundColor = "pink";
    div.style.position = "absolute";
    div.style.left = "0px";
    div.style.top = "0px";
    document.onkeydown= function (e){   /*当点击时，系统会帮咱们调用这个函数，调用的时候会传进一个事件对象进来
                                         这个事件对象会包裹着所有的事件发生的时候产生的所有信息，以供咱们使用
                                         就像这个事件发生的时候鼠标在哪，或者键盘点了什么东西都会包含
                                         console.log(e);   键盘按上是38，下是40，左是37 */
        switch(e.which){
            case 38:
                div.style.top = parseInt(div.style.top) - 5 + "px";   /*电脑的坐标系是反着的 y轴朝下为正*/
                break;
            case 40:
                div.style.top = parseInt(div.style.top) + 5 + "px";
                break;
            case 37:
                div.style.left = parseInt(div.style.left) - 5 + "px";
                break;
            case 39:
                div.style.left = parseInt(div.style.left) + 5 + "px";
                break;
        }
    }
</script>
</body>
</html>
```
例8：利用按钮实现移动距离的增大，一直点，移动距离越来越大
解题思路：首先建立按钮和方块的格式等，然后在每次鼠标点击按钮时，speed++，然后利用speed改变移动的距离。中间需要两个函数
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
</head>
<body>
<button style = "width : 80px; height : 80px;background : pink; position : fixed; right : 0; top : 50%;
 text-align:center; line-height : 50px; color : black; font-size : 25px; font-family : arial;">                                              /*创建按钮的格式，大小颜色什么的*/
加速</button>
<script type="text/javascript">
    var div = document.createElement('div');   /*利用js创建div标签*/
    var btn = document.getElementsByTagName('button')[0];
    document.body.appendChild(div);          /*向body里面插入一个div标签*/
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.backgroundColor = "pink";
    div.style.position = "absolute";
    div.style.left = "0px";
    div.style.top = "0px";
    var speed = 5;
    btn.onclick = function (){
        speed ++;
    }
    document.onkeydown= function (e){   /*当点击时，系统会帮咱们调用这个函数，调用的时候会传进一个事件对象进来
                                         这个事件对象会包裹着所有的事件发生的时候产生的所有信息，以供咱们使用
                                         就像这个事件发生的时候鼠标在哪，或者键盘点了什么东西都会包含
                                         console.log(e);   键盘按上是38，下是40，左是37 */
        switch(e.which){
            case 38:
                div.style.top = parseInt(div.style.top) - speed + "px";   /*电脑的坐标系是反着的 y轴朝下为正*/
                break;
            case 40:
                div.style.top = parseInt(div.style.top) + speed + "px";
                break;
            case 37:
                div.style.left = parseInt(div.style.left) - speed + "px";
                break;
            case 39:
                div.style.left = parseInt(div.style.left) + speed    + "px";
                break;
        }
    }
</script>
</body>
</html>
```
例9：4 * 4 的的区域，或者方格，鼠标经过实现颜色的改变，每经过一次，颜色改变一点。
解题思路：利用ul和li建立方格，然后利用rgb表示颜色值，不过，在每次鼠标经过时都要改变rab中的值
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
    <style type = text/css>
        *{
            margin : 0;
            padding : 0;
        }
        li{
            box-sizing : border-box;    /*这句话就是代表下面的宽高的20px就包含了border，里面的长度就是18px了*/
            float : left;
            width : 20px;
            height : 20px;
            /*border : 1px solid pink;*/
        }
        ul {
            width : 80px;
            height : 80px;
            list-style : none;
        }
    </style>
</head>
<body>
<ul>
    <li img-data = "0"></li>
    <li img-data = "0"></li>
    <li img-data = "0"></li>
    <li img-data = "0"></li>
    <li img-data = "0"></li>
    <li img-data = "0"></li>
    <li img-data = "0"></li>
    <li img-data = "0"></li>
    <li img-data = "0"></li>
    <li img-data = "0"></li>
    <li img-data = "0"></li>
    <li img-data = "0"></li>
    <li img-data = "0"></li>
    <li img-data = "0"></li>
    <li img-data = "0"></li>
    <li img-data = "0"></li>
</ul>
<script type="text/javascript">
    var ul = document.getElementsByTagName('ul')[0];
    ul.onmouseover = function (e){       /*这个函数就是代表鼠标滑过的时候变成什么样子*/
        var event = e || which.event;
        var target = event.target || event.srcElee;    /*这两行考虑的是兼容性的问题，明明实现一个功能在不同浏览器上就是不一样的*/

        target.style.backgroundColor = "rgb(0,255," + target.getAttribute('img-data') + ")";      
                    /*target就是li，这个是取出li里的img-data属性并改变backgroundColor，*/
        target .setAttribute('img-data' , parseInt(target.getAttribute('img-data')) + 6);             
                   /*这个是 每次执行这个函数也就是鼠标经过，就改变img-data的值进而改变backgroundColord的值*/
    }
</script>
</body>
</html>
```
补充CSS插件：
div.demo#name>p[style="background-color:red;width:100px;height:100px"] 然后Tab就会出现什么什么的自己试试就知道了。
ul>li{a$}*10
dom 选择器，节点类型：7.40之前都是安装sublime插件，

78.DOM基本操作
1.对节点的增删改查：
(1)查：
document：如果说给html标签上面再套上一个标签，那这个标签就是document，document标签才代表的是整个文档的js显示形式，html代表的只是文档里面的根标签
1）document.getElementById('')：通过id的方法查找标签，注意这里是Element，因为一个id只对应一个元素，所以是Element不是Elements。不区分id大小写，而且也返回匹配name属性的元素

（用的最少，使用比name还少，html中用得最多的也是class，很少用id，因为在前后端整合的时候，别人可能会将id改变，所以很少用，id作为顶级框架的名称来存在，一般不用作选择器）
例1：
    var div = document.getElementById('only');
2）document.getElementsByTagName('')：利用名字查找标签，这里就是Elements了，因为查找到的是一组标签（比较常用 任何浏览器都能用）
注意：咱们学dom，bom开始包括以后学的一系列东西，一切系统给咱们生成成组的方式基本上全是类数组（既是对象又是数组）
例1：
    var div = document.getElementsByTagName('div');
//这里得到的div也是类数组
例2：不是很懂注释的部分！
    var div = document.getElementsByTagName('div')[0];
//这个得到的就是第一个div标签了，就可以使用div.style.backgroundColor 来对div标签进行更改了，但要是没有选中，直接用类数组更改标签，会报错。
3）document.getElementsByClassName(''); （没有TagName常用，因为有兼容性的问题，有的浏览器不能用，ie8和ie8以下的版本中没有
例1：
    var div = document.getElementsByClassName('a')[0];
//假如只有一个div标签也一定要加[0]因为，这样被选择出来的是数组，单拿出第一个要用下角标[0];
4）var div = document.getElementsByName(); ie不支持，只有部分标签name可生效（input，form，img，iframe，只有这四个能被选中1），但是现在的这些浏览器差不多可以用了，之前浏览器的不能用
例1:
    var div = document.getElementsByName('age')[0];
5）.querySelector() // css选择器   （重要：不是实时的）
最好不要用：在ie7和ie7以下的版本中没有，经过这个函数选出的元素不是实时的，需要副本保存的话可以用这个，但是正常不用。
例1：会将div下span中的类名为demo的p标签选中（只选中一个）
    var strong = document.querySelector('div > span strong.demo');
6）
.querySelectorAll() // css选择器 
最好不要用：同上原因
例1：会将div下span中的类名为demo的p标签选中（选出多个）
    var strong1 = document.querySelectorAll('div > span strong.demo');


通过一个函数它的周边环境也能d选中某个元素，所以接下来的这些方法就是基于一个元素它周边这种辐射性的东西能选出元素来
2.遍历节点树（任何一个浏览器都好使）
1） parentNode -> 父节点  (最顶端的parentNode为#document);，一个元素就有一个父节点
例1：
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
</head>
<body>
<div>
    <strong></strong>
    <span></span>
    <em></em>
</div>
<script type="text/javascript">
    var strong = document.getElementsByTagName('strong')[0];              //选出strong元素（也称作是dom元素）
</script>
</body>
</html>
//被选出来的strong可以利用strong.parentNode找到父亲div标签，再.parentNode就可以找到div的父亲body标签
再一层一层往上找，最终的就是document了，再往上找那就是null了
2） childNodes -> 子节点们，一个元素可以有多个子节点
例1：
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
</head>
<body>
<div>
    123
    <!--this is a comment-->
    <strong></strong>
    <span></span>
    <em></em>
</div>
<script type="text/javascript">
    var div = document.getElementsByTagName('div')[0];
</script>
</body>
</html>
//这里div一共有7个子节点，首先从div结束到注释开始之前都是文本元素，然后是注释元素，然后又是文本元素，然后是strong标签，然后是文本元素等等，所以一共是7个
3）firstChild -> 第一个子节点
 
4）lastChild -> 最后一个子节点
例1：上一道题div.firstChild就是 "              123          ",div.lastChild就是#text
5）nextSibling->后一个兄弟节点 previousSibling->前一个兄弟节点
例1：
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
</head>
<body>
<div>
    123
    <!--this is a comment-->
    <strong></strong>
</div>
<script type="text/javascript">
    var strong = document.getElementsByTagName('strong')[0];
</script>
</body>
</html>
//strong.nextSibling是#text，strong.nextSibling.nextSibling是null，
//strong.nextSibling.previousSibling是strong标签自己

3.基于元素节点树的遍历（重要：兼容性。除了children以外，所有的都是包含ie9及以下不兼容）
1）parentElement -> 返回当前元素的父元素节点 (IE不兼容)
例1：
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
</head>
<body>
<div>
    123
    <!--this is a comment-->
    <strong></strong>
</div>
<script type="text/javascript">
    var div = document.getElementsByTagName('div')[0];
</script>
</body>
</html>
//div.parentElement得到结果是body，div.parentElement.parentElement得到结果是html，div.parentElement.parentElement.parentElement得到结果是null，而不是document，因为document不是元素节点，它自成节点。
2）children -> 只返回当前元素的元素子节点
例1：div元素子节点就是strong，没有别的了
<div>
    <!--this is a comment-->
    <strong></strong>
</div>
3）node.childElementCount  === node.children.length当前元素节点的子元素节点个数(IE不兼容)
4）
firstElementChild -> 返回的是第一个元素节点(IE不兼容)

lastElementChild -> 返回的是最后一个元素节点(IE不兼容)
例1：
<div>
    123
    <!--this is a comment-->
    <strong></strong>
    <span></span>
</div>
//div.firstElementChild就是strong标签，div.lastElementChild就是span标签
5）nextElementSibling / previousElementSibling ->返回后一个/前一个兄弟元素节点（IE不兼容)

例1：
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
</head>
<body>
<div>
    123
    <!--this is a comment-->
    <strong></strong>
    <span></span>
</div>
<script type="text/javascript">
    var strong = document.getElementsByTagName('strong')[0];
</script>
</body>
</html>
//strong.nextElementSibling  -->span
//strong.previousElementSibling -->null
//strong.nextElementSibling.previousElementSibling --> 自己本身

81.节点的四个属性
1.nodeName :元素的标签名，以大写形式字符串表示，只读
例1：
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
</head>
<body>
<div>
    123
    <!--this is -->
    <strong></strong>
    <span></span>
</div>
<script type="text/javascript">
    var div = document.getElementsByTagName('div')[0];
</script> 
</body>
</html>
//div.childNodes[1].nodeName  -->"comment"注释，还有文本节点是#text
//div.childNode[3].nodeName -->"STRONG"
//div.childNodes[3].nodeName = "abc"进行更改之后再访问div.childNodes[3].nodeName还是"STRONG"。更改不了，只能读取不能写入。
2）nodeValue
：只有文本节点或注释节点的文本内容,可读写，其他的不行，其他只能返回null
如上题：文本元素部分
//div.childNodes[0].nodeValue结果为"
    123
    "
//div.childNodes[0].nodeValue = "234"就能将值进行更改，再访问就是"234"。
//div.childNodes[0]取的是节点，div.childNodes[0].nodeValue取的是内容。
如上题：注释元素部分
//div.childNodes[1]结果为    <!--this is -->
//div.childNodes[1].nodeValue = "this is comment"进行更改之后，再访问就是<!--this is comment-->
3）nodeType：
该节点的类型，只读
例1：不利用children将元素节点找出来
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
</head>
<body>
<div>
    123
    <!--this is -->
    <strong></strong>
    <span></span>
</div>
<script type="text/javascript">
    var div = document.getElementsByTagName('div')[0];
    function retElementChild(node){
        var temp = {
            length : 0,
            push : Array.prototype.push,
            splice : Array.prototype.splice,
        },
            child = node.childNodes;
            len = child.length;
        for(var i = 0;i < len;i++){
            if(child[i].nodeType === 1){
                temp.push(child[i]);
            }
        }
        return temp;
    }
    console.log(retElementChild(div));
</script>
</body>
</html>
4）attributes：
Element节点的属性集合（属性节点）,属性值value可以改，属性名name不可以改(但是一般不怎么用)
例1：
   <div id = "only" name = "that"></div>
    var div = document.getElementsByTagName('div')[0];
//div.attributes[0]  -->id="only"
//div.attributes[0].value -->"only"
//div.attributes[0].name -->"id"
//div.attributes  -->NamedNodeMap {0: id, 1: name, id: id, name: name, length: 2}
5）节点的一个方法 ：Node.hasChildNodes() 判断标签内是不是有节点，有返回true，没有返回false
例1：
<div id = "only" name = "that">
    <!--this is comment-->  
</div>

//例题中有些部分省略了！
//打印div.hasChildNodes();返回true，因为含有注释节点
例2：
<div id = "only" name = "that"></div>
//部分省略
//打印div.hasChildNodes();返回false，因为里面什么都没有。但要是含有空格，那么也算文本节点，就返回flase了
2.节点的类型

元素节点   —— 1

属性节点   —— 2

文本节点   —— 3

注释节点   —— 8

document  —— 9

DocumentFragment  ——  11
 
获取节点类型   nodeType 

82.DOM结构树（代表继承关系，代表结构化的东西）
1.Document可以理解为构造函数，但是是系 统留给自己的，咱们不能new它,
2.可以理解为 document的构造函数是HTMLDocument然后在往上才是Document
3.DOM结构树就是给出了一系列继承关系
1）getElementById方法定义在Document.prototype上，即Element节点上不能使用。

2）getElementsByName方法定义在HTMLDocument.prototype上，即非html中的document以外不能使用(xml document,Element)

3）getElementsByTagName方法定义在Document.prototype 和 Element.prototype上，还有在选择元素时可以填*代表通配符，就是选中所有标签
例1：
<div>
    <p>123</p>
</div>
<script type="text/javascript">
    var div = document.getElementsByTagName('div')[0];
    var p = div.getElementsByTagName('p')[0];
</script>
//这里的p可以被选中是因为div可以调用getElementsByTagNames。
//因为.getElementsByTagName方法定义在Document.prototype 和 Element.prototype上，而div属于Elements下的HTMLElement下，所以可以用

4）HTMLDocument.prototype定义了一些常用的属性，body,head,分别指代HTML文档中的<body><head>标签。
例1：
    document.getElementsByTagName('body');        <==>    document.body;         同理head也一样
    document.head;

5）Document.prototype上定义了documentElement属性，指代文档的根元素，在HTML文档中，他总是指代<html>元素
例2：
    document.documentElement;      <==>     document.getElementsByTagName('html');
总结：
document.documentElement       <==>html
document.body                             <==> body
document.head                             <==> head

6）getElementsByClassName、querySelectorAll、querySelector在Document,Element类中均有定义

也就是说div也可以用，因为在Element中也有定义
4.DOM树也就是树形结构，而DOM结构树代表继承关系，代表原型链。
例1：封装函数，返回元素e的第n层祖先元素
<div>
    <p>123</p>
    <span></span>
</div>
<script type="text/javascript">
    var span = document.getElementsByTagName('span')[0  ];
    function retParent(e,n){
        var n = n || 0;            //首先进行容错，万一没传进n就让n = 0
        if(n == 0){
            return e;
        }
        for(var i = 0 ;i < n;i ++){
            e = e.parentNode;
        }
        return e;
    }

</script>
//调用函数retParent(span,4)     返回#document
//调用函数retParent(span,5);    返回null
//调用函数retParent(span,6);    报错，因为null没有原型也不能调用toString方法，所以报错
改错：for循环进行更改,循环条件更改为以下
for(var i = 0 ;e && i < n;i ++)
例2：封装函数，返回元素e的第n个兄弟元素节点，n为正，返回后面的兄弟元素节点，n为负，返回前面的，n为0，返回自己
解法1思路：利用if else判断n的正负，然后利用两个for循环实现寻找前面的兄弟节点还是后面的兄弟节点
解法2思路：利用while，循环条件是n不等于0和n不等于null，然后里面利用if else判断使用next还是previous，最后再n++或者n--就可以了。
不过这里得考虑ie兼容的情况，因为有的ie不能使用nextElementSibling，所以在里面还要再进行判断，判断要是nextElementSibling的话，就直接让e = e.nextElementSibling
如果没有那就是ie浏览器，就要使用nextSibling后，再利用nodeType判断是否是元素节点，不是的话重复直到找到元素节点，赋给e然后n++或者n--，最后返回e。
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
</head>
<body>
<div>
    <p>123</p>
    <span></span>
    <p>abc</p>
    <strong>name</strong>
</div>
<script type="text/javascript">
    var span = document.getElementsByTagName('span')[0];
    function retSibling(e, n) {
        var n = n || 0;
        if (n == 0) {
            return e;
        }
        while (e && n != 0) {
            if (n > 0) {
                if (e.nextElementSibling) {
                    e = e.nextElementSibling;
                }
                else {
                    for (e = e.nextSibling; e && e.nodeType != 1; e = e.nextSibling) {
/*这里e&&e.nodeType !=1 两个条件不能更换位置，因为要是e是null的话先判断e.nodeType!=1的话是报错的*/
                    }
                }
/*注释部分就是等价于for循环判断条件的部分
                e = e.Sibling;
                if (e && e.nodeType != 1) {
                    e = e.nextSibling;
                }
                if (e && e.nodeType != 1) {
                    e = e.nextSibling;
                }*/
                n--;
            }
            else {
                if (e.previousElementSibling) {
                    e = e.previousElementSibling;
                }
                else {
                    for (e = e.previousSibling; e && e.nodeType != 1; e = e.previousSibling) {

                    }
                }
                n++;
            }
        }
        return e;
    }
</script>
</body>
</html>
例3：.编辑函数，封装children功能，解决以前部分浏览器的兼容性问题 
解题思路：在原型上定义一个函数，然后遍历所有子节点，然后判断节点类型，当节点类型 = 1时代表元素节点，然后放进容器中，然后返回。
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
</head>
<body>
<div>
    <p>123</p>
    <span></span>
    <p>abc</p>
    <strong>name</strong>
</div>
<script type="text/javascript">
    var div = document.getElementsByTagName('div')[0];   
/*只要是带s后面就必须带括号[]，要是不带，选出的是类数组，类数组不能成组操作*/
    Element.prototype.retChild = function (){
        var child = this.childNodes;
            len = child.length;
        var obj = {
            "length" : 0,
            "push" : Array.prototype.push,
        }
/*        这里有效率优化的问题，为什么在上面定义一个child和len，因为要是直接定义在for循环中，系统不会保存结果，每循环一次就要计算this.childNodes和length,每次都需要算，浪费很多效率，但是将childNodes和length保存到变量里，就会提高效率，不用每次都计算，直接使用就行
        for(var i = 0; i < this.childNodes.length; i ++){ }
*/
        for(var i = 0; i < len; i++){
            if(child[i].nodeType == 1){
                obj.push(child[i]);
            }
        }
        return obj;
    }
</script>
</body>
</html>
例4：自己封装hasChildren()方法，不可用children属性，就是判断是否有元素子节点
解题思路：先将方法定义在Element原型上，然后函数里面将子节点类数进行遍历，若有节点类型等于1，那么返回true，没有的话返回false
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
</head>
<body>
<div>
    <p>123</p>
    <span></span>
    <p>abc</p>
    <strong>name</strong>
</div>
<script type="text/javascript">
    Element.prototype.hasChild = function (){
        var child = this.childNodes;
            len = child.length;
        for(var i = 0; i < len; i ++){
            if(child[i].nodeType == 1){
                return true;
            }
        }
        return false;
    }
    var div = document.getElementsByTagName('div')[0];
</script>
</body>
</html>
例5：给所有元素节点加上name属性，值为自己的大写标签名。
    var div = document.getElementsByTagName('div');
    var all = document.getElementsByTagName('*');
    for(var i = 0; i < all.length; i++){
        all[i].setAttribute('name',all[i].nodeName);
    }



85.DOM基本操作（接78查 的后面）
1.增

创建元素：document.createElement();
创建文本：
document.createTextNode();

创建注释document.createComment();

创建文档碎片：document.createDocumentFragment();
例：
    var p =document.createElement('p');
    var text = document.createTextNode('content');
    var comment = document.createComment('this is a comment');
2.插入节点----剪切操作

1)PARENTNODE.appendChild();  
在指定元素节点的最后一个子节点之后添加节点，如果Node是页面中的DOM对象，那么就不是添加节点了，而是直接move节点。
例1:动态的创建一个DOM树
    var p =document.createElement('p');
    var text = document.createTextNode('content');
    var comment = document.createComment('this is a comment');
    //先将创建的节点放进p中，再将p插入到body中
    p.appendChild(text);
    p.appendChild(comment);
    document.body.appendChild(p);

2）PARENTNODE.insertBefore(a, b);      insert a before b
例1：创建p标签，并将p插入到span前。
    var p =document.createElement('p');
    var div = document.getElementsByTagName('div')[0];
    var span = document.getElementsByTagName('span')[0];
    div.insertBefore(p,span);
3.删除：parent.removeChild();（其实是剪切）还有child.remove();可以自己彻底删除自己（i.remove(i)）
例1：看着div中确实没有span了，但是你要是保留出来，在控制台还是可以打印出来的
    var span1 = div.removeChild(span);
例2：利用它可以实现在这个标签里的子标签放入到另一个标签中（利用removeChild和appendChild）
    var div = document.getElementsByTagName('div')[0];
    var div1 = document.getElementsByTagName('div')[1];
    var span = document.getElementsByTagName('span')[0];
    div1.appendChild(div.removeChild(span));
//把第一个div中的span标签放入第二个div中

4）替换
：parent.replaceChild(new, origin);
例1：将div中span标签换成了p标签，并且用span1接受换出来的span标签，所以这个也不是真正意义上的删除（但是之前讲的有一个delete那个是真的删除了）
    var p =document.createElement('p');
    var div = document.getElementsByTagName('div')[0];
    var span = document.getElementsByTagName('span')[0];
    var span1 = div.replaceChild(p,span);

//在DOM中，暂时没有真正意义上的删除，只有剪切

86.DOM基本操作
1.ELement节点（元素节点）的一些属性
1）innerHTML
例1：div.innerHTML可以打印出div中的东西，也可以更改div中的东西，并且覆盖原有的。
利用这个可以直接通过字符串拼接生成一个结构
<div>
<span>1234</span>
</div>
<script type="text/javascript">
    var div = document.getElementsByTagName('div')[0];
    div.innerHTML = "abc";
    div.innerHTML = "<div>123</div>";          //会被正常识别为语法格式作为html的代码
</script>
例2：可以实现添加在html中四个span标签，每个内容依次为0,1,2,3
    var div = document.getElementsByTagName('div')[0];
    for(var i = 0; i < 4; i++){
        div.innerHTML += ("<span>" + i +"</span>");    
/*+=效率是极低极低的，字符串连接也是低效，因为它是栈操作，不是散列，要是使用innerHTML的话不用+=，效率还是可以的，不会太低，最好是不要用+=*/
    }
例3（随便提的）：就是给出一系列字符串，要求把这个字符串填到div中
解题思路1：利用数组，将字符串填到数组中，然后利用join将其连接起来成为一个大字符串，然后一起利用innerHTML=.....将它放进去
解题思路2：还是数组，然后用appendChild一个一个放在div中
2）innerText(火狐不兼容) / textContent(老版本IE不好使)，其实功能一样的，但是它俩在Chome上都是好使的。
例1：
<div>
    <span>123</span>
</div>
<script type="text/javascri
pt">
    var div = document.getElementsByTagName('div')[0];
</script>
在使用div.innerText = 234,那么div中所有的东西都不见了，只有自己赋进去的值。所以在换内容的时候一定要精准到自己身上，比如span，那就精准到span身上，而不是父元素。
html发展过程中将很多标签语义化了，例如b标签是加粗的作用，后来的strong标签也是加粗，但是strong标签很语义化，很好理解
所以像那种语义化不好的标签像b标签，i标签等，咱们在公司都将它作为自定义标签了，在它初始化时更改后赋予了新的意义
例2：
<div>
    <span>123</span>
    <b><i>加粗</i></b>
</div>
<script type="text/javascript">
    var div = document.getElementsByTagName('div')[0];
</script>
//控制台打印div.innerText会将div中所有文本都抽出来，不管是子标签还是子孙标签，所以结果就是"123   加粗"
//总结innerText就是取的时候和平取，但是赋的时候全覆盖，和textContent一样的
2.Element节点的一些方法
1）ele.setAttribute();
作用：可以在自己添加的属性上绑定数据
例1：
<div>
    <span>123</span>
    <b><i>加粗</i></b>
</div>
<script type="text/javascript">
    var div = document.getElementsByTagName('div')[0];
    div.setAttribute('id','demo');  /*大致理解就是div设置特性，名是id值是demo，也就证明了可以通过js动态的改变js行间的属性*/
    div.setAttribute('data-log','2');

</script>
//结果就是如下，也就是没有的话就添加，有的话就改变。也可以设置自己定义的属性和值
<div id="demo" data-log="2">
    <span>123</span>
    <b><i>加粗</i></b>
</div>
//还有上面出现的data-log可以用来在网页中代表某个部分，然后看用户点击那个部分次数多，然后将对应的data-log值返回给后台，然后进行优化等
//一般操作的是属性的值，取的也是特定属性名下对应的值，在一个元素上，一个特性只能有一个，再设置会覆盖的，所以返回的是特定的数据，只能有一个。
例2：一个100px红色的正方形区域，实现鼠标一点击就换个颜色
解题思路1(初学者)：    demo2.style.backgroundColor = "green"; 
解题思路2：class不一定作为选择元素用，可以代表一种特定的功能，然后设置一个change-color类，设置背景颜色属性为粉色，然后再动态改变class的值为change-color就行了
//所以，以后改变一个元素的样式时，我们以改变它class为优先级最高的选择，以直接改变它自身属性为最后选择
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
    <style type="text/css">
        .demo2{
            height:100px;
            width: 100px;
            background-color: red;
        }
        .change-color{
            background-color: pink;
        }
    </style>
</head>
<body>
<div class="demo2">           //在这里，改变背景颜色通过setAttbute()动态更改class的值，而不是直接更改属性的方法
</div>
<script type="text/javascript">
    /*demo2.style.backgroundColor = "green";*/
</script>
</body>
</html>

87.课堂练习
请编写一段JavaScript脚本生成下面这段DOM结构。要求：使用标准的DOM方法或属性。


<div class="example">

    <p class="slogan">姬成，长的还行 </p>

    <strong>邓哥，amazing </strong>

</div>

解题思路1：利用create，setAttribute等标准语法写
解题思路2:利用div.innerHTML把代码写上去
1.
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
</head>
<body>
<script type="text/javascript">
    var div = document.createElement('div');
    var p = document.createElement('p');
    var strong = document.createElement('strong');
    var text = document.createTextNode('谁，长得还行');
    var text1 = document.createTextNode('谁，挺不错的');
    div.setAttribute('class' , 'example');
    p.setAttribute('class' ,'slogan' );
    p.appendChild(text);
    strong.appendChild(text1);
    div.appendChild(p);
    div.appendChild(strong);
    document.body.appendChild(div);
</script>
</body>
</html>

89.课后作业
1.封装函数insertAfter()；功能类似insertBefore();
解题思路：没有直接可以插入到目的标签后面的函数，但是可以找出目的标签后面的标签，再利用insertBefore间接插入，
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
</head>
<body>
<div><span></span></div>
<script type="text/javascript">
    var div = document.getElementsByTagName('div')[0];
    var span = document.getElementsByTagName('span')[0];
    var p = document.createElement('p');
    /*div.insertBefore(p,span);*/
    Element.prototype.insertAfter = function (targetNode,afterNode){
        var beforeNode = afterNode.nextElementSibling;
        if(beforeNode == null){
            this.appendChild(targetNode);
        }else{
            this.insertBefore(targetNode,beforeNode);
        }
    }
</script>
</body>
</html>
//要学会再原型链上编程
//1.因为如果单纯利用function封装，那么里面的this就要作为参数传进来，但是利用原型链就直接this就行，谁调用它谁就是this，不用传参数
//2.还有，在原型链上的进行编程可以实现继承，下面的都可以用，一劳永逸

2.将目标节点内部的节点顺序，逆序。

eg:<div> <a></a> <em></em></div> 
     
<div><em></em><a></a></div>

解题思路：也就是从倒数第二个开始剪切，用appendChild()实现
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
</head>
<body>
<div>
    <span></span>
    <i></i>
    <p></p>
    <strong></strong>
</div>
<script type="text/javascript">
    var div = document.getElementsByTagName('div')[0];
    Element.prototype.niXu = function (){
        var child = this.childNodes;
        var len = child.length;
        for(var i = len-2; i >= 0; i--){
            this.appendChild(child[i]);
        }
    }
</script>
</body>
</html>
3.封装remove(); 使得child.remove()直接可以销毁自身
解题思路：找到父节点，然后利用父节点销毁自己
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
</head>
<body>
<div>
    <span></span>
    <p></p>
    <strong></strong>
</div>
<script type="text/javascript">
    var span = document.getElementsByTagName('span')[0];
    Element.prototype.remove = function (){
        var definedParent = this.parentNode;
        definedParent.removeChild(this);
    }
</script>
</body>
</html>

88.日期对象Date()（看w3c的手册学习重要的就是Time之类的，网址：http://www.w3school.com.cn/jsref/jsref_obj_date.asp）
1.日期对象，是系统提供好的
2.constructor是原型上的属性，prototype是构造函数上的一个属性
3.date代表出生那一刻的信息，但凡访问那一刻，那么就永远不会变，不是实时的，就像date.getMinutes()得到的结果那就不管过了多久访问，还是这个值，不会改变。
4.纪元时间（零点年）：1970年1月1日，计算机始终知道现在的时间距离纪元时间多少毫秒，在经过计算，才得到哪年哪月什么什么的。

Date()                  返回当日的日期和时间。Date()是个构造函数，要是单独执行，不new的话，会返回一个日期的字符串
getDate()                   从 Date 对象返回一个月中的某一天 (1 ~ 31)。getDate()就是构造函数构造出的对象能使用的方法
getDay()                    从 Date 对象返回一周中的某一天 (0 ~ 6)。
getMonth()  从 Date 对象返回月份 (0 ~ 11)。
getFullYear()   从 Date 对象以四位数字返回年份。
getYear()                   请使用 getFullYear() 方法代替。（getYear是错的）
getHours()  返回 Date 对象的小时 (0 ~ 23)。
getMinutes()    返回 Date 对象的分钟 (0 ~ 59)。
getSeconds()    返回 Date 对象的秒数 (0 ~ 59)。
getMilliseconds()   返回 Date 对象的毫秒(0 ~ 999)。
重要：
getTime()                   返回 1970 年 1 月 1 日至今的毫秒数。当前时刻距离纪元时间的毫秒数。
通常我们通俗的讲就叫getTime是时间戳，时间戳就是记录时刻的方式。时间戳往往作为唯一标识来使用，在程序头和尾分别记录两个时间做差，然后计算程序执行了多少秒，看效率。
例1：测试执行1000000圈需要的毫秒数
    var firstTime = new Date().getTime();
    for(var i = 0; i < 100000000; i++){

    }
    var lastTime = new Date().getTime();
    console.log(lastTime - firstTime);
// 4/5/6 差不多就这样
//可以用这种方式测程序的执行效率，然后再优化，这个在程序开发中很重要。

setDate()               设置 Date 对象中月的某一天 (1 ~ 31)。
setMonth()  设置 Date 对象中月份 (0 ~ 11)。
setFullYear()   设置 Date 对象中的年份（四位数字）。
setYear()                   请使用 setFullYear() 方法代替。
setHours()  设置 Date 对象中的小时 (0 ~ 23)。
setMinutes()    设置 Date 对象中的分钟 (0 ~ 59)。
setSeconds()    设置 Date 对象中的秒钟 (0 ~ 59)。
setMilliseconds()   设置 Date 对象中的毫秒 (0 ~ 999)。
setTime()                   以毫秒设置 Date 对象。
toString()                  把 Date 对象转换为字符串。（date.toString()就是将时间转换为字符串形式）

set的使用：像限时抢购，倒计时快结束的时候，就是马上要接近它设定的那个时间点了，
可以利用toString字符串进行比对，还可以利用getTime得到当前的时间点与设定的时间点做差，小于1000毫秒，就看作是吻合了。
例1:
var date = new Date()；
date.setDate(15);
再访问date就会是更改后的日期了，更改的是日，而且星期几也会随之改变的
实际日期：Thu Aug 30 2018 15:52:55 GMT+0800 (中国标准时间)
set时候的日期：Fri Aug 31 2018 15:52:55 GMT+0800 (中国标准时间)
例2：设定时间，到这个时候就打印文字
  var date = new Date();
    date.setDate(7);
    setInterval(function (){
        if(new Date().getTime() - date.getTime() > 1000){
            console.log('小美女');
        }
    },1000)
//setInterval就是过多久执行一次函数
//通过setDate还可以实现闹钟的功能
//setTIme()也可以作为设定时间使用，但是一般不用除非是你拿到别人的getTime再set回去有特殊的需求，否则通过人工的方式set不现实，太大了

90.定时器：定时器并不准，还有，下面的四个方法使全局对象上的方法，内部函数this指向window
1.setInterval
用法：里面有个函数，函数后面加一个时间，每隔多长时间执行一次函数。
可以用作定时器，是全局里的方法，即使不window执行时也会上GO中找。
每次执行都会返回一个数字作为它的唯一标识，如果有两个setInterval的话，第一个就返回1，第二个就返回2等等等作为它的唯一标识。
另一种形式（很少很少用）：setInterval("console.log('a')",1000);，每隔1000毫秒执行一次字符串里的代码。 
例1：每隔1000毫秒执行一次函数
    var time = 1000;
    setInterval(function (){
        console.log('a');
    },1000)
    time = 2000;
//最初time为1000，然后每隔1000毫秒执行一次正确，但是，这个函数识别time只识别一次，也就是后面更改了time对函数没影响，time依旧是最初是别的1000，没有更改。
例2：用作查树
    var i = 0;
    setInterval(function (){
        i++;
        console.log(i);
    },1000)
    time = 2000;
探究问题：定时器到底准不准
    var firstTime = new Date().getTime();
    setInterval(function(){
        var lastTime = new Date().getTime();
        console.log(lastTime - firstTime);
        firstTime = lastTime;
    },1000)
//每次的差有时候是1000或者999或者等等，说明定时器setInterval并不准，正常应该是都是1000
//一方面的原因是因为setInterval只是每隔1000毫秒将任务放在执行队列中，什么时候执行谁都不知道
//不止这个方面的原因，因为若如此的话，应该只是慢的问题,但是有时候慢有时候快，所以还有别的原因。
书籍：你不知道的js，还有js权威指南，还有js高级程序设计
2.clearInterval：利用setInterval返回的唯一标识，清空setInterval令它停下来。
例1：当执行到10之后就不再执行了
    var i = 0;
    var timer = setInterval(function(){
        console.log(i++);
        if(i > 10){
            clearInterval(timer);
        }
    },1000)
3.setTimeout：隔多少秒执行，并且只执行一次，
例1：1秒之后执行打印a，并且就执行一次
    setTimeout(function(){
        console.log('a');
    },1000)
//实际应用时，例如电影的试看期，一般就能看多少多少秒，多少秒之后就不能用了，就可以用这个函数，
4.clearTimeout():同clearInterval()用法一样，利用setTimeOut的唯一标识（不会和setInterval重叠的，是依次的），清空setTimeOut。
例1：a一直不会出来，还没执行呢，就被清了；
    var timer = setTimeout(function(){
        console.log('a');
    },1000)
    clearTimeout(timer);

91.练习题：计时器，到3分钟停止
DOM结构：就是原来那些元素，原来叫标签，现在交DOM结构，因为它可以被DOM所操作
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
    <style type = text/css>
        input{
            border:1px solid black;
            font-size:20px;
            text-align:right;
            font-weight:bold;
        }
    </style>
</head>
<body>
minutes : <input type="text" value="0">
seconds : <input type="text" value="0">
<script type="text/javascript">
    var minutesNode = document.getElementsByTagName('input')[0];
    var secondsNode = document.getElementsByTagName('input')[1];
    var seconds = 0;
    var minutes = 0;
    var timer = window.setInterval(function (){
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
        }
        secondsNode.value = seconds;
        minutesNode.value = minutes;
        if(minutes == 3){
            window.clearInterval(timer);
        }
    },1000)
</script>
</body>
</html>

92.深入的DOM操作
1.查看滚动条的滚动距离
(1)
windowpageXOffset：X轴没有滚动条的话，结果就是0,
window'pageYOffset：Y轴有滚动条的话，这个属性的值表示滚动条滚动的距离。   
但是上面的这两个方法ie8及ie8以下不兼容，下面的两个方法就可以使用了，而且兼容性很好
(2)所有的浏览器里面一定不会允许这两种方法同时都有值或者都没值，但是具体每个浏览器采用哪个不一定，不是ie什么的不兼容的问题，就是不允许。
所以一般用的时候我们都把它加起来，任何一个浏览器，这两个都必然有一个有值，必然有一个没值为0，所以加就好了，还有scroll是滚动条的意思
还有注意：一般左大括号都跟在程序的后面，尤其是return，要是大括号另起一行，那就return不回去了，返回的为空值。
    document.documentElement.scrollTop
    document.documentElement.scrollLeft
    document.body.scrollTop
    document.body.scrollLeft

    var left = document.body.scrollLeft + document.documentElement.scrollLeft;
    var top = document.body.scrollTop + document.documentElement.scrollTop;
(3)封装兼容性方法，求滚动轮滚动距离getScrollOffset()
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
</head>
<body>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<script type="text/javascript">
    function getScrollOffset(){
        if(window.pageXOffset){
            return {
                w : window.pageXOffset,
                h : window.pageYOffset,
            }
        }
        var dis = {
            w : document.body.scrollLeft + document.documentElement.scrollLeft,
            h : document.body.scrollTop + document.documentElement.scrollTop,
        }
        return dis;
    }
</script>
</body>
</html>
//调用getScrollOffset()函数返回滚动条滚动的距离。

93.深入的DOM操作（接92）
2.查看视口的尺寸：视口就是可视区（不包括控制台和网页最上面的导航栏什么的）
（1）window.innerWidth/window.innerHeight（加上滚动条宽度/高度）ie8及ie8以下不兼容
一般控制台在哪都会直接影响到这两个属性的大小，
还有，有时候缩放页面会影响实际尺寸的大小。
（2）标准模式下，任意浏览器都兼容
    document.documentElement.clientHeight
    document.documentElement.clientWidth
//Chome中document.documentElement.clientWidth/Height的值等于window.innerWidth/Height
（3）怪异模式下
    document.body.clientWidth;
    document.body.clientHeight;
标准模式和怪异模式的区别
浏览器的渲染模式有两种：
一种是标准模式，标准模式就是我们经常用的
第二种是怪异模式，它是防止后续浏览器版本更新升级过高而对前期的不兼容的。怪异模式也叫混杂模式，也就是向后兼容，
                               大致意思启动怪异模式后，就是例如老版本的ie5，ie6的代码，现在的ie浏览器可以使用，
                               所以怪异模式下的语法规则与标准模式下的语法规则一定是不一样的。
怪异模式怎样来触发呢？
条件只有一个：在代码顶端的DOCTYPE去掉就是怪异模式
还有每个浏览器的怪异模式都可能不一样
例1：
标准模式下document.compatMode结果是CSS1Compat
怪异模式下document.compatMode结果是BackCompat（向后兼容）
（4）封装兼容性方法，返回浏览器视口尺寸getViewportOffset()
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
</head>
<body>
<script type="text/javascript">
    function getViewportOffset() {
        if (window.innerWidth) {
            return {
                w: window.innerWidth,
                h: window.innerHeight,
            }
        }
        if (document.compatMode == "CSS1Compat") {
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight,
            }
        }
        else {
            return {
                w: document.body.clientWidth,
                w: document.body.clientHeight,
            }
        }
    }
</script>
</body>
</html>
//查看视口尺寸时直接在控制台上打印getViewportOffset()就可以了

94.深入的DOM操作（接92）
3.查看元素的几何尺寸：查看元素的属性方法，肯定是元素的方法，肯定是DOM对象的方法，不存在window，document什么的。
（1）getBoundingClientRect()
（2）兼容性很好

（3）该方法返回一个对象，对象里面有left,top,right,bottom等属性。left和top代表该元素左上角的X和Y坐标，right和bottom代表元素右下角的X和Y坐标
（4）height和width属性老版本IE并未实现
（5）返回的结果并不是实时的，得到的数据是副本，要是已经得到对象，再改变属性，对象里属性的不会变。
例1：
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
    <style type="text/css">
        div{
            position:absolute;
            height : 100px;
            width:100px;
            background-color:red;
            left:100px;
            top:100px;
        }
    </style>
</head>
<body>
<div></div>
<script type="text/javascript">
    var div = document.getElementsByTagName('div')[0];
</script>
</body>
</html>
调用div.getBoundingClientRect()，得到一个对象如下
bottom:200
height:100
left:100
right:200
top:100
width:100
x:100
y:100
__proto__:DOMRect
//得到的left和top代表它的左上点的位置，right和bottom代表的是它的右下角的位置，
//相对的是网页最左上角的位置，从那往下是y轴的正半轴，往右是x轴的正半轴，计算机坐标系和正常的坐标系y正轴不一样。
//假如是圆形不是矩形，那会以构造它的矩形的顶点作为圆角的什么坐标什么顶点之类的。
//老版本ie不能实现height和width，那么采用的方法就是right - left得到width，bottom - top得到height
（5）封装兼容性方法（用函数的话，就要传参数，在原型链上编程就不用传参数直接用this就可以）
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
    <style type="text/css">
        div {
            position: absolute;
            height: 100px;
            width: 100px;
            background-color: red;
            left: 100px;
            top: 100px;
        }
    </style>
</head>
<body>
<div></div>
<script type="text/javascript">
    var div = document.getElementsByTagName('div')[0];
    Element.prototype.getElementOffset = function () {
        var objData = this.getBoundingClientRect();
        if (objData.height) {
            return {
                w: objData.width,
                h: objData.height,
            }
        } else {
            return {
                w: objData.right - objData.left,
                h: objData.bottom - objData.top,
            }
        }
    }
</script>
</body>
</html>
//在控制台打div.getElementOffset()得到正确的宽高，在不兼容的情况下也就是将这里if语句删掉或者if(flase)测试，得到的结果也是正确的。

95.深入的DOM操作（接92）
4.查看元素的尺寸（显示的尺寸，视觉上的尺寸）
（1）dom.offsetWidth，dom.offsetHeight
5.查看元素的位置
（1）dom.offsetLeft和dom.offsetTop
（2）忽略自身是不是定位元素，对于无定位父级的元素，返回相对文档的坐标。对于有定位父级的元素，返回相对于最近的有定位的父级的坐标。(无论是 left 还是margin-left等都是距离。 )
         总结就是找最近的有定位的父级的左上点，但凡你距离你有定位的父级有距离，那就要求出来，还有body默认margin为8px，有时候求距离横向需要加上。纵向会重叠。

例1：
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
    <style type="text/css">
        div{
            position:absolute;
            height:100px;
            width:100px;
            left: 100px;
            top:100px;
            background-color:red;
            padding:100px;
            border:20px solid pink;
        }
    </style>
</head>
<body>
<div></div>
<script type="text/javascript">
    var div = document.getElementsByTagName('div')[0];
</script>
</body>
</html>
//调用div.offsetWidth和div.offsetHeight结果都为340,是整个的宽高，不只是内容部分，而div.getBoundingClientRect()得到的height和width结果一样，但是后者不是实时的所以前者更常用些
//调用div.offsetLeft和div.offsetTop结果都为100，表示距离左边和上边的距离
例2：（不懂盒模型！！！）
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
    <style type="text/css">
        *{
            margin:0px;
        }
        .wrapper{
            width:300px;
            height:300px;
            background-color:mediumspringgreen;
            margin-left:100px;
            margin-top:100px;
        }
        .box{
            width:200px;
            height:200px;
            background-color:pink;
            margin-left:100px;
            margin-top:100px;
        }
        .demo{
            width:100px;
            height:100px;
            background-color:red;
            margin-left:100px;
            margin-top:100px;
        }
    </style>
</head>
<body>
<div class="wrapper">
    <div class="box">
        <div class="demo"></div>
    </div>
</div>
<script type="text/javascript">
    var demo = document.getElementsByClassName('demo')[0];
</script>
</body>
</html>
//body自带margin为8px,所以要是没去掉的话，demo.offsetLeft得到的结果就是308px;

更改1：
        .box{
            position:relative;
            width:200px;
            height:200px;
            background-color:pink;
            margin-left:100px;
            margin-top:100px;
        }
        .demo{
            position:absolute;
            width:100px;
            height:100px;
            background-color:red;
            left:100px;
            top:0px;
        }
//demo.offsetLeft得到的结果就是100px，dmo.offsetTop得到的结果就是0

更改2：
        .demo{
            width:100px;
            height:100px;
            background-color:red;
            margin-left:100px;
        }
//demo.offsetLeft得到的结果依旧是100px，dmo.offsetTop得到的结果就是0
（3）dom.offsetParent
返回最近的有定位的父级，如无，返回body, body.offsetParent 返回null
例1：接上题
demo.offsetParent：如果最近的有定位的父级存在，那么返回父级元素即<div class="box"> </div>
                                  要是不存在，返回body，body.offsetParent 返回null


（4）求元素相对于文档的坐标 getElementPosition()
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
    <style type="text/css">
        .wrapper{
            height:300px;
            width:300px;
            background-color:red;
            position:absolute;
            left:50px;
            top:50px;
        }
        .box{
            height:200px;
            width:200px;
            background-color:pink;
            position:absolute;
            left:50px;
        }
        .content{
            height:100px;
            width:100px;
            background-color:blue;
            position:absolute;
            left:50px;
        }
    </style>
</head>
<body>
<div class="wrapper">
<div class="box">
    <div class="content" id="contentDemo">

    </div>
</div>
</div>
<script type="text/javascript">
    var content = document.getElementById('contentDemo');
    Element.prototype.getElementPosition = function(){
        var width = 0;
        var height = 0;
        var ele = this;
        while(ele != document.body){             //查到body就可以了
            width += ele.offsetLeft;
            height += ele.offsetTop;
            ele = ele.offsetParent;                    /*最近有定位的父级*/
        }
        return {
            x : width,
            y : height,
        }
    }
</script>
</body>
</html>
//调用content.getElementPosition()得到相对文档坐标
//想达到兼容性的统一，解决一下兼容性的问题，就是在原型链上编程。

96.深入的DOM操作（接92）
6.让滚动条滚动
（1）windw上有三个方法：scroll(),scrollTo(),scrollBy();
（2）三个方法功能类似，用法都是将x,y坐标传入。即实现让滚动轮滚动到当前位置。
（3）
区别：scrollBy()会在之前的数据基础之上做累加。（下面做具体的解释）
前两个scroll和scrollTo用法是一样的scroll(0,200)滚动条就会就会滚动到0,200的位置，再scroll(0,200)的话位置是不变的，但是另一个就和它俩不一样了
scrollBy()是累加的，scrollBy(0,30)就往下移动30px，
应用：用户把滚动条滚动到下面，滚动完之后，记录以下滚动条滚动的位置 再动的时候就可以利用这个scroll()/scrollTo()这个方法使它滚动回来
（4）利用scrollBy() 快速阅读的功能
例：
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
</head>
<body>
<div style="width:100px;height:100px;background-color:pink;color:#fff;font-size:40px;font-weight:bold;text-align:center;
line-height:100px;position:fixed;bottom:200px;right:50px;border-radius:50%;opacity:0.5">
start
</div>
<div style="width:100px;height:100px;background-color:pink;color:#0f0;font-size:40px;font-weight:bold;text-align:center;
line-height:100px;position:fixed;bottom:50px;right:50px;border-radius:50%;opacity:0.5">
    stop
</div>
br*500
<script type="text/javascript">
    var start = document.getElementsByTagName('div')[0];
    var stop = document.getElementsByTagName('div')[1];
    var timer = 0;
    var key = true;           /*加锁式思维，当解锁时才能进行下一步操作，*/
    start.onclick = function(){
        if(key){
            timer = setInterval(function(){          /*要是没有锁的话，每次点击start就新生成并赋给timer，覆盖原来的值，并且持续点start页面还会加速*/
                window.scrollBy(0,10);                /*要是实现加速的功能，建议将10换为变量，然后单独设置一个按钮，一点按钮就变量++*/
            },100)
            key = false;
        }
    }
    stop.onclick = function (){
        clearInterval(timer);
        key = true;
    }
</script>
</body>
</html>
```
97.脚本化（操作控制）CSS（DOM是不能直接操作CSS的但是可以间接的控制CSS）
1.读写元素CSS属性（只有style可以读写，div.style获取的类数组中属性就是行间的，没填值就没有值，但是后面那个getComputedStyle得到的是默认值，最终的显示值）
（1）div.style.prop：是可以读可以写的，（也只有它能写，接下来学的也写不了），也可以更改自己在代码中没写的属性的值。
（2）可读写行间样式，没有兼容性问题，碰到float这样的关键字属性，前面应加css
（3）eg:float — > cssFloat
（4）符合属性必须拆解，组合单词变成小驼峰式写法（像border，尽量写成borderWidth，borderColor.borderStyle等形式，但是直接写border = ....也行，但是最好别这么写）
（5）
写入的值必须是字符串格式


调用div.style：系统返回CSSStyledeclaration{}（decolaration 宣示，声明）：就是把这个div能够用的css全给你展示出来了，不只是自己写的这些，并且它是个类数组，因为有索引位属性，和正常属性，而且有length属性。
返回的这个样式表是类数组，类数组本质上是个对象，是对象就可以存取属性，那么div.style.width就能够被赋值，div.style.width = "200px";那么元素的width属性就被改变成了200px，反馈到页面上就是200px；所以就间接的改变了CSS属性
还有div.style.background-color是错的，在命名变量的时候，中间的组成部分包括数字下划线，英文字母和$，其他的不行，所以js中不能是background-color，在CSS和HTML中是可以的。所以碰见这种情况，将它变为小驼峰式，即backgroundColor
div.style.backgroundColor = "pink";这样就是对的了。
在css中没写border-radius属性，也可以直接在类数组中进行更改，div.style.borderRadius = "50%"成立
例1：
```
    <style type="text/css">
        div{
            width:100px;
        }
    </style>
<div style="height:100px;background-color:red;"></div>
<script type="text/javascript">
    var div = document.getElementsByTagName('div')[0];
</script>
//调用div.style.width没有值为""，因为width没写到行间。调用div.style.height就有值，因为height属性在行间。利用div.style.width改变也是改变到行间上，
float是关键字，所以当在行间设置float:left时，要使用div.style.cssFloat;
复合属性需拆解，像border最好拆开些borderWidth borderStyle
```

98脚本化CSS（接97）
2.查询计算样式
（1）window.getComputedStyle(ele,null);（对于查看元素样式来说，这个方法更加准一些，因为它看的是权重，谁的权重大就怎么显示，调用这个返回的也是类数组）
例1：在控制台打印 div.getComputedStyle(ele,null);，获取当前元素所展示出的一切CSS属性的显示值，（假如通过六个选择器给一个标签添加了一个属性，那么显示的就是最终值）
例2：
    <style type="text/css">
        div{
            width:200px!important;
        }
    </style>
</head>
<body>
<div style="width:100px;height:100px;background-color:red;"></div>
<script type="text/javascript">
    var div = document.getElementsByTagName('div')[0];
</script>
//部分代码
//window.getComputedStyle(div,null).width 结果为200px
//div.style.width       结果为100px
//页面显示也为200px
（2）
计算样式只读

（3）返回的计算样式的值都是绝对值，没有相对单位
就是假如是用em表示的单位那么会被转化为绝对值也就是像素值，像素和en都是相对值，但是像素值就是计算机的绝对值。
再例如颜色red会被转换为rgb(255,0,0)返回给你

（4）IE8 及 IE8以下不兼容

99,脚本化CSS（接97）
3.查询样式
（1）ele.currentStyle（也会返回CSSStyleDeclaration，获取的也是展示值）
（2）
计算样式只读
（3）
返回的计算样式的值不是经过转换的绝对值（获得也是权重最高的值）
这个返回的就是em就是em，red就是red
（4）
IE独有的属性
（5）
封装兼容性方法getStyle(obj,prop);常用,注意 传入prop为字符串，返回的是字符串，像素值
    var div = document.getElementsByTagName('div')[0];
    function getStyle(elem,prop){
        if(window.getComputedStyle){
            return window.getComputedStyle(elem,null)[prop];        /*prop作为一个参数，一个字符串来传入所以一定要用prop*/
        }
        else{
            return elem.currentStyle[prop];
        }
    }

（6）window.getComputedStyle(elem,null)中第二个参数就是可以获取伪元素的样式表
补充：
报错：
var content = document.getElementsByClassName('content')[0];
this.mapW = parseInt(Window.getComputedStyle(content,null).width); 
正确：
this.mapW = parseInt(getComputedStyle(content).width);


例1：
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
    <style type="text/css">
        div::after{
            content:"";
            width:30px;
            height:30px;
            background-color:pink;
            display:inline-block;
        }
    </style>
</head>
<body>
<div style=" float:left;width:100px;height:100px;background-color:red;"></div>
<script type="text/javascript">
    var div = document.getElementsByTagName('div')[0];
</script>
</body>
</html>
//打印window.getComputedStyle(div,"after").width获得伪元素的属性，也是唯一获得伪元素属性的方法
```
例2：通过js改变点击后小方块的颜色，原来为粉色，点击后就变为蓝色
方法1：（不常用）
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
    <style type="text/css">
        .pink::after{
            content:"";
            width:30px;
            height:30px;
            background-color:pink;
            display:inline-block;
        }
        .blue::after{
            content:"";
            width:30px;
            height:30px;
            background-color:blue;
            display:inline-block;
        }
    </style>
</head>
<body>
<div class="pink" style=" float:left;width:100px;height:100px;background-color:red;"></div>
<script type="text/javascript">
    var div = document.getElementsByTagName('div')[0];
    div.onclick = function (){
        div.className = "blue";
    }
</script>
</body>
</html>
```
方法2：（常用）通常改变状态位就像这个这样改，更改class就可以了，但是动态的就没有办法了
好处（同方法3一样）：
1.效率问题：DOM是js和html搭建的一个桥梁，改变属性的每次 . 没有直接一个.class这样效率更快
2.好维护，想加什么想改什么直接在class中改就可以，不用反复调用（不一定是class选择器）
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
    <style type="text/css">
        div{
            width:100px;
            height: 100px;
            background-color:red;
        }
    </style>
</head>
<body>
<div></div>
<script type="text/javascript">
    var div = document.getElementsByTagName('div')[0];
    div.onclick = function (){
        div.style.width = "200px";
        div.style.height = "200px";
        div.style.backgroundColor = "pink";

    }
</script>
</body>
</html>
```
方法3：（常用）
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
    <style type="text/css">
        div{
            width:100px;
            height: 100px;
            background-color:red;
        }
        .active{
            width:200px;
            height:200px;
            background-color:pink;
        }
    </style>
</head>
<body>
<div></div>
<script type="text/javascript">
    var div = document.getElementsByTagName('div')[0];
    div.onclick = function (){
        div.className = "active";
    }
</script>
</body>
</html>

假如一个大方块带着一个小方块，大方块在100px，100px的位置，小方块就设置position:absolute，没设置left和top
那么小方块还在大方块的最顶端，因为它let和top默认值不是0，而是auto（相对值），要是0的话，大方块是带不动小方块的。
```
例3：让一个方块自动加速移动，并且能够停止
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
</head>
<body>
<div style="height:100px;width:100px;background-color:red;position:absolute;left:0;top:0;"></div>
<script type="text/javascript">
    var div = document.getElementsByTagName('div')[0];
    function getStyle(elem,prop){
        if(window.getComputedStyle){
            return window.getComputedStyle(elem,null)[prop];        /*prop作为一个参数，一个字符串来传入所以一定要用prop*/
        }
        else{
            return elem.currentStyle[prop];
        }
    }
    var speed =  5;                                         //利用speed改变移动速度
    var timer = setInterval(function(){           //利用timer令它到设定位置停止
        speed += speed/7;
        div.style.left = parseInt(getStyle(div,'left')) + speed +"px";
        div.style.top = parseInt(getStyle(div,'top')) + speed +"px";
        if(parseInt(div.style.left)>600){
            clearInterval(timer);
        }
    },1000)  /*改变时间是改变移动的速度，改变left是让它变得更细，流畅度的问题*/
</script>
</body>
</html>
```
100.小练习：让方块移动

101.作业：轮播图

103.事件
1.交互：就自己做了什么，它反馈给你了什么效果
例1：
    var div = document.getElementsByTagName('div')[0];
    div.onclick = function(){     /*div.onclick 就叫做一个可以被点击的事件，function代表一旦事件被触发后我要执行的函数，叫做反馈*/
        console.log('a');              /*这个就叫整个事件触发的函数*/
    }
104.如何绑定事件（我们绑定的只是事件处理函数。不是绑定事件，事件不绑定也存在，我们绑定的只是事件处理函数）
1.ele.onxxx = function (event) {}把on这种绑定方式叫做句柄的绑定方式
（1）兼容性很好，但是一个元素只能绑定一个处理程序（写多了就会覆盖），不能给同一个函数绑定多次
（2）基本等同于写在HTML行间上
例1：div.onclick = function(){}这个是在div的onclick事件上绑定一个function函数,不是给div绑定什么事件，这个事件不绑定也有，而是绑定事件处理函数。
例2：div.onclick = function(){}    <==><div onclick="console.log('a');"></div>
2.ele.addEventListener(type, fn, false); -->div.addEventListener(事件类型，处理函数，flase);

（1）IE9以下不兼容（基本上就是w3c标准），可以给一个对象的一个事件绑定多个处理程序（函数）
例1：
    div.addEventListener('click',function(){                这个function是函数引用不是函数体
        console.log('a');
    },false);
例2：点击之后执行两个a，因为可以给一个事件绑定多个处理函数，所以它们的地址是不一样的。
    div.addEventListener('click',function(){
        console.log('a');
    },false);
    div.addEventListener('click',function(){
        console.log('a');
    },false);
例3：执行一个a，就是一个函数，所以就执行一遍a
    div.addEventListener('click',test,false);
    div.addEventListener('click',test,false);
    function test(){
        console.log('a');
    }
例4：使用addEventListener()给每个li元素绑定一个click事件，输出它们的顺序（104页小练习，具体题见另一文档）
所以这里要注意，一旦事件（尤其是用到i了）出现在了循环里一定要考虑是否出现闭包
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
</head>
<body>
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
<script type="text/javascript">
    var li = document.getElementsByTagName('li');
    for(var i = 0; i < li.length; i++){
        (function(j){
            li[j].addEventListener('click',function(){
                console.log(j);
            },false);
        }(i))
    }
</script>
</body>
</html>
```
3.ele.attachEvent(‘on’ + type, fn);     --> div.attachEvent('on' + 事件类型 , 处理函数);和div.addEventListener()差不懂，形式不同，而且功能更强大
（1）IE独有，一个事件同样可以绑定多个处理程序，而且一个对象的一个事件绑定同一个函数多次就能执行多次
备注：往下还有css3 html5 jquery webpack等等

105.事件处理程序的运行环境（重点）
1.ele.onxxx = function (event) {}
程序this指向是dom元素本身
例1：
    div.onclick = function(){
        console.log(this);
    }
2.obj.addEventListener(type, fn, false);
程序this指向是dom元素本身
例1：
    div.addEventListener('click',function(){
        console.log(this);
    },false);
3.obj.attachEvent(‘on’ + type, fn);
程序this指向window
例1：这里的this一定指向div，而不是window了
    div.attachEvent('onclick',function(){
        handle.call(div);
    });
    function handle(){
        this.
    }
4.封装兼容性的 addEvent(elem, type, handle);方法：给一个DOM对象添加一个该事件类型的处理函数，需要三个变量：对象名，事件类型（键盘，点击什么的），事件处理函数
   function addEvent(elem,type,handle){
       if(elem.addEventListener){
           elem.addEventListener(type,handle,false)
       }else if(elem.attachEvent){
           elem.attachEvent('on'+type,function(){
               handle.call(elem);
           });
       }else{
           elem['on' + type]= handle;
       }
   }


106.解除事件处理程序：若绑定匿名函数则无法解除
1.ele.onclick = false/‘’/null;
例1：只执行一次就失效
    div.onclick = function(){
        console.log(this);
        this.onclick = null;
    }
2.ele.removeEventListener(type, fn, false);
如果想让一个函数还能被清除，只有把函数写在外面留一个引用别人能找到它
例1：利用test清除
    div.addEventListener('click',test,false);
    div.removeEventListener('click',test,false);
    function test(){
        console.log('a');
    }
3.ele.detachEvent(‘on’ + type, fn);（同上的2一样）

## 事件处理模型（事件冒泡，事件捕获）
1. 一个对象的一个事件类型，只能遵循一种事件模型（要么冒泡，要么捕获）
2. 事件冒泡：
    + 概念：结构上（非视觉上）嵌套关系的元素，会存在事件冒泡的功能，即同一个时间，字子元素冒泡向父元素，代码上自底向上
    + 解释：就是如果点击子元素，它会一级一级的传递到父元素上。
    + 我们把第一种事件处理方式叫做第一种事件处理模型：事件冒泡模型（常规模型）
        例1：虽然视觉上不是嵌套关系，但是结构上依旧是，点击蓝色的box区域依旧都显示
            ```
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <title>frame</title>
                <style type="text/css">
                    .wrapper{
                        height:300px;
                        width:300px;
                        background-color:red;
                    }
                    .content{
                        height:200px;
                        width:200px;
                        background-color:pink;
                        margin-left:300px;
                    }
                    .box{
                        height:100px;
                        width:100px;
                        background-color:aqua;
                        margin-left:200px;
                    }
                </style>
            </head>
            <body>
            <div class="wrapper">
                <div class="content">
                    <div class="box">

                    </div>
                </div>
            </div>
            <script type="text/javascript">
                var wrapper = document.getElementsByClassName('wrapper')[0];
                var content = document.getElementsByClassName('content')[0];
                var box = document.getElementsByClassName('box')[0];
                wrapper.addEventListener('click',function(){
                    console.log('wrapper');
                },false);
                content.addEventListener('click',function(){
                    console.log('content');
                },false);
                box.addEventListener('click',function(){
                    console.log('box');
                },false);
                /*事件处理模型，就是整个系统或者元素针对这个事件的处理方式*/
            </script>
            </body>
            </html>
            ```
3. 事件捕获（IE没有）
    + 概念：结构上（非视觉上）嵌套关系的元素，会存在事件捕获的功能，即同一事件，自父元素捕获至子元素（事件源元素）。（自顶向下）
        例1：点击蓝的执行顺序，wrapper，content，box，红的捕获后执行，粉的捕获后执行，蓝的就是执行
        ```
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>frame</title>
            <style type="text/css">
                .wrapper{
                    height:300px;
                    width:300px;
                    background-color:red;
                }
                .content{
                    height:200px;
                    width:200px;
                    background-color:pink;
                    margin-left:300px;
                }
                .box{
                    height:100px;
                    width:100px;
                    background-color:aqua;
                    margin-left:200px;
                }
            </style>
        </head>
        <body>
        <div class="wrapper">
            <div class="content">
                <div class="box">

                </div>
            </div>
        </div>
        <script type="text/javascript">
            var wrapper = document.getElementsByClassName('wrapper')[0];
            var content = document.getElementsByClassName('content')[0];
            var box = document.getElementsByClassName('box')[0];
            wrapper.addEventListener('click',function(){
                console.log('wrapper');
            },true);
            content.addEventListener('click',function(){
                console.log('content');
            },true);
            box.addEventListener('click',function(){
                console.log('box');
            },true);
            /*事件处理模型，就是整个系统或者元素针对这个事件的处理方式*/
        </script>
        </body>
        </html>
        ```
4. IE没有捕获事件
5. 触发事件：先捕获后冒泡
    例1：先捕获后冒泡，所以点击蓝色区域时前后四个显示的顺序是正确的，但是蓝的区域自己，点击时候只是执行，没有别的，所以先绑定什么事件，就先执行什么
        ```
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>frame</title>
            <style type="text/css">
                .wrapper{
                    height:300px;
                    width:300px;
                    background-color:red;
                }
                .content{
                    height:200px;
                    width:200px;
                    background-color:pink;
                    margin-left:300px;
                }
                .box{
                    height:100px;
                    width:100px;
                    background-color:aqua;
                    margin-left:200px;
                }
            </style>
        </head>
        <body>
        <div class="wrapper">
            <div class="content">
                <div class="box">

                </div>
            </div>
        </div>
        <script type="text/javascript">
            var wrapper = document.getElementsByClassName('wrapper')[0];
            var content = document.getElementsByClassName('content')[0];
            var box = document.getElementsByClassName('box')[0];
            wrapper.addEventListener('click',function(){
                console.log('wrapperBubble');
            },false);
            content.addEventListener('click',function(){
                console.log('contentBubble');
            },false);
            box.addEventListener('click',function(){
                console.log('boxBubble');
            },false);
            wrapper.addEventListener('click',function(){
                console.log('wrapper');
            },true);
            content.addEventListener('click',function(){
                console.log('content');
            },true);
            box.addEventListener('click',function(){
                console.log('box');
            },true);
            /*事件处理模型，就是整个系统或者元素针对这个事件的处理方式*/
        </script>
        </body>
        </html>
        ```
6. focus，blur，change，submit，reset，select 等事件不冒泡

## 取消冒泡和阻止默认事件
1. 取消冒泡：
    + W3C标准 event.stopPropagation();但不支持ie9以下版本
    + IE独有 event.cancelBubble = true;
        例1：下例就出现了不需要的冒泡现象，点击div部分不止颜色也改变了，控制也显示字
            ```
            var div = document.getElementsByTagName('div')[0];
            document.onclick = function(){
                console.log('你闲的啊');
            }
            div.onclick = function(){
                this.style.backgroundColor = 'pink';
            }
            ```
            更改：取消冒泡两种方法这两种方法哪个都行
            ```
            div.onclick = function(e){
                /*e.stopPropagation();*/
                e.cancelBubble = true;
                this.style.backgroundColor = 'pink';
            }
            ```
    + 封装取消冒泡的函数 stopBubble(event)
        ```
           div.onclick = function(e){
                stopBubble(e);
                this.style.backgroundColor = 'pink';
            }
            function stopBubble(event){
                if(event.stopPropagation){
                    event.stopPropagation();
                }else{
                    event.cancelBubble = true;
                }
            }
        ```
2. 阻止默认事件(默认事件有 — 表单提交，a标签跳转，右键菜单等)
    + return false;  以对象属性的方式注册的事件才生效，它是一个句柄的方式来绑定默认事件，只有用句柄方式绑定事件（onclick之类的），return false才好使
        例1：右键出菜单事件
            ```
            document.oncontextmenu = function(){}
            ```
        例2：点击右键控制台显示a
            ```
            document.oncontextmenu = function(){
                console.log('a');
            }
            ```
        例3：点击右键只显示a，不显示菜单了
            ```
            document.oncontextmenu = function(){
                console.log('a');
                return false;
            }
            ```
    + event.preventDefault(); W3C标注，IE9以下不兼容
        例1：
            ```
            document.oncontextmenu = function(e){
                console.log('a');
                e.preventDefault();
            }
            ```
    + event.returnValue = false; 
    + 兼容IE:封装阻止默认事件的函数 
        ```
        cancelHandler(event);
        document.oncontextmenu = function(e){
            console.log('a');
            cancelHander(e);
        }
        function cancelHander(event){
            if(event.preventDefault){
                event.preventDefault();
            }else{
                event.returnValue = false;
            }
        }
        ```
    + fn() -->return false 不可能的，函数执行达不到return false得结果，所以不写
        例1:去掉a标签点击返回页首的默认事件
            ```
            var a = document.getElementsByTagName('a')[0];
            a.onclick = function(){
                return false;
            }
            ```
        例2:
            ```
            <a href="javascript:alert('a')">baidu</a> 直接将js代码写入标签中，
            ```
        例3：取消a的功能，点不好使
            ```
            <a href="javascript:void(false)">baidu</a> （在行间写void相当于写返回值，return什么东西）
            ```

## 事件对象
1. event || window.event 用于IE：如果想拿到一个事件触发之后的事件对象，因为IE浏览器事件在window.event中，而不是e，因为有兼容性的问题，所以要这么写
2. 事件源对象:（事件对象上的属性）可以用在事件委托
    + event.target   火狐独有的
    + event.srcElement  Ie独有的
    + 这俩chrome都有
例1：当点击红色区域式事件源是自己，当点击粉色区域时事件源是box
    ```
    <body>
    <div class="wrapper"style="width:100px;height:100px;background-color:red">
        <div class="box" style="width:50px;height:50px;background-color:pink"></div>
    </div>
    <script type="text/javascript">
        var wrapper = document.getElementsByClassName('wrapper')[0];
        var box = document.getElementsByClassName('box')[0];
        wrapper.onclick = function(e){
            var event = e || window.event;
            console.log(event);
        }
    </script>
    </body>
    ```
例2：输出li中的内容，要是有几亿个呢，所以利用事件源对象，在ul上绑定，好添加，灵活，
li几乎覆盖了ul所有区域，点击第一个li，ul一定会执行，执行之后找的是事件源对象还是li，比在li上添加更好一点
    ```
        var ul = document.getElementsByTagName('ul')[0];
        ul.onclick = function(e){
            var event = e || window.event;
            var target = event.target || event.srcElement;
            console.log(target.innerText);
        }
    //部分代码省略
    ```
3. 兼容性写法

## 事件委托：
1. 原理：利用事件冒泡，和事件源对象进行处理（像上一道题，绑定在li他爹身上，而不是li身上灵活）
2. 优点：
    + 性能 不需要循环所有的元素一个个绑定事件
    + 灵活 当有新的子元素时不需要重新绑定事件
3. 作业：onmouseenter onmouseleave onmousemove 完成小方块的拖拽，下面这个例子不是完整的，很粗糙，要自己优化一下，这个绑定方式绝对不可以.
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>lottery</title>
</head>
<body>
<div style="height:200px;width:200px;background-color:red;position:absolute;left:0;top:0">
    <!--<div class="box" style="height:100px;width:100px;background-color:pink"></div>-->
</div>
<script type="text/javascript">
    var div= document.getElementsByTagName('div')[0];
    var disX;
    var disY;
    div.onmousedown = function(e){
        disX = e.pageX - parseInt(div.style.left);
        disY = e.pageY - parseInt(div.style.top);
        document.onmousemove = function(e){         //我想实现的是在鼠标按下后再让小方块和我走，所以写在onmousedown中
            var event = e || window.event;
            div.style.left = event.pageX -disX  + "px";
            div.style.top = event.pageY -disY+ "px";
        }
        document.onmouseup = function(){
            div.onmousemove = null;

        }
    }
</script>
</body>
</html>
//这个onmousemove 绑在的是document上，也就是在整个页面上移动，这个函数都会执行，鼠标到哪小方块在哪
//这个onmousemove 绑在的要是div上，鼠标就只是在小方块上移动，这个函数才会执行，鼠标的挪动是受屏幕的侦屏系统监控的，就是每一秒鼠标可以挪动100下，
//但是每一秒我们对事件的监听达不到100次。就是10秒监听一次你什么时候挪，可能你在1秒的时候就跑出去了，它没监听到，所以就是鼠标可能突然跑出去了，但是小方块没移动
```
4. 例题：
事件捕获，用于解决拖拽，鼠标容易出了div这种麻烦事，用于解决鼠标帧频比事件监听帧频要快的麻烦事就像刚才鼠标挪出去之后拿document解决的
也可以不这么解决还有一种方法也叫事件捕获，仅在ie中好用，div.setCapture(),用完这个方法之后，div会捕获页面上发生的所有的事件硬捕获到自己的身上，这个方法会将任何地方发生的任何事件发生在自己身上，用完了就赶快释放div.releaseCapture()

## 事件分类
1. 在写事件的时候根本没有小驼峰式大驼峰式，只有罗列出来就行
2. 鼠标事件（click = on + down）
click、mousedown、mousemove、mouseup、contextmenu、mouseover、mouseout、 mouseenter mouseleave
    例1：
        ```
        应用：click、mousedown、mouseup

        var div = document.getElementsByTagName('div')[0];
        div.onclick = function(){
            console.log('click');
        }
        div.onmousedown = function(){
            console.log('onmousedown');
        }13:31 2018/9/9
        div.onmouseup = function(){
            console.log('onmouseup');
        }
        //点击div 顺序 ：down up click 和事件的绑定顺序无关
        ```
    例2：
    ```
    描述：
        下例，原本div是红色的，利用over和out，当鼠标挪进div后，颜色变为粉色，挪出后，颜色变为黑色
        同理html5中的enter和leave和那两个一样。
    应用：mouseover，mouseout，mouseenter，mouseleave

        <div style="height:200px;width:200px;background-color:red;position:absolute;left:0;top:0">
        var div = document.getElementsByTagName('div')[0];
        div.onmouseover = function(){
            div.style.background = "pink";
        }
        div.onmouseout = function(){
            div.style.background = "black";
        }
    ```
3. 其他注意
    + 用button来区分鼠标的按键，0/1/2
    + DOM3标准规定:click事件只能监听左键,只能通过mousedown 和 mouseup来判断鼠标键
    + 能区分左右键的只有两个事件mouseup和mousedown，其他的事件像click什么的都不可能
    + contextmenu，右键菜单事件，唯一的用处就是右键取消菜单事件，不用它来监听事件
    例1：事件e中的button属性记录着鼠标点的是左键还是右键，左键是0,右键是2，滚动轮是1
        ```
        div.onmousedown = function(e){
        div.onclick = function(e){
            console.log(e);
        }
        ```
4. 如何解决mousedown和click的冲突
    例1:
        ```
        描述：
            假定一个一个小方块是一个a标签，可以对它进行两个操作，一个是点击跳转页面，一个是正常拖拽，要求实现拖拽和点击是两个事件
        解题思路：利用时间差

        var div = document.getElementsByTagName('div')[0];
        var firstTime = 0;
        var lastTime = 0;
        var  key = false;
        div.onmousedown = function(){
            firstTime = new Date().getTime();
        }
        div.onmouseup = function(){
            lastTime = new Date().getTime();
            if(lastTime - firstTime < 300){         //小于300证明是点击，执行onclick中的事件
                key = true;
            }
        }
        div.onclick = function(){
            if(key){
                console.log('click');      //每次执行后再将key置为false，以便下次判断
                key = false;
            }
        }
        ```

## 事件练习
1. 拖拽应用：
应用 mousedown mousemove mouseup
2. 随机移动的方块：
mouseover 


113.事件分类（接111）
1.键盘事件：keydown keyup keypress（down > press >up）
注意：移动端onmousedown就不好使了，移动端就用toushstart  toushmove  toushend  <==>和那个down move up一样的
（1）当连续按键盘时不抬起时，只有down和press没有up，所以由此延伸到游戏，当放技能时候，应该把事件绑定在keydown身上
例1：
    document.onkeypress = function(e){
        console.log(e);
    }
    document.onkeydown = function(e){
        console.log(e);
    }
//当在页面中打a的时候，keydown打印的e中的charCode值为0，keyup打印的e中的charCode值为97（a的ASCII码）
//当在页面中打键盘中的上下左右键时，每隔只出现了一个e并且是keydown打印出的e，并且这些控制键像shift等打印的都是keydown，keypress不见了
2.keydown和keypress的区别
（1）keydown能够监测到所有的键盘类按键的事件除了fn以外，fn是辅助按键不算键盘类事件
    但是keydown属性有个缺点，监测字符类的按键是不准的，大写的a和小写的a在e中charCode都是0，which都是65，
    而keypress，小写的a，charCode和which是97,大写的a，charCode和which是65，
         keypress只能够监测到字符类按键，ASCII中有的字符
（2）keydown和keypress怎样配合使用
    所以监测字符类按键并且想区分大小写的话，就用keypress
    如果操作类按键就用keydown，并且每个按键which（不是ASCII码，是键盘按键）值是不一样的，但是有一点又不好，就是123...数字按键which对应的值不是ASCII的值，所以就得一个一个的测
（3）总结：keydown 可以响应任意键盘按键，keypress只可以相应字符类键盘按键
keypress返回ASCII码，可以转换成相应字符

例1：String上面有一个静态方法，可以将unicode编码转换为相应的字符（unicode码包含ASCII码）
    document.onkeypress = function(e){
        console.log(String.fromCharCode(e.charCode));
    }

//按a显示a，按b显示b，按shift+a显示A等等
如果想监测字符类按键并且区分大小写的话，就用keypress，要是操作类案件只能用keydown
114.事件分类（接111）
1.文本类操作事件：input,focus,blur,change

（1）input
例1：
    var input = document.getElementsByTagName('input')[0];
    input.oninput = function(e){
        console.log(this.value);
    }
//但凡input中内容有变化都会触发这个input事件
（2）change：比较的是聚焦和失去焦点两个状态是否发生改变，发生改变，那么触发事件，不改变，不触发事件
（3）focus和blur
例1：当聚焦显示为空，当失去焦点显示请指示
<input type="text" value="请输入用户名" onfocus="this.value=''" onblur="this.value='请指示'">
例2：
<input type="text" value="请输入用户名" onfocus="if(this.value=='请输入用户名'){this.value=''}" onblur="if(this.value==''){this.value='请输入用户名'}">
例3：这个有点问题，就是要是输入“请输入用户名”，点外部之后再聚焦，里面的内容就没了，例如58同城
<input type="text" value="请输入用户名" color="#999" onfocus="if(this.value=='请输入用户名'){this.value='';this.style.color='#424242'}" onblur="if(this.value==''){this.value='请输入用户名';this.style.color='#999'}">

115.事件分类（接111）
1.窗体操作类(window上的事件)

2.scroll load（ie6没有fixed定位）
例1：正常javascript标签是读到javascript时就阻断页面，所以将javascript写在最下面
但是，利用onload可以将div写在下面，这个虽然没有问题，但是一般不用，因为它是最慢的，而且没有意义。
```
<body>
<!--<div style="height: 100px; width: 100px; background-color: red;"></div>-->
<!--<div style="background-color:red;height:100px;width:100px;"></div>-->
<script type="text/javascript">
    window.onload = function(){
        var div = document.getElementsByTagName('div')[0];
        console.log(div);
        div.style.height = "100px";
        div.style.width = "100px";
        div.style.backgroundColor = "red";
    }
</script>
<div></div>
</body>
```
//部分代码省略
3.
小练习:fixed定位 js兼容版

例1：ie6是position的值没有fixed，那么利用js可以给他实现一个fixed定位的效果，当滚动轮滚过多少距离，将那个距离加到absolute（相对于文档定位）上，就可以实现fixed
4.二维数组：
例1：    var arr = [[1,2],[11,22]];

117.json
1.JSON是一种传输数据的格式（以对象为样板，本质上就是对象，但用途有区别，对象就是本地用的，json是用来传输的）
（1）XML和HTML：XML和HTML都是脚本语言，都是由标签标签的形式的，XML可以自定义标签，HTML不行
（2）过去以XML这种语言的格式来传输数据，如下，利用标签名和内容表示数据名和数据值
```
<student>
    <name>liu/name>
    <age>20</age>
</student>
```
但是现在的传的数据格式是json也就是对象格式。里面有什么就写什么，但是为了和对象区分，特定规定出一种json的格式就是让属性名必须加双引号
但是传的不可能直接是json，其实传送给后台，和后台传给咱们的也是字符串，字符串里边是json。

2.JSON.parse();  string — > 
JSON是个静态类像math一样，里面有很多函数
3.json
JSON.stringify(); json — > string

例1：
   var deng = {
        name:"deng",
        age:20,
    }
    var deng1 = JSON.stringify(deng);
//deng1     -->     "{"name":"deng","age":20}"
//JSON.parse(deng1)    -->    {name: "deng", age: 20} 这个放在括号中的deng1要是字符串形式。

## 异步加载js
1. 浏览器有时间线的问题，首先我们输入网址的时候，先将这个页面请求过来，再一行一行加载。
在一行一行解析的过程中，html和css是并行一起解析的，html解析的时候会形成domTree的东西，css会形成cssTree，就像这种
```
<div>
    <span></span>
    <strong></strong>
</div>
```
上面的代码html部分就会形成下面的树domTree（二叉树），深度优先原则，还有一个domTree的解析完毕，并不一定意味着domTree的加载完毕
```
         document
         html
head            body
                                div
                strong   span
```
同样css也会有一个对应的树（和domTree节点对应的），然后两颗大树拼在一起，就会形成渲染树renderTree,渲染树大致就是
假如domTree中的div标签，渲染树中就有这个div多高多宽什么样的等
那么问：什么时候算是把一个节点挂到这个树上面去呢，是把图片下载完了，再把img挂到树上去，还是读到img标签就挂上去呢？
```
答：不着急下载，系统读到img标签了，就会挂到树上去，这就叫代码的解析。
       所以是先解析再下载，先把这个东西解析，再同时开启一个线程，异步的去下载这个东西
那么：
<div></div>
<span></span>
<img src="xxx.solarge" alt="">
<script type="text/javascript">
</script>
```
把javascript放在这些下面好处就是，这些东西刚刚解析完毕之后，javascript就可以操作他们了，没必要等他们下载完之后，所以更快一点
而window触发load事件之后，那么就要等到这个页面所有的图片，文字等信息全部下载完之后，也就是，这个页面所有自动的过程全部完事，就等着用户交互体验了，window.onload才能执行，所以效率是最低的
但是也有好处：就是广告，等到页面所有加载完事了，再显示广告。但是决对不可以将主程序放在window.onload中
当renderTree真正形成完之后，渲染引擎才会真正的绘制页面，按照render每条规则绘制页面
2.
 reflow（重排/重构/回流）：当利用js更改html以致会改变domTree，然后render，这叫做reflow（重排）这种效率是最低的，尽量避免，造成重排的原因有dom节点的删除，添加，dom节点的宽高变化，像字体大小，位置变化，display:none -->block,offsetWidth，offsetLeft
repaint（重绘）：只要是改变了，renderTree都会重新构建，不过是基于什么重新构建，若是基于CSS背景颜色的，不会全改变，会改变那个对应的一部分，影响比较小，重绘的是一部分，不是所有。也会浪费效率，但是浪费的小，可以接受
3. js加载的缺点：加载工具方法（就像初始化什么的）没必要阻塞文档，过多js加载会影响页面效率，一旦网速不好，那么整个网站将等待js加载而不进行后续渲染工作
（1）js和html和css不能同时加载是因为js会更改html。js是单线程一个原因是因为，它可以修改页面，要是多线程，一个线程增加节点，另一个线程是删除节点，到底听哪个不知道
要是写多个js包的话，那么风险会越大，因为要是其中一个出问题了，整个页面就会废掉，因为js有阻断页面的作用。
4. 有些工具需要按需加载，用到再加载，不用不加载。
并不是js都是操作DOM的有的是充当工具库的，有的js是充当数据初始化的，有的js充当压缩的，或者css3弥补的
之前有的公司，是把js放在最下面解决js加载问题

## 异步加载js三种方式（接118），只要听见异步加载就不能使用document
1. defer（英语推迟的意思） 异步加载，但要等到dom文档全部解析完才会被执行。只有IE能用
写了defer，这个javascript就不会阻塞下面文档的执行了，可以和html，css一起执行
link能写在body中
例1:当属性名等于属性值的时候，就写个属性名就行，系统可以识别,但还是按标准写，全写了。
```
<script type = text/javascript src="tool.js" defer="defer"></script>  <==><script type = text/javascript src="tool.js" defer></script>
```
例2：不仅是外部文件可以异步加载，写成代码块也是可以异步加载的，当然不能又src，里面又写代码的
```
<head>
    <meta charset="UTF-8">
    <title>lottery</title>
<*往下这三行也可是异步加载*>

    <script type = text/javascript defer="defer">
        var a = 123;
    </script>   
</head>
```
2. aysnc 异步加载，加载完就执行，async只能加载外部脚本，不能把js写在script标签里，还有ie6，ie8不兼容，ie9以上的浏览器也可以用
asynchronous（异步）  javascriptt and xml -->ajax
例1：这样可以但是不能将js写在里面，不像上一个，
```
<script type="text/javascript" aysnc="aysnc">
        
    </script>
```
总结：defer是ie用的 aysnc是非ie浏览器用的，当然有些ie的高版浏览器也是可以用的，defer全部解析完才会被执行，aysnc是加载完就可以执行，defer里面除了可以引入外部js文件，也可以让内部的js文件变为异步的，但是aysnc只能加载外部js文件
问：我要是想要任何浏览器都能实现这种异步加载，怎么办？
要是写在一起会崩溃、冲突，要是写两条语句的话，会产生代码覆盖，代码重叠，代码冲突等的问题，所以解决方法如下，也是最常用的一种方法
3. 创建script标签，插入到DOM中，加载完毕之后callback
灯塔模式：创建一个img标签，然后这个img标签作为一个预加载的东西，不去加载到页面，把src里面的值复制过来之后，会将img的东西加载过来，形成一个预加载，以后再用的时候就方便了，再拿缓存就可以了。
例1：实现了异步加载的过程，当然也依赖于另外一个script标签（外边那个）
```
<script type="text/javascript">
    var script = document.createElement('script');
    script.type="text/javascript";
    script.src="yinrujs.js"; /*这句执行完系统就会下载这个地址里的东西了，就会开启一个线程异步的下载里面的东西了，而且要是代码只写了这么多的话，永远都不会执行，只会下载*/
    document.head.appendChild(script);/*当你把这个script标签插入到页面里之后才会执行这个东西，才会解析这个脚本，否则什么也不干，*/
</script>
```
例2：
```
    var script = document.createElement('script');
    script.type="text/javascript";
    script.src="yinrujs.js";
    document.head.appendChild(script);
    test();                     //test函数在yinrujs文件中
//第一行创建，第二行设置，第三行下载，下载需要发送请求，然后等请求响应完之后，等待请求回归资源的过程，
//在发生过程中就已经把下面的那几行执行完了，因为程序执行是非常快的，并且这个加载还是异步加载的，不会阻塞程序，
//所以可能当下面执行，插入test到页面中后，调用test的时候，那个文件还没下载完，所以报错
```
4. onload当上面那个例子中文件下载完了就会触发onload事件
例1：
```
<script type="text/javascript">
    var script = document.createElement('script');
    script.type="text/javascript";
    script.src="yinrujs.js";
    document.head.appendChild(script);
    script.onload = function(e){
        test();
    }
</script>
//并且onload兼容性非常好，Safari Chrome firefox，opera，都是兼容的，然而ie就script身上没有onload标签
```
5. ie的script身上状态码：script.readyState,这个属性一开始有值 script.readyState="loading"，它会根据script标签加载的进度去动态的改变里面的值，当script标签加载完之后，里面的值会变为"complete"或者"loaded"
当状态码改变的时候会触发onreadystatechange 这个时间就是监听状态码的改变
    script.onreadystatechange = function(){
        if(script.readyState=="complete"||script.readyState == "loaded"){
            test();
        }
    }
5. 回调函数：当满足一定条件才执行的函数叫做回调函数，回调函数有个名字叫做callback，就像上例中的test。
6. 兼容性写法最终版
问题1：
```
就是当处理的特别快的话，那么那个readyState瞬间就变为complete了，那么onreadystatechange就不会触发了，
因为绑定之前就已经变为最终状态了，就不会在变化了，所以onreadystatechange就不会再执行了，
所以解决方法就是将src放在后面，这样状态一定就会改变，因为在后面才会开始下载文件。
```
问题2：
```
当执行函数的时候，要是直接写loadscript('yinrujs.js',test);会报错，因为这个时候还没有加载文件还没有执行函数体，不知道test是什么，所以会报错，
解决方法就是，写匿名函数，函数引用读的时候不会执行里面，只有在执行时才会执行里面的代码，然后callback就是函数引用，执行时候执行test
loadscript('yinrujs.js',function(){
        test();
    });

js文件：
function test(){
    console.log('a');
}
```
完整版1（重要）：
```
<script type="text/javascript">
    function loadscript(url,callback){
        var script = document.createElement('script');
        script.type="text/javascript";
        if(script.readystate){                             //写在这里才能检测到状态位的改变，if，else位置不能更换9:22 2018/9/29
            script.onreadystatechange = function(){
                if(script.readyState=="complete"||script.readyState == "loaded"){
                    script.onreadystatechange = null;
                    callback();
                }
            }
        }
        else{
            script.onload = function(e){
                callback();
            }
        }
        script.src=url;
        document.head.appendChild(script);
    }
    loadscript('yinrujs.js',function(){
        test();
    });
</script>
```
完整版2：eval将里面的字符串当作代码来执行，但是不让用eval，不建议使用
```
<script type="text/javascript">
    function loadscript(url,callback){
        var script = document.createElement('script');
        script.type="text/javascript";
        if(script.ready){
            script.onreadystatechange = function(){
                if(script.readyState=="complete"||script.readyState == "loaded"){
                    eval(callbac k);
                }
            }
        }
        else{
            script.onload = function(){
                eval(callback);
            }
        }
        script.src=url;
        document.head.appendChild(script);
    }
    loadscript('yinrujs.js',"test()");
</script>
```
完整版3：
```
<script type="text/javascript">
    function loadscript(url,callback){
        var script = document.createElement('script');
        script.type="text/javascript";
        if(script.ready){
            script.onreadystatechange = function(){
                if(script.readyState=="complete"||script.readyState == "loaded"){
                    tools[callback]()
                }
            }
        }
        else{
            script.onload = function(){
                tools[callback]();
            }
        }
        script.src=url;
        document.head.appendChild(script);
    }
    loadscript('yinrujs.js',"test");
</script>
js文件：
var tools = {
    test : function(){
        console.log('a');
    },
    demo : function(){

    }
}
//调用时，loadscript('tools.js' , function(){console.log('a')});返回a代表异步加载成功
上面的形式其实很复杂的形式，因为：
正常情况下如果只是想异步加载一个js，只是想加载一个工具库的话，也可以用这个方法，只是没有必要传回调函数callback
在里面这么写，然后监控它，什么时候这个函数执行完毕，发送信号，当有这个信号的时候在随便调用函数就可以了，如果针对库里的某些方法,去按需加载，按需执行
可以将callback更改，你可能觉得加载完之后要调用一系列方法，那可以传个数组进去，然后在里面修改代码，执行数组   
```

## js加载时间线
1. 时间线：它是根据js出生的那一刻开始记录的一系列浏览器按照顺序做的事，形容的就是加载顺序，可以用来优化什么东西，理论基础，背下来

2. 创建Document对象，开始解析web页面。解析HTML元素和他们的文本内容后添加Element对象和Text节点到文档中。这个阶段document.readyState = 'loading'。（生成document对象，document状态位变为loading）


3. 遇到link外部css，创建线程加载，并继续解析文档。


4. 遇到script外部js，并且没有设置async、defer，浏览器加载，并阻塞，等待js加载完成并执行该脚本，然后继续解析文档。


5. 遇到script外部js，并且设置有async、defer，浏览器创建线程加载，并继续解析文档。
对于async属性的脚本，脚本加载完成后立即执行。（异步禁止使用document.write()）

document.write():特别特殊他是把里面的东西当成HTML文档输出到页面里去，但是有一点就是，有的时候，当你整个文档全部都解析的差不多的时候再用document.write()的话会把你之前所有的文档流都清空，用它里面的文档流代替
例：整个页面只显示a，这里的document.write();在这里有消除文档流的功能，连script都消除了。
<div style="height:100px;width:100px;background-color:red;"></div>
<script type="text/javascript">
    window.onload = function(){
        document.write('a');
    }
</script>

6. 遇到img等，先正常解析dom结构，然后浏览器异步加载src，并继续解析文档。


7. 当文档解析完成，document.readyState = 'interactive'。

先解析完，再加载完，然后状态位变为interactive（活跃）
查看状态位的转换：
    console.log(document.readyState);
    document.onreadystatechange = function(){
        console.log(document.readyState);
    }

8. 文档解析完成后，所有设置有defer的脚本会按照顺序执行。（注意与async的不同,但同样禁止使用(document.write()）;


9. document对象触发DOMContentLoaded事件，这也标志着程序执行从同步脚本执行阶段，转化为事件驱动阶段。

例1：同时打印出a和complete,而且onDOMContentLoaded是不好使的，只有绑定在addEventListener才好用。
```
    console.log(document.readyState);
    document.onreadystatechange = function(){
        console.log(document.readyState);
    }
    document.addEventListener('DOMContentLoaded',function(){
        console.log('a');
    },false)
```
例2：window.onload和下面这个的区别
```
    $(document).ready(function(){
    //当DOM解析完就执行的部分（不用加载完，加载完是给用户看的，对于我们来说解析完就可以操作了）
    /*它的原理就是interactive和DOMContentLoaded事件*/
    })
区别就是：window.onload满需要都加载完，但是它解析完就可以操作了（这是jQuery的方法）
```
例3：当把script放在上面时候最好这样写，不要写onload，千万不要写onload，但是最好的方法还是写在下面
```
<head>
    <meta charset="UTF-8">
    <title>lottery</title>
    <script type="text/javascript">
        document.addEventListener('DOMContentLoaded',function(){
            var div = document.getElementsByTagName('div')[0];
            console.log(div);
        },false)
    </script>
    script标签写在上面又能处理下面的代码，而且效率还高，因为等到DOM解析完就执行，而不是DOM加载完
</head>
//script标签写在上面又能处理下面的代码，而且效率还高，因为登高DOM解析完就执行，而不是DOM加载完
```
10. 当所有async的脚本加载完成并执行后、img等加载完成后，document.readyState = 'complete'，window对象触发load事件。


11. 从此，以异步响应方式处理用户输入、网络事件等。

12. 总结就是三个点：先生成document对象，代表js可以运行了，第二步就是文档解析完了，第三步就是文档加载完了并且执行完了


127.课前补充
1.转义符号
（1）利用转义字符反斜杠\，可以把后面的东西转义，我要想实现在双引号里加个双引号或者添加一个反斜杠
例1：
    var str = "abcdefg"
    var str = "abcd\"efg";
    var str = "abcd\\efg";
（2）转义字符反斜杠\，还可与配合一些特殊的字母，有特殊的语法意义
\n回车换行：
例1：
    var str = "abcd\nefg";
    console.log(str);v
但是不要像下面这样，因为文档里识别不了换行，都是空格，所以结果就是abcd efg
    var str = "abcd\nefg";
    document.write(str);
\r：正常情况下一个回车代表一个\r\n（行结束和换行了），但是在有些操作系统中，linux系统中，一个回车就没有\r的功能，只有\n的功能
\t：代表table缩进制表符，两个\t就代表两个缩进，还有一般一个缩进等于4个空格
2.多行字符串
例1：正常的字符串是不可以换行的，换行写是会报错的，但是利用转义字符，就可以将后面的文本形式的回车转义掉，让它不再是回车，所以不会报错
    var test = " \
            <div></div>\
            <span></span>\
            ";
例2：比较low的写法，也可以实现换行（在代码中换行，不是打印出来时换行的）
    var test = "<div></div>" +
            "<span></span>"

## RegExp
1. `http://www.w3school.com.cn/jsref/jsref_obj_regexp.asp`
2. 正则表达式的作用，匹配特殊字符或有特殊搭配原则的字符的最佳选
3. 两种创建方式：
    + 直接量（字面量，推荐使用）
        例1：正则表达式abc
            ```
            var reg = /abc/;
            ```
        例2：reg.test();正则表达式测验一下字符串里有没有我规定的片段
            ```
            var reg = /abc/;（连着的abc）
            var str = "abcd";
            //reg.test(str) 返回结果true
            ```
        例3：
            ```
            var reg = /abc/;
            var str = "fjkabcfda"
            //reg.test(str) 返回结果true
            ```
        例4: var reg = /abc/i; 忽略大小写
            ```
            var reg = /abc/i;
            var str = "ABCd";
            //reg.test(str); 返回结果true
            ```
        例5：    
            ```
            var reg = /abc/i;  
            这个里面的i可以为m可以为g都行，有不同的含义，或者三者随意组合，都行，都有不同的含义
            ```
    + newRegExp()：
    括号中是字符串形式正则表达式的规则，若是要写属性的话，中间用,号隔开，第二个字符串写属性，像"i","m","g","mgi",等等
        例1：
            ```
            var str = "abcd";
            var reg = new RegExp("abc");
            //reg.test(str)  返回true
            ```
        例2：
            ```
            var str = "ABCD";
            var reg = new RegExp("abc","i");
            //reg.test(str)  返回true
            ```
        例3：括号里面除了可以放字符串外，还可以把已知的正则表达式放里面，这样reg1和reg虽然形式一样但是却是两个不同的正则表达式，他们两个不影响，相互独立。
            ```
            var reg = /abc/m;
            var reg1 = new RegExp(reg);
            //reg.abc = 1         -->        reg1.abc返回undefined
            ```
        例4：没有new，创建出的这两个reg和reg1本质上是同一个人，只不过不同引用而已，就是两个要是一个锁，其他啥都一样
            ```
            验证：在reg上添加属性，reg1也有
                var reg = /abc/m;
                var reg1 = RegExp(reg);
            ```
4. 修饰符
    + i    执行对大小写不敏感的匹配。
    + g    (global)执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。
        例1：
            ```
            var reg = /ab/;
            var str = "abababab";
            //str.match(reg)  返回结果为一个ab
            ```
        例2：
            ```
            var reg = /ab/g;
            var str = "abababab";
            //str.match(reg)          执行结果返回4个ab，就是将所有能找到的ab都返回
            ```
    + m    执行多行匹配。
        例1：匹配以a开头的a，
            ```
                var reg = /^a/g;
                var str = "abcdab";
                //str.match(reg)  返回结果就为一个"a"
            ```
        例2：
            ```
                var reg = /^a/g;
                var str = "abcd\nab";
                //即使加个换行 返回也是一个a
            ```
        例3：
            ```
                var reg = /^a/gm;
                var str = "abcd\nab";
                //str.match(reg)  执行结果返回两个"a"
            ```
5. 方括号
```
[abc]   查找方括号之间的任何字符。
[^abc]  查找任何不在方括号之间的字符。
[0-9]   查找任何从 0 至 9 的数字。
[a-z]   查找任何从小写 a 到小写 z 的字符。
[A-Z]   查找任何从大写 A 到大写 Z 的字符。
[A-z]   查找任何从大写 A 到小写 z 的字符。
[adgk]  查找给定集合内的任何字符。
[^adgk] 查找给定集合外的任何字符。
(red|blue|green)    查找任何指定的选项
```
    例1：匹配连续的但三个数字，并且匹配过一次就不会再回来匹配了
        ```
        var reg  = /[1234567890][1234567890][1234567890]/g;
        var str = "12345jfkdahgf236gj24hfsj"
        //str.match(reg)  返回结果为两个字符串 ["123","236"]
        ```
    例2：
        ```
        var reg  = /[ab][bc][d]/g;
        var str = "abcd";
        //str.match(reg) 返回结果为["bcd"];
        ```
    例3：
        ```
        var reg  = /[0-9A-z][bc][d]/g;
        var str = "ab1cd";
        //str.match(reg)  返回结果为["1cd"]
        ```
    例4：/[^a]/
    尖角号放在里面是表示非的意思。尖角号放在表达式里和放在表达式之外是两个意思，一个是非，一个是以什么什么开头的意思
        ```
        var reg  = /[^a][^b]/g;
        var str = "ab1cd";
        //str.match(reg)  返回结果为"b1"，和"cd"，是个数组.
        ```
    例5：/(abc|bcd)/g  
    变成了一种类似表达式的区间，只不过这个区间是连着的，要么是abc要么是bcd，也算作是表达式
        ```
        var reg  = /(abc|bcd)/g;
        var str = "abc";
        //str.match(reg)  返回结果为"abc"
        ```
    例6：abc或者bcd后面跟一个0-9的数字
        ```
        var reg  = /(abc|bcd)[0-9]/g;
        var str = "bcd2";
        //str.match(reg)  返回结果为"bcd2"
        ```
6. 元字符：可以放在表达式里或者表达式外
```
//    \w === [0-9A-z_];
//    \W === [^\w]
```
例1：
```
    var reg = /\wbcd2/g;
    var str = "abcd2";
    //str.match(reg)  返回结果为"abcd2"

    //\d === [0-9]
    //\D === [^\d]
```
例2：
```
    var reg = /\D\D\D/g;
    var str = "abx";
    //str.match(reg)  返回结果为"abx"
```
例3：
```
    var reg = /\d\d\d/g;
    var str = "123";
    //str.match(reg)  返回结果为"123"
```
例4：
```
\w包含\d ，还有在表达式里写元字符完全可以
    var reg = /[\w\d]/g;
    var str = "s";
    //str.match(reg)  返回结果为"s"

    // s === [\t\n\r\v\f ]
    // S === [^\s]

    //\b 单词边界
    //\B 非单词边界
```
例5：
```
    var reg = /\bcde\B/g;
    str = "abc cdefgh";
    //str.match(reg)  返回结果为"cde"
    var reg = /\bc/g;
    str = "abc cde fgh";
    //str.match(reg)  返回结果就一个"c"

    //\t匹配的不是视觉上的缩进，而是内容上的\t
同理：\n 也是
```
例6：
```
    var reg = /\t/g;
    str = "abc  cdefgh";
    //str.match(reg)  返回结果为null不是字符串类型  
```
例7：
```
    var reg = /\tc/g;
    str = "abc\tcdefgh";
    //str.match(reg)  返回结果为["       c"]
```
例8：
```
    var reg = /\nc/g;
    str = "abc\ncdefgh";
    //str.match(reg)  返回结果为（自行试试）
```

7. unicode编码
```
原来的ASCII7位8位指的是二进制数，而unicode
第一种表达形式：\u0000           这里一位指的是16进制的（包含汉字）
第二种表达形式：
第一层：\u010000 - \u01ffff
第二层：\u020000 - \u02ffff
.....
第十六层：\u100000 - \u10ffff
```
    例1：
        ```
            var reg = /\u5c0f\u4ed9\u5973/g;
            str = "小仙女";
            //str.match(reg)  返回结果为["小仙女"]；
        ```
    例2：
        ```
            var reg = /[\u4e00-\u5c10]/g;
            str = "小仙女";
            //str.match(reg)  返回结果为["小","仙","女"]；
        ```
    例3：查找全部字符，好多种方法，这里只是列举出了两个
        ```
            var reg = /[\s\S]/g;
            var reg = /[\d\D]/g;
            // . === [^\r\n];
        ```
    例4：
        ```
            var reg = /./g;   <==> [^\r\n]
            str = "小仙女 一枚";
            //str.match(reg)  返回结果为["小","仙","女"," ","一","枚"]；
        ```
8. 量词
```
    //    n+  n可以出现{1，}一次到多次，可以匹配到 1到任何个n
    //    n*  n可以出现{0，}0次到多次，可以匹配到 0到任何个n
```
    例1：贪婪匹配原则，能多不少
        ```
            var reg = /\w+/g;
            var str = "abc";
            //str.match(reg)  返回结果为["abc"];
        ```
    例2：
        ```
            var reg = /\w*/g;
            var str = "abc";
            //str.match(reg)  返回结果为["abc", ""];，这个因为刚开始匹配\w匹配到三个字符，*就为3，后来\w重头开始为0，就认为这个//中的部分为空，就又匹配到了一个空串。
        ```
    例3：
        ```
            var reg = /\d*/g;
            var str = "abc";
        //str.match(reg)  返回结果为["", "", "", ""];，光标刚开始在a前面，然后就匹配一个空的，然后a不是，光标跑到了a后面又匹配到了一个，以此类推，匹配到了4个空串，也就是在这题中，光标有几个位置，就几个空

        //    n？  n可以出现{0，1}0或者1次，可以匹配到 0到1个n
        ```
    例4：
        ```
            var reg = /\w?/g;
            var str = "abc";
        //str.match(reg)  返回结果为["", "", "", ""];
        //    n{X}：{x}意思就是匹配x个
        ```
    例5：
        ```
            var reg = /\w{2}/g;
            var str = "abc";
        //str.match(reg)  返回结果为["ab"];

        //    n{x,y} {x,y}意思就是匹配x到y个
        ```
    例6:贪婪匹配原则
        ```
            var reg = /\w{2,3}/g;
            var str = "abc";
        //str.match(reg)  返回结果为["abc"];

        //    n{x, } {x,}意思就是匹配x到无穷个
        ```
    例7：
        ```
            var reg = /\w{2,}/g;
            var str = "abcdef";
        //str.match(reg)  返回结果为["abcdef"];

        //n$    匹配任何结尾为 n 的字符串。
        //^n    匹配任何开头为 n 的字符串。
        ```
    例8：
        ```
            var reg = /f$/g;
            var str = "abcdef";
        //str.match(reg)  返回结果为["f"];因为就一个以f结尾的字符串，返回一个f
        ```
    例9：以当前abc开头而且1这个abc结尾，必须是一人，所以达到了限定字符串的作用
        ```
            var reg = /^abc$/g;
            var str = "abcabc";
        //str.match(reg)  返回结果为null

        //正向预查 正向断言
        //?=n   匹配任何其后紧接指定字符串 n 的字符串。   
        ```
    例10：
        ```
            var str = "abcaaaaab"
            var reg = /a(?=b)/g;
           /*这代表a后面跟着b但是b不参与选择，b只参与修饰*/
        //str.match(reg)      返回["a", "a"]
        //记住 这个?=这个必须要加括号，而且reg中的a一定没有单双引号

        //非正向预查
        //?!n   匹配任何其后没有紧接指定字符串 n 的字符串。
        ```
    例11：
        ```
            var str = "abcaaaaab"
            var reg = /a(?!b)/g;   /*这代表a后面跟着b但是b不参与选择，b只参与修饰*/
        //str.match(reg)   返回["a", "a", "a", "a"]
        ```
     例12：
        ```
            var reg = /^abc/g;
            var str = "abcdef";
        //str.match(reg)  返回结果为["abc"];
        ```
9. RegExp对象属性
```
reg是个对象，对象上有很多方法和属性
reg.global：检验是否含有g
reg.ignoreCse：检验是否含有i
reg.multiline：检验是否含有m
reg.source：查看reg里的内容
lastIndex：一个整数，标示开始下一次匹配的字符位置，可以手动更改。
```
    例1：
        ```
        var reg = /^\d|\d$/g;
        reg.global：true
        reg.ignoreCse：
        reg.multiline：false
        reg.source：^\d|\d$
        ```

10. RegExp对象方法
```
compile 编译正则表达式。
test    检索字符串中指定的值。返回 true 或 false。
exec    检索字符串中指定的值。返回找到的值，并确定其位置。
```
    例1：一般exec和lastIndex配合使用
        ```
        var reg = /ab/g;                   //不加g的话lastIndex一直都是从0开始的，不变，一直都是0
        var str = "abababab";           //str.match(reg)  返回结果为["abcdef"];
        console.log(reg.lastIndex);  //输出游标的位置，每次匹配结束的位置就是index开始的位置，这个为0，每次匹配完会自动往后飘
        console.log(reg.exec(str));   //index:0
        console.log(reg.lastIndex);  //输出游标的位置，每次匹配结束的位置就是index开始的位置，这个为2
        console.log(reg.exec(str));   //index:2
        console.log(reg.lastIndex);  //输出游标的位置，每次匹配结束的位置就是index开始的位置，这个为4
        console.log(reg.exec(str));   //index:4
        console.log(reg.lastIndex);  //输出游标的位置，每次匹配结束的位置就是index开始的位置，这个为6
        console.log(reg.exec(str));   //index:6
        console.log(reg.lastIndex);  //输出游标的位置，每次匹配结束的位置就是index开始的位置，这个为8
        console.log(reg.exec(str));   null
        console.log(reg.lastIndex);  //输出游标的位置，每次匹配结束的位置就是index开始的位置，这个为0
        console.log(reg.exec(str));   //index:0（游标在一圈一圈的轮）
        ```
11. 拓展知识
```
/(a)/ :(a)叫做子表达式，括号会记录里面匹配的内容
/(a)\1/: 反向引用第一个子表达式里面匹配的内容
```
    例1：
        ```
        var reg = /(\w)\1(\w)\2/g;
        var str = "aabb";
        这样就匹配出来了aabb
        ```
    例2：
        ```
        var reg = /(\w)\1(\w)\2/g;         //加不加g都一样
        var str = "aabb";
        console.log(reg.exec(str));
        返回类数组多出来两位"a","b",分别是:
        第一个子表达式匹配内容
        第二个子表达式匹配内容
        而且多出来这两位是正式的数据位，是挂在数组上的索引位的
        0:"aabb"
        1:"a"
        2:"b"
        ```

12. 支持正则表达式的Sting对象的方法
    + search   检索与正则表达式相匹配的值。
        匹配成功：但凡返回的不是-1，都算成功了。返回的是匹配到东西的位置
        search就是不管匹配多少个，它关注的就是能不能匹配到，并返回位置
        不管有多少个，匹配不到就返回-1
        例1：
            ```
            var reg = /(\w)\1(\w)\2/g;
            var str = "123aabb344ddee";
            console.log(str.search(reg));
            返回的就是3
            ```
    + match    找到一个或多个正则表达式的匹配。
        例1：
            ```
                var reg = /(\w)\1(\w)\2/g;
                var str = "aabb";
                console.log(str.match(reg));
                只返回["aabb"],但是要是不加g（和lastIndex有关）的话，返回的就和exec就差不多了，像8中的例2一样。
            ```
    + split    把字符串分割为字符串数组。
    + replace  替换与正则表达式匹配的子串。
        例3：replace
            ```
            var str = "aaa";
            str.replace("a","b");
            这个replace（非正则表达式）没有访问全局的能力，只能访问一个，所以返回结果为"baa"
            ```
        例4：
            ```
            var reg = /a/;
            var str = "aaa";
            str.replace(reg,"b");
            返回还是"baa"，因为没有g，就匹配了一个a
            ```
        例5：
            ```
            var reg = /a/g;
            var str = "aaa";
            str.replace(reg,"b");
            返回结果"bbb"
            ```
        例6：将所有类似aabb形式转换为bbaa形式（$也能实现反向引用到reg匹配到的(\w)中的信息）
        第一种解法：
            ```
                var reg = /(\w)\1(\w)\2/g;
                var str = "aabb";
                str.replace(reg,"$2$2$1$1");
            ```
        第二种解法：
            ```
                var reg = /(\w)\1(\w)\2/g;
                var str = "aabbeghjkabbcc";
                str.replace(reg,function($,$1,$2){      /*$:正则表达式匹配的全局，$1:第一个子表达式匹配的内容，$2:第二个子表达式匹配的内容，*/，这个是系统帮咱们调用的，而且返回参数就是上句话一样。
                    return $2+ $2 + $1 + $1;  /*因为$1$2是变量，而且是字符串类型*/
                });
            将结果变大写：str.toUpperCase()
            将结果变小写：str.toLowerCase()
            ```
        例7：the-first-name  变为小驼峰式写法
            ```
            var reg = /-(\w)/g;
            var str = "the-first-name";
            console.log(str.replace(reg,function($,$1){  
                /*必须先写$ 再写$1，要不然$1引不过来*/        /*reg找了两次，这个函数也执行了两次*/
                return $1.toUpperCase();
            }));
            结果为：theFirstName
            ```

13.贪婪匹配，非贪婪匹配，（在任何一个量词后面加问号就是非贪婪匹配）
    例1：在任何一个量词后面加上一个问号，这样就变为非贪婪匹配的了，能少就不多
        ```
            var str = "abcaaaaab"
            var reg = /a+?/g;
        结果为["a", "a", "a", "a", "a", "a"]
        ```
    例2：
        ```
            var reg = /a{1,3}?/g;
        有1绝对不取2，或者3
        ```
    例3：
        ```
            var reg = /a??/g;
            第一个问号代表量词{0,1}，第二个问号代表取消贪婪匹配原则，所以的意思就是能取0绝对不取1
        ```
    例4：
        ```
            var reg = /a*?/g;
            意思就是能取0绝对不取1，返回结果就为["", "", "", "", ""]
        ```
    例5：取空格
        ```
            var str = "a b"
            var reg = / /g;
            返回结果为[" "]
        ```
    例6：当使用replace的时候，要是想把选中的字符换为$的时候，一个$的话，是无法意译的，必须换为$$，第一个$可以当作是转义字符
    例7:当想要匹配特殊字符的时候，要写上转义字符 像reg = /\?/g; 才能匹配出问号来
        ```
            var str = "aa\\bcs";
            var reg = /\\/g;
            //这样才匹配出了"\"。问号"?"也同理
        ```
    例8:字符串去重
        ```
            var str = "aaaaabbbbcccc";
            var reg = /(\w)\1*/g;
            console.log(str.replace(reg,"$1"));
            结果为abc
        ```
    例9：|正常的或就正常写就行，例如/a|b/ 要是加上括号就是/(a|b)e/  ==> ae或者be；
    例10：字符串去重
        ```
            var str = "aaaaaabbbbbbcccccc";
            var reg = /(\w)\1*/g;
            console.log(str.replace(reg , "$1"));
            //返回结果为"abc";
            *在这里的意思就是可以反向引用第1个标记的(\w)中的内容0到多次
            也就是当a就一个的时候可以被匹配到，当两个aa时可以匹配到，等等等
            当然遵循的是贪婪原则，能多匹配就多匹配。
        ```
    例11：难难难难难难！！！，百度笔试题将100100100转换为100.100.100
        ```
            var str = "100000000";
            var reg = /(?=(\B)(\d{3})+$)/g;
            console.log(str.replace(reg,"."));
            首先找什么替换：空
            其次替换哪里：空后面的数字个数是3或者3的倍数个数字(\d{3})+
            还有顺序：从后往前数(\d{3})+$，也就是以3或者3的倍数个数字结尾；
            注意：这个空后面，必须是非单词边界\B；
            所以结果为/(?=(\B)(\d{3})+$)/g;
        ```









