##零散知识
+ ES6   ->  ECMA  标准
+ ES7  ES8.....
+ ES5.x
+ 最早的版本:ECMA-262       ->   ES1.0
+ ES2015
+ ES6  ->   2015年6月    ES6.0
+ 每年6月份，发布一个版本
```
	2016年6月    ES6.1	            ES7		ES2016
	2017年6月    ES6.2(async await)	ES8		ES2017

	ESnext '下一代 js'语言
```
+ 任何人都可以向 标准委员会 (TC39), 要求更改语言标准
+ 提案变成标准，经历5个阶段
```
	Stage 0	展示阶段
	Stage 1	征求意见阶段
	Stage 2	草案阶段(准备)
	Stage 3	候选阶段
	Stage 4	定案阶段(标准)
```
+ babel
+ https://github.com/tc39/ecma262
+ react， vue, angularJs， angular
+ chrome,    对新的语法支持，速度还挺猛
+ ES6环境:
```
	webpack3.x
	Traceur
```

##关于定义(声明)变量:
1. 之前:  
```   
        var a=12;
		let a=12;
```
2. 作用域:
    - 全局作用域
    - 函数作用域
3. 
```
let		    相当于之前的 var
const		常量， 定义好了不能改变
用var定义一个全局变量，属于window， let，const不同，不属于window
```
4. let注意:
```
		1. 没有预解析，不存在变量提升
			在代码块内，只要let定义变量，在之前使用，都是报错
			先定义完，在使用
		2. 同一个作用域里， 不能重复定义变量
            例1：报错
                let a = 12;
                let a = 5;
            例2：正确
                let a = 12;
                a = 5;
		3. for循环，for循环里面是父级作用域，里面又一个
```
5. TDZ：暂时性死区
例1：
```
let a = 12;
function fn(){
    alert(a);  //TDZ开始  暂时性死区
    alert(b)
    let a = 5;  //TDZ 结束
    let b = 12;
}
fn();
```
6. 块级作用域:
```
{
	//块级作用域
}
例如：
{{{{let a = 12}}}}
if(){xx}
for(){}
while(){}
```
7. const: 特性和let一样
```
    const定义变量不能修改
	const定义完变量，必须有值，不能后赋值，不能修改
```
例1：
```
        const arr =['apple','banana'];
        arr.push('orange');
        console.log(arr);
		//返回三个元素，因为，数组的地址并没有改变，只是新添了元素
```
例2：使用Object.freeze(对象)
```
const arr = Object.freeze(['apple','banana']);
arr.push('orange');
    //不能扩展，报错
console.log(arr);
```
例3：
```
const config={
    host:
    username:
    password:
    version:
}
```
例4:立即执行函数	
```
	{
		//TODO
	}

	IIFE（立即执行函数）
	(function(){
		//TODO
	})()
```
8. 建议:
```
		以后 就用 let  不要在使用var		
		const http = require('http');
```
##解构赋值:
`非常有用，特别在做数据交互  ajax`
1. 解构数组
例1：
```
let [a,b,c] =[12,5, 6];
let [a,[b,c]] =[12,[5, 6]];
    //注意: 左右两边，结构格式要保持一致
```
2. 解构json
例1：
```
let {name,age, job} = {
    name:'Strive',
    age:18,
    job:'码畜'
};
```
3. 起别名：
```
let {name:n,age:g, job:a} = json;
```
4. 解构时候可以给默认值：
例1：注意null
```
let [a,b, c="默认值"] = ['aaa','bbb'];
let [a, b, c = '暂无...'] = ['aa' , 'b' , null];      //返回null
let [a, b, c = '暂无...'] = ['aa' , 'b' , undefined]; //返回暂无...
```
例2：正常花括号是结构，但是有时候写不好可能被当作块级作用域，解决方法就是在外面再包一层小括号()
```
let a;
({a} = {a:'apple', b:'banana'});
 //这个大括号用不好会被当作块级作用域，所以最好用let {a} = {a:'apple',...},而不是将let a 和{a}分开
console.log(a);
```
例3：交换两个数的位置
```
    let a = 12;
    let b = 5;

    [a,b] = [b,a];

    console.log(a,b);

import {a,b,c} from './mod'
```
解构赋值在函数中的应用1：
```
    function show({a,b='默认'}){
        console.log(a, b);
    }

    show({
        a:1
    })
    //1 undefined
```
解构赋值在函数中的应用2：
```
    function show({a='默认1',b='默认'}){
        console.log(a, b);
    }

    show({})
```
例4：
```
    function show({a='默认1',b='默认'} = {}){
        console.log(a, b);
        //因为函数没有传参数，如果直接将对象传进去会报错，所以我们将函数参数也给个默认值为{},这样就不会报错了
    }
    show()
```
##字符串模板:
1. 字符串模板：
	+ 优点: 可以随意换行
	+ 用法： `  ${变量名字}`
2. 字符串连接
    例：
        ```
        let name ='Strive';
        let age = 18;	
        let str = `这个人叫${name}, 年龄是 ${age}岁`;
        ```
3. 字符串查找:
	+ str.indexOf(要找的东西)   返回索引(位置) ，没找到返回-1
    + str.includes(要找的东西)   返回值  true/false
	+ 判断浏览器:  includes      `http://www.xxx.xx`
4. 字符串是否以谁开头:str.startsWith(检测东西)
	例：检测地址
        ```
            let str2 ='https://www.baidu.com/';
            console.log(str2.startsWith('http'));
        ```
5. 字符串是否以谁结尾:str.endsWith(检测东西)
	例：.png
        ```
            let str = 'aaaa.png';
            let str2 = 'aaaa.html';
            console.log(str2.endsWith('png'));
        ```
6. 重复字符串:str.repeat(次数);
	例：
        ```
        let str = '牧码人';
        console.log(str.repeat(2));
        ```
7. 填充字符串:
	+ str.padStart(整个字符串长度, 填充东西)   往前填充
	+ str.padEnd(整个字符串长度, 填充东西)    往后填充
	+ str.padStart(str.length+padStr.length, padStr)，第一个参数是填充后字符串长度

##函数变化:
1. 函数默认参数
例1：	
```
    function show({x=0,y=0}={}){
	    console.log(x,y);
                  //0 0
	}
	show()
```
例2：
```
    function show({x=0,y=0}){
        console.log(x,y);
                //报错
    }
    show()
```
例3：
```
	function show(a='欢迎',b='mmr'){
        console.log(a,b);
    }
    show('welcome' , ''); //代表传了但是是空字符串，不走默认值
```
2.
例1：函数参数默认已经定义了，不能再使用let，const声明 
```
	function show(a=18){
	    let a = 101;  //错误,报错
	    console.log(a);
	}
	show()
```

##扩展运算符(Rest运算符):  ...

1. 展开数组
```
... :
	[1,2,3,4]  -> ... [1,2,3,4]  ->  1,2,3,4,5
... :
	1,2,3,4,5  -> ...1,2,3,4,5  ->  [1,2,3,4,5]
```
例1：剩余参数: 必须放到最后
```
        function test(a, b, ...c){
            console.log(a, b, c);
        }
        test(1, 2, 3, 4, 5);
```
例2：
```
    let arr =['apple','banana','orange'];
    console.log(arr);
        /*Array(3)['apple' , 'banana' , 'orange']*/
    console.log(...arr);
        /*apple banana orange*/
```
2. 箭头函数:  =>
    + 格式:
```
1. () => return东西
    例：let show = () => 1;
2. () =>{
    	语句
    	return
    }
```
    + 注意:
```
    1. this问题, 定义函数所在的对象，不在是运行时所在的对象
	2. 箭头函数里面没有arguments, 用  ‘...’
	3. 箭头函数不能当构造函数
```
例1：解释注意中的 2
```
let show = (...arg) =>{
    console.log(arg);
}
show(1, 2, 3, 4);
```
例2：
```
    var id = 10;  //用var定义一个全局变量，属于window， let，const不同，不属于window

    let json={
        id:1,
        show:function(){
            setTimeout(function(){
                alert(this.id);//如果全局范围内没定义id或者用let定义id的话，返回undefined，所以这里返回9
            },2000);
            /* setTimeout(()=>{
                alert(this.id);   /*用箭头函数定义，这里的this不再是全局内的this，而是属于这个对象，所以这里的this.id为1*/
            },2000);*/
        }
    };

    json.show();
```
例3：
```
    //ES2017  函数参数最后逗号可以有了
    function show(a,b,c,d,){
        console.log(a,b,c,d);
    }

    show(1 , 2 , 3 , 4 ,);//不报错
```

##数组:ES5里面新增一些东西
普通循环:
```
	1. for
		for(let i=0; i<arr.length; i++)
	2. while
```
注意：
```
    从forEach开始到reduce之前结束，这些数组方法，其实他们可以接收两个参数:
    arr.forEach/map...(循环回调函数, this指向谁(this默认指向window));
```
1. arr.forEach()  //  代替普通for
```
(1)
    arr.forEach(function(val, index, arr){
	    console.log(this, val, index, arr);
            //this默认指向window
	}); 
(2)
    arr.forEach(function(val, index, arr){
        console.log(this, val, index, arr);
            //this指向Number
    }.bind(123));  <==>   }, 123)
```
2. arr.map()  //  非常有用，做数据交互  "映射"

```
(1)
正常情况下，需要配合return，返回是一个新的数组,若是没有return，相当于forEach
(2)
注意：平时只要用map，一定是要有return
(3)
重新整理数据结构:[{title:'aaa'}]   ->  [{t:'aaaa'}]

==================================================
map例：

    	let arr = [
            {title:'aaaaa', read:100, hot:true},
            {title:'bbbb', read:100, hot:true},
            {title:'cccc', read:100, hot:true},
            {title:'dddd', read:100, hot:true}
        ];        
        let newArr = arr.map((item, index, arr)=>{
            let json={}
            json.t = `^_^${item.title}-----`;
            json.r = item.read+200;
            json.hot = item.hot == true && '??°?!!!';
            return json;
        });
        console.log(newArr);
```
3. arr.filter():  过滤，过滤一些不合格“元素”， 如果回调函数返回true，就留下来
例：
```
	 let arr = [
        {title:'aaaaa', read:100, hot:true},
        {title:'bbbb', read:100, hot:false},
        {title:'cccc', read:100, hot:true},
        {title:'dddd', read:100, hot:false}
        ];
        
        let newArr = arr.filter((item, index, arr)=>{
            return item.hot==false;
        });

        console.log(newArr);
```
4. arr.some(): 类似查找,  数组里面某一个元素符合条件，返回true
例1：
```
let arr = [10, 12, 11]
let res = arr.some(function(val, index, arr){
    return val == 10;
})
console.log(res);
```
例2:封装方法
```
let arr = [1, 2, 3, 4];
function findInArray(arr, item){
    return arr.some(function(val, index, arr){
        return val == item;
    })
}
console.log(findInArray(arr, 1))
```
5. arr.every(): 数组里面所有的元素都要符合条件，才返回true
6. arr.reduce()   //从左往右，一般用来求数组的和、阶乘
例：
```
let arr = [2,2,3];

let res = arr.reduce((prev, cur, index, arr) =>{
    return Math.pow(prev,cur);
});

console.log(res);
```
例：
```
let arr = [1,2,3,4,5,6,7,8,9,10];

let res = arr.reduce((prev, cur, index, arr) =>{/*四个参数：前一个存储的结果，当前，当前索引，当前数组*/
    return prev+cur;//最终返回55
});

console.log(res);
```
7. arr.reduceRight()  //从右往左
8. for....of....：
```
    arr.keys()  数组下标
    arr.entries()   数组某一项
```
例：
```
    let arr = ['apple','banana','orange','tomato'];

    for(let val of arr){
        console.log(val);
    }

    for(let index of arr.keys()){
        console.log(index);
    }

    for(let item of arr.entries()){
        console.log(item);
    }

    for(let [key, val] of arr.entries()){
        console.log(key,val);
    }
```
9. Array.from:
```
    作用: 把类数组(获取一组元素、arguments...) 对象转成数组
    个人观点： 具备 length这个东西，就靠谱，就可以调用数组方法
```
10. Array.of():  把一组值，转成数组
例1：
```
let arr = Array.of('apple','banana','orange');
console.log(arr);
```
11. arr.find():  查找，找出第一个符合条件的数组成员，如果没有找到，返回undefined
12. arr.findIndex(): 找的是位置， 没找到返回-1
13. arr.fill(填充的东西, 开始位置, 结束位置);
例：
```
        let arr = new Array(4);
        arr.fill('a', 1, 3);
        console.log(arr);
         //返回[empty, "a", "a", empty]
```
14. arr.indexOf()
15. arr.includes()   ==>字符串中也有类似用法str.includes()

##ES2017新增一个运算符:
1. 幂运算
```
	Math.pow(2,3)  -->8
	2 ** 3         -->8
```

##扩展运算符:复习 ...
```
let arr =[1,2,3];
let arr2 = [...arr];
let arr2 = Array.from(arr);
```


##对象:
1. 几个例子
    + 
        ```
        let json ={
        	a:1,
        	b:2,
        	showA:function(){
        		return this.a;
        	}
        	showB:function(){
        		return this.b;
        	}
        }
        ```
    + 
        ```
        let json ={
        	a,
        	b,
        	showA(){  //个人建议: 一定注意，不要用箭头函数
        	},
        	showB(){
        	}
        }

        ```
    + 
        ```
        new Vuex.Store({
        	state,
        	mutation,
        	types,
        	actions
        });
        ```
    + 
        ```
        new Vue({
        	router,
        	App,
        	vuex
        })
        ```
2. 对象简介语法(相当有用):
    + Object.is():	用来比较两个值是否相等
        例1：
            ```
            Object.is('a','a');
            比较两个东西相等:
                ==
            	===
            ```
        例2：
            ```
            Object.is(NaN, NaN);//true
            Object.is(+0, -0);//false
            ```
    + Object.assign():   用来合并对象
    例1：
        ```
        let 新的对象 = Object.assign(目标对象, source1, srouce2....)
        ```
    例2：
        ```
        function ajax(options){  //用户传
        	let defaults={
        		type:'get',
        		header:
        		data:{}
        		....
        	};

        	let json = Object.assign({}, defaults, options);
        	.....
        }
        ```
    用途:
	   1. 复制一个对象
	   2. 合并参数

## ES2017引入:
1. Object.keys()
2. Object.entries();
3. Object.values();
4. let {keys, values, entries} = Object;
5. 对象身上:   计划在ES2018引入...
    ```
    let json = {a:3, b:4};
    let json2 = {...json};
    ```

##Promise:    承诺，许诺
1. 作用:  解决异步回调问题
2. 传统方式，大部分用回调函数，事件
```
ajax(url,{  //获取token
	ajax(url,()=>{  //获取用户信息
		ajax(url, ()=>{
			//获取用户相关新闻
		})
	})
})
```
3. 语法:
```
	let promise = new Promise(function(resolve, reject){
	    //resolve,   成功调用
	    //reject     失败调用
	});
	promise.then(res=>{
        //then返回的结果还是一个promise对象，可以一直.下去
	}, err=>{
		
	})
```
例1：返回结果success
```
let a = 1;
let promise = new Promise(function(resolve, reject){
    if(a == 1){
        resolve('yes');
    }
    else{
        reject('no');
    }
})
promise.then(res=>{ //这个res就是resolve传进来的参数
    console.log(res);
},err=> {           //这个err就是reject传进来的参数
    console.log(err);
})
```
4. 本人用法:
```
	new Promise().then(res=>{

	}).catch(err=>{
		//等价于上例中promise对于错误的处理
	})
```
5. Promise.resolve('aa') :  
将现有的东西，转成一个promise对象， resolve状态，成功状态,等价于:
```
    let promise = new Promise(resolve =>{
	    resolve('aaa')
	});
    promise.then(res =>{
        console.log(res);
    })
```
6. Promise.reject('aaa'):  
将现有的东西，转成一个promise对象，reject状态，失败状态,等价于:
```
    let promise = new Promise((resolve, reject) =>{
	    reject('aaa')
	});
    promise.then(res =>{
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
```
7. Promise.all([p1, p2, p3]):  
把promise打包，扔到一个数组里面，打包完还是一个promise对象
`注意：必须确保，所有的promise对象，都是resolve状态，都是成功状态`
例1：
```
let a = Promise.resolve('a');
let b = Promise.resolve('b');
let c = Promise.resolve('c');
Promise.all([a, b, c]).then(res =>{
    console.log(res);
})
//返回数组['a' , 'b' , 'c']
```
8. Promise.race([p1, p2, p3]): 只要有一个成功，就返回
例1：
```
let a = Promise.resolve('a');
let b = Promise.reject('b');
let c = Promise.resolve('c');
Promise.race([a, b, c]).then(res =>{
    console.log(res);
}).catch(err=>{
    // console.log(err);
})
//返回a
```
9. 模拟：用户登录  ->  用户信息

## 模块化:
1. js不支持模块化
```
	ruby   require
	python  import
```
2. 在ES6之前，社区制定一套模块规范:
```
	Commonjs		主要服务端  nodeJs    require('http')
	AMD			requireJs, curlJs
	CMD			seaJs
```
3. ES6出来，同意服务端和客户端模块规范:
```
	import {xx} ddd
	
	Math.pow()
	Math.abs()

	import {pow, abs} from 'Math'		我自己瞎想
```
4. 模块化：注意： 需要放到服务器环境
	+ 如何定义模块？
    	```
            export  东西
    		export const a =12;
    		export{
    			a as aaa,
    			b as banana
    		}
            
            export default .....
    	```
    + 如何使用?
    ```
		import
		import './modules/1.js'; 
		import {a as a, banana, c} from './modules/2.js'
		import * as modTwo from './modules/2.js';
        使用模块:
	           <script type="module"></script>
    ```

5. import:  特点
	+ import 可以是相对路径，也可以是绝对路径
	   `import 'https://code.jquery.com/jquery-3.3.1.js';`
	+ import模块只会导入一次，无论你引入多少次
	+ import './modules/1.js';  如果这么用，相当于引入文件
	+ 有提升效果，import会自动提升到顶部，首先执行
	+ 导出去模块内容，如果里面有定时器更改，外面也会改动，不想Common规范缓存
	+ 
        ```
            * import()  类似node里面require， 可以动态引入, 默认import语法不能写到if之类里面
        	返回值，是个promise对象

        	import('./modules/1.js').then(res=>{
        		console.log(res.a+res.b);
        	});
        ```
6. 优点:
	+ 按需加载
	+ 可以写if中
	+ 路径也可以动态

##程序中类

1. ES6
```
面向对象 ，类
属性
方法
函数模拟
```
例：
```
人:  Person
属性: name
展示名字: showName
Person.prototype.showName
```
2. ES5之前：
```
function Person(){
	this.name='aaa';
}
Person.prototype.showName=function(){}
```
3. ES6中变形:
例1：
```
class Person{
	constructor(){ //构造方法(函数), 调用new，自动执行
		this.name = 'aaa';
	} //一定注意这里没有逗号
	showName(){//注意这里没有function showName这样的形式

	}
}
```
例2：
```
const Person = class{}
<===>
class Person{}
```
例3：
```
let aa = "abc";
class Person{
    contructor(name , age){
        this.name = name;
        this.age = age;
    }
    [aa](){
        console.log('aaaaaa');
    }
}
let person = new Person('name', 17);
person[aa]();
```
例4：
```
let aaa='aaa';
let bbb='ddd';
let json={
    [aaa+bbb]:'welcome 51mmr.net'
}
```
4. 注意： 
    + ES6里面class没有提升功能，在ES5，用函数模拟可以，默认函数提升
    + ES6里面this 比之前轻松多了
例1：
```
    class Person{
        constructor(){
            this.name = 'Strive';

            this.showName = this.showName.bind(this); //矫正this
        }
        showName(){
            console.log('this:', this);
            return `名字为: ${this.name}`;
        }
    }

    let p1 = new Person();

    let {showName } = p1;

    console.log(showName());
```
5. 矫正this:
    + fn.call(this指向谁, args1, args2....)
    + fn.apply(this指向谁, [args1, args2....])
    + fn.bind()

6. class里面取值函数(getter), 存值函数(setter)
例1：
```
   class Person{
        constructor(){
            
        }
        get aaa(){
            return `aaa的属性`;
        }
        set aaa(val){
            console.log(`设置aaa属性，值为:${val}`);
        }
    }

    let p1 = new Person();

    p1.aaa='123';

    console.log(p1.aaa);
```

7. 静态方法: 就是类身上方法,父类.aaa();
例1：
```
    class Person{
        constructor(){

        }
        static aaa(){
            return '静态方法';
        }
        show(){
            return '类';
        }
    }
    let p = new Person();
    console.log(p.show);
    console.log(Person.aaa());
```
8. 父类Person,子类Student,继承
    + 之前:
例：
```
    //父类
    function Person(name){
        this.name = name;
    }
    Person.prototype.showName = function(){
        return `名字是: ${this.name}`;
    };

    //子类
    function Student(name,skill){
        Person.call(this,name); //继承属性

        this.skill = skill;
    }
    Student.prototype = new Person(); //继承方法
    

    //调用

    let stu1 = new Student('Strive','逃学');
    console.log(stu1.showName());
```
    + 现在: extends
```
class Student extends Person{
        
         }
```
例1：
```
    //父类
    class Person{
        constructor(name){
            this.name = name;
        }
        showName(){
            console.log('父类showName');
            return `名字为: ${this.name}`;
        }
    }

    //子类
    class Student extends Person{
        constructor(name,skill){
            super(name);
            this.skill = skill;
        }
        showName(){
            super.showName(); //父级的方法执行

            //TODO 做子级事情
            console.log('子类里的showName');
        }
        showSkill(){
            return  `哥们儿的技能为: ${this.skill}`;
        }
    }
    

    //调用

    let stu1 = new Student('Strive','逃学');
    console.log(stu1.showName());
```
例2：拖拽：两个小方块，第一个能拖拽，第二个继承第一个能拖拽的属性，并且移动位置不能超过屏幕
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>51牧码人——http://www.51mmr.net 专注[前端+Java],人才培养</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
    .box{
        width:100px;
        height:100px;
        background: red;
        position: absolute;
        top:0;
    }
    .left{
        left:0;
    }
    .right{
        right:0;
    }
</style>
<script>
</script>
</head>
<body>
<div id="div1" class="box left">DIV1</div>
<div id="div2" class="box right">DIV2</div>

<script>
    //普通拖拽 -- 父类
    class Drag{
        constructor(id){
            this.oDiv = document.querySelector(id);
            this.disX = 0; 
            this.disY = 0;
            this.init();
        }
        init(){
            this.oDiv.onmousedown = function(ev){
                this.disX = ev.clientX - this.oDiv.offsetLeft;
                this.disY = ev.clientY - this.oDiv.offsetTop;

                document.onmousemove = this.fnMove.bind(this);
                document.onmouseup = this.fnUp.bind(this);

                return false;
            }.bind(this);
        }
        fnMove(ev){
            this.oDiv.style.left = ev.clientX - this.disX+'px';
            this.oDiv.style.top = ev.clientY - this.disY+'px';
        }
        fnUp(){
            document.onmousemove=null;
            document.onmouseup=null;
        }
    }

    //子类—— 限制范围
    class LimitDrag extends Drag{
        fnMove(ev){
            super.fnMove(ev);

            //限制范围
            if(this.oDiv.offsetLeft<=0){
                this.oDiv.style.left =0;
            }
        }
    }

    //调用
    new Drag('#div1');
    new LimitDrag('#div2');
</script>
</body>
</html>

```

##symbol:使用情况一般
1. 用typeof检测出来数据类型:
```
    symbol
    number
    string
    boolean
    Object
    undefined
    function
```
2. 定义：let syml = Symbol('aaa');
3. 注意:
    + Symbol 不能new
    + Symbol() 返回是一个唯一值:坊间传说, 做一个key，定义一些唯一或者私有一些东
    + symbol是一个单独数据类型，就叫 symbol, 基本类型(不能再拆分了)
    + 如果symbol作为key，用for in循环，出不来
例：
```
let symbol = Symbol('aaa');
let json = {
    a : 'a',
    b : 'b',
    [symbol] : 'symbol',
}
for(let item in json){
    console.log(item);
}
```

##generator函数(生成器)
1. 箭头函数: () =>{}
2. generator函数,解决异步深度嵌套的问题， async
3. 语法:
```
function * show(){
	yield
} 
function* show(){
}
function *show(){
}
```
4. 定义：
```
	function * gen(){
	    yield 'welcome';
	    yield 'to';
	    return '牧码人';
	}
    let g1 = gen();         // 得到的结果是一个对象，g1是一个对象
```
5. 调用:手动调用，麻烦:
```
	let g1 = gen();
	g1.next();  // {value:'welcome', done:false}
	g1.next();  // {value:'to', done:false}
	g1.next();  // {value:'牧码人', done:true}
```
6. for .. of  自动遍历 generator
```
    function * gen(){
        yield 'welcome';
        yield 'to';
        return 'lfy';
    }
    let g = gen();
    for(let item of g){
        console.log(item);
    }
    //注意：return的东西，它不会遍历
```
7. generator不仅可以配合 for ... of ... , 还可以:
    + 解构赋值：     let [a, ...b] = gen();
    + 扩展运算符：  '...' ===> console.log(...gen());
    + Array.from()： console.log(Array.from(gen()));
    + generator结合 axios数据请求：
例：
```
    //https://api.github.com/users/itstrive

    function * gen(){
        let val = yield 'aaa';
        yield axios.get(`https://api.github.com/users/${val}`);
    }

    let g1 = gen();

    let username = g1.next().value;         
        //第一遍返回是aaa,
        //g1.next().value  得到的是一个promise对象
    //console.log(g1.next(username).value);

    g1.next(username).value.then(res=>{ 
            //将第一次返回结果的值传进去，作为gen中val的值，然后成功执行回调函数
        console.log(res.data);
    });
```

##关于异步
1. 
异步: 不连续，上一个操作没有执行完，下一个操作照样开始
同步: 连续执行，上一个操作没有执行完，下一个没法开始
2. 解决方案：
    + 回调函数
    + 事件监听
    + 发布/订阅
    + Promise对象
    + co.... 
    + ES2017,规定 async

##读取文件  fs.readFile
```
const fs = require('fs');

//简单封装  fs封装成一个promise
const readFile = function (fileName){
return new Promise((resolve, reject) =>{
    fs.readFile(fileName, (err, data) =>{
        if(err) reject(err);
        resolve(data);
    });
});
}
```
1. promise
```
1.promise

readFile('data/a.txt').then(res=>{
    console.log(res.toString());
    return readFile('data/b.txt');
}).then(res=>{
    console.log(res.toString());
    return readFile('data/c.txt');
}).then(res=>{
    console.log(res.toString());
})
```
2. genrator
```
2.genrator

function * gen(){
    yield readFile('data/a.txt');
    yield readFile('data/b.txt');
    yield readFile('data/c.txt');
}
let g1 = gen();

g1.next().value.then(res=>{
    console.log(res.toString());
    return g1.next().value;
}).then(res=>{
    console.log(res.toString());
    return g1.next().value;
}).then(res=>{
    console.log(res.toString());
})
```
3. async
```
3.async

async function fn(){
    let f1 = await readFile('data/a.txt');
    console.log(f1.toString());
    let f2 = await readFile('data/b.txt');
    console.log(f2.toString());
    let f3 = await readFile('data/c.txt');
    console.log(f3.toString());
}
fn();
```

##aysnc
1. 语法
```
async function fn(){  //表示异步，这个函数里面有异步任务
let result = await  xxx	//表示后面结果需要等待

}
```
2. async特点:
    + await只能放到async函数中
    + 相比genrator语义化更强
    + await后面可以是promise对象，也可以数字、字符串、布尔
    + async函数返回是一个promise对象
    + 只要await语句后面Promise状态变成 reject, 那么整个async函数会中断执行
例1：async函数返回是一个promise对象
```
    async function fn(){
        throw new Error('Error出错了');
    }

    fn().then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })
```
例2：只要await语句后面Promise状态变成 reject, 那么整个async函数会中断执行
```
    async function fn(){
        await Promise.reject('出现问题了');     
        let a = await Promise.resolve('success');
        console.log(a);
    }

    fn().then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })
问题：
为什么await Promise.reject('出现问题了'); 在then中直接能打出结果'出现问题了'
而await Promise.resolve('success');      结果为undefined

```
3. 如何解决async函数中抛出错误，影响后续代码:
    +  try{ }catch(e){}
例：
```
async function fn(){
    try{
        await Promise.reject('wrong');
    }catch(e){}
    let a = await Promise.resolve('right');
    console.log(a);
}
fn().then(res=>{
    console.log(res);
},err=>{
    console.log(err);
})
```
    + promise本身catch
例：
```
await Promise.reject('出现问题了').catch(err=>{
    console.log(err);
});

let a = await Promise.resolve('success');
console.log(a);
```
4. 个人建议大家:
```
try{
	let f1 = await readFile('data/a.txt');
	let f3 = await readFile('data/c.txt');
	let f2 = await readFile('data/b.txt');
}catch(e){}
```
例：当这三个没什么必然关系的时候
```
//async
async function fn(){
    let [a,b,c] = await Promise.all([   //Promise.all([])
        readFile('data/a.txt'),
        readFile('data/b.txt'),
        readFile('data/c.txt'),
    ]);
    console.log(a.toString());
    console.log(b.toString());
    console.log(c.toString());
}
fn();
```

## 数据结构
1. 数组
2. json， 二叉树....

## Set
1. set数据结构:类似数组，但是里面不能有重复值
```
let arr  = ['a','b','a'];

let arr = new Array();
```
2. set用法:
```
let setArr = new Set(['a','b']);

setArr.add('a');   往setArr里面添加一项
setArr.delete('b');	删除一项
setArr.has('a')	判断setArr里面有没有此值
setArr.size	个数

setArr.clear();	清空
```

3. for...of.. 循环:
	+ for(let item of setArr){  //默认是values()
	            console.log(item);
	        }
	+ for(let item of setArr.keys()){console.log(item);}
	+ for(let item of setArr.values()){}
	+ for(let [k,v] of setArr.entries()){}
    + 
    ```
    setArr.forEach((value,index) =>{
	            console.log(value, index);
	        });

	let setArr = new Set().add('a').add('b').add('c');
    ```
4. set数据结构变成数组:[...set]
例：数组去重:
```
let arr = [1,2,3,4,5,6,7,6,5,4,3,2,1,2,3,4,4];
let newArr = [...new Set(arr)];
console.log(newArr);
```

想让set使用数组的，map循环和filter:



let arr = [{},{}];
--------------------------------------------------------------
new Set([]);	存储数组， 这种写法对

new WeakSet({})	存储json，这种写法不靠谱

WeakSet没有size，也没有clear()

有， add(), has(), delete()

确认，初始往里面添加东西，是不行的。最好用add添加
例：对
let json2 ={
        a:'apple',
        b:2
    };

    set.add(json);
例：错
let set = new Set({a:1,b:2});
let set = new WeakSet({a:1,b:2});
例：

--------------------------------------------------------------
总结: new Set()
--------------------------------------------------------------

let json ={
p1:1,
b:2
};

--------------------------------------------------------------
map:
类似 json, 但是json的键(key)只能是字符串

map的key可以是任意类型

使用:
let map = new Map();

map.set(key,value);    设置一个值

map.get(key)	获取一个值

map.delete(key)	删除一项

map.has(key)	判断有没有

map.clear()	清空

循环:
for(let [key,value] of map){}

for(let key of map.keys()){}

for(let value of map.values()){}

for(let [k,v] of map.entries()){}

map.forEach((value, key) =>{
    console.log(value, key);
})

WeakMap():  key只能是对象

------------------------------------------------------------
总结：
Set   里面是数组，不重复，没有key，没有get方法
Map 对json功能增强，key可以是任意类型值

------------------------------------------------------------


============================================
============================================
数字(数值)变化:
二进制:  (Binary)
	let a = 0b010101;
八进制: (Octal)
	let a = 0o666;

十六进制:
	#ccc
-------------------------------------------
Number()、parseInt()、 parseFloat()
-------------------------------------------

Number.isNaN(NaN)	-> true

Number.isFinite(a)   判断是不是数字	√

Number.isInteger(a)  判断数字是不是整数	√

-------------------------------------------
Number.parseInt();
Number.parseFloat();
-------------------------------------------
安全整数:
2**3

安全整数:    -(2^53-1) 到 (2^53-1),   包含-(2^53-1) 和(2^53-1)

Number.isSafeInteger(a);

Number.MAX_SAFE_INTEGER	最大安全整数
Number.MIN_SAFE_INTEGER	最小安全整数

--------------------------------------------------------------------------------------
Math:
Math.abs()
Math.sqrt()
Math.sin()

Math.trunc()	截取，只保留整数部分
	Math.trunc(4.5)  ->  4
	Math.trunc(4.9)  ->  4

Math.sign(-5)   判断一个数到底是正数、负数、0
	Math.sign(-5)  ->  -1
	Math.sign(5)  -> 1
	Math.sign(0)	->  0
	Math.sign(-0)	->  -0
	其他值，返回 NaN

Math.cbrt()	计算一个数立方根

	Math.cbrt(27)  ->  3

.......
-------------------------------------------------------
ES2018(ES9):
1. 命名捕获
	语法:  (?<名字>)

	let str = '2018-03-20';
	let reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
	let {year, month ,day} = str.match(reg).groups;
	console.log(year, month, day);
反向引用:
	\1  \2     $1  $2
反向引用命名捕获:
	语法:  \k<名字>

	let reg = /^(?<Strive>welcome)-\k<Strive>$/;

	匹配: ‘welcome-welcome’

	-------------------------------------------------

	let reg = /^(?<Strive>welcome)-\k<Strive>-\1$/;

	匹配: 'welcome-welcome-welcome'

替换:
	$<名字>

	let reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
	str = str.replace(reg,'$<day>/$<month>/$<year>');
	console.log(str);

	----------------------------------------
	str = str.replace(reg, (...args)=>{
		//console.log(args)
		let {year, month, day} = args[args.length-1];

		return `${day}/${month}/${year}`;
	});

	console.log(str);

2.   dotAll 模式	s

	之前 '.' 在正则里表示匹配任意东西， 但是不包括 \n 

   let reg = /\w+/gims;//g:多次匹配，i:忽略大小写， m:多行模式  s:全局模式

3. 标签函数
	function fn(){

	}

	fn()  //这样调用就是普通函数

	fn`aaa`  //标签函数使用

	-----------------------------------
	function fn(args){
		return args[0].toUpperCase();
	}

	console.log(fn`welcome`);


ES2018(ES9)

##proxy:  代理
1. 扩展(增强)对象、方法(函数)一些功能
比如: 
```
	Vue

	Vue.config.keyCodes.enter=65
```
2. Proxy作用: 比如vue中拦截，预警、上报、扩展功能、统计、增强对象等等
3. proxy是设计模式一种，  代理模式
```
let obj ={
name:'Strive'
};
//您访问了name
obj.name  // Strive
```
4. 语法:
```
new Proxy(target, handler);
let obj = new Proxy(被代理的对象,对代理的对象做什么操作)

其中：handler是个json
{
	set(){},  //设置的时候干的事情
	get(){},  //获取干的事情
	deleteProperty(){},  //删除
	has(){}  //问你有没有这个东西  ‘xxx’ in obj
	apply()  //调用函数处理
	.....
}
```
5. get的使用
例1：
```
    let obj = {
        name:'Strive'
    };

    let newObj = new Proxy(obj, {
        get(target, property){
            return target[property];
        }
    });
    //newobj调用的是谁，get中的参数：property就是谁，target就是代理的那个obj对象
    console.log(newObj.name);       //自动执行get方法
    console.log(newObj.age);
```
例2：实现一个，之前访问一个对象身上属性，默认不存在的时候正常是给了undefined，希望如果不存在错误(警告)信息：
```
        get(target, property){
            if(property in target){
                return target[property];
            }else{
                //throw new ReferenceError(`${property}属性不在此对象上`);
                console.warn(`${property}属性不在此对象上`);
                return '^_^';
            }
        }
```
例3：实现DOM.div()，DOM.a()，DOM.ul()
```
   const DOM = new Proxy({},{
        get(target, property){
            //console.log(target, property);
            //property DOM.xxx 里面的xxx
            return function(attr={}, ...children){
                //console.log(attr, children);
                const el = document.createElement(property);

                //添加属性
                for(let key of Object.keys(attr)){
                    el.setAttribute(key, attr[key]);
                }
                //添加子元素
                for(let child of children){
                    if(typeof child == 'string'){
                        child = document.createTextNode(child);
                    }
                    el.appendChild(child);
                }
                return el;
            }
        }
    });

    let oDiv = DOM.div(
        {id:'div1',class:'aaa'},'我是div','呵呵呵',
        DOM.a({href:'http://www.51mmr.net'}, '访问官网'),
        DOM.ul({},
            DOM.li({},'1111'),
            DOM.li({},'2222'),
            DOM.li({},'3333'),
            DOM.li({},'4444')
        )
    );

    window.onload=function(){
        document.body.appendChild(oDiv);
    };
```
6. set(), 设置，拦截:
例：设置一个年龄，保证是整数，且范围不能超过200
```
    let obj =new Proxy({},{
        set(target, prop, value){
            if(prop == 'age'){
                if(!Number.isInteger(value)){
                    throw new TypeError(`年龄必须为整数`);
                }
                if(value>200){
                    throw new RangeError('年龄超标了，必须小于200岁');
                }
            }
            target[prop]=value; 
        }
    });

    obj.a=123;
    obj.name = 'Strive';
    
    console.log(obj);

    obj.age = 201;
```
7. deleteProperty(): 删除，拦截:
例：
```
    let json = {
        a:1,
        b:2
    };

    let newJson = new Proxy(json, {
        deleteProperty(target, property){
            console.log(`您要删除${property}属性`);
            //TODO
            delete target[property];
        }
    });

    delete newJson.a;

    console.log(newJson);

```
8. has(): 检测有没有
例：
```
        let json = {
            a:1,
            b:2
        };

        let newJson = new Proxy(json, {
            has(target, property){
                console.log(`判断是否存在调用has方法`);
                //TODO
                return property in target;
            }
        });

        console.log('a' in newJson);

        //delete newJson.a;

        console.log(newJson);
```
9. apply()  :拦截方法
例：
```
        function sum(a,b){
            return a+b;
        }

        let newSum = new Proxy(sum, {
            apply(target, context, args){
                //console.log(target, context, args);
                //console.log(...arguments);
                return Reflect.apply(...arguments)**2;
            }
        });

        console.log(newSum(2,3))
```

##Reflect: 反射
1. 
```
Reflect.apply(调用的函数，this指向，参数数组);
类似fn.apply()
```
例：
```
    function show(...args){
        console.log(this);
        console.log(args);
    }

    //show(1,2,3,4);

    //show.call('abc', 1,2,3,4);
    //show.apply('abcd',[1,2,3,4]);

    Reflect.apply(show, 'aaaa', [1,2,3,4]);

```
2. Object.xxx  语言内部方法，例如：Object.defineProperty
3. Object.xxx  语言内部方法，放到Reflect对象身上，通过Reflect对象身上直接拿到语言内部东西
例：
```
'assign' in Object    ->   Reflect.has(Object, 'assign')

 delete json.a	      ->   Reflect.deleteProperty(json, 'a');
```
