总2824分钟
每天471分钟


## web发展史
1. 目标路线：
```
jquary(javascriptt封装版本,jquary是一个工具
未知（这个未知也是一个工具是CSS3的简化工具)
css3 html5.0 es6.0 
{reacted 未知（relex）是基于Javascript的模块化工具 让网站更加好维护}
bootstrap
node.js（后端元素） 等等
```
2. 金融：最低资金成本 国债 国际结算货币：美元
3. Mosaic 是互联网历史上第一个获普遍使用和能够显示图片的网页浏览器 于1993年问世
Netscape Navigator公司,火狐 IE都是在Mosaic基础上完善的script

##js发展史
javascript作为netscape Navigator浏览器的一部分首次出现在1996年最初设计目标是改善用户体验
作者：Brendan Eich

##浏览器组成
 1. shell：用户能操作的部分  
 2. 内核：能够处理代码 并且把代码显示出来的 浏览器核心
```
     内核大致分为：
       (1)渲染引擎：（语法规则和渲染 ）主要负责绘制，16毫秒才会更新一下浏览器状态
            功能：html css基础语言的识别 以及与浏览器高效绘制页面
       (2)js引擎：控制javascript的
       (3)其他模块：负责异步等其他东西
```

## js引擎：类似汽车中发动机能让汽车动起来的物件
1. 1996年 javascript没有引擎 所有动地都依赖于渲染引擎负责,若是写的javascript代码超过20行 那么网页就会崩溃
2. 2001年 发布ie6 首次实现了js引擎的优化和分离 从js里单独拨了一个引擎给javascript 可以将js执行代码提升到万行以上 现在有些银行 政府还是用ie6（XP系统御用浏览器ie6）(革命性)
3. 2008年 Chrome浏览器快，webkit内核中的御用引擎就是javascript引擎 代号V8（用C++写的） 直接将js代码翻译为机械代码01010等 所以同网速的情况下 chrome最先渲染出网页来 速度更快
4. 后Firefox 也推出了Firefox3.5 traceMonkey对频繁执行的代码进行了路径优化,Firefox4.0 leagerMonkey
## js的逼格（解释性 单线程）
1. 翻译的过程分为两种：编译型 解释型
```
    由于翻译的性质不同 诞生了两种不同性质的语言分别为
    a.编译性语言：通篇翻译 像c生成.obj 像c++
     优点：快
     不足：移植性不(不跨平台)
    b.解释性语言：不生成文件 翻译一行 执行一行 javascript php 
     优点：跨平台
     不足：稍微慢
    c.java既不是编译性也不是解释性语言 叫oak语言
      .java --javac -->编译-->.class-->jvm --解释执行
    d.unix linux 由黑客编程者共同开发的操作系统
```
2.  多线程（类似异步asynchronization）：一个执行体同时能干很多事 
    单线程（类似同步synchronization）：一个执行体一个时间内只能干一件事 想要干其他事 必须将手头的工作放下才能执行其他事
3. ECMA标注 European Computer Manufactures Association
```
javascript标准是ECMA制定的
将ecmascript，DOM，BOM统称为javascript
ecmascript:
    原生的 原有的:
        javascript
    宿主提供：
        DOM是操作文档 html css
        BOM是操作浏览器的
```

##轮转时间片：
把每一个任务按照时间分解为片段 送至js引擎 这个过程叫做轮转时间片（没有先后过程）

##js三大部分：
ECMAscript DOM BOM

##主流浏览器
1. 主流浏览器（在市场上有份额 大于百分之三 有独立研发的内核）	
```
IE      内核trident
Chrome      webkit/blink
firefox     Gecko
Opera       presto
Safari      webkit
```
2. 注意浏览器和内核的区别！！！
3. js引入方式两种（页面级js文件（可以放在head中或者body中） 外部js文件）
```
a.页面级js文件
  <script type="text/javascript">
    document.write('hello world???');
  </script>
```
```
b.外部js文件
  <script src="yinrujs.js">

  </script>
```
4. 正常开发要求标准：
```
结构 行为 样式 相分离（每个要求都是单独的文件）
html  js  css
```
5. 内部引用和外部引用不要同时用，同时用也是外部的生效 有特殊需求的写在页面里 没有特殊需求的用外部js文件打包

##零散知识
1. 编程语言：有变量 有函数 有数据结构 可以进行基本的运算 所以html css不叫编程语言 只能叫做脚本语言 
2.  
```
var a ;        //声明变量（向系统中申请内存 名字叫做a 类似酒店开房）
a = 100 ;       //将100赋值给a
```
3. 命名规则
```
1.变量名必须以英文字母、_、$ 开头

2.变量名可以包括英文字母、_、$、数字

3.不可以用系统的关键字、保留字作为变量名
  关键字：有特殊语法含义的词
  保留字：未来可能被用作关键字的词
```

##基本语法
1. 数据类型分为两种：原始值和引用值
```
    原始值分为五大类：number boolean String undefined null
              第一种:整型
              第二种：布尔类型只有两个值（true或false）
              第三种：字符串类型
              第四种：
              第五种：null
    引用值：Array Object date RegExp
```
2. 值类型由值决定 可a以var a="10"; a="abc" 没有问题 不像int char，还有undefined+1 等于NaN。
3. 原始值 
    + 将第一个值赋给第二个 再改变第一个值 第二个值不变 而引用值 第二个也变
    + 特点：不可改变的原始值，要是改变，会再申请新的房间名字不变，原来那个就变为野房间了
    + 但是原始值怎么能改变呢：就是进行二次覆盖才可以，要不是不会删掉的。
```
原因：
  (1)原始值存在stack（栈）中 first in last out后进先出
        栈是将复制一个a值的副本，然后赋值给b，a中值与b中的值没有关系了
        所以改变a中的值对b中的值没有影响，栈和栈之间赋值是拷贝
  (2)引用值大致上都是存在堆（heap）中
        堆中存放数据的内容
        对应栈中存放堆的地址 所以复制时 将堆的地址赋值给其他变量 
```
```
例：
  	var a = [1,3];
	var b = a;
    a.push(2);//新添入值,地址不变。 
    a = [1,2,4,5]; 堆中开辟新的空间，a中存放新的地址，和原来地址不一样
    document.write(b);
```
```
还有例如：
    var arr = [1,2];
    var x = arr.length;
    arr.push(3);
    console.log(x);//得到的x还是2，而不是3。
```
4. javascript是一种动态语言
    + 动态语言基本上都是解释性语言,解释性语言基本上都是脚本语言，解释性语言边解释边执行
    + javascript声明变量的关键字只有一个 不需要像其他语言int float string char等 
    + java天生是浮点型 不是整型

##零散知识
1. 函数后不用加分号
```
  例如function text(){}
  if(){}后也不用加分号
  for(){}后也不用加分号
  任何符号两侧 都要留有空格 例如var arr = [1,2];
```
2. 错误分为两种
    + 低级错误（语法解析错误，在扫描的时候就能被扫出了，程序一行都不会执行）
   例如中文标点 错误以下的不能执行 以上的能执行
    + 逻辑错误（标准错误，情有可原）
  一个文件中可以写多个script并且之间是互通的 变量的内容可以相互使用  并且一个代码块的错误（包括逻辑错误与低级错误）都不影响其他代码块的执行
```
例1：扫描时候不会出现错误的，但是执行到第二行就会出错了·
var a;
document.write(b)
```

##js运算符
1. 加号就有两点作用（顺序自左向右，括号优先）
    + 数学运算
    + 字符串连接（任何数据类型加字符串都得字符串，字符串字符串之间加法运算就是连接）；
2. javascript不能利用加减运算将字符串转化为ASCII码 但是可以利用大于小于转化
3. 
`"-"    "*"        "%"    "="         "()"`
    + "/":凡是那种应该得出数字类型的值 但又没法表示 就会给出NaN（not a number）例如0/0
    + 优先级"="最弱，"()"优先级较高
    + 赋值符号运算符最低
```
      例：
      1/0       //显示infinity
      -1/0      //显示-infinity
      1/0 	    //Infinity Number
      0/0       //Not a number --> NaN（数字类型）
```
4. `"++"  "--"  "+="  "-="  "*="  "/="  "%="`
    + "++":document.write(b ++); 先打印后加加（先运行执行语句 后++）
       document.write(++ b); 先加加和后打印都是一个数（先++ 再执行语句打印）
    + "--":
    + "+=": var b = 10; b += 10+1; 计算顺序：b+=11;
```
例1：
var a = 10;
var b = ++a - 1 + a ++; 先+1 执行完语句后a再+1；
结果：b = 21 a = 12
```
```
例2：
var a += 10 + 1; 后两个先算
  赋值的顺序 自右向左，计算的顺序，自左向右
```
5. 小测验 交换a和b的值，算法如下：
    a = a + b;
    b = a - b;
    a = a - b;

注意：笔试可以做做

##js运算符，比较运算符返回true或者false，
1. 比较运算符 ">" "<" "=" ">=" "<=" "==" "!=" 比较运算结 果一定是true或者false  
    + 比较数字时：结果是错 输出false 正确 输出true
    + 字符串比较时 比较ASCII码（最初是00000000-11111111共128个，A是65，a是97），若是字符串中多个字符，则从第一个字符开始比较第一个数相等 再从第二个数开始比较等等
```
例1：var a = "10" > "8"  -->false
```
    + NaN == NaN-->false(就它是特例)
    + Infinity == Infinity -->true
2. 逻辑运算符 "&&" "||" "!" （返回的是表达式的值不是对应的boolean的值，但比较时，是比较的boolean的值）
    + "&&"运算时
        - 会先看与运算前面的表达式转化为布尔值是否为true
        - undefined，null，NaN，""（空串），0，false==>转化成布尔值都为false，其余之都为true
        - 总结：两个表达式进行与运算（"&&"），若第一个值为false，则不往下运行，直接返回第一个表达式的值，若第一个表达式的值为true，则返回第二个表达式的值。
        - 当多个表达式式依 次执行，到假就停，真就继续向后执行。+ - 优先级高于&& ||,&&运算符两边可以为表达式或者函数等都行
        ```
        例
           var c = 1 + 1 && 1 - 1;
            1+1=2
            1-1=0
            2&&0=0;
        ```
        - 当&&两端为语句时 则运算符大致翻译为“如果那么”，称之为短路语句。
    + "||"运算时
        - 会先看第一个是否为真，若为假则继续向下执行，直到出现真为止，可若只有两个式子，那么，只要第一个是假，那么不管第二个是否为真，都返回第二个的值。
        - 一般可以用作兼容
    + 总结：&&运算符碰见假就停，||运算符碰见真就停。
    + "!" 
        - 转换为布尔值再取反（六种（undefined，null，"",0,flase,NaN）取反都为true 其余的就按正常计算）
    + 前端的任务就是拿到后端的数据放在页面中去，然后就可以用这个短路语句来判断数据是否有意义，有意义才执行后面的内容，以免出错。
    + 单独"&"运算时，是转化为而二进制，再进行与运算，得到0/1。

```
 例：
	var a = (window.foo || (window.foo = 'bar'));//a = bar;(bar为表达式的值)
        首先：或运算符的优先级高于赋值运算符，要是不加括号就会报错的
        然后：这题在后面加了个括号，所以就先执行一下window.foo = 'bar'
        最后：执行前面时，window.foo等于bar了，所以是对的了，最后返回的就是bar
```

##条件运算符
1. 
    + if(条件){ } 条件成立执行，条件不成立不执行，条件中若是有逻辑运算符，不用反复计算，就是全真为真或者全假为假等。
```
  var c = parseInt(window.prompt('input'));
  /*系统提示输出框，输入，网页就会显示输入的信息*/
```
    + else if与if之间互斥，没有交叉点时才可以用
    + else 表示除了if与else if之外所有的情况
    + if与&&的转换 if(1 > 2){document.write('cuo');}<==>1>2&&document.write('cuo');
2. 输出
    + document.write();
    + console.log();
    + 
    ```
        html注释<!-- -->      
        css注释/* */       
        js行注释//      
        js段落注释/* */
    ```
3. for循环的用法
    + 既能被2也能被5也能被7整除的数
    ```
        for (var i = 0 ; i < 100; i++){    //从0 到100执行里面，执行了100遍
        if(i % 2 == 0 && i % 5 == 0 && i % 7 == 0){
                document.write(i + " ");
            }
        }
    ```
    + 1-100中既能被2也能被5也能被7整除的数，而且for里只能写一句话，里面没有,判断出循环的条件的语句
    ```
    var i = 100;
    for (; i --; ){
        if(i % 2 == 0 && i % 5 == 0 && i % 7 == 0){
            document.write(i + " ");
        }
    }
    ```
    + 打印10个a，不用break
    ```
    var i = 1;
    var count = 0;
    for(;i;){
        document.write('a');
        count++;
        if(count == 10){
            i = 0;
        }

    }
    ```
    + 执行顺序： 循次往复
    ```
        var i = 0;
        if(i < 100){.....}
        i++;
        if(i < 100){......}
        .....
    ```
4. while循环的用法（可以转换为for循环，就是for循环简化版）
```
例1：
    var i = 0;
    while(i < 10){
        document.write(i + " ");
        i ++;
    }
```
```
例2：死循环（never-ending loop），不会报错 网页会一直转圈圈。
    var i = 1;
    while(i){
        document.write(i);
    }
```
5. do while循环用法（了解 不重要 最好不用）
```
    var i = 0;
    do{
        document.write('a');//十个a
        i ++;
    }while(i < 10)
```
6. 备注
    + javascript天生是浮点数 当计算1/3时 会输出0.333....不会像C语言一样
    + 素数：只能被两个不同的数整除，所以1不是
    + 输入一行 打印一行 以免出错找不出来
    + 推荐可以看看一部美剧（west world 盗梦空间导演）
    + 定义多组变量
    ```
        var first = 1,
           second = 1,
           third;
    ```
    + console控制台 可以计算可以看程序某个变量的运行情况 可以做很多事情
    + 质数：平方根是临界点
    + document.write是输出文档流，最好不要干别的

##条件语句补充
1. switch语句：//极其的不负责任 尽管找到了符合条件的语句 但是也会执行下面的语句
```
  switch(n){//n可以为任何东西：字符串、数字、布尔类型、都可以。
        case 1:
            console.log('a');
            break;//执行完后这句后跳出，不执行下面的语句
        case 2:
            console.log('b');
            break;
        case 3:
            console.log('c');
            break;
    } 
```
```  
  switch(n){
        case "monday":
        case "wednesday":
        case "周三":
        case"thursday"://将坏处变为好处
        case"friday":
            console.log('working');
            break;
        case "周六":
        case "周天":
            console.log('relaxing');
            break;

    }   
```
2. break 必须放在循环中，要不然会报错
```
    var sum = 0;
    for(var i = 1;i < 100;i ++){
        sum += i;
        console.log(i);
        if(sum > 100){
            break;//根据某些条件跳出循环
        }
    }
```
3. continue
```
    for(var i = 0; i < 100;i ++){
        if(i % 7 == 0 || i % 10 == 7){
            continue;//终止本次循环，不执行下面的语句，直接执行下次即i++
        }
        console.log(i);
    }
```

##初始应用值
1. 数组
```
    var arr = [1,2,3,4,5,6];//定义数组
    for(var i = 0; i < arr.length;i ++){//arr.length是数组的长度
        arr[i] += 1;//修改数组中数的值
        console.log(arr[i]);
    }
```
2. 对象（object）：其中包括属性和方法
```
    var deng = {
        //key    value(可以为字符串，数字等都可以)
        lastName:"Deng",           //lastName:属性名    "Deng":属性值（重点）
        age:40,
        son:"xiaodeng",
        wife:undefined,
    }
    console.log(deng.lastName);  -->Deng
    deng.lastName = "old Deng";//改变变量值
    console.log(deng.lastName); -->Old Deng
```

##编程形式的区别：
1. 语言可以按好多种形式分
     + 解释性 编译性 
     + 面向过程 面向对象
     + 弱势类型 强势类型
     + 脚本语言 非脚本语言
2. 面向对象 面向过程
     + C语言是典型面向过程型语言，java，C++都是面向对象型语言，javascript既面向过程，又面向对象。
     + 面向对象是找什么人去做一件事，善于利用身边的关系，面向过程是分步骤完成一件事情，第一步做什么第二步做什么，大致是这样。
     + javascript是半面向对象，半面向过程的语言

##typeof
`能帮我们区分数据类型：可以typeof(a)或者typeof a两种形式都行`
1. 用法
    ```
        var num = {};
        console.log(typeof(num));//type正确用法
        var str = "jfakl"
        console.log(typeof str);//typeof后可以跟空格但是最好不要这样用
    ```
2. 可以返回六种数据类型
      ```
      number string undefined boolean function object
              object（泛泛的引用值都返回object）
              function（自己查各种类型的返回条件）
      ```
3. 数组arr类型返回object
4. null返回object
`有个历史遗留性问题，虽然null是原始值，原因是最早时null是代替空对象,出现的，给空对象占位的，直到现在也没有改回来。`
5. function 返回 function

##显示类型转换
1. Number
    + 用法
    var num = Number(true);//将布尔类型转换为数字类型
    console.log(typeof(num)  + " " + num);
    + 
        - undefined不能被转换为数字类型结果NaN
        - null转换为数字是0
        - 'a'或者"abc"都不能转换为数字，显示为NaN
        - 而"-123"就可以转换为数字-123
        - "1314.anvka"就为NaN
        - "011" 转化为11。
    + 经历number，不管能不能转换为一个数，最终都能转换为数字类型，如果不能转换为数字，那么就显示NaN。
    + 总结 
        - null--> 0
        - "-123"-->-123
        - 其余像undefined，'a'，"123abc",什么的都转换为NaN
2. parseInt：转换为整型
    + 
        - parseInt(10,16) = 16
        - 32.toString (16) = 20）
        - 基底（也就是第二个参数的位置）要是0的话，什么也不影响，写了和没写一样。但是有的浏览器显示不一样，有的显示3，有的显示NaN
    + 用法
    ```
    var demo = "124.333";
    var num = parseInt(demo);
    console.log(typeof(num));//结果为124（直接去掉小数部分）

    var demo = "10";
    var num = parseInt(demo,16);//以目标进制为基底转化为十进制，所以输出结果是16。
    console.log(typeof(num));    
    ```
    + 则重点在取整方面，而Number是想千方百计把其他类型转换为整型。
    + 像字符串中含有数字的 那么可以转换为数字 其他类型一律结果为NaN
    + 两个用途：变为整型
    ```
    parseInt(string,radix);
    以目标进制为基底转化为十进制。
    radix取值只能为2-36,不能过小，不能过大。
    转化进制时，string中的数也不能乱写
    若radix为二进制 那么string值就只能为0或1。
    ```
    + 以数字为开始看，看到非数字位截止所以var demo = "123abc" 结果就为123。var demo = "123.3fjakl"; 结果为123，因为 . 是非数字，所以从 . 开始砍断了，不看了，结果就为123。
    + 总结： null --> NaN, "-123.fa" --> -123,其余转化为NaN。
    + 补充：parseFloat据就是转化为小数    例1：console.log(parseFloat("124.2wg")); 得到结果：124.2
    + 总结：
        -  parseInt只有含有数字才能转换为数字
        像undefined或者null或者true，false都不行，但是像"123.abx"都可以转换为数字
	    - Number就是必须全为数字才能转换为数字
        像"123"才可以，还有就是null和true和false能转换为数字,但是其他的不行，像"214vab"就不行
3. String:转化为字符串
  写什么在string中都会转换为字符串
4. Boolean
  除了那六个值 undefined，null，NaN，0，""（""空串，" "空格字符串）,false，其余的都转换为true。
5. toString
    + 用法：想将谁转换为string就.toString
    ```
    var demo = 123;
    var num = demo.toString();
    console.log(typeof(num) + " " + num);

    var demo = 32;
    var num = demo.toString(16);//将radix转换为16进制，与前面parseInt中的radix不同
    console.log(typeof(num) + " " + num);
    ```
    + toString是将十进制转化为目标进制的过程
    + undefined，null不能用toString 会报错
    + 一般很少人用toString，可以用string或者直接加空串转换为string类型，任何东西加空串都可以转换为空串。
    + 将2进制转换为16进制
    ```
    var num = 10101010;
    var num1 = parseInt(num,2);
    var num2 = num1.toString(16);
    ```

##隐式类型转换
1. isNaN()：判断括号中的内容是不是NaN
  isNaN先将括号中的内容转换为Number 然后再和NaN作比较，所以isNaN('abc')的最终结果是true
2. ++用法
    + ++先将变量变为Number型 然后再计算。
    + 用法
    ```
    var a = "123";
    a ++;
    console.log(a);//a为124且为数字类型
    ```
3. +正 -负
    ```
    var x = + "abd";
    console.log( x + " : " + typeof(x));
    //结果为NaN，虽然不是个数，但类型为数字类型。
    ```
4. +加号
  当加号两侧有一个东西时字符串类型时，就会将两个东西都变为字符串类型
5. -减号 *乘号 %取余
  都先将变量变为Number型,然后再计算，最后是不是数不确定，可能为NaN，但是类型一定是数字类型。
    `var "a" * 1 -->NaN`
6. && || ! 
  在比较时会将第一个表达式，第二个表达式转换为布尔值再比较，中间有隐式类型转换的过程,只不过最后的结果为表达式的值，不是隐式类型转换的值 但判断的是隐式类型转换的值，进行boolean隐式类型转换
7. < >  <=  >=
    + 用法
    ```
    var a = 1 > "2";//是将字符串转换为数字2再进行比较，结果为false
    console.log(a);

    var a = "3"> "2";//是将字符串3与2的ASCII码进行比较，结果为true
    console.log(a);
    ```
    + 数字优先:字符串与字符串比较ASCII的值，数字与字符串进行比较，比较的则为数字的值。
```
2 > 3 < 1 true
//一个一个算，先算前面的boolean值，然后将boolean值转化为数字和1再比较
2 > 1 > 3 false
3 > 2 > 1 false
```
8. `==         !=          ===`
    + === :绝对相等，必须完全一样，包括类型和值什么的，像null ==undefined，但是null不绝对等于undefined
    + 1 == true成立
    + 1 == "1"成立
    + 都有隐性类型转换
```
    undefined > 0             //false
    undefined < 0              //false
    undefined == 0           //false

    null > 0 false
    null < 0 false
    null == 0  false
    undefined == null       // true
    NaN == NaN     //false 
    /*  唯一一个原始值，任何一种情况都不等于自身，而且什么啥也不等于
        但是如果需要判断得到的结果是不是NaN的话，可以利用变量加上空串的方式
        例如NaN+"" == "NaN"
    */
```
```
    {} == {}               //false      
    /*对象是引用值，引用值比较的是地址
    这两个空对象指向两个不同的房间，看着再一样也是两个房间，不相等。
    */
```
```
    var obj  = {}；
    var obj1 =  obj;
    obj1 === obj;
    //返回true，因为引用值赋值赋的是地址。所以一个房间那肯定相等。
```
9. 
```
  console.log(typeof(typeof(a))); 返回string
  console.log(typeof(a)); 未定义就是使用a，返回字符串类型的undefined
  console.log(a);  报错 not defined
```
10. `===      !==`
    + 对于基础类型String，Number等基础类型来说，==与===是严格判断是否相等的，若是类型不同，那么一定不等。
    + 对于高级类型 来说，==与===相同的
11.	
var x = 123123.4232332;
alert(x.toFixed(5));//科学记数法四舍五入，保留几位有效数字。alert是弹出框
12. 
    + 带数学符号像% - * /等（+号除外，因为+还有连接的功能）的一般会将运算符两侧转化为Number类型，不能转的一般就是NaN。
    + && || 比较的是运算符两侧的布尔值，假如两侧最后都为String类型，那么布尔值就是都是1，就是对的，或者当一侧为"undefined"，另一侧为"NaN"，两侧都为字符串类型的，转化为boolean值也都为1
13. 运算中，+号，数字隐式转换成字符串。其余的运算符号是字符串隐式转换成数字。
14. typeof返回的值有六大类,但都是字符串类型的
`"number"，"string" "boolean" "object" "function" "undefined"`
```
字符串
"a" +                -->加啥都等于字符串
"a" *                 -->转换为Number类型
"a" >                -->两个字符串比较ASCII码
```

##函数，小练习，初始作用域

函数其实本质上和变量一样，都是一个筐，只不过这个筐装了很多条语句。它也是引用值，存的是地址，输出时永远不能输出地址，输出地址指向的房间

###1.1定义函数方式：
1. 函数声明方式
    ```
        function theFirstName(){
            document.write("hello world");
        }
        theFirsrName();//命名：小驼峰原则
    ```
2. 函数表达式方式
    + 命名函数表达式
        ```
           var test1 = function test(){
            从function开始到大括号结束，这些都叫做表达式 
            表达式是可以忽略它的名字的，调用时只有调用test1才执行，调用test报错,但是test1.name为test，但是要是函数声明方式中test1.name为自己"test1"
              document.write("hello world");
           }
        ```
    + 匿名函数表达式 --- 函数表达式（由于这种方式比较常用所以简化为函数表达式）
    ```
       var testN = function(){//b1与b2之间的区别在于b1函数的名字为test1，调用时应调用test1，而不是test，而b2函数的名字为默认本身testN，直接调用就可以。
           document.write("hello world1");
       }
    ```

###1.2 函数的组成形式
1. 函数名称：sum
  例1：
```
  function sum(a){//形参 
        for(var i = 0; i < arguments.length ;i++){
            console.log(arguments[i]);//系统可以打印出来 ，arguments：实参列表，是个数组，sum.length形参的长度
        }
      }
      sum(1 , 2 , 3)//1 ，2 , 3 实参，都存放在arguments中[1,2,3] 对arguments求和可以将所有实参求和
```
  例2：
```        
       function sum(a,b,c,d){      //等价于在函数中var a,b,c,d;
        if(sum.length > arguments.length){
            console.log('形参多了');
        }else if(sum.length < arguments.length){
            console.log('实参多了');
        }else{
            console.log('相等');
        }
       }
       sum(1 , 2 , 3 ,undefined)//结果为相等
```
2. 参数：不限制位数（形参可以比实参多）
    + 形参（形参比实参多，其余显示undefined）不定参的
例1：任意个数的求和
```
	  function sum(){
        	//arguments 1 2 3 4 5 6
	        var result = 0;
        	for(var i = 0; i < arguments.length; i ++){
	            result += arguments [i];
        	}
	        console.log(result);
	  }
	  sum(1,2,3,4,5,6);
```
例2：
```
    	 function sum(a,b){
                //arguments 1 6
                a = 10;
                console.log(arguments[0]);//结果为10 因为arguments与形参存在映射关系，但不是同一个东西，所以一个变另一个也变，只有形参实参相等的时才会有映射的规则，不相等不对应实参了，相等的地方保持映射，它俩不等的地方就不映射了
    	 }
    	 sum(1,6);
```
    例3：  
```
    	 function sum(a,b){
            	//arguments 1
    	        b = 10;
            	console.log(arguments[1]);//结果为undefined，因为只有形参实参相等的时才会有映射的规则，不相等不对应实参了，相等的地方保持映射，它俩不等的地方就不映射了，arguments中不会有其他形参，例题中的b只当作变量用，不用作参数。
    	 }
         sum(1);
```
    + 实参（实参比形参多，取第一位）
3. 返回值    
    例1:
    ```
       function sum(a,b){
        return 245;//有两个含义既返回 值，又终止函数。
	    console.log('a');//因为上面有return 所以这行不执行，因为return终止函数了
       }
       var num = sum();
    ```
    例2：
    ```
    	function myNumber(target){
        	return + target;
    	}
    	var num = myNumber(123);//
    	console.log(typeof(num)+ " " + num);
        //函数结果为数字 类型123
    ```
4. 一般函数作为一个实现功能。一般来说不直接打印

##零散知识
1. 高内聚低耦合
    + 函数最基本的用法：简化代码（解决偶合）
    + 函数可以用作 定义功能
    + 解释性语言永远不可能输出地址，只输出地址指向的房间即内容。
2.  耦合：重复的，冗余的，耦合度很高

##小练习
1. 写一个函数，功能是告知你所选定的小动物的叫声。
```
解：
    function scream(animal){
        switch(animal){
            case"dog":
                document.write('wang');
                return;
            case"cat":
                document.write('miao!');
                return;
            case"fish":
                document.write('oooo');
                return;
        }
    }
```
2. 定义一组函数，输入数字，逆转并输出汉字形式。
```
解：
   function hanzi(){
        var str1 = "";
        var str = window.prompt('input');
        for(var i = str.length - 1 ;i >= 0 ; i --){
            if(str [i] == '1' ){
                str1 += '壹';
            }
            else if( str [i] == '2'){
                str1 += '贰';
            }
            else{
                str1 += '叁';
            }
        }
        console.log(str1);
    }
    hanzi();
```
3. 写一个函数，实现n的阶乘。
```
解：
    function jiecheng(n){
        if( n == 1 ){
            return 1 ;
        }
        return n * jiecheng(n - 1);
    }
    var x = parseInt(window.prompt('input'));
    console.log(jiecheng(x));
```
5. 写一个函数，实现斐波那契数列？

##变量
1. 全局变量：定义在script全局中的
2. 局部变量：定义在函数里面的
3. 全局变量与局部变量之间的关系：里层函数可以访问外层函数的东西，外层函数不可以访问里层函数的东西，彼此独立的事件不可以相互访问。

##挑战型作业？
读规则：千分位有零必须读，没有零不用读 101000:十萬壹  

##作用域精解
1. 递归：先执行的东西，最后被执行完。
    + 特别符合人为思考题的过程，找规律
    + 必须要有出口
    + 以阶乘为例
    ```
    //找规律：n! =　n * (n - 1)!;
    function mul(n){
        
        return n * mul(n - 1);
    }
    //mul(3) ==> 3 * mul(2);
    //mul(2) ==> 2 * mul(1);
    //mul(1) ==> 1 * mul(0);

    //找出口，必须找已知条件当出口
       if(n  == 1 || n == 0){
            return 1;
        }
    ```
    + 以斐波那契数列为例
    ```
    //找规律 ：fb(n) == fb(n - 1) + fb(n - 2);
    // fb(5) ==> fb(4) + fb(3);
    // fb(4) ==> fb(3) + fb(2);
    // fb(3) ==> fb(2) + fb(1);
       function fb(n){
        if( n == 1 || n == 2){
            return 1;
        }
        return fb(n - 1) + fb( n - 2);
       }
    ```
    + 递归唯一优点：能使代码变得简洁，剩下啥作用没有，而且特别慢。
    + 对于那些很容易找到规律的，利用递归很方便。

##js运行三部曲
1. 语句分析：通篇查看扫描有没有低级错误
2. 预编译
    + 函数声明`整体提升`：将函数声明（不管写在哪里）永远提升到逻辑的最前面
    + 变量  `声明提升`：当声明并赋值变量时，会将变量声明提到最前面。
   例1：
```
    function aa(){
        console.log('a');
    }
    aa();//能执行
```
   例2：
```
    aa();
    function aa(){
        console.log('a');
    }//能执行
```
   例3：
```
    var a = 1234;
    console.log(a);//正确输出 1234
```
   例4：
```
    console.log(a);
    var a = 1234;
    //输出undefined，因为，系统会将语句分解为两部分 var a; a = 1234; 然后将var a提到最前面
```
3. 解释执行（就是解释性语言最后的部分，解释一行，执行一行）

##预编译前奏
1. 未经声明的变量就直接赋值，那么这个变量归window所有。
`即 a =10; --> window.a = 10;`
2. 全局上的任何变量即使声明了也归window所有
3. window就是全局的域
  例1
  ```
   1 ==>window {
        a : 123
     }
   2 ==>var a = 123;
   1 == 2 //系统下次再访问a时，访问的就是window.a
  ```
  例2.
  ```
    //var a = b = 123; 会先将123的值付给b，然后声明a，然后再把b的值赋给a。因为赋值是从右向左的，将b的值赋给a是发生在执行过程中，不是预编译
    function test(){
        var a = b = 134;//执行window.a结果为undefined，执行window.b时结果为123，因为a在函数中声明了，而b只赋值了
    }
    test();
  ```
4. 一切声明的全局变量都是window的属性，意思就是window就是全局的域
  ```
  var x = 123; 
      ==>window.x == 123; 
      ==> window{x:123}
  console.log(x) 
      ==> console.log(window.x);
  ```

##预编译：就是解决执行顺序的东西
1. 发生时间：函数执行的前一刻
2. 四部曲：(声明，形参，函数)
    + 创建AO对象（活跃对象activation object）（执行期上下文或者说作用域：由于函数执行而产生的存储空间库） 
    + 找形参和变量声明，将变量和形参名作为AO属性名，值为undefined,或者将第二步叫做变量声明提升，优先执行
    + 将实参值和形参统一
    + 在函数体里面找函数声明，值赋予函数体
 例：
```
    function fn(a){
        console.log(a);//function a (){}

        var a = 121;//就只执行 a = 123; 因为var a已经预编译执行了，

        console.log(a);//a = 121;

	    function a (){}//预编译已经执行过了，预编译看过的就不会再看了

        console.log(a);//a = 121;

        var b = function (){};//b= function (){};

        console.log(b);//b= function (){};

        function d(){};
    }
    fn(1);
   (1)第一步：AO{
        
     }
   (2)第二步：AO{
        a:undefined,
        b:undefined,
    }
   (3)第三步：AO{
        a:1,
        b:undefined,
    }
   (4)第四步：AO{
        a:function a(){},
        b:undefined,
        d:function d(){};
    }
```
3. 全局
    + 生成一个叫GO对象（global object）=== window
   例1：
```
    var a = 134;//执行 a = 123，
    function a(){
        
    }
   1.生成GO对象
    GO{
        a:undefined,
    }
   2.GO{
        a:function a(){},
    }
```
  例2：
```
    function text(){
        var a = b = 123;
        console.log(window.a);
    }
   因为a声明了，所以在AO中。但是b没有，b未声明直接赋值了，就发生了暗示全局变量的过程，b就归GO所有（b = 123），所以window中没有a的值，访问window只有undefined
```
  例3：
```
    /*GO{
        a:undefined,
        text:function (){},
    }*/
    function text(){
        console.log(b);
        if(a){     //if不管会不会执行，if中的什么东西都会被拿出来。所以上一句语句是b为undefined。
            var b = 134;//因为a为undefined，所以此句不会执行,b还为undefined
        }
    }
    var a ;
    text();
    /*AO{
     b:undefined,
    }*/
    a = 10;
    console.log(a);
```
  例4：
```
    a = 100;
    function demo(e){
        function e(){}
        arguments[0] = 2;
        console.log(e);                      //2
        if(a){
            //备注：这个if中声明function，Google之前是允许的，但是现在不允许了。
            var b = 123;
            function c(){}
        }
        var c;
        a = 10;
        var a;
        console.log(b);                      //undefined
        f = 123;
        console.log(c);                       //undefined
        console.log(a);                       //10
    }
    var a;
    demo(1);
    console.log(a);                           //100
    console.log(f);                            //123

  解：函数拆解执行
    第一步：
            /*GO{
              a:undefined,
              demo:function(){},
            }*/
    第二步：
            a = 100;
            /*GO{
                a:100,
                demo:function(){},
              }
            */
            function demo(e) {
    第四步：
              /*var AO = {
                e:1,
                b:undefined,
                c:undefined,
                a:undefined,
              }*/
            function e() {
            }
    第五步：
              /*var AO = {
                e:function e(){},
                b:undefined,
                c:undefined,
                a:undefined,
              }*/
            arguments[0] = 2;
    第六步：
              /*var AO = {
                e:2,
                b:undefined,
                c:undefined,
                a:undefined,
              }*/
            console.log(e);    //e = 2;
            if(a){
                var b = 123;
                function c(){};//不执行
            }
            var c;
            a = 10;
    第七步：
              /*var AO = {
                e:2,
                b:undefined,
                c:undefined,
                a:10,
              }*/
            var a;
            console.log(b);   //b = undefined
            f = 123;
    第八步：
                   /*GO{
                   a:100,
                   demo:function(){},
                   f:123,
                 }*/
                console.log(c);  //c = undefined
                console.log(a);  //a = 10
            }
            var a;
            demo(1);
    第三步：
          /*var AO = {
            e:undefined,
            b:undefined,
            c:undefined,
            a:undefined,
          }*/
        console.log(a);   // a = 100
        console.log(f);   // f = 123
```

##百度笔试题：
1.
```
console.log(bar());
    function bar (){
        foo = 10;
        function foo(){
            //body...
        }
        var foo = 11;
        return foo;	//返回11，只要这个名在最下面被赋过值，那么直接输出那个值就好了。
    }
```
2.
```
   function bar(){
        return foo;	//返回function(){}，若是第一句为return，那么就等价于console.log，而且第一句为return，若是下面有函数，那么直接返回函数。
        foo = 10;
        function foo(){
            //body ...
        }
        var foo = 11;
    }
    console.log(bar());
```
4. 嵌套关系:自己函数中有就用自己的，自己没有，就往上一层找。

##打字注意
1. 左边的手用右边的shift 右手的键盘用左边的shift()
2. 9 0 () 用中指无和名指来按
3. 打字的时候手腕离开键盘托了，那么打字一定是慢的
4. 建议下载一个什么什么键盘修改器，把ctrl与Alt调换一下4
5. 
    + 复制：ctrl + c
    + 粘贴：ctrl + v
    + 剪切：ctrl + x
    + 撤回：ctrl + z
    + 反撤回：ctrl + y
    + 整体移动：选中按tab键，挪多了，按shift + ctrl，向左移
    + 查找：ctrl + f

##作用域精解（详情请见javascriptPPT课件）
1. 作用域：由于函数产生而产生的一种独特的东西
  例：
```
test.[[scope]]
//存放由这个函数产生而产生的作用域，存放的是一个作用域，隐式的属性
系统会定期的调用这个属性，但是不会让我们用
```
2. 运行期上下文：当函数执行时，会创建一个称为执行期上下文(像AO，GO等)的内部对象。一个执行期上下文定义了一个函数执行时环境，函数每次执行时对应的执行上下文都是独一无二的，所以多次调用一个函数会导致创建多个执行上下文，当函数执行完毕，自己产生的执行上下文被销毁。
3. 作用域链：[[scope]]中所存储的执行期上下文对象的集合，这个集合呈链式链接，我们把这种链式链接叫做作用域链。
  例1：
```
  function a() {
        function b() {           //b得到的a的劳动成果，就是a的aAO，拿到的是引用，注意：所有的aAO都是一个人，或者GO也都是一个人。
            var b = 123;
        }
    	var a = 123; 	
        	b();
    }
    var glob = 100;
    a();
    //a刚被定义时，即a刚出生时（就有a.name 和a.[[scope]]等），存放的是它所在环境的执行期上下文，要是在全局环境下，存放的就是GO。
    具体解释：
    a函数被定义时，发生如下过程：
      1.当a定义时，a.[[scope]]中存放GO（a刚定义时a.[[scpoe]]存的是a所在环境的执行期上下文），
      2.然后a执行，产生一个执行期上下文并放在自己作用域链的最顶端，然后将最初创建的GO往下串一格，然后形成了自己的作用域链，有第0位，有第1位，一旦我们在a中查找变量的话，会在a的作用域链的顶端即第0位，依次向下查找。
    b函数被定义时，发生如下过程：
      1.当b定义时，继承a的scope（使用a的劳动成果）
      2.当b函数执行时，会创建属于自己的bAO，放在b.[[scope]]最顶端即第0位，依次第1位，第2位存放a[[scope]]的东西，找变量时，先从自己作用域链的最顶端依次向下寻找。
    注意：b从a运行后a.[[scope]]中得到的AO与a中的AO是一个AO，指向同一个东西，即b可以更改了a中属性的值
    最后
    当b执行完后，b只是删除了自己执行时创建bAO但是死死地攥着a的aAO，一直拴在自己身上，恢复最初被创建的状态，
    当a执行完后，就将a执行时创建的AO（包括b函数）删掉，不包括GO，GO还在，然后等待下一次执行，再重新创建一个独一无二的a.[[scope]]。
```
    例2：
```
    function a(){
        function b(){
            function c(){
                
            }
            c();   //c最先被执行完 ，c.[[scope]]最先被销毁。
        }
        b();       //c被执行完，才标志着b()执行完，然后b.[[scope]]被销毁。
    }
    a();           //b被执行完，才标志着a最后一条语句被执行完，a.[[scope]]最后被销毁，可以说销毁和执行完是一个概念。
执行步骤：
    a defined a.[[scope]] --> 0 : GO
    a doing   a.[[scope]] --> 0 : aAO//只有a执行时，a中的语句（像函数b等等）才会被读，b才会被定义，系统中才会有b.[[scope]]，a执行才能导致b被执行。
                              1 : GO

    b defined b.[[scope]] --> 0 : aAO
                              1 : GO

    b doing   b.[[scope]] --> 0 : bAO
                              1 : aAO
                              2 : GO//所以站在b的窗口访问不到c中的内容，没法看到c窗口中的内容

    c defined c.[[scope]] --> 0 ：bAO
                              1 : aAO
                              2 : GO

    c doing   c.[[scope]] --> 0 : cAO//c被执行完就删除了，再执行时就会产生新的c.[[scope]]，除了cAO被删除，剩下的都不变，一样，只是会产生新的cAO。
                              1 : bAO
                              2 : aAO
                              3 : GO
    // 在任何一个函数里面想访问变量的话就找函数的作用域链就可以了
```
4. 在哪个函数里面查找变量：从哪个函数作用域链的顶端依次向下要查找。

5. 每一个函数都有一个执行期上下文的集合，叫作用域链，真正在函数里访问变量要遵循函数所产生的作用域链去访问。 
6. 总结：
    + 只有里面的能看见外面的，外面的看不见里面的，然后按顺序访问，按空间访问。
    + 所有的aAO，bAO都是一个。

##闭包（详情见PPT）
1. 内部的函数被保存到了外部，将会生产闭包。
 例1：（b函数）
```
    function  a(){      //不管a还是b，各自的作用域链中摆脱不掉的是被定义时的状态，就像a，a.[[scope]]中始终存着GO，像b.[[scope]]始终存着aAO，第0位：aAO；第1位：GO。
        function b(){   //内部的函数
            var bbb = 234;
            document.write(aaa);
        }
        var aaa = 123;
        return b;  //被保存到了外部，所以生成了闭包。备注：这里是a先被销毁，但是a销毁前，b虽然没被执行，但是已经拿到了a的执行期上下文了。
    }
    var glob = 100;
    var demo = a();//a执行完了，a将指向自己AO的线删掉。b定义时得到的是a执行的劳动成果，虽然a删掉了指向自己AO的那个线，但是b被引用到外部，b依旧保存与那个房间（aAO）之间的关系，a想删掉那个房间（aAO）都没有办法。
    demo();       //结果输出123
```
 例2：
```
    function a(){
        var num = 100;
        function b(){
            num ++;
            console.log(num);//函数只有在被调用时才会执行里面的语句，虽然声明完b，但是可以运行出结果并显示的原因，是后面demo也就是b被调用了。
        }
        return b;
    }
    var demo = a();  //自己理解：a执行后删除线，但是b.[[scope]]中保存着aAO，执行完a将函数的引用（也就是b引用）抛出去赋给demo，a执行结束，所以demo()指的是b();
    demo();    //执行输出101 ，原因：b执行未产生新的bAO。继续执行b函数中的num++，num从b.[[scope]]第0位找，虽然a执行完了删掉了，但是b还是保存着aAO。
    demo();    //执行输出102 ，原因：b继续从b.[[scope]]第0位找num ，执行num++。但此时的num因为被b执行一遍了更改为101了，所以再执行一遍就为102了。
```
2. 闭包缺点：会导致原有作用域链不释放（导致程序里的空间被占用的过多），造成内存泄漏（意思为像内存泄漏，就像手里的水，你越用力，剩的就越少，在程序里就可以理解为，我用的闭包越多，剩余空间就越少，其实并不准确）
3. 两个函数或者多个函数互相嵌套把里面函数保存到了外部，保存到了全局，这样的情况必然生成闭包，里面的函数在外面执行时一定能够调用原来它在的那个函数环境里面的变量。

##闭包的作用
1.实现公有变量
  例1:函数累加器（不依赖于外部函数变量并且能实行的函数累加器）
```
  function add(){
        var count = 0;
        function demo(){
            count ++;
            console.log(count);
        }
        return demo;
    }

    var counter = add();
    counter();//执行结果1
    counter();//        2 
    counter();//        3
```
  例2：
```
    function test(){
        var num = 100;
        function a(){
            num ++;    //aAO中的num,a函数中的num与b函数中修改的num是一个num，都来自于aAO中。
            console.log(num);
        }
        function b(){
            num --;   //aAO中的num
            console.log(num);
        }
        return [a,b]                         //返回了一个数组，myArr[0]，代表执行a，myArr[1]代表执行b。
    }
    var myArr = test();
    myArr[0]();    //101
    myArr[1]();    //100
```
2. 可以做缓存（存储结构，多个函数同时和一个函数形成闭包的话，他们之间的变量相当于可以共用，因为大家保存的是同一个域，就算是全局变量也一样，所以说这样的结果就有点像缓存，相当于仓库一样，但是你看不到，每次拿到的结果都是上次修改过的值）
  例1：
```
    function eater(){
        var food = "";                                //类似存储结构
        var obj = {
            eat : function (){
                console.log("i am eating " + food);    //先执行push，push改变了food的值，再执行eat的时候输出food部分为apple
                food = "";
            },
            push : function (myFood){
                food = myFood;
            }
        }
        return obj;
    }
    var eater1 = eater();
    eater1.push("apple");
    eater1.eat();
```
3. 私有化变量，不会污染全局变量。
例1：
```
在函数里面定义一个变量，外部无法访问，只有自己可以见，下题中prepareWife就是在执行期上下文中，但是因为使用它的函数随着对象（divorce或者其他）被保存到了外部，所以自己也和外部形成了闭包，通过也实现了私有化。
    function Deng(name,wife){
        var prepareWife = 'xiaozhang';                         //在外部访问时deng.prepareWife显示是undefined，实现了私有化。
        this.name = name;
        this.wife = wife;
        this.divorce = function (){
            this.wife = prepareWife;
        }
        this.changePrepareWife = function (target){
            prepareWife = target;
        }
        this.sayPreparewife = function (){
            console.log(prepareWife);
        }
    }
    var deng = new Deng('Deng','xiaoliu');
这个Deng执行完就被销毁了，但是Deng里面的方法被保存到了外部，手里还攥着Deng的执行期上下文，所以就是我可以用prepareWife这个变量，但是别人访问不到，也就实现了变量私有化
补充：对象里是可以有函数的，一个对象里是可以有方法的，一个方法也是种函数，只不过定义方法不同
```
4. 可以实现封装，属性私有化。
```
  例1：Person();
```
## 立即执行函数
（执行后就将函数立即释放或者说函数的引用不会保存）：唯一一个执行后就立即销毁的函数
1. 概要：
```
        一个函数只要被定义，就会占用存储空间，永远处于等待被执行。
        一个函数只执行一次，叫初始化程序或针对初始化功能的函数。
        立即执行函数除了执行完就释放，剩余的与普通函数没有任何区别。
        立即执行函数有执行期上下文，并且有预编译过程。
        立即执行函数被读到的时候马上就被执行。
```
2. 格式：两种格式
```
(function(){}());    //w3c给出的标准这个较好一点
(function(){})();    //因为最后面的大括号的优先级高所以执行时和上面的那个执行顺序差不多
```
  例1：立即执行函数的一般格式
```
    (function () {   //只执行一次，执行后就被立即销毁
        var a = 123;
        var b = 234;
        console.log(a + b);
    }())
```
  例2：带参数的立即执行函数格式
```
    (function (a,b,c) {       //传递参数
        console.log(a + b + c);
    }(1,3,5))                 //传递参数
```
  例3：有返回值的立即执行函数格式
```
    var num = (function (a,b,c) {
        var d = a + b + c + 2;
        return d;
    }(1,3,5))
```
3. 只有表达式才能被执行符号执行，能被执行符号执行的表达式，这个函数的名字就会被自动忽略。被执行符号执行的表达式就变成了立即执行函数。，函数执行一次之后就被永久的放弃了，就剩了个声明了，后面的函数就没有了，变量里存的就不是函数的地址了，
```
  例1：
    var test = function (){   //函数表达式。test是变量名，这个函数执行完后。就被永久的放弃了，就没了。再执行test结果就是undefined，test()就是报错。
       console.log('a');
    }()                      // 执行符号就是(),()之前的只有是表达式才能被执行符号执行，这个例子是函数表达式，所以能被执行符号执行。还有()后面加不加;都行。
```
  例2：
```
    + function test() {     // 加上+（正号）号或者-（负）号或者"!"或者"与或非"或者"()"都行 不过前面得加东西符合"与或非"使用规则，加上以上就是表达式，所以能被执行符号执行。
        console.log('a');
    }();
```
  例3:
```
      (function test(){})  //函数声明被括号包起来了，是表达式。
```
  例4：（w3c建议使用的方式）
```
    (function test(){   //因为test是执行完然后就被释放了，再执行就会报错，所以函数名就可以不写了（立即执行函数的演变过程）
        console.log('a');
    }())               //这些括号先识别外边的，只有最外层的是数学运算小括号，剩下的所有括号都是有语法意义的。所以最外面的括号会将里面的东西变成表达式，表达式正好被执行符号执行。这个函数执行位置不在它定义位置。
```
  例5：
```
    function test(a,b,c,d){ 
    console.log(a + b + c + d);
    }(1,2,3,4);        //系统不报错也不执行，它会将前面的函数声明与后面的 (1,2,3,4)当作两个语句分开，再执行。
```
4. 其实也可以通俗地理解为闭包产生的原因是里面的函数活得比外面的函数还长。

##利用闭包问题解决闭包（必须记住这个，怎么触发，怎么解决等）
 1.
```
    function test(){                          //test函数中一共有两个变量，arr与i
        var arr = [];
        for(var i = 0; i < 10; i ++){          //不管中间怎么执行的，最后i的值就为10（i = 10才能结束循环，执行完函数）
            arr[i] = function(){              //只是将函数赋给arr[i]，函数中内容什么的不管，只有执行时才会考虑，所以函数中的i并不是1，2，3，4等等，不随着arr[i]变化，函数定义时不用看里面的东西，没有意义，当函数执行时再找里面的东西。
                document.write(i  + "  ");    //系统只是将一个引用抛进去了，其中内容是什么不知道，只有当执行时才会考虑i到底是什么，系统执行时就是将一个函数抛进去了，但是函数内容是什么并不知道
            }
        }
        return arr;                           // arr中存放的是十个不同的相互独立的，但是长得一样的函数。
    }
    var myArr = test();                      //这时才会真正执行那个arr[i]（一共10个函数）
    for(var j = 0;j < 10;j ++){
        myArr[j]();                          //才会真正访问test作用域，并且因为所有函数都是访问一个作用域，所以访问的都是一个i值所以输出结果为10个10
    }
```
 2.（对闭包的解决，有这一种解法！！！）
```
    function test (){
        var arr = [];
        for(var i = 0 ; i < 10; i ++){
            (function (j){                   //立即执行函数立即被执行，里面的语句一条一条被执行
                arr[j] = function (){        //这只是赋值语句，但并不代表这个函数就要执行，就像1中一样。这个函数保存function(j)函数的成果，每个j不一样，所以各自产生的作用域不同。当执行时，arr中存的每个函数都会各自的上层的函数（即每个不同的立即执行函数）的劳动成果，每个function(j)(立即执行函数)在执行完后都会销毁（线断了），但是由于arr中函数引用

                    document.write( j + " "); 这个执行过程是这样的，立即执行函数执行，j=0/1/2........，然后每次执行时，找的j是每个立即执行函数中的j，一对一，每个都不一样。
                }

            }(i))
        }
        return arr;
    }
    var myArr = test();
    for( var j = 0; j < 10; j ++){
        myArr[j]();
    }
```
 3.
```
    for(var a = 0; a < 10; a ++){
        
    }
    console.log(a);                         //可以打印出a = 10;
```

备注：课堂中闭包精细版不是新的知识，是闭包精讲。


##习题：一小时45分例题上面也有例题

习题1：
```
 <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
    <style type = "text/css">
        *{
            margin : 0;
            padding : 0;
        }
        ul{
            list-style: none;
        }
        li:nth-of-type(2n){
            background-color:pink;
        }
        li:nth-of-type(2n + 1){
            background-color:palegreen;
        }
    </style>
</head>
<body>
<ul>
    <li>a</li>
    <li>a</li>
    <li>a</li>
    <li>a</li>
</ul>
<script type = "text/javascript">
    var liCollection = document.getElementsByTagName('li');//将所有li放进数组liCollection里
    for(var i = 0; i < liCollection.length; i ++){
        (function(j){                                         //利用立即执行函数使每个属性索引值不同也就是解决闭包问题
            liCollection[j].onclick = function(){ //为每一个li赋予属性
                console.log(j);
            }
        }(i))
    }

</script>
</body>
</html>
```
习题2：
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
</head>
<body>
<script type = "text/javascript">
    a = 100;
    function demo(e){
        function e(){}
        arguments[0] = 2;          // 更改实参的值
        document.write(e);
        if(a){
            var b = 123;                 //不执行里面
            function c(){

            }
        }
        var c;
        a = 10;
        var a;
        document.write(b);
        f = 123;                           //直接赋值，被放在GO中
        document.write(c);
        document.write(a);
    }
    var a;
    demo(1);
    document.write(a);
    document.write(f);
</script>
</body>
</html>
最终结果： 2 undefined undefined 10 100 123
```
习题3：
```
题目在闭包精细版里的1小时52分钟处（就是求字节数）
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
</head>
<body>
<script type="text/javascript">
    function retByteslen(target) {
        var count,
             len;
             count = len = target.length;
        for(var i = 0; i < len; i ++){                //进行了优化 ，不用每次都计算target.length 将这个值保存出来赋给len
                if(target.charCodeAt(i) >= 255){   //进行了优化，不用进行多次比较，只进行了一次比较，因为 不管是中文还是英文，都先加一，判断中文个数在进行再次加一
                    count ++;
            }
        }
        console.log(count);

    }
</script>
</body>
</html>
```

习题4：
```
逗号运算符：若是逗号前面是表达式，就计算前面的，然后，若是逗号后面是表达式，就计算后面的表达式，都计算完了，将后面表达式的值返回。
var a = (1 - 1, 1 + 1);      // a = 2
例1：
    var f = (
            function f(){
                return "1";
            },
            function g(){
                return 2;
            }
    )();
    console.log(typeof f);        //结果为number
```
习题5：
```
//所有变量未经声明就使用肯定报错，唯一一个 不报错的就是放在typeof中 并且返回undefined
    var x = 1;
    if(function f(){}){     //首先 function不是那六个中的，所以这个if语句判断条件是true，里面的内容肯定会执行，其次括号在这里不但判断条件时有用，括号还有自己的用途就是将里面的东西变为表达式，所以就不再有f函数了，所以函数再访问f时就已经消失了，返回字符串类型的undefined。
        x += typeof f;   //未经声明的变量只有放在typeof操作符中才不报错，返回undefined（字符串类型）
    }
    console.log(x);      //若是1加上非字符串类型的undefined得到的结果为非数NaN，此题结果为1undefined
```
56.对象
1. 用已学的知识点，描述一下你心目中的对象。
例1：（包含了四个属性两个方法）
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
</head>
<body>
<script type="text/javascript">
    var mrDeng = {
        name : "mrDeng",                           //属性
        age : 40,                                          //属性
        sex : "male",                                    //属性
        health : 100,                                    //属性
        smoke : function (){                        //方法
            console.log('I am smoking');
            this.health --;                              // 等价于 mrDeng.health --
        },
        drink : function (){                                    //方法
          console.log('I am drinking');
            this.health ++;                            //等价于 mrDeng.health ++;
        }
        marry : function(someone){
            this.wife = someone;      
        },
    }
    delete mrDeng.name                          //删除
</script>
</body>
</html>
调用时： 
mrDeng.smoke() 这是调用函数，使用方法，并且返回undefined ，如果没写return，控制台就返回undefined
mrDeng.smoke 这是函数体引用 不改变什么
```
2. 属性的增、删、改、查
```
（1）增加：mrDeng.wife = "小刘"
        //可以写入console.log中，也可以直接写在控制台中，但是不用document.write
（2）查：如上问中，就是查询、
        //当一个变量未经变量就是使用，会报错
        //但是要是对象中的属未经声明就是使用，那就是undefined）
（3）删：delete mrDeng.name           
        //再访问时结果为undefined
```
3. 对象的创建方法
```
 (1)plainObject   对象字面量/对象直接量 --->var obj = {}   
（2)构造函数（结构上和函数没有任何分别）
      a.系统自带的构造函数 new Object()（执行一次生产一个对象，并且每个对象都是一模一样的，且相互独立的）可以通过var obj = new Object()；通过它能产生一个真真切切的对象
      b.自定义
（3)var person = Object.create(Person.prototype); 
（4)new Object()
```
    例1：
    ```
    function Person(){

    }
    var person = new Person();       //有new就能生成对象
    ```
    例2：
    ```
    function Car(){                     //就是一个函数，所以冒号什么的，逗号什么的都不用写，它就是一个函数！ 在外部进行更改时属性也只能通过=号
        this.name = "BMW";              //双引号？
        this.height = "1400";
        this.length = "4900";
        this.health = 100;
        this.run = function (){         //只能用this，不能用名字进行区分，因为刚生产时都是一样的没有什么区别，
            this.health --;
        }
    }
    var car1 = new Car();
    var car2 = new Car();
    car1.name = "sjska";
    car2.name = "fjakwigo";
    ```
   例3：
    ```
    function Car(color){        //参数才能使函数发生变化，才能变成自定义环节
        this.color = color;
        this.name = "BMW";
        this.height = "1400";
        this.length = "4900";
        this.health = 100;
        this.run = function (){
            this.health --;
        }
    }
    var car1 = new Car('green');
    var car2 = new Car('red');
    car1.name = "sjska";
    car2.name = "fjakwigo";
    ```

##零散知识
1. javascript中对象是非常灵活的 可以通过增删改查，但是java c++只要定义了对象 那么这个对象就是固定的不能改变，就是死的，不能动
在外部通过增加属性的方式来增加一个方法的话，只能通过=号，不能写冒号: ，在对象内部大括号中写冒号: ，
2. 构造函数就这一个特点：大驼峰式命名规则：TheFirstName
3. 小驼峰式命名规则：theFirstName

##构造函数内部原理
`构造函数必须加new，本来就是一个函数但是加上new就能实现构造函数的原理`
1. 在函数体最前面隐式的加上this = {}
2. 执行 this.xxx = xxx;
3. 隐式的返回this

例1：
```
    function Student(name,age,sex){
        //第一步在逻辑的最顶端生成隐式的var this = {}
        //第二步就是AO { this :{name  : 'xiaoliu'}};
/*        var this = {
            name : ""
            age:.....
        };*/
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.grade = 2016;
        //第三步return this;
    }
    var student = new Student('xiaoliu',1324,'male');
```
例2：
```
    function Person(name,height) {
        //var this = {}
        this.name = name;
        this.height = height;
        this.say = function () {
            console.log(this.say);
        }
        //return this
    }
    console.log(new Person('xiaoliu',180).name);
```
例3：
```
    function Person(name,height) {
        //var this = {}
        this.name = name;
        this.height = height;
        this.say = function () {
            console.log(this.say);
        }
        //return {}；                              //要是这么写就会形成破环，结果返回空对象
        //return 142；                             //返回原始值则不影响结果，其他的会影响结果，有new就不可能返回原始值
    }
    console.log(new Person('xiaoliu',180).name);   //有new就不可能返回原始值
```
例4：模拟构造函数过程，可以执行但是不这么用，因为还有深层次的东西无法模拟
```
    function Person (name , age){
        var that = {};
        that.name = name;
        that.age = age;
        return that
    }
    var person1 = new Person ('xiaoliu' , 20);
    var person2 = new Person ('xiaowang' , 30);
```
##包装
原始值是坚决不能有自己的属性与方法的，它是独立的值，但是对象可以有，

1. 数字类型对象：
```
var num = new Number(123);  
//num还有数字的特性，可以参与运算，num*2 --> 246 不过这时num又回归成了原始的数，
//就是数字的对象能参与运算，但是参与完就变为数字了，但是要是来个属性来个方法还可以当作对象来使，字符串，布尔类型完全一致。
```
2. 字符串类型对象：    var str = new String('fafa');
3. 布尔类型对象：    var bol = new Boolean(true);
4. null undefined不可以拥有属性，会报错
例1：注释部分就是包装类
```
    var str = 'abcd';
    str.length = 2;
	    //new String('abcd').length = 2; delete 该截断还是会截断的，不过和真正的str没有任何关系，然后就将这个删掉了，下面那个是重新的new的，和这个不一样
	    //new String('abcd').length = 4 字符串类型对象本身就有length属性
    console.log(str.length);               //4
    console.log(str);                      // abcd
```
例2：下面两个隐式的过程就是包装类的过程
```
    var num = 4;
    num.len = 2;
	    //new Number(4).len = 2 ;delete
	    //new Number(4).len 这个Number与上一个Number不是一个 这个里面没有len属性所以返回undefined
    console.log(num.len);                 //undefined
```
对象包装类下 30分开始往后都是例题
1.
```
    var str = "abc";
    str += 1;                                          //str = abc1
    var test = typeof(str);                            //字符串 String
    if(test.length == 6){
        test.sign = "typeof的返回结果可能为String"      //包装的过程 赋完值就销毁
    }                                                  //新生成 new String(String).sign   ,什么也没有
    console.log(test.sign);                           //输出结果undefined
```
2.
```
    function Person(name,age,sex){
        var a = 0;                      //保存到了AO中
        this.name = name;
        this.age = age;
        this.sex = sex;
        function sss(){                 //产生了闭包
            a ++;
            document.write(a);
        }
        this.say = sss;
    }
    var oPerson = new Person();
    oPerson.say();                      //调用函数，方法，a+1
    oPerson.say();                      //更改同一个变量a的值，a再加1
    var oPerson1 = new Person();        //新生成一个对象，和别的对象彼此独立
    oPerson1.say();                     //a从0开始++
    //结果为1 2 1
```
备注：alert 弹出框 ，用法：alert('我是小美女');

##原型

1. 原型是function对象的一个属性，它定义了构造函数制造出的对象的公有祖先。通过该构造函数产生的对象，可以继承该原型的属性和方法。原型也是对象。原型就是构造函数构造出对象的的爹
例1：自己本身没有name属性，但是自己祖先有，可以直接拿过来用，这样描述的就是一种继承
```
    Person.prototype.name = "呵呵";
    function Person(){
                     
    }
    var person = new Person();                  
    //person.name = 呵呵,自己本身没有name属性，但是自己祖先有，可以直接拿过来用，这样描述的就是一种继承

    var person1 = new Person();                
    //与person共有一个祖先，Person.prototype有什么属性，它俩就有什么属性
```
例2：自己身上有属性的话取自己的，可近的来，没有的话去父亲那里找
```
    Person.prototype.name = "呵呵";
    function Person(){ 
        this.name = "哈哈哈";                         
        //自己身上有属性的话取自己的，可近的来，没有的话去父亲那里找
    }
    var person = new Person();                  
    var person1 = new Person();
```
例3：这些对象身上没有属性和方法，它用的是它原型上的，是一种借用，是一种继承关系，并不属于真正的自己
```
    Person.prototype.name = "呵呵";
    Person.prototype.say = function(){
        console.log('啦啦啦');
    }
    function Person(){
        
    }
    var person = new Person();                       
    //这些对象身上没有属性和方法，它用的是它原型上的，是一种借用，是一种继承关系，并不属于真正的自己
    var person1 = new Person();
```

2. 利用原型特点和概念，可以提取共有属性
例1：
```
    Car.prototype.height = 1400;                      //共有属性，避免冗余
    Car.prototype.lang = 4900;
    Car.prototype.carName = "BMW";
    function Car(color,owner){
        this.color = color;
        this.owner = owner;
    }
    var car = new Car('red','LFY');
    var car1 = new Car('green','LFF');
```
3. 对象属性上增删和原型属性上增删改查
例1：
```
    Person.prototype.lastName = "LFY";
    function Person(name){                                  
        this.name = name;
    }
    var person = new Person('xiaoming');   
改：在控制台更改person.lastName时，只是更改了自己的属性值。自己的属性值增加了lastName，调用时也是从自己属性中调用，原型并没有改变，要更改原型，只有使用Person.prototype.lastName 才能更改原型，其实使用person.lastName时不叫更改属性，这叫往自己里添加属性，但是要是没有的话 会在原型里找
增：改都不可能，更不能增了，后代是不可能修改原型里的值的
删：在控制台打出delete person.abc 结果为true，因为删除一个本来就不存在的东西当然可以，所以显示true，同理所以delete person.lastName结果显示true（因为Person根本没有这个属性），但是person.lastName的值还是存在并没有删掉（还在原型中）
```
例2：
```
    Person.prototype.lastName = "LFY";
    function Person(name){
        this.name = name;
    }
    var person = new Person('xiaoming');

```
例3：原型的另一种写法，既然它是对象，那就可以按对象那么写
```
    Car.prototype = {
        height :1400,
        lang : 4900,
        carName : "BMW"
    }
    function Car(){

    }
    var car = new Car();
```
4. 对象如何查看原型，隐式属性: `__proto__`:
在我们用new生成新对象时，构造函数中的三段式：生成空对象，this，返回
但是在这里就第一步有区别,刚开始这个对象并不是空的，里面上来就有东西，里面的东西就是一个属性，放的就是如下：
```
var this = {
  __proto__ : Person.prototype             
  /*当你访问这个对象的属性时，这个对象身上如果没有这个属性的话，
  它就会通过__proto__属性指向的索引去找Person.prototype身上有没有自己想要的属性
  相当于一个连接的关系把原型和自己连接到一起了
  */
};
 __proto__里面存的是这个对象的原型，每个对象都有一个 __proto__属性指向它的原型。
```
例1：
```
    Person.prototype.name = "LFY"
    function Person(){

    }
    var obj = {                                                
        /*将对象的原型指向它
        当调用person.name时访问的是obj而不是Person.prototype.name
        */
        name : 'LYY',
    }
    var person = new Person();
    person.__proto__ = obj;                             
        //将指向的原型进行更改
```
例2：
```
(1)
    Person.prototype.name = "abc";
    function Person(){

    }
    var person = new Person()
    Person.prototype.name = "sunny";                 
        //person.name = "sunny"   
        //补充：这个里面改变的是属性，是房间里的东西，但是房间（地址）没变，结果为sunny         
(2)
    Person.prototype.name = "abc";
    function Person(){

    }
    Person.prototype.name = "sunny";                 
    /*这条语句放在放在new语句之前之后没什么分别，但是下面的两道例题就不一样了,
    这个改变的是房间里的东西，并没有改变房间（房间）
    而下面的一道例题，最后改变了房间，所以__proto__会指向new（生成对象）之前的房间*/
    var person = new Person()
```
例3
```
    Person.prototype.name = "abc";
    function Person(){
        //     var this = {
        //   __proto__ : Person.prototype                
        //   __proto__指向的是原来的的值，Person.prototype再后面已经更改了值
        //}
    }
    var person = new Person()
    Person.prototype = {                                      
            /*person.name = "abc"
            因为这个Person.prototype已经不是上面那个,
            那个__proto__指向的Person.prototype了，这个是新的
            */
        name : "sunny"                                            
            /*补充：这个直接改变的是房间（地址），不是属性，所以不同
            而且，在对象生成完才更改的房间，已经不起作用了
            因为对象已经生成完了，引用已经确定了
            */
    }
```
例4：
```
    Person.prototype.name = "abc";
    function Person(){                                           
        /*考虑预编译环节，将函数声明提升到最前面，只有在new后才会生成对象
        所以在最后的位置上才生成对象，而中间出现的后一个的更改会将前面的值覆盖掉。
        上一个题不一样，例3在生成对象之后才进行的更改房间，已经晚了，
        对象已经生成完了，__proto__已经指向之前的房间了。
        而这个题，在生成对象之前并且__proto__并没有指向任何房间时进行更改，
        后面的值当然会覆盖掉之前的值
        */
        /*var this = {
            __proto__ : Person.prototype
        }*/
    }
    Person.prototype = {
        name : "sunny"
    }
    var person = new Person();                           
        //person.name 为sunny
```
5. 对象如何查看对象的构造函数
例1：
```
    Car.prototype.name = 123;
    function Car(){

    }
    var car = new Car();
//在控制台打出car.constructor就能找到对象的构造函数，这是Car.prototype自带属性，是隐式的，是浅粉色的，要是主动在Car.prototype中添加属性，就是显式属性，是紫色的
```
例2:constructor虽然是系统隐式给的，但是可以手动更改
```
    function Person(){
        
    }
    Car.prototype = {
        constructor : Person,                 
        /*更改后car.constructor就变为了Person，car找错了父亲，
        一般来说构造函数的原型是自己Car.prototype.constructor
        或者car.__proto__.constructor返回结果都为Car()
        */
    }
    function Car(){

    }
    var car = new Car();
```
6. 总结：
(1)原型为Car.prototype，它是一个对象，里面有constructor，car.constructor可以找到对象car的构造函数，原型可以通过这样来更改。
    person.__proto__ = obj;    /     Father.prototype = grand;                         //都可以将指向的原型进行更改  ，其中obj和grand都是对象。  
(2)构造函数中三段式第一步的this中含有__proto__属性，car.__proto__指向的是原型Car.prototype
(3)constructor可以通过这样更改
   Car.prototype = {
        constructor : Person,                 //更改后car.constructor就变为了Person，car找错了父亲
    }
其实呢总结：
首先原型是构造函数构造出对象的公有祖先或者说是父亲，父亲里的属性自己都可以用，但是自己不能更改，自己最多也只是在自己身上添加属性
原型可以提取构造函数中的公有变量，要是很多属性写在构造函数中，耦合度很高，就写可以在原型里，想用再用，不想用就放那，
constructor是原型Person.prototype上的属性这是系统自带的。原型自己可以更改这个属性的属性值
__proto__是person上的属性，这时系统自带的，这个也可以更改

60.原型链：把原型上面再一个原型，再加一个原型，再加一个原型，这样的一个方法，把原型连成链，依照链的顺序，像作用域链一样的访问的一个东西，叫做原型链，原型链的连接点就是__proto__,原型链的访问顺序和作用域链的访问顺序是一样的，差不多，都是可近的来，近的往远的进行排查，近的有，就用近的，近的没有就往远了找
其实的访问顺序就是：先找自己有没有（可以这么理解为自己构造函数就是自己），然后再找自己__proto__指向的原型身上有没有，没有的话，再找原型的__proto__指向的原型身上有没有，再一直往上找找找
1.Object.prototype是所有对象的最终原形
例1：
    Grand.prototype.Lastname  = "Deng";           //   Grandl.prototype.__proto__ = Object.prototype; Object.prototype是所有对象的最终原形，里面就没有__proto__属性了，因为没有原型了
    function Grand (){}，
    var grand = new Grand();

    Father.prototype = grand;
    function Father(){this.name = "xuming";this.fortune:{card1 =  "abc"}}
    var father = new Father();

    Son.prototype = father;
    function Son(){this.hobbit = "smoke";}
    var son = new Son();
2.原型链属性的增删改查（基本上与原型是一致的）
查；查看属性就是可近的来，近的没有就往远了找，一直找到终端，终端都没有就undefined
删：原型链上的属性通过子孙是不可以删的，通过自己可以删
改：不能说子孙完全不能修改这个父亲的属性
例1：
  还是上面那个代码 
  在控制台写son. fortune.card2 = "hahha"，然后父亲构造函数中的fortune就有card1和card2两个属性
  因为这种修改是引用值自己的修改，因为他是引用值，引用值自己给自己加属性是可以的，这不算赋值的修改，这算一种调用的修改，这种修改是可以的，但是直接加值，覆盖型的修改是不行的，. card2这种修改只限于引用值的修改，原始值是不行的，原始值你只能覆盖，也不能干别的
例2：
    Grand.prototype.Lastname  = "Deng";
    function Grand (){

    }
    var grand = new Grand();
    Father.prototype = grand;
    function Father(){
        this.name = "xuming";
        this.fortune= {
            card : "vise",
        }
        this.num  = 100;                                  //在控制台son.num ++后，先出现的100什么都不是，然后再访问father.num = 100,son.num=101,因为++是 值+1再赋给自身，所以son在将num取出来就行赋值后，就是放自己那了，所以自己就多了一个num属性并且是101
    }
    var father = new Father();
    Son.prototype = father;
    function Son(){
        this.hobbit = "smoke";
    }
    var son = new Son();
3.谁调用的方法内部this就是谁-原型案例
例1：
    Person.prototype ={
        name : 'a',
        sayName : function(){
            console.log(this.name);              //sayName里面的this指向是，谁调用的这个方法，this就是指向谁，所以调用person.sayName()时结果为b，（person就是Person，一个是对象，一个是构造函数）
        }                                                       //所以当调用Person.prototype.sayName时，结果为a
    }
    function Person(){                                //构造函数中的属性一定要是this.name，不可以是直接name，还有对象中的就是name可以，只要在函数中就要用this，记住！
        this.name = "b";
    }
    var person = new Person();
例2：
    Person.prototype ={
        height : 100,
    }
    function Person(){
        this.eat = function (){           //使用person.eat方法时只是改变了height属性的值并不会return什么值，除非自己设定，但是在这里也没什么用，默认return undefined
            this.height ++;               //在进行调用person.eat()时返回的是undefined，控制台每次访问返回的都是return值，因为这个eat方法默认是undefined，所以在自己没有设置return时，都返回undefined
        }                                           //在调用了person.eat()之后，person.height的值改变+1，但是person.__proto__（Person.prototype）原型的值不改变还是100。
    }
    var person = new Person();
补充：
    1.   var obj = {};                                   //这是对象字面量的创建形式，这个对象有原型，平时能用对象自变量就用对象自变量，最好不要用下面的那种形式。在公司中，数组和对象必须用自变量的写法，最好不要用其它方式
          var obj1 = new Object();              //Object() 这是系统给咱们提供的构建函数，上面语句和这个语句得实际上是一样的，在上一条语句上，系统会在内部实现var obj= new Object()，这个对象原型是obj1.__proto__ -- > Object.prototype
    2.
        Person.prototype = {} /*-- >Object.prototype*/      //person的原型就是对象自变量，最终就是Object.prototype
        function person(){

        }
4.Object.create(原型（对象）或者null);
例1：
    Person.prototype.name = "sunny";
    function Person(){

    }
    var person = Object.create(Person.prototype);              //Object.create(原型)，这条语句就创建了一个以Person.prototype为原型的对象，但是你要是在自己的构造函数（工厂）中添加一些东西的话，那就不一样了，仅仅是原型一样了
5.绝大多数对象的最终都会继承自Object.prototype,但不是所有，因为下面的例题就是特例
例1：
    var obj = Object.create(null);                                         //Object.create()，括号里的东西只能是对象或者null，放置null的话，会生成一个空对象，什么也没有，原型也没有，访问obj时，是空的。但是你要是通过obj.__proto__  = {name : "sunny"};加上原型的话，系统让你加，访问obj时会有原型，但是系统不认，访问里面的属性时会显示undefined。
    总结：人为加的原型不好使，系统不会读里面的属性。所以说原型这个东西是隐式的内部属性，自己加是不管用的，就是系统给了，咱们可以去改，但是系统没有这个东西，自己加，系统是不认的。
例2：    var obj = Object.create(124);                                 //不能放原始值，会报错，但是可以放数组，数组也算object
6.toString()
    var num = 123;
    num.toString();                                                               //是正确的，因为数字经过包装类Number(123)可以一层一层地往上找，最终的原型一定含有toString属性，所以最终是可以访问的
    null.toString()或者undefined.toString()                         //是报错的，因为它俩不能经过包装类，没有原型，也不是对象，所以没有toString属性，或者说只有它俩和自己构造出的没有原型的东西没有toString，剩下的都有
   123.toString()                                                                  //也是错的，因为系统会把它看成浮点数，因为数学运算中小数点优先级最高，所以会报错
7.重写
(1) var obj = {};  obj.toString();                                     //对象上面调用的toString是Object.prototype中的toString，毋庸置疑。
(2)
例1
    var num = 134;                   
    num.toString();                                                            // -->new Number(num).toString();
    Number.prototype.toString = function(){                  // new Number原型就是Number.prototype,
    // 而Number.prototype上面就有一个toString方法

    }
    Number.prototype.__proto__ = Object.prototype    //Number.prototype也有原型，它的原型就是Object.prototype,这就是原型链
    //所以Number.prototype上面有toString属性，我就不用Object.prototype上面的tiString属性了，所以num.toString()调用的是自己重写过的，不是Object.prototype上的
   这里补充一个重写的概念，重写就是：原型上是有这个方法的，然后我自身又写了一个和原型上的方法，同一个名字但不同功能的方法叫做重写。叫同一个名字的函数的不同重写方式。
   重写一般是应用于后端静态语言，像java，C++等都有一些方法重写，一个类里面有很多方法，方法名字都不一样，返回值类型不同，形参列表不同，所以这叫重写，通过你返回值，形参列表的不同，不同传参调用不同的方法，这个叫真正意义上的重写。
例2：
    Person.prototype = {
        toString : function (){                                      //person.toString(),返回hehe，访问的是Person.prototype中的toString，不是原型链终端，这种和原型链终端名字一样的方法但实现不同功能的东西叫做方法的重写
            return "hehe";
        }
    }
    function Person (){

    }
    var person = new Person();
例3：
    Number.prototype.toString();
    Boolean.prototype.toString();
    Array.prototype.toString();
    String.prototype.toString();                //这些方法都是将toString方法进行了重写，每次访问时都是自己的toString。
例4：
    var obj = {};                                          //创造空对象
    document.write(obj);                          //其实每次document.write打印的都是目标的toString()方法，上一条语句创建了一个空的对象，但是也有原型，所以可以打印结果为[object Object]
例5：
    var obj = Object.create(null);              //用Object.create创建出的对象没有原型，所以也没有toString()方法，所以结果为报错
    document.write(obj);
例6：
    var obj = Object.create(null);
    obj.toString = function (){                  //人为添加上一个toString方法就可以正常访问了
        return "hahhahah";
    }
    document.write(obj);
（3）
在控制台打印0.14 * 100时返回结果非14,这是由于javascript精度不准的原因，所以在javascript中尽量避免小数操作
进行小数操作的话可以利用Math.ceil()函数（向上取整），或者Math.floor()函数（向下取整），例如Math.ceil(124.141);返回结果为125，Math.floor(124.141);返回结果为124
还有Math.random();这是随机产生一个（0,1）之间的开区间数
    for(var i = 0;i < 10 ; i++){
        var a = Math.random().toFixed(2) * 100;                         //这时输出一个0-100之间的随机数，但有时会不准会显示28.000000000000004，因为会产生精度的小偏差。
        console.log(a);
    }
因为上面的代码得到的数会有精度的偏差，所以一般用下面的代码实现取随机数。
    for(var i = 0;i < 10 ; i++){
        var a =Math.floor( Math.random()* 100);     //取整就一定不会有精度的偏差了。
        console.log(a);
    }
（4）javascript可正常计算的范围，前16位，后16位，


##call/apply
1. 之前Person()代表一个函数或者方法的执行，但其实Person.call()才是它执行的根本面貌。任何一个方法都可以.call()执行。call的实质就是借用别人的方法实现自己的功能
2. call与apply的区别
call需要把实参按照形参的个数传进去，
apply需要传一个arguments
3. call与apply干嘛的，有什么区别
```
就一个功能：改变this指向的
区别：传参列表不同
```
Person.call(obj)：当向Person.call()中的一个参数传对象的话，它就会在Person执行时候让里面的this指向发生改变，指向你传进去的那个对象，如下例，这是借用别的函数，在此例中并不影响person。
例1：

    function Person(name,age){
        this.name = name;                                       //这就变成了obj.name = name; obj.age = age;
        this.age = age;
    }
    var person = new Person("LFY",100);
    var obj = {

    }
    Person.call(obj,"LFY",100);
例2：Person函数和Student函数都需要name，age，sex属性，所以可以像下例中一样，具体解释见注释，还有当使用call时，只适用于自己的需求完全覆盖别人的需求时，没办法自己选择，无法实现需要哪个属性使用哪个属性。但是不想使用某个属性可以传参时传进去undefined，
    function Person (name,age,sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    function Student (name, age, sex, tel, grade){
        Person.call (this, name, age，sex);                                 //参数中的this，是构造函数三步中第一步中的this，然后利用Person中的方法实现了自己功能的封装，其实这个也可以理解为将Person中的的三条语句直接拿到了自己（this）的函数中。总结就是用Person里的三个属性加上自己的两个属性把自己给实现了。
        this.tel = tel;
        this.grade = grade;
    }
    var student = new Student("LFY",21,'male', 110,2);
例3：call最终完整实例
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>frame</title>
</head>
<body>
<script type="text/javascript">
    function Wheel(wheelsize, style) {
        this.wheelsize = wheelsize;
        this.style = style;
    }
    function Sit(comfortable, sitcolor) {
        this.comfortable = comfortable;
        this.sitcolor = sitcolor;
    }
    function Model(height, width, length) {
        this.height = height;
        this.width = width;
        this.length = length;
    }

    function Car(wheelsize, style, comfortable, sitcolor, height, width, length) {
        Wheel.call(this, wheelsize, style);                                                                                             //非要写this么？不一定，他的目的就是把执行函数里的this改成自己传进去的对象，这个时候我们想要传进去的对象恰好用this能表示（经测试，发现Car和car都不行）
        Sit.call(this, comfortable, sitcolor);
        Model.call(this, height, width, length);
    }
    var car = new Car(100, '花里胡哨的', '真皮', 'red', 1800, 1900, 4900);
</script>
</body>
</html>
在原型，原型链，call/apply下中1小时45分时有例题

62.继承发展史
1.传统形式
过多的继承了没用的属性，差不多被淘汰了
2.借用构造函数（勉强算继承，只是用别人的东西完成了自己的事，实际上不算是继承）
不能继承借用构造函数的原型（又不懂了！！！！）
每次构造函数都要多走一个函数（只是视觉上操作上省了，但是实际上什么都没省，效率也没提高）
一般在工业开发中，只要是有这种我要的东西覆盖了你，就建议使用第二种
3.共享原型,在继承的角度上，最好用这种
例1： Son.prototype = Father.prototype;实现共享原型
   Father.prototype.lastname = "Liu";
    function Father (){

    }
    function Son (){

    } 
    Son.prototype = Father.prototype;                 //son.lastname = "Liu"  father.lastname = "Liu"
    var son = new Son();
    var father = new Father();
抽象出一种功能封装成函数，函数就代表功能。函数代表功能的复用，哪里能复用，哪里能定义化，通过参数来实现。
例2：咱不是想让对象去继承某个东西，而是想要构造函数继承某个东西，这样，通过这个构造函数生产出的所有对象就全继承那个东西了，这句话是针对function(Targer,Origin)说的
    Father.prototype.lastname = "Liu";
    function Father (){

    }
    function Son (){

    }
    function inherit(Target,Origin){        
        Target.prototype = Origin.prototype;
    }
    inherit(Son,Father);
    var son = new Son();                            //son.lastname结果为Liu
例3：一定要先继承后使用，本题中先使用后继承结果就为undefined
    Father.prototype.lastname = "Liu";
    function Father (){

    }
    function Son (){

    }
    function inherit(Target,Origin){  
        Target.prototype = Origin.prototype;
    }
    var son = new Son();                        //son.lastname结果为undefined，因为已经生成对象了，已经确定原型了，所以后面的继承也不能起到什么作用的了，因为对象已经生成了，原型已经确定了。
    inherit(Son,Father);                           
但是这种方法不足之处，若是son想给自己增加一个属性，以便后续的使用，不方便，如下：
    var father = new Father();
    Son.prototype.sex = "male";            //若是这么改的话，那么Father.prototype 也会改变，即father.sex返回结果也为male，因为Son.prototype与Father.prototype指向的是一个空间
所以利用这种方法，Son想实现自己的个性化的属性根本不可以，因为自己一改把人家的东西也改了，Son现在想实现的就是Son用的是Father的原型，但是Son往自己身上加东西根本不影响你Father的东西，也就是我既有自定义的原型，又拥有的你原型。
所以在此之上又生成了第四种方式，思想还是共享原型，但是有点小区别。
4.圣杯模式
例1：利用中间F函数如下，用这条语句Son.prototype.sex = 'male';向son的原型中添加属性，然而father不会变，即son.sex返回结果male,而father.sex返回结果为undefined
    Father.prototype.lastname = "Liu";
    function Father (){

    }
    function Son (){

    }
    function inherit(Target,Origin){              //重点部分
        function F(){}
        F.prototype = Origin.prototype;
        Target.prototype = new F();              //通过new出来的子的不能改变父辈的原型（Target.prototype = new F();），但是直接相等一个原型改变另一个原型也改变（Target.prototype = Origin.prototype;）
    }
    inherit(Son,Father);
    var son = new Son();
    var father = new Father();
例2：圣杯模式（最完美的一个方法）
    Father.prototype.lastname = "Liu";
    function Father (){

    }
    function Son (){

    }
    function inherit(Target,Origin){
        function F(){}
        F.prototype = Origin.prototype;                                 //这条语句和下面那条语句顺序一定不能颠倒，颠倒过来就不好使了。因为涉及到原型指向的问题，new用的是原来的原型，后来再给人改了，可是人家已经用完了，晚了，所以一定在new之前进行更改。
        Target.prototype = new F();                                       //首先这三条语句利用中间F函数，避免了Son.prototype改,Father.prototype也改 
        Target.prototype.constructor = Target;                    //让Son.prototype.constructor（原型的构造函数指向自己的构造函数）Son()，因为如果不写这句的话，Son.prototype.constructor返回结果为Father
        Target.prototype.uber = Origin.prototype;              //把Target到底继承自谁记下来，如果有一天想要知道Target真正继承自谁，可以通过这个方法把它调用出来，super与uber一样也可以实现，但是super是保留字不允许瞎用。
    }
    inherit(Son,Father);
    var son = new Son();
    var father = new Father();
例3：圣杯模式：这个方法和上面的那个都行，但是最好写下面这个！因为这个将F这个函数私有化的写还是比较好的
    var inherit = (function (){
        var F = function (){};
        return function (Target,Origin){
            F.prototype = Origin.prototype;
            Target.prototype = new F();
            Target.prototype.constructor = Target;
            Target.prototype .uber = Origin.prototype;
        }
    }());
补充：
CSS知识：css中但凡是文字类的属性包括文字类的颜色font-size等，文字类属性有一个传递的特性，如果子元素没设置文字类属性的话，就默认继承父元素的文字类属性。所以font-size默认属性就是inherit。
原型只是实现继承的一种方法，提升不到工业化的程度

63.命名空间
1.好处：管理变量，防止污染全局，适合模块化开发
2.污染全局变量的解决方法两种：
(1)老办法解决冲突的方法：命名空间（其实就是org），但是现在一般都用webpack
 例1：
    var org = {
        department1 : {
            liufangyan : {
                name : 124,
                age : 21,
            },
            liu : {

            }
        },
        department2 : {
            liuyuanyuan : {
                name : 124,
                age : 27,
            }
        }
    }
    var liufangyan = org.department1.liufangyan;
    liufangyan.name;
(2)利用闭包实现变量私有化，不会污染全局变量，下例中，就是将特定的功能放进闭包中去，然后留出一个函数作为接口方便以后的启用，将函数传给init。
其实也就是将全局变量要实现的功能放在了局部中，就是让各自互相不污染。这样以后要是自己要实现一个功能，这个功能是可以复用的（重复使用），就可以把这个功能提取到这样的一个闭包中，保存到文件夹中，以后用就可以copy过来，根本不用担心什么污染的问题
 例2：
    var name = 'LFY';
    var initLiu = (function (){                         //init叫做初始化，把入口函数，即最开始启动的函数叫做init
        var name = 'LYY';
        function callName(){
            console.log(name);
        }
        return function (){
            callName();
        }
    }())


64.小技巧
 实现方法的连续调用，注意注释部分。
    var deng = {
        smoke : function (){
            console.log('smoking');
            return this;                               //利用this
        },
        drink : function (){
            console.log('drinking');
            return this;
        },
        perm : function (){
          console.log('perming');
            return this;
        }
    }
    deng.smoke().drink().perm();               //返回结果为smoking drinking perming一共三行，当上面不用return this时 返回结果为undefined，undefined.drink()肯定不对，当返回this时，返回的就是对象，所以最终可以实现方法的连续调用
补充：对象的枚举，`（继承模式，命名空间，对象枚举下的36分47秒）enumeration`
例1:遍历数组
    var arr = [1,2,3,5,6,7,7];
    //枚举，遍历：enumeration
    for(var i = 0 ; i < arr.length; i++){
        console.log(arr[i]);
    }


## 获取对象的属性
1. obj.name  / obj['name']
例1：
```
obj.name  / obj['name']访问结果都为“abc”
在系统中，你写obj.name查看属性时。在内部还会给你转化为obj['name']
所以要是直接写obj['name']还相对来说是快的
    var obj = {
        name : 'abc',
    }
```
例2：当你查看deng.sayWife(2)时就可以出现xiaozhang了，要不然只能用switch和case，比较麻烦。
```
    var deng = {
        wife1 : {name : "xiaoliu"},
        wife2 : {name : "xiaozhang"},
        wife3 : {name : "xiaosong"},
        wife4 : {name : "xiaozhao"},
        sayWife : function (num){
            return this['wife' + num];               //这叫属性拼接
        }
    }
```
2. for in
    + for in 循环，目的只有一个，就是遍历对象用的，单独给对象设置一个循环用来遍历的，通过对象的属性的个数来控制循环圈数的，对象有多少的属性就会循环多少圈，每遍历一圈就会把当前圈的的属性名传到prop里面去，
    + for(var prop in obj)中的prop可以改为其他变量名key什么的都可以，还有var prop也可以放在外面var prop；for(prop in obj){}
例2：
```
    var obj = {
        name : 'xiaoliu',
        age : '21',
        sex : 'male',
        grade : '3',
        prop : 124,                                                //当对象中有prop属性时，访问obj.prop会显示5个124,当系统中没有prop属性时，系统会显示4个undefined
    }
    for(var prop in obj){　　　　　　　　　　　　　　　　　
        console.log(prop + " "　+ typeof(prop));
    }
    for(var prop in obj){
       // console.log(obj.prop);                               //访问obj.prop时系统会在内部转化为obj["prop"]，就是obj对象把prop当成属性来使用,所以解释了上面那句话。
    }
```
例2改正：
```
    var obj = {
        name : 'xiaoliu',
        age : '21',
        sex : 'male',
        grade : '3',
        /*prop : 124,*/
    }
    for(var prop in obj){
        console.log(obj[prop]);                             //在其他地方去访问属性可以去用  .  ,但是一旦要是在枚举或者for in循环中写，想调用对象里的属性的话就必须这么写
    }
还有以后再调用属性的话，最好写成方括号的形式。
```
3. obj.hasOwnProperty()方法
例3：obj.hasOwnProperty()方法
```
只需要打印自己属性或方法，不打印原型链或者原型上上的属性或方法，可以利用下面的方法，利用这个在这里可以说是过滤性的方法obj.hasOwnProperty(prop)这个方法是验证prop是不是自己属性的，结果返回布尔值。
    var obj = {
        name: 'xiaoliu',
        age: '21',
        sex: 'male',
        grade: '3',
        __proto__: {
            lastName: 'deng',
        }
    }
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))               //这是个方法，里面需要传参数把把对象的属性名的字符串形式传进去，在这里就是prop，验证prop是不是自己属性的，结果返回布尔值。
        {
            console.log(obj[prop]);                      //一般这一段成对出现，
        }
    }
```
    - 补充：但是还有一点
        ```
        console.log(obj[prop]):
            一旦延伸到了原型链Object.prototype上，不会打印系统自带的，
            系统自带的，不打印
            自己在_proto_上填的，打印
        obj.hasOwnProperty(prop):
            原型，原型链上的，自己设定的原型的属性，返回false
            只有身上的，返回true
        ```
例3补充：
```
    var obj = {
        name: 'xiaoliu',
        age: '21',
        sex: 'male',
        grade: '3',
        __proto__: {
            lastName: 'deng',
        }
    }
    Object.prototype.abc  = 123;
    for (var prop in obj) {
        if (!obj.hasOwnProperty(prop))              
        {
            console.log(obj[prop]);                    //打印结果为deng和123。
        }
    }
```
例4：in：使用时在控制台直接打印'age' in obj就可以，（不可以age in obj这么写，会报错，因为age是会被看作是变量，未声明就使用报错）然后返回结果为true或者false，即这个属性在或者不在这个对象中。
```
    var obj = {
        name: 'xiaoliu',
        age: '21',
        sex: 'male',
        grade: '3',
        __proto__: {
            lastName: 'deng',
        }
    }
```
    - 补充：hasOwnProperty和in的区别，hasOwnProperty是判断这个属性是不是这个对象自己有的，不包括原型，而in是看这个对象能不能调用这属性，包括原型的属性，访问lastName in obj 结果为true。
    - 总结： hasOwnProperty(prop)只能延伸到对象中的属性，obj[prop]可以延伸到原型链（不包括系统自带的），in可以延伸到终极原型即系统自带的。

4. instanceof:它也是个操作符，操作用法类似于in，但是和in完全不同的,
    + 用法：  A   instanceof   B          //官方解释：A 对象是不是 B 构造函数构造出来的
          例1：
          ```
          person instanceof Person
               //true
          person instanceof Object
               //true
          [] instanceof Array
                         //true
          [] instanceof Object
                       //true
          ```
    + 总结：看A对象 的原型链上有没有 构造函数B的原型
    ```
           function Person (){

           }
           var person = new Person();
           var obj = {};
          person instanceof Person
               //true    person的原型链顶头就是Person的原型，所以返回true
          person instanceof Object
               //true    同理
          [] instanceof Array
                         //true     空数组原型链上肯定有Array的原型，所以返回为true
          [] instanceof Object
                       //true     同理
          obj instanceof Person
                    //false    因为空对象与Person没关系，还有不能在控制台上直接写{} instanceof Person因为系统识别不出来是对象还是函数的大括号。
    ```
5. 重要的问题：识别未知数据是数组还是对象    var obj = {}; //[]
    + 解决1：obj.constructor
    + 解决2：obj instanceof Array
    + 解决3：Object.prototype.toString.call([])          
    ```
    //正常是call传进去this，然后改变this指向
    在这里传进去[],那么[]数组就代表this 返回结果为"[object Array]"
     Object.prototype.toString.call({})        //这个返回是"[object Object]"
     Object.prototype.toString.call(13)        //这个返回是"[object Number]"
    ```

67.this（在视频中this笔试真题讲解的部分，这两节主要是讲例题，此处例题在另一个文档中）
1.函数预编译过程中this指的是1window
例1：
    function test(c){                                //正常不经过new，this指的就是window，当对test进行new的话，test内部就会发生变化，本来AO中this指的是window,但是要是经过new之后，this就指的就是 Object.create(test.prototype)
        //var this = Object.create(test.prototype);         这是最精准的写法，下面的三行实现的是和这行一样的功能，但是这个比较精准
        /* var this = {
            __proto__ : test.prototype,
        };*/
        var a = 10;
        function b (){

        }
    }
    var AO = {
        arguments : [1],                         //其次还会生成以下两行，
        this : window,
        c : 1,                                           //首先我们了解的，AO中会生成以下三行。
        a : 1,


        b : function b(){

        }
    }
    test(1);
    new test ();                                   
例2：
    var x = 1;
    if(function f(){}){
        x += typeof(f);
    }
    console.log(x);
//但凡能把function变成表达式的，function就会自动忽略它的引用，也就是一旦function变为表达式代价是，他再也不可能被别人找到了，也就是它这个名字没有意义了
//然后f函数就不见了，所以typeof(f)就是undefined
例3：探究系统的isNaN函数
    function myNaN(num){
        var ret = Number(num);
        ret += "";
        if(ret == "NaN"){
            return true;
        }
        else{
            return false;
        }
    }
例4 ：
{} == {}    -->false
var obj = {}; var obj1 =obj; obj1=== obj  --> true

2.全局作用域里this指的是window，也就是直接打印console.log(this) 是window
3.call/apply可以改变函数运行时this指向。
4.谁调用这个方法，这个方法里的this指的就是谁
假如这个方法在全局范围内执行，里面的this指的是window，因为没人调用它，进行空执行，走预编译，然后指的就是window
obj.func(); func里面的this也会先走预编译环节，但是最后被obj中的this代替了，指向obj

this笔试真题讲解
例1：最终结果为1,2,3,4,5
    function foo(){
        bar.apply(null,arguments);       //这个是将arguments作为参数传给了bar里面去，所以bar里有实参是一个数组，
    }
    function bar(){
        console.log(arguments);         //传进来的实参被传进arguments中去了，然后打印就是1,2,3,4,5
    }
    foo(1,2,3,4,5);
例2：this指向问题
    var name = "222";
    var a = {
        name : "111",
        say : function (){
            console.log(this.name);
        }
    }
    var fun = a.say;        //这个a.say只是一个函数引用，就相当于将a中的function拿出来了，函数是在外面执行的，这时this指的是window中的name
    fun();
    a.say();                //这个不用说，a调用say()，this肯定指向a。

    var b = {
        name : "333",
        say : function (fun){
            fun();
        }
    }
    b.say(a.say);            /* b.say()执行时，这时的this的确指的是b，但是里面参传进去的参数a.say是个函数引用，这个函数引用被谁也没调用所以执行时走的是预编译环节，this指的是window和b无关，要是把对象b中fun()改为this.fun()，那结果就是333了      */
    b.say = a.say;           /*将a.say这个函数赋给b*/
    b.say();                /*这个就是b自己调用say并执行,所以this指向b*/
最后一个可以这样理解：
    var a = 100;
    var deng = {
        a : 200,
        say : function (){
            console.log(a);               //打印a肯定是100，要是打印this.a那就是200
        }
    }
同理：
    function test (){
        console.log(this);
    }
    var test1 = {
        say : function (){
            test();                        //打印的也是window，自己一个人执行，谁也没调用。
        }
    }

68.arguments（caller不是arguments上面的属性，arguments属性只有callee和length）
1.一共就一个用法，arguments.callee指向函数自身引用。在哪个函数里面就指向哪个函数。
例1：
    function test(){
        console.log(arguments.callee);         //等价于test
    }
    test();
例2：利用立即执行函数实现阶乘运算，因为立即执行函数执行后会被立即销毁，所以就利用到了arguments.callee实现多次调用。
    var num = (function (n){
        if(n == 1){
            return 1;
        }
        return n * arguments.callee(n - 1);
    }(10))
2.func.caller中的caller是函数自己的属性，指向函数被调用的那个环境（也就是代指谁调用它的）
例1：
    function test(){
         demo();                                             //在test内部被调用执行，所以打印demo.caller结果就是test这个函数。
    }
    function demo(){
        console.log(demo.caller);
    }
    test();
视频此处开始讲题即this笔试真题下的19分钟开始。题以及答案见另一个文档。
知识点补充：未声明就使用变量报错，放在typeof中不报错。
练习题：
例1：
    var foo = 123;
    function print(){
        this.foo = 234;
        console.log(foo);
    }
    print();
//this 指向全局，本来是123，后来被this更改为234 所以结果为234
例2：
    var foo = 123;
    function print(){
        this.foo = 234;
        console.log(foo);
    }
    new print();
//自己身上没有foo只能上全局里找，结果为123
例3：


## 克隆
1. 浅层克隆：原始值克隆，只拷值。（克隆后target对象属性改变，对自己没影响）
    例1：
    ```
    var liu = {
        name : 'LFY',
        age : 21,
    }
    function clone(origin , target){
        var target = target || {};                            //如果自己有原材料那就将原材料传进去进行克隆，如果没有原材料，那就target = {} 然后在进行克隆，将target对象返回
        for(var prop in liu){
            target[prop] = origin[prop];
        }
        return target;
    }
    var obj = clone(liu);
    ```
    例2：当属性值为数组时，我将car进行改变 obj.car.push('LFY'); 然后访问liu.car的值也改变了。
    ```
        var liu = {
            name : 'LFY',
            age : 21,
            car :['visa' , 'unionpay'],
        }
        function clone(origin , target){
            var target = target || {};
            for(var prop in liu){
                target[prop] = origin[prop];
            }
            return target;
        }
        var obj = clone(liu);
    ```
2. 深层克隆：就是自己克隆完别人的东西，自己更改，不改变原来的。
    + 判断是不是原始值
    + 判断数组还是对象（数组也能for in 因为数组也算特殊类型的对象，prop代表索引位）
    + 建立相应数组或对象
    + 将引用值重新当作一个对象再次进行拷贝，循环往复1234
    例1：
    ```
        var obj = {
            name : "abd",
            age : 123,
            card : ['visa' , 'master'],
            wife : {
                name :'bcd',
                son : {
                    name : 'abcds',
                }
            }
        }
        var obj1 = {};
        function deepClone(origin , target){
            var target = target || {};                                                                         //传进去原材料（target）时，用自己的，没有对象时，用工厂原材料（也就是新建的空对象）完成克隆。
            var toStr = Object.prototype.toString;
            var arrStr = "[object Array]"
            for(var prop in origin){
                if(origin.hasOwnProperty(prop)){
                    if(origin[prop] !== "null" && typeof(origin[prop]) == 'object' ){  //判断是不是引用类型（值既不是null又是Object类型）
                        target[prop] = toStr.call(origin[prop]) == arrStr ? [] :{};             //引用类型再具体判断  是数组还是对象（target[prop] = toStr.call(origin[prop]) == arrStr ? [] :{};这个语句可以改为if else，但是这个语句更加简便）
                        /*if(toStr.call(origin[prop]) == arrStr){                                        //以下六行等价于上面那行，用三目运算符比较简洁。         
                            target[prop] = [];
                        }
                        else{
                            target[prop] = {};
                        }*/
                        deepClone(origin[prop] , target[prop]);                                    //将引用值作为对象再次进行拷贝
                    }
                    else {                                                                                              //当值为原始值时就是这个函数的出口
                        target[prop] = origin[prop];
                    }
                }
            }
            return target;                                                                                        //当没有对象传进来时，就将一个空对象进行克隆，返回
        }
    ```
3. 三目运算符:其实实质上就是if else，但是有个比if else强大的就是会有返回值，相当于在if else中加了个return。
    + 格式：条件判断？是：否
        例1：    
            ```
            var num = 1 > 0 ? 2 + 2 : 1 + 1;                      //num=4;
            ```
        例2：    
            ```
            var num = 1 > 0 ?("10" > "9" ? 1 : 0) : 2;         //括号中"10"和"9"比较的是ASCII码，"10"是两位字符串写，先1和9的ASCII码进行比较，"1"小于"9"。
            ```

70.数组
1.数组的定义方式：
（1）数组字面量（推荐使用）
（2）系统提供的构造方法
所以数组能使用的一切方法都来源于Array.prototype
还有数组没什么能报错的地方（除非是引用了什么自己没有的方法），最多是undefined，就像数组var arr = [],没有第10位，那arr[10]返回的就是undefined
因为javascript里的数组是基于对象的，数组其实就是一种特殊的对象，和对象在本质上没什么太大的区别	，可以直接赋值arr[10] = 'abc',若是原本数组是空的，那经过这条语句长度就为11了。
例1：var arr = [1,2,,,,3,4];
例2：var arr = new Array(1,2,3,3,4);
两种定义方式的唯一区别：就是使用构造方法只传进一个参数的时候，这个时候这个数字代表长度而不是值，由于这个问题就引发了另一个问题
例3：
    var arr = new Array(10);               //arr就是长度为10的稀松数组，这里的10代表长度。
    var arr1 = [10];                             //arr1就是只含有一个元素10的数组
例4：数字非法，长度不能是小数。
    var arr = new Array(10.2);


71.数组的方法：
此处三目运算符第10分开始简单介绍ECMAjavascript，DOM和BOM
ECMAjavascript  ：javascript作者Brander Eich创建的js
DOM ：也算是他创建的但不完全，只是他给出了一系列规则，通过javascript可以操作HTML
BOM：通过javascipt可以操作浏览器的
1.改变原数组（无论es3,es5，es6凡事能改变原数组的就这7个）：push pop unshift，shift，sort，reverse，splice
（1）push，向数组最后一位添加数据的
var  arr = [];
例1：arr.push(2)                    //由空变为[2]
例2：arr.push(4)                    //由[2]变为[2,4]
例3：arr.push(3,3,5)              //由[2,4]变为[2,4,3,3,5];
例4：将arr.push()进行重写下面这个可以覆盖系统的push
    var arr = [];
    Array.prototype.push = function (){
        for(var i = 0 ; i < arguments.length; i++)
            this[this.length] = arguments[i];                              //这时还不知道是谁调用的push函数，所以用this代替，谁调用，this就代表哪个数组。
        }
        return this.length;
    }
（2）pop将数组中最后一位剪切出来，并且不用向里传递参数，传了也白扯
var arr = [2,3,4]
例1：var  num = arr.pop();                                               //结果num = 4，arr = [2,3];
（3）unshift ： 在数组第一位添加东西
var arr = [2,3]
例1：arr.unshift(0)                                                          //arr = [0,2,3]
例2：arr.unshift(0,-1)                                                      //arr = [0,-1,2,3]
要是重写的话，思路就是把传进去的数当作一个新数组，然后将原数组push进去就可以了
（4）shift：将数组第一位剪切出去
例1：arr.shift()                                                                //arr = [2,3]
（5）reverse：将数组逆转
例1：
var arr = [1,2,3,4];
arr.reverse()
//执行结果arr = [4,3,2,1]
（6）切片方法：arr.splice()：从第几位开始，截取多少的长度，在切口处添加新的数据。splice函数传进去的第一位参数长度是这样实现的：    pos += pos > 0 ? 0 : this.length;
例1：
    var arr = [1,1,2,2,3,3];
    arr.splice(1,2);
执行函数返回结果是被剪切的部分[1,2]，但是执行后arr的值为[1,2,3,3];
例2：
    var arr = [1,2,3,5];
    arr.splice(3,0,4);
执行结果为arr = [1,2,3,4,5];
例3：数组一般的方法里都可以带负数，负数是指倒数第几位，就是负数加上length
    var arr = [1,2,3,4];
    arr.splice(-1,1);
执行结果返回4
（7）sort方法使用：
a.必须写俩形参
b.根据自己定义排序规则，然后看返回值三种情况：
1）当返回值为负数时，那么前面的数放在前面（不动）
2）当返回值为正数时，那么后面的数放在前面
3）当返回值为0时，不动
例1：
    var arr = [2,10,20,13,4,8,9];               //下面自己定义了规则使arr进行了升序排序（也是冒泡排序思想）
    arr.sort(function(a,b){
        if(a > b){
            return 1;
        }
        else{
            return -1;
        }
    })
例2：对例1进行简化（返回 a - b 就是升序，返回 b - a 就是降序）
    var arr = [2,10,20,13,4,8,9];
    arr.sort(function(a,b){
        return a - b;                        //返回a - b就是要是a > b -->a - b > 0,a < b -- > a - b < 0, 因为sorts里的这个函数就是根据返回值的正负来进行排序的，所以升序直接写a - b就行了
    })
例3：给一个有序的数组乱序
    var arr = [2,3,4,5,6,8,9];
    arr.sort(function(a,b){
        return Math.random() - 0.5;
    })
例4：给一个对象按照年龄升序排序
    var cheng = {
        name : "cheng",
        age : 18,
        sex : 'male',
        face : 'handsome',
    }
    var deng = {
        name : "deng",
        age : 40,
        sex : undefined,
        face : 'amazing',
    }
    var zhang ={
        name : "zhang",
        age : 20,
        sex : 'male'
    }
    var arr = [deng,cheng,zhang];
    arr.sort(function (a,b){
        return a.age - b.age;
    })
例5：按照字符串长度升序排序
    var arr = ['abc','bcd','cccc','dddd','klfajlgjal','fdhak' , 'fhakhfaklfho'];
    arr.sort(function(a,b){
        return a.length - b.length;
    })
例6：按照字节长度升序排序
    function retByte(str){
        var num = str.length;
        for(var i = 0 ; i < str.length; i++){
            if(str.charCodeAt(i) > 255){
                num ++;
            }
        }
        return num;
    }
    var arr = ['gsgsa邓','bb邓','cfag邓','d邓','你邓','我邓','大家邓'];
    arr.sort(function(a,b){
        return retByte(a) - retByte(b);
    })
2.不改变原数组：
（1）concat拼接
例1：在控制台打arr.concat(arr1)结果就是将两个数组拼接起来了
    var arr = [1,2,3,4,5];
    var arr1 = [6,7,8,];
（2）toString(()数组将这个方法进行了重写，就是将数组中元素变为字符串形式
例1：
    var arr = [1,2,3,4,5];
    arr.toString()               //返回结果"1,2,3,4,5"
（3）slice
例1：当slice中有两个参数, 表示从该位开始截取，截取到该位之前；
    var arr = [1,2,3,4,5];
    var newArr = arr.slice(1,3);             //newArr = [2,3],因为不改变数组，所以这个方法关注的就是返回值，一定要用变量去接受返回值。
例2：当slice中有一个参数时，表示从第几位开始，一直截取到最后，也可以是负数，像下面这个例子arr.slice(-2)也是同样的效果
    var arr = [1,2,3,4,5];
    var newArr = arr.slice(3);               //newArr = [4,5]
例3：当slice中不写参数就是整个截取
    var arr = [1,2,3,4,5];
    var newArr = arr.slice();                  //newArr = [1,2,3,4,5]
（4）join用法就是数值调用join里面添加参数就是将数组元素用参数连接起来并返回，最好是字符串类型的。数字类型也行，但是最好加上字符串
         split按照什么方法拆分为数组，和join可逆，split是字符串方法不是数组的
例1：arr.join("~")
    var arr = [1,2,3,4,5];               //控制台打印arr.join("~")返回"1~2~3~4~5"
例2：利用split拆分,就是按照什么方式连，我就能按照什么方式给你拆了
    var arr = [1,2,3,4,5];
    var str = arr.join("-");             // "1-2-3-4-5"
    str.split("-");                           //["1", "2", "3", "4", "5"]
    str.split("4");                          //["1-2-3-", "-5"]，按4拆就是4没了。
例3：给出一系列字符串，将其连接到一起，最好不要用空串一个个去加，因为字符串放在栈中，栈先进后出，利用起来很不方便。所以利用数组
因为数组是一个散列存储结构，是一个堆内存，所以将字符串放在数组中，然后数组利用散列算法去寻找它们，再利用join连接是比较高效率的
        var str = 'alibaba';
        var str1 = 'tencent';
        var str2 = 'baidu';
        var str3 = 'toutiao';
        var str4 = 'wangyi';
        var str5 = 'xiaowang';
        var str6 = 'nv';
        /*散列*/
        var arr = [str,str1,str2,str3,str4,str5,str6,str];
        console.log(arr.join(""));                                  //结果为alibabatencentbaidutoutiaowangyixiaowangnvalibaba
        console.log(arr.join());                                     //不传，默认是逗号连接。结果为alibaba,tencent,baidu,toutiao,wangyi,xiaowang,nv,alibaba

作业：将unshift重写

Math上的方法：
min/max：最小，最大
floor/ceil/round:向下，向上，四舍五入
random：随机
例1：求数组中最小值
var arr= [1, 2, 3, 4];
Math.min.apply(Math, arr);

72.类数组：属性要为索引（数字）属性，必须有length（类数组关键点）属性，最好加上push
1.是对象，可以当作数组来用，把数组和对象拼接到一起，但并不是所有的方法都能用的，有的需要自己填。
例1：
    var obj = {
        "0" : 'a',
        "1" : 'b',
        "2" : 'c',
        "length" :3,
        "push" : Array.prototype.push,
        "splice" : Array.prototype.splice,
    }
例2：
    var obj = {
        "2" : 'a',
        "3" : 'b',
        "length" :2,
        "push" : Array.prototype.push,
    }
    obj.push('c');
    obj.push('d');
/*    Array.prototype.push = function (target){
        obj[obj.length] = target;
        obj.length ++;
    }*/
返回结果：{2: "c", 3: "d", length: 4}
例3：
    var obj = {
        "0" : 'a',
        "1" : 'b',
        "2" : 'c',
        name : 'L',
        age : 21,
        length : 3,
        push : Array.prototype.push,
        splice : Array.prototype.splice,
    }
obj.length   返回   3
obj.name     返回   "L"
for(var prop in obj){ console.log(obj[prop])}         返回           obj全部属性值
其实类数组本身就是对象，但是可以当作数组一样用，但并不是数组所有的的方法都可以用，需要自己去填属性，但是可以像数组一样去作用。

例4：封装type 
大致思路： 
先判断   原始值引用值
原始值：再分为null和其他，null单独判断，其他利用typeof判断再返回类型就行
引用值：函数直接返回就行，再判断对象，数组，和包装类对象等利用Object.prototype.toString.call();
function type (target){
    var template = {
        "[object Array]" : "array",
        "[object Object]" : "object",
        "[object Number]" : "number - object",
        "[object Boolean]" : "boolean - object",
        "[object String]" : "string - object",

    }
    if(target === null){
        return "null";
    }
    else if(typeof(target) == "object"){
        var str = Object.prototype.toString .call(target);
        return template[str];
    }
    else {
        return typeof(target);
    }
}
简化：
    var ret = typeof(target)； 然后把所有的 typeof(target)换成ret就行，只需判断一次就行

例5重要：数组去重
大致思路：将数组的属性值作为对象的属性名，将对象属性值赋一个非false的数，然后进行循环。

    var arr = [1,1,1,1,1,2,2,2,2,2,1,1,1,1,0,0,0,0,0];
/*    var temp = {
        "1" : "abc",
        "2" : "abc",
    }
    temp[1] --> undefined
    temp[1] --> "abc"
    temp[2] --> undefined
*/
    Array.prototype.unique = function (target){
        var temp = {}
            arr = [];
            len = this.length;
        for(var i = 0 ;i < len; i++){
            if(!temp[this[i]]){
                temp[this[i]] = "abc";
                arr.push(this[i]);
            }
        }
        return arr;
    }

如果：将"abc"改成"this[i]"就达不到0去重的效果了，因为temp[this[i]] 结果为0 ,那么取非是true，在判断条件哪里，0可以一直执行，所以错了。
    var arr = [1,1,1,1,1,2,2,2,2,2,1,1,1,1,0,0,0,0,0];
    Array.prototype.unique = function (target){
        var temp = {}
            arr = [];
            len = this.length;
        for(var i = 0 ;i < len; i++){
            if(!temp[this[i]]){
                temp[this[i]] = this[i];
                arr.push(this[i]);
            }
        }
        return arr;
    }


第13节数组去重，习题，答疑复习
原始值与引用值两大区别：
1.存储地址不一样
2.原始值没有属性和方法

引出问题1：
 var  str = "abc"
 console.log(str.length);
内部转化原因：
会在内部生成字符串对象new String('abc')
然后执行时执行的其实是new String('abc').length
以上隐式包装的过程就称为包装类。

引出问题2:
var  number = 123;
num.abc = "abc";
console.log(num.abc);
内部转化：
会在内部生成new Number(num).abc = 'abc';  --> delete
然后再下一步访问是因为你上一个已经销毁了，然而这里有要调用，所以系统又构造出了一个new Number(num).abc 这个里面什么也没存，所以返回undefined

不可配置的属性：一旦经历了var的操作，所得出的属性，window，这种属性叫做不可配置的属性不可配置的属性，delete不掉
不可配置的属性： var num = 123; delete num --> flase
可配置的属性：    obj.num = 123; delete num --> true 	

Object.create(prototype,definedProperty) （了解）

this:
1.预编译 this --> window
2.谁调用 this 指向谁
3.call apply
4.全局 this --> window
例1：
    function test(){
        var num = 123;
        function a(){

        }
    }
    test();   < == > test.call()
//test执行就会生成以下内容
  -- >AO{
        arguments.{},
        this : window,
        num : undefined,
        a : function (){}
    }
例2：
    function test(){
        console.log(this);
    }
    test.call({name : "deng"}); 
//test.call({name : "deng"});执行就会生成以下内容
   -- >AO{
        arguments.{},
        this : {name :"deng"},
        num : undefined,
        a : function (){}
    }

例3：
    var name = 'window';
    var obj = {
        name : 'obj',
        say : function (){
            console.log(this.name);
        }
    }
    obj.say.call(window);
//只要有call出现就打破一切规则，this就指向传进去的东西。

例4：
    var name = 'window';
    var obj = {
        name : 'obj',
        say : function (){
            console.log(this.name);
        }
    }
    var fun = obj.say;
    fun();
//相当于这个函数在全局范围内自调用，相当于把say那个函数引用拿出来了

闭包：只要是将内部函数保存到了外部就一定形成闭包，不管什么方式，只要保存到了外部就必然生成闭包，不一定是return的方式
    var obj = {}
    function a (){
        var aa= 123;
        function  b (){
            console.log(aa);
        }
        obj.fun = b;
    }
    a();
//b被保存到了外部，并且一直拿着a的执行期上下文，死死不放手，a消失了，b还活的好好的，照样能访问a里的变量

例1：
    function Person (){
//        var this = {
//        makeMoney : function (){}
//        offer : function (){}
// }
        var money = 100;
        this.name = name;
        this.makeMoney = function (){
            money ++;
        }
        this.offer = function (){
            money --;
        }
//        return this
    }
    var person = new Person();
//经过new之后就会在Person内部产生this，然后将this返回，连带着this对象上打包的两个方法都返回到了外部，这样，这两个方法就和Person生成的执行期上下文形成了闭包
//这样这两个方法就能操作同一个money，money保存到了Person里面并且外部不可访问，因为money在Person方法也就是makeMoney和offer的作用域链中
//money就作为Person的私有化变量来存在。

[] + ""  --> ""
[] + 1  -->  "1"
[] - 1  --> -1
[] == [] -- > false    因为每个引用值都有一个独特的地址
//以上都进行了隐式类型转换

深度克隆原理：
   var obj = {
        name : "abc",
        wife : {
            name : "xiaoliu",
            son :{
                name : "xiaodeng",
            }
        }
    }

    var obj1 = {
        name : obj.name,
        wife : {
            name : obj.wife.name,
            son : {
                name : obj.wife.son.name,
            }
        }
    }
//首先obj1 空对象
第一个属性：原始值直接赋值，
第二个属性：引用值->对象类型->新建对象
第二个属性中第一个属性：原始值直接赋值
第二个属性中第二个属性：引用值->对象类型->新建对象
依次就是深度克隆原理

undefined   和null   和0
并不是所有东西比较都会进行隐式类型转换的，尤其是大于小于号这里
系统规定：undefined和null就是不能和数（像0什么的）进行比较。

例题：
    (function (x){
        //var x
        delete x;
        return x;
    }(1))
//相当于var x 是删不掉的 所以返回1。

例题：
    function test(){
        console.log(typeof(arguments));
    }
    test();
//返回object

例题：
    var h = function a(){
        return 23;
    }
    console.log(typeof(a));
//报错 h才是函数名，调用h才执行

然后的例题就是另一个文档中了

74.try catch
1.try里面发生的错误，不会执行try里面错误之后的代码
例1:
    try{
        console.log('a');
        console.log(b);
        console.log('c');
    }catch(e){

    }
    console.log('d');
//执行结果：a d
例2：
    try{
        console.log('a');
        console.log(b);
        console.log('c');
    }catch(e){
        console.log('e');
    }
    console.log('d');
//try里面的代码报错的话，就执行catch里面的东西，如果不报错，那么catch中的东西不会被执行
//如果一旦报错try就会停止之后的代码，直接跳到catch中去执行，可以执行自己想执行的任何东西
//但是一般我们都会打印catch(e)中e里面的信息，e就是系统传过来的一个错误对象（只有两个信息）里面包含了两种信息，一个是e.message和e.name，这个e随便写，就是个形参，写ab什么的都行。

例3：
    try{
        console.log('a');
        console.log(b);
        console.log('c');
    }catch(e){
        alert(e.name + " : " + e.message);
    }
    console.log('d');
//执行结果： a          ReferenceError : b is not defined           d
//这个catch就是负责捕捉错误的，捕捉错误到程序里面，它就不会抛出到控制台，就不会让程序终止，try catch就是为了容错，并且把错误信息给你

2.错误信息类型：六种
Error.name的六种值对应的信息：

1. EvalError：eval()的使用与定义不一致 

2. RangeError：数值越界 

3. ReferenceError：非法或不能识别的引用数值 
例1 ：var str = abcd   就会报这样的错误
变量未经声明就是使用，函数也是，基本上都是
例：    console.log(b);	

4. SyntaxError：发生语法解析错误 ，使用中文字符 ，或者其他低级错误
例：虽然未执行函数，但是也报错
    function demo(){
        :
    }

5. TypeError：操作数类型错误 

6. URIError：URI处理函数使用不当

## es5.0严格模式
1. 现在的浏览器基于es3.0+es5.0新增的方法 去执行的
2. es3.0和es5.0产生冲突的部分
 如果使用的是es5.0严格模式，那么es3.0和es5.0就使用es5.0，否则使用es3.0
3. es5.0严格模式的启动
    + 两种用法：
        - 全局严格模式：语法规定写在页面逻辑最顶端："use strict";
        - 局部函数内严格模式（推荐使用）：写在局部但是也要在局部的最顶端，要是写在全局最顶端，那就是全局都采用es5.0的
        例1：
        ```
            "use strict";
            function test(){
                console.log(arguments.callee);
            }
            test();
        //执行报错，因为es5.0严格模式不允许arguments.callee，es3.0才允许，报的TypeError这样的错误。
        ```
        例2：
        ```
            function test(){
                console.log(arguments.callee);
            }
            test();
            function demo(){
                "use strict";
            }
        //正常执行test函数，因为"use strict"在demo函数中，demo函数遵循es5.0的严格模式
        ```
4. 为什么写一行字符串"use strict"来实现es5.0的严格模式？写函数strict(){}不行么？
因为假如写函数strict(){}的话，页面放在老浏览器中执行，如果来浏览器没有更新到es5.0的版本的话，那么可能从开头函数strict(){}那里往后都不能执行，就错了
字符串就不会有这样的问题
5. es5.0严格模式不允许使用：
    + arguments.callee
    + func.caller
    + with
        ```
        with可以改变作用域链，with可以让它里面的代码的作用域链的最顶端变with括号里的对象
        也就是那个对象充当了里面代码的最直接的AO,然后访问变量的话，就直接上那个对象里面去找，把那个对象当作自己的第一个域
        要是对象里面没有的话，在从里到外一层一层找，看哪个作用域链里有这个变量的值
        但是with太强大了，当代码层级太多的话，with改变作用域链，导致代码失效率
        所以es5.0严格模式不允许用with
        ```
    + eval：能把字符串当作代码来执行，但是es3.0都不能使用eval；
        例:
            ```
                "use strict";
                var a = 123;
                eval('console.log(a)');
            //返回 123
            ```
        例1：
        ```
            var obj = {
                name : 'obj',
            }
            var name = "window";
            function test(){
                var name = 'test';
                with(obj){
                    console.log(name);
                }
            }
            test();
        //执行结果返回obj，先上with包含的对象里面去找name，找到为obj，假如obj里面没有name属性，那么就上test作用域链里找，要是test作用域链里没有的话再一层一层往上找，最后是GO
        ```
        例2:命名空间的真正用法
        ```
            var org ={
                dp1 : {
                    jc : {
                        name : 'abc',
                        age : '21',
                    },
                    deng : {
                        name : 'deng',
                        age : '21',
                    }
                },
                dp2 : {

                }
            }
            with(org.dp1.jc){
                console.log(name);
            }
            with(org.dp1.deng){
                console.log(name);
            }
        //执行结果 abc   deng
        ```
        例3：with其他应用
        ```
        /*    document :{
                write : function (){

                }
            }*/
            with(document){
                write('a');
            }
        //因为document是个对象，里面有很多函数，避免重复多次写比较麻烦，所以放在with中，直接这么写就可以了。
        ```
6. es5.0其他规定：
    + 变量赋值前必须声明
        例：
        ```
        b = 10； //不允许，错的
            + 局部this必须被赋值
        例1：
            "use strict"
            function Test(){
                console.log(this);
            }
           test();
        //执行结果 undefined
        ```
        例2：
        ```
            "use strict"
            function Test(){
                console.log(this);
            }
            new test();
        //执行结果：Test{}         这个Test是代表this这个对象的constructor的名字，后面显示的是对象的标准形式
        ```
        例3：
        ```
            "use strict"
            function Test(){
                console.log(this);
            }
            Test.call(123);
        //执行结果  123，因为传什么，this就是什么
        ```
        例4：
        ```
        /*    "use strict"*/
            function Test(){
                console.log(this);
            }
            Test.call(123);
        //执行结果是Number{123}     es3.0在call传进去原始值后就会将其包装为包装类
        ```
        例5：this在全局里指向window
        ```
        console.log(this)
        //执行结果 window
        ```
    + 拒绝重复属性和参数
        例1：在es3.0里重复的参数是不报错的，不管结果，就知道不报错就行
        ```
            function test(name , name){
                console.log(name);
            }
            test(1,2);
        //不会报错 ，不用知道为什么显示2
        ```
        例2：在es5.0里重复的参数是报错的
        ```
            "use strict"
            function test(name , name){
                console.log(name);
            }
            test(1,2);
        ```
        例3：es5.0本质上是拒绝重复属性的，但是它不报错
        ```
            var obj = {
                name : '123',
                name : '234'
            }
        //不报错
        ```




不懂：为什么是0 1 2 3 4每隔一秒输出一个
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title></title>
</head>
<body>
	<script type="text/javascript">
		for(var i = 0; i < 5; i++){
			(function(j){
				setTimeout(function(){
				console.log(j);
			},j * 1000);
			}(i));
		}
	</script>
</body>
</html>
```