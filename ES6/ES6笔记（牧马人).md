##��ɢ֪ʶ
+ ES6   ->  ECMA  ��׼
+ ES7  ES8.....
+ ES5.x
+ ����İ汾:ECMA-262       ->   ES1.0
+ ES2015
+ ES6  ->   2015��6��    ES6.0
+ ÿ��6�·ݣ�����һ���汾
```
	2016��6��    ES6.1	            ES7		ES2016
	2017��6��    ES6.2(async await)	ES8		ES2017

	ESnext '��һ�� js'����
```
+ �κ��˶������� ��׼ίԱ�� (TC39), Ҫ��������Ա�׼
+ �᰸��ɱ�׼������5���׶�
```
	Stage 0	չʾ�׶�
	Stage 1	��������׶�
	Stage 2	�ݰ��׶�(׼��)
	Stage 3	��ѡ�׶�
	Stage 4	�����׶�(��׼)
```
+ babel
+ https://github.com/tc39/ecma262
+ react�� vue, angularJs�� angular
+ chrome,    ���µ��﷨֧�֣��ٶȻ�ͦ��
+ ES6����:
```
	webpack3.x
	Traceur
```

##���ڶ���(����)����:
1. ֮ǰ:  
```   
        var a=12;
		let a=12;
```
2. ������:
    - ȫ��������
    - ����������
3. 
```
let		    �൱��֮ǰ�� var
const		������ ������˲��ܸı�
��var����һ��ȫ�ֱ���������window�� let��const��ͬ��������window
```
4. letע��:
```
		1. û��Ԥ�����������ڱ�������
			�ڴ�����ڣ�ֻҪlet�����������֮ǰʹ�ã����Ǳ���
			�ȶ����꣬��ʹ��
		2. ͬһ��������� �����ظ��������
            ��1������
                let a = 12;
                let a = 5;
            ��2����ȷ
                let a = 12;
                a = 5;
		3. forѭ����forѭ�������Ǹ���������������һ��
```
5. TDZ����ʱ������
��1��
```
let a = 12;
function fn(){
    alert(a);  //TDZ��ʼ  ��ʱ������
    alert(b)
    let a = 5;  //TDZ ����
    let b = 12;
}
fn();
```
6. �鼶������:
```
{
	//�鼶������
}
���磺
{{{{let a = 12}}}}
if(){xx}
for(){}
while(){}
```
7. const: ���Ժ�letһ��
```
    const������������޸�
	const�����������������ֵ�����ܺ�ֵ�������޸�
```
��1��
```
        const arr =['apple','banana'];
        arr.push('orange');
        console.log(arr);
		//��������Ԫ�أ���Ϊ������ĵ�ַ��û�иı䣬ֻ��������Ԫ��
```
��2��ʹ��Object.freeze(����)
```
const arr = Object.freeze(['apple','banana']);
arr.push('orange');
    //������չ������
console.log(arr);
```
��3��
```
const config={
    host:
    username:
    password:
    version:
}
```
��4:����ִ�к���	
```
	{
		//TODO
	}

	IIFE������ִ�к�����
	(function(){
		//TODO
	})()
```
8. ����:
```
		�Ժ� ���� let  ��Ҫ��ʹ��var		
		const http = require('http');
```
##�⹹��ֵ:
`�ǳ����ã��ر��������ݽ���  ajax`
1. �⹹����
��1��
```
let [a,b,c] =[12,5, 6];
let [a,[b,c]] =[12,[5, 6]];
    //ע��: �������ߣ��ṹ��ʽҪ����һ��
```
2. �⹹json
��1��
```
let {name,age, job} = {
    name:'Strive',
    age:18,
    job:'����'
};
```
3. �������
```
let {name:n,age:g, job:a} = json;
```
4. �⹹ʱ����Ը�Ĭ��ֵ��
��1��ע��null
```
let [a,b, c="Ĭ��ֵ"] = ['aaa','bbb'];
let [a, b, c = '����...'] = ['aa' , 'b' , null];      //����null
let [a, b, c = '����...'] = ['aa' , 'b' , undefined]; //��������...
```
��2�������������ǽṹ��������ʱ��д���ÿ��ܱ������鼶�����򣬽�����������������ٰ�һ��С����()
```
let a;
({a} = {a:'apple', b:'banana'});
 //����������ò��ûᱻ�����鼶���������������let {a} = {a:'apple',...},�����ǽ�let a ��{a}�ֿ�
console.log(a);
```
��3��������������λ��
```
    let a = 12;
    let b = 5;

    [a,b] = [b,a];

    console.log(a,b);

import {a,b,c} from './mod'
```
�⹹��ֵ�ں����е�Ӧ��1��
```
    function show({a,b='Ĭ��'}){
        console.log(a, b);
    }

    show({
        a:1
    })
    //1 undefined
```
�⹹��ֵ�ں����е�Ӧ��2��
```
    function show({a='Ĭ��1',b='Ĭ��'}){
        console.log(a, b);
    }

    show({})
```
��4��
```
    function show({a='Ĭ��1',b='Ĭ��'} = {}){
        console.log(a, b);
        //��Ϊ����û�д����������ֱ�ӽ����󴫽�ȥ�ᱨ���������ǽ���������Ҳ����Ĭ��ֵΪ{},�����Ͳ��ᱨ����
    }
    show()
```
##�ַ���ģ��:
1. �ַ���ģ�壺
	+ �ŵ�: �������⻻��
	+ �÷��� `  ${��������}`
2. �ַ�������
    ����
        ```
        let name ='Strive';
        let age = 18;	
        let str = `����˽�${name}, ������ ${age}��`;
        ```
3. �ַ�������:
	+ str.indexOf(Ҫ�ҵĶ���)   ��������(λ��) ��û�ҵ�����-1
    + str.includes(Ҫ�ҵĶ���)   ����ֵ  true/false
	+ �ж������:  includes      `http://www.xxx.xx`
4. �ַ����Ƿ���˭��ͷ:str.startsWith(��ⶫ��)
	��������ַ
        ```
            let str2 ='https://www.baidu.com/';
            console.log(str2.startsWith('http'));
        ```
5. �ַ����Ƿ���˭��β:str.endsWith(��ⶫ��)
	����.png
        ```
            let str = 'aaaa.png';
            let str2 = 'aaaa.html';
            console.log(str2.endsWith('png'));
        ```
6. �ظ��ַ���:str.repeat(����);
	����
        ```
        let str = '������';
        console.log(str.repeat(2));
        ```
7. ����ַ���:
	+ str.padStart(�����ַ�������, ��䶫��)   ��ǰ���
	+ str.padEnd(�����ַ�������, ��䶫��)    �������
	+ str.padStart(str.length+padStr.length, padStr)����һ�������������ַ�������

##�����仯:
1. ����Ĭ�ϲ���
��1��	
```
    function show({x=0,y=0}={}){
	    console.log(x,y);
                  //0 0
	}
	show()
```
��2��
```
    function show({x=0,y=0}){
        console.log(x,y);
                //����
    }
    show()
```
��3��
```
	function show(a='��ӭ',b='mmr'){
        console.log(a,b);
    }
    show('welcome' , ''); //�����˵����ǿ��ַ���������Ĭ��ֵ
```
2.
��1����������Ĭ���Ѿ������ˣ�������ʹ��let��const���� 
```
	function show(a=18){
	    let a = 101;  //����,����
	    console.log(a);
	}
	show()
```

##��չ�����(Rest�����):  ...

1. չ������
```
... :
	[1,2,3,4]  -> ... [1,2,3,4]  ->  1,2,3,4,5
... :
	1,2,3,4,5  -> ...1,2,3,4,5  ->  [1,2,3,4,5]
```
��1��ʣ�����: ����ŵ����
```
        function test(a, b, ...c){
            console.log(a, b, c);
        }
        test(1, 2, 3, 4, 5);
```
��2��
```
    let arr =['apple','banana','orange'];
    console.log(arr);
        /*Array(3)['apple' , 'banana' , 'orange']*/
    console.log(...arr);
        /*apple banana orange*/
```
2. ��ͷ����:  =>
    + ��ʽ:
```
1. () => return����
    ����let show = () => 1;
2. () =>{
    	���
    	return
    }
```
    + ע��:
```
    1. this����, ���庯�����ڵĶ��󣬲���������ʱ���ڵĶ���
	2. ��ͷ��������û��arguments, ��  ��...��
	3. ��ͷ�������ܵ����캯��
```
��1������ע���е� 2
```
let show = (...arg) =>{
    console.log(arg);
}
show(1, 2, 3, 4);
```
��2��
```
    var id = 10;  //��var����һ��ȫ�ֱ���������window�� let��const��ͬ��������window

    let json={
        id:1,
        show:function(){
            setTimeout(function(){
                alert(this.id);//���ȫ�ַ�Χ��û����id������let����id�Ļ�������undefined���������ﷵ��9
            },2000);
            /* setTimeout(()=>{
                alert(this.id);   /*�ü�ͷ�������壬�����this������ȫ���ڵ�this��������������������������this.idΪ1*/
            },2000);*/
        }
    };

    json.show();
```
��3��
```
    //ES2017  ����������󶺺ſ�������
    function show(a,b,c,d,){
        console.log(a,b,c,d);
    }

    show(1 , 2 , 3 , 4 ,);//������
```

##����:ES5��������һЩ����
��ͨѭ��:
```
	1. for
		for(let i=0; i<arr.length; i++)
	2. while
```
ע�⣺
```
    ��forEach��ʼ��reduce֮ǰ��������Щ���鷽������ʵ���ǿ��Խ�����������:
    arr.forEach/map...(ѭ���ص�����, thisָ��˭(thisĬ��ָ��window));
```
1. arr.forEach()  //  ������ͨfor
```
(1)
    arr.forEach(function(val, index, arr){
	    console.log(this, val, index, arr);
            //thisĬ��ָ��window
	}); 
(2)
    arr.forEach(function(val, index, arr){
        console.log(this, val, index, arr);
            //thisָ��Number
    }.bind(123));  <==>   }, 123)
```
2. arr.map()  //  �ǳ����ã������ݽ���  "ӳ��"

```
(1)
��������£���Ҫ���return��������һ���µ�����,����û��return���൱��forEach
(2)
ע�⣺ƽʱֻҪ��map��һ����Ҫ��return
(3)
�����������ݽṹ:[{title:'aaa'}]   ->  [{t:'aaaa'}]

==================================================
map����

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
            json.hot = item.hot == true && '??��?!!!';
            return json;
        });
        console.log(newArr);
```
3. arr.filter():  ���ˣ�����һЩ���ϸ�Ԫ�ء��� ����ص���������true����������
����
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
4. arr.some(): ���Ʋ���,  ��������ĳһ��Ԫ�ط�������������true
��1��
```
let arr = [10, 12, 11]
let res = arr.some(function(val, index, arr){
    return val == 10;
})
console.log(res);
```
��2:��װ����
```
let arr = [1, 2, 3, 4];
function findInArray(arr, item){
    return arr.some(function(val, index, arr){
        return val == item;
    })
}
console.log(findInArray(arr, 1))
```
5. arr.every(): �����������е�Ԫ�ض�Ҫ�����������ŷ���true
6. arr.reduce()   //�������ң�һ������������ĺ͡��׳�
����
```
let arr = [2,2,3];

let res = arr.reduce((prev, cur, index, arr) =>{
    return Math.pow(prev,cur);
});

console.log(res);
```
����
```
let arr = [1,2,3,4,5,6,7,8,9,10];

let res = arr.reduce((prev, cur, index, arr) =>{/*�ĸ�������ǰһ���洢�Ľ������ǰ����ǰ��������ǰ����*/
    return prev+cur;//���շ���55
});

console.log(res);
```
7. arr.reduceRight()  //��������
8. for....of....��
```
    arr.keys()  �����±�
    arr.entries()   ����ĳһ��
```
����
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
    ����: ��������(��ȡһ��Ԫ�ء�arguments...) ����ת������
    ���˹۵㣺 �߱� length����������Ϳ��ף��Ϳ��Ե������鷽��
```
10. Array.of():  ��һ��ֵ��ת������
��1��
```
let arr = Array.of('apple','banana','orange');
console.log(arr);
```
11. arr.find():  ���ң��ҳ���һ�����������������Ա�����û���ҵ�������undefined
12. arr.findIndex(): �ҵ���λ�ã� û�ҵ�����-1
13. arr.fill(���Ķ���, ��ʼλ��, ����λ��);
����
```
        let arr = new Array(4);
        arr.fill('a', 1, 3);
        console.log(arr);
         //����[empty, "a", "a", empty]
```
14. arr.indexOf()
15. arr.includes()   ==>�ַ�����Ҳ�������÷�str.includes()

##ES2017����һ�������:
1. ������
```
	Math.pow(2,3)  -->8
	2 ** 3         -->8
```

##��չ�����:��ϰ ...
```
let arr =[1,2,3];
let arr2 = [...arr];
let arr2 = Array.from(arr);
```


##����:
1. ��������
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
        	showA(){  //���˽���: һ��ע�⣬��Ҫ�ü�ͷ����
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
2. �������﷨(�൱����):
    + Object.is():	�����Ƚ�����ֵ�Ƿ����
        ��1��
            ```
            Object.is('a','a');
            �Ƚ������������:
                ==
            	===
            ```
        ��2��
            ```
            Object.is(NaN, NaN);//true
            Object.is(+0, -0);//false
            ```
    + Object.assign():   �����ϲ�����
    ��1��
        ```
        let �µĶ��� = Object.assign(Ŀ�����, source1, srouce2....)
        ```
    ��2��
        ```
        function ajax(options){  //�û���
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
    ��;:
	   1. ����һ������
	   2. �ϲ�����

## ES2017����:
1. Object.keys()
2. Object.entries();
3. Object.values();
4. let {keys, values, entries} = Object;
5. ��������:   �ƻ���ES2018����...
    ```
    let json = {a:3, b:4};
    let json2 = {...json};
    ```

##Promise:    ��ŵ����ŵ
1. ����:  ����첽�ص�����
2. ��ͳ��ʽ���󲿷��ûص��������¼�
```
ajax(url,{  //��ȡtoken
	ajax(url,()=>{  //��ȡ�û���Ϣ
		ajax(url, ()=>{
			//��ȡ�û��������
		})
	})
})
```
3. �﷨:
```
	let promise = new Promise(function(resolve, reject){
	    //resolve,   �ɹ�����
	    //reject     ʧ�ܵ���
	});
	promise.then(res=>{
        //then���صĽ������һ��promise���󣬿���һֱ.��ȥ
	}, err=>{
		
	})
```
��1�����ؽ��success
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
promise.then(res=>{ //���res����resolve�������Ĳ���
    console.log(res);
},err=> {           //���err����reject�������Ĳ���
    console.log(err);
})
```
4. �����÷�:
```
	new Promise().then(res=>{

	}).catch(err=>{
		//�ȼ���������promise���ڴ���Ĵ���
	})
```
5. Promise.resolve('aa') :  
�����еĶ�����ת��һ��promise���� resolve״̬���ɹ�״̬,�ȼ���:
```
    let promise = new Promise(resolve =>{
	    resolve('aaa')
	});
    promise.then(res =>{
        console.log(res);
    })
```
6. Promise.reject('aaa'):  
�����еĶ�����ת��һ��promise����reject״̬��ʧ��״̬,�ȼ���:
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
��promise������ӵ�һ���������棬����껹��һ��promise����
`ע�⣺����ȷ�������е�promise���󣬶���resolve״̬�����ǳɹ�״̬`
��1��
```
let a = Promise.resolve('a');
let b = Promise.resolve('b');
let c = Promise.resolve('c');
Promise.all([a, b, c]).then(res =>{
    console.log(res);
})
//��������['a' , 'b' , 'c']
```
8. Promise.race([p1, p2, p3]): ֻҪ��һ���ɹ����ͷ���
��1��
```
let a = Promise.resolve('a');
let b = Promise.reject('b');
let c = Promise.resolve('c');
Promise.race([a, b, c]).then(res =>{
    console.log(res);
}).catch(err=>{
    // console.log(err);
})
//����a
```
9. ģ�⣺�û���¼  ->  �û���Ϣ

## ģ�黯:
1. js��֧��ģ�黯
```
	ruby   require
	python  import
```
2. ��ES6֮ǰ�������ƶ�һ��ģ��淶:
```
	Commonjs		��Ҫ�����  nodeJs    require('http')
	AMD			requireJs, curlJs
	CMD			seaJs
```
3. ES6������ͬ�����˺Ϳͻ���ģ��淶:
```
	import {xx} ddd
	
	Math.pow()
	Math.abs()

	import {pow, abs} from 'Math'		���Լ�Ϲ��
```
4. ģ�黯��ע�⣺ ��Ҫ�ŵ�����������
	+ ��ζ���ģ�飿
    	```
            export  ����
    		export const a =12;
    		export{
    			a as aaa,
    			b as banana
    		}
            
            export default .....
    	```
    + ���ʹ��?
    ```
		import
		import './modules/1.js'; 
		import {a as a, banana, c} from './modules/2.js'
		import * as modTwo from './modules/2.js';
        ʹ��ģ��:
	           <script type="module"></script>
    ```

5. import:  �ص�
	+ import ���������·����Ҳ�����Ǿ���·��
	   `import 'https://code.jquery.com/jquery-3.3.1.js';`
	+ importģ��ֻ�ᵼ��һ�Σ�������������ٴ�
	+ import './modules/1.js';  �����ô�ã��൱�������ļ�
	+ ������Ч����import���Զ�����������������ִ��
	+ ����ȥģ�����ݣ���������ж�ʱ�����ģ�����Ҳ��Ķ�������Common�淶����
	+ 
        ```
            * import()  ����node����require�� ���Զ�̬����, Ĭ��import�﷨����д��if֮������
        	����ֵ���Ǹ�promise����

        	import('./modules/1.js').then(res=>{
        		console.log(res.a+res.b);
        	});
        ```
6. �ŵ�:
	+ �������
	+ ����дif��
	+ ·��Ҳ���Զ�̬

##��������

1. ES6
```
������� ����
����
����
����ģ��
```
����
```
��:  Person
����: name
չʾ����: showName
Person.prototype.showName
```
2. ES5֮ǰ��
```
function Person(){
	this.name='aaa';
}
Person.prototype.showName=function(){}
```
3. ES6�б���:
��1��
```
class Person{
	constructor(){ //���췽��(����), ����new���Զ�ִ��
		this.name = 'aaa';
	} //һ��ע������û�ж���
	showName(){//ע������û��function showName��������ʽ

	}
}
```
��2��
```
const Person = class{}
<===>
class Person{}
```
��3��
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
��4��
```
let aaa='aaa';
let bbb='ddd';
let json={
    [aaa+bbb]:'welcome 51mmr.net'
}
```
4. ע�⣺ 
    + ES6����classû���������ܣ���ES5���ú���ģ����ԣ�Ĭ�Ϻ�������
    + ES6����this ��֮ǰ���ɶ���
��1��
```
    class Person{
        constructor(){
            this.name = 'Strive';

            this.showName = this.showName.bind(this); //����this
        }
        showName(){
            console.log('this:', this);
            return `����Ϊ: ${this.name}`;
        }
    }

    let p1 = new Person();

    let {showName } = p1;

    console.log(showName());
```
5. ����this:
    + fn.call(thisָ��˭, args1, args2....)
    + fn.apply(thisָ��˭, [args1, args2....])
    + fn.bind()

6. class����ȡֵ����(getter), ��ֵ����(setter)
��1��
```
   class Person{
        constructor(){
            
        }
        get aaa(){
            return `aaa������`;
        }
        set aaa(val){
            console.log(`����aaa���ԣ�ֵΪ:${val}`);
        }
    }

    let p1 = new Person();

    p1.aaa='123';

    console.log(p1.aaa);
```

7. ��̬����: ���������Ϸ���,����.aaa();
��1��
```
    class Person{
        constructor(){

        }
        static aaa(){
            return '��̬����';
        }
        show(){
            return '��';
        }
    }
    let p = new Person();
    console.log(p.show);
    console.log(Person.aaa());
```
8. ����Person,����Student,�̳�
    + ֮ǰ:
����
```
    //����
    function Person(name){
        this.name = name;
    }
    Person.prototype.showName = function(){
        return `������: ${this.name}`;
    };

    //����
    function Student(name,skill){
        Person.call(this,name); //�̳�����

        this.skill = skill;
    }
    Student.prototype = new Person(); //�̳з���
    

    //����

    let stu1 = new Student('Strive','��ѧ');
    console.log(stu1.showName());
```
    + ����: extends
```
class Student extends Person{
        
         }
```
��1��
```
    //����
    class Person{
        constructor(name){
            this.name = name;
        }
        showName(){
            console.log('����showName');
            return `����Ϊ: ${this.name}`;
        }
    }

    //����
    class Student extends Person{
        constructor(name,skill){
            super(name);
            this.skill = skill;
        }
        showName(){
            super.showName(); //�����ķ���ִ��

            //TODO ���Ӽ�����
            console.log('�������showName');
        }
        showSkill(){
            return  `���Ƕ��ļ���Ϊ: ${this.skill}`;
        }
    }
    

    //����

    let stu1 = new Student('Strive','��ѧ');
    console.log(stu1.showName());
```
��2����ק������С���飬��һ������ק���ڶ����̳е�һ������ק�����ԣ������ƶ�λ�ò��ܳ�����Ļ
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>51�����ˡ���http://www.51mmr.net רע[ǰ��+Java],�˲�����</title>
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
    //��ͨ��ק -- ����
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

    //���ࡪ�� ���Ʒ�Χ
    class LimitDrag extends Drag{
        fnMove(ev){
            super.fnMove(ev);

            //���Ʒ�Χ
            if(this.oDiv.offsetLeft<=0){
                this.oDiv.style.left =0;
            }
        }
    }

    //����
    new Drag('#div1');
    new LimitDrag('#div2');
</script>
</body>
</html>

```

##symbol:ʹ�����һ��
1. ��typeof��������������:
```
    symbol
    number
    string
    boolean
    Object
    undefined
    function
```
2. ���壺let syml = Symbol('aaa');
3. ע��:
    + Symbol ����new
    + Symbol() ������һ��Ψһֵ:���䴫˵, ��һ��key������һЩΨһ����˽��һЩ��
    + symbol��һ�������������ͣ��ͽ� symbol, ��������(�����ٲ����)
    + ���symbol��Ϊkey����for inѭ����������
����
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

##generator����(������)
1. ��ͷ����: () =>{}
2. generator����,����첽���Ƕ�׵����⣬ async
3. �﷨:
```
function * show(){
	yield
} 
function* show(){
}
function *show(){
}
```
4. ���壺
```
	function * gen(){
	    yield 'welcome';
	    yield 'to';
	    return '������';
	}
    let g1 = gen();         // �õ��Ľ����һ������g1��һ������
```
5. ����:�ֶ����ã��鷳:
```
	let g1 = gen();
	g1.next();  // {value:'welcome', done:false}
	g1.next();  // {value:'to', done:false}
	g1.next();  // {value:'������', done:true}
```
6. for .. of  �Զ����� generator
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
    //ע�⣺return�Ķ��������������
```
7. generator����������� for ... of ... , ������:
    + �⹹��ֵ��     let [a, ...b] = gen();
    + ��չ�������  '...' ===> console.log(...gen());
    + Array.from()�� console.log(Array.from(gen()));
    + generator��� axios��������
����
```
    //https://api.github.com/users/itstrive

    function * gen(){
        let val = yield 'aaa';
        yield axios.get(`https://api.github.com/users/${val}`);
    }

    let g1 = gen();

    let username = g1.next().value;         
        //��һ�鷵����aaa,
        //g1.next().value  �õ�����һ��promise����
    //console.log(g1.next(username).value);

    g1.next(username).value.then(res=>{ 
            //����һ�η��ؽ����ֵ����ȥ����Ϊgen��val��ֵ��Ȼ��ɹ�ִ�лص�����
        console.log(res.data);
    });
```

##�����첽
1. 
�첽: ����������һ������û��ִ���꣬��һ������������ʼ
ͬ��: ����ִ�У���һ������û��ִ���꣬��һ��û����ʼ
2. ���������
    + �ص�����
    + �¼�����
    + ����/����
    + Promise����
    + co.... 
    + ES2017,�涨 async

##��ȡ�ļ�  fs.readFile
```
const fs = require('fs');

//�򵥷�װ  fs��װ��һ��promise
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
1. �﷨
```
async function fn(){  //��ʾ�첽����������������첽����
let result = await  xxx	//��ʾ��������Ҫ�ȴ�

}
```
2. async�ص�:
    + awaitֻ�ܷŵ�async������
    + ���genrator���廯��ǿ
    + await���������promise����Ҳ�������֡��ַ���������
    + async����������һ��promise����
    + ֻҪawait������Promise״̬��� reject, ��ô����async�������ж�ִ��
��1��async����������һ��promise����
```
    async function fn(){
        throw new Error('Error������');
    }

    fn().then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })
```
��2��ֻҪawait������Promise״̬��� reject, ��ô����async�������ж�ִ��
```
    async function fn(){
        await Promise.reject('����������');     
        let a = await Promise.resolve('success');
        console.log(a);
    }

    fn().then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })
���⣺
Ϊʲôawait Promise.reject('����������'); ��then��ֱ���ܴ�����'����������'
��await Promise.resolve('success');      ���Ϊundefined

```
3. ��ν��async�������׳�����Ӱ���������:
    +  try{ }catch(e){}
����
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
    + promise����catch
����
```
await Promise.reject('����������').catch(err=>{
    console.log(err);
});

let a = await Promise.resolve('success');
console.log(a);
```
4. ���˽�����:
```
try{
	let f1 = await readFile('data/a.txt');
	let f3 = await readFile('data/c.txt');
	let f2 = await readFile('data/b.txt');
}catch(e){}
```
������������ûʲô��Ȼ��ϵ��ʱ��
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

## ���ݽṹ
1. ����
2. json�� ������....

## Set
1. set���ݽṹ:�������飬�������治�����ظ�ֵ
```
let arr  = ['a','b','a'];

let arr = new Array();
```
2. set�÷�:
```
let setArr = new Set(['a','b']);

setArr.add('a');   ��setArr�������һ��
setArr.delete('b');	ɾ��һ��
setArr.has('a')	�ж�setArr������û�д�ֵ
setArr.size	����

setArr.clear();	���
```

3. for...of.. ѭ��:
	+ for(let item of setArr){  //Ĭ����values()
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
4. set���ݽṹ�������:[...set]
��������ȥ��:
```
let arr = [1,2,3,4,5,6,7,6,5,4,3,2,1,2,3,4,4];
let newArr = [...new Set(arr)];
console.log(newArr);
```

����setʹ������ģ�mapѭ����filter:



let arr = [{},{}];
--------------------------------------------------------------
new Set([]);	�洢���飬 ����д����

new WeakSet({})	�洢json������д��������

WeakSetû��size��Ҳû��clear()

�У� add(), has(), delete()

ȷ�ϣ���ʼ��������Ӷ������ǲ��еġ������add���
������
let json2 ={
        a:'apple',
        b:2
    };

    set.add(json);
������
let set = new Set({a:1,b:2});
let set = new WeakSet({a:1,b:2});
����

--------------------------------------------------------------
�ܽ�: new Set()
--------------------------------------------------------------

let json ={
p1:1,
b:2
};

--------------------------------------------------------------
map:
���� json, ����json�ļ�(key)ֻ�����ַ���

map��key��������������

ʹ��:
let map = new Map();

map.set(key,value);    ����һ��ֵ

map.get(key)	��ȡһ��ֵ

map.delete(key)	ɾ��һ��

map.has(key)	�ж���û��

map.clear()	���

ѭ��:
for(let [key,value] of map){}

for(let key of map.keys()){}

for(let value of map.values()){}

for(let [k,v] of map.entries()){}

map.forEach((value, key) =>{
    console.log(value, key);
})

WeakMap():  keyֻ���Ƕ���

------------------------------------------------------------
�ܽ᣺
Set   ���������飬���ظ���û��key��û��get����
Map ��json������ǿ��key��������������ֵ

------------------------------------------------------------


============================================
============================================
����(��ֵ)�仯:
������:  (Binary)
	let a = 0b010101;
�˽���: (Octal)
	let a = 0o666;

ʮ������:
	#ccc
-------------------------------------------
Number()��parseInt()�� parseFloat()
-------------------------------------------

Number.isNaN(NaN)	-> true

Number.isFinite(a)   �ж��ǲ�������	��

Number.isInteger(a)  �ж������ǲ�������	��

-------------------------------------------
Number.parseInt();
Number.parseFloat();
-------------------------------------------
��ȫ����:
2**3

��ȫ����:    -(2^53-1) �� (2^53-1),   ����-(2^53-1) ��(2^53-1)

Number.isSafeInteger(a);

Number.MAX_SAFE_INTEGER	���ȫ����
Number.MIN_SAFE_INTEGER	��С��ȫ����

--------------------------------------------------------------------------------------
Math:
Math.abs()
Math.sqrt()
Math.sin()

Math.trunc()	��ȡ��ֻ������������
	Math.trunc(4.5)  ->  4
	Math.trunc(4.9)  ->  4

Math.sign(-5)   �ж�һ����������������������0
	Math.sign(-5)  ->  -1
	Math.sign(5)  -> 1
	Math.sign(0)	->  0
	Math.sign(-0)	->  -0
	����ֵ������ NaN

Math.cbrt()	����һ����������

	Math.cbrt(27)  ->  3

.......
-------------------------------------------------------
ES2018(ES9):
1. ��������
	�﷨:  (?<����>)

	let str = '2018-03-20';
	let reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
	let {year, month ,day} = str.match(reg).groups;
	console.log(year, month, day);
��������:
	\1  \2     $1  $2
����������������:
	�﷨:  \k<����>

	let reg = /^(?<Strive>welcome)-\k<Strive>$/;

	ƥ��: ��welcome-welcome��

	-------------------------------------------------

	let reg = /^(?<Strive>welcome)-\k<Strive>-\1$/;

	ƥ��: 'welcome-welcome-welcome'

�滻:
	$<����>

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

2.   dotAll ģʽ	s

	֮ǰ '.' ���������ʾƥ�����ⶫ���� ���ǲ����� \n 

   let reg = /\w+/gims;//g:���ƥ�䣬i:���Դ�Сд�� m:����ģʽ  s:ȫ��ģʽ

3. ��ǩ����
	function fn(){

	}

	fn()  //�������þ�����ͨ����

	fn`aaa`  //��ǩ����ʹ��

	-----------------------------------
	function fn(args){
		return args[0].toUpperCase();
	}

	console.log(fn`welcome`);


ES2018(ES9)

##proxy:  ����
1. ��չ(��ǿ)���󡢷���(����)һЩ����
����: 
```
	Vue

	Vue.config.keyCodes.enter=65
```
2. Proxy����: ����vue�����أ�Ԥ�����ϱ�����չ���ܡ�ͳ�ơ���ǿ����ȵ�
3. proxy�����ģʽһ�֣�  ����ģʽ
```
let obj ={
name:'Strive'
};
//��������name
obj.name  // Strive
```
4. �﷨:
```
new Proxy(target, handler);
let obj = new Proxy(������Ķ���,�Դ���Ķ�����ʲô����)

���У�handler�Ǹ�json
{
	set(){},  //���õ�ʱ��ɵ�����
	get(){},  //��ȡ�ɵ�����
	deleteProperty(){},  //ɾ��
	has(){}  //������û���������  ��xxx�� in obj
	apply()  //���ú�������
	.....
}
```
5. get��ʹ��
��1��
```
    let obj = {
        name:'Strive'
    };

    let newObj = new Proxy(obj, {
        get(target, property){
            return target[property];
        }
    });
    //newobj���õ���˭��get�еĲ�����property����˭��target���Ǵ�����Ǹ�obj����
    console.log(newObj.name);       //�Զ�ִ��get����
    console.log(newObj.age);
```
��2��ʵ��һ����֮ǰ����һ�������������ԣ�Ĭ�ϲ����ڵ�ʱ�������Ǹ���undefined��ϣ����������ڴ���(����)��Ϣ��
```
        get(target, property){
            if(property in target){
                return target[property];
            }else{
                //throw new ReferenceError(`${property}���Բ��ڴ˶�����`);
                console.warn(`${property}���Բ��ڴ˶�����`);
                return '^_^';
            }
        }
```
��3��ʵ��DOM.div()��DOM.a()��DOM.ul()
```
   const DOM = new Proxy({},{
        get(target, property){
            //console.log(target, property);
            //property DOM.xxx �����xxx
            return function(attr={}, ...children){
                //console.log(attr, children);
                const el = document.createElement(property);

                //�������
                for(let key of Object.keys(attr)){
                    el.setAttribute(key, attr[key]);
                }
                //�����Ԫ��
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
        {id:'div1',class:'aaa'},'����div','�ǺǺ�',
        DOM.a({href:'http://www.51mmr.net'}, '���ʹ���'),
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
6. set(), ���ã�����:
��������һ�����䣬��֤���������ҷ�Χ���ܳ���200
```
    let obj =new Proxy({},{
        set(target, prop, value){
            if(prop == 'age'){
                if(!Number.isInteger(value)){
                    throw new TypeError(`�������Ϊ����`);
                }
                if(value>200){
                    throw new RangeError('���䳬���ˣ�����С��200��');
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
7. deleteProperty(): ɾ��������:
����
```
    let json = {
        a:1,
        b:2
    };

    let newJson = new Proxy(json, {
        deleteProperty(target, property){
            console.log(`��Ҫɾ��${property}����`);
            //TODO
            delete target[property];
        }
    });

    delete newJson.a;

    console.log(newJson);

```
8. has(): �����û��
����
```
        let json = {
            a:1,
            b:2
        };

        let newJson = new Proxy(json, {
            has(target, property){
                console.log(`�ж��Ƿ���ڵ���has����`);
                //TODO
                return property in target;
            }
        });

        console.log('a' in newJson);

        //delete newJson.a;

        console.log(newJson);
```
9. apply()  :���ط���
����
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

##Reflect: ����
1. 
```
Reflect.apply(���õĺ�����thisָ�򣬲�������);
����fn.apply()
```
����
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
2. Object.xxx  �����ڲ����������磺Object.defineProperty
3. Object.xxx  �����ڲ��������ŵ�Reflect�������ϣ�ͨ��Reflect��������ֱ���õ������ڲ�����
����
```
'assign' in Object    ->   Reflect.has(Object, 'assign')

 delete json.a	      ->   Reflect.deleteProperty(json, 'a');
```
