##Promise
1. Promise 是一个 构造函数，既然是构造函数， 那么，我们就可以  new Promise() 得到一个 Promise 的实例；
2. 在 Promise 上，有两个函数，分别叫做 resolve（成功之后的回调函数） 和 reject（失败之后的回调函数）
3. 在 Promise 构造函数的 Prototype 属性上，有一个 .then() 方法，也就说，只要是 Promise 构造函数创建的实例，都可以访问到 .then() 方法
4. Promise 表示一个 异步操作；每当我们 new 一个 Promise 的实例，这个实例，就表示一个具体的异步操作；
5. 既然 Promise 创建的实例，是一个异步操作，那么，这个 异步操作的结果，只能有两种状态：
    + 状态1： 异步执行成功了，需要在内部调用 成功的回调函数 resolve 把结果返回给调用者；
    + 状态2： 异步执行失败了，需要在内部调用 失败的回调函数 reject 把结果返回给调用者；
    + 由于 Promise 的实例，是一个异步操作，所以，内部拿到 操作的结果后，无法使用 return 把操作的结果返回给调用者； 这时候，只能使用回调函数的形式，来把 成功 或 失败的结果，返回给调用者；
6. 我们可以在 new 出来的 Promise 实例上，调用 .then() 方法，【预先】 为 这个 Promise 异步操作，指定 成功（resolve） 和 失败（reject） 回调函数；

    步骤解析：
1. 
```
// 注意：这里 new 出来的 promise， 只是代表 【形式上】的一个异步操作；
// 什么是形式上的异步操作：就是说，我们只知道它是一个异步操作，但是做什么具体的异步事情，目前还不清楚
var promise = new Promise()
```
2.
```
// 这是一个具体的异步操作，其中，使用 function 指定一个具体的异步操作
var promise = new Promise(function(){
  // 这个 function 内部写的就是具体的异步操作！！！
})
```
3.
```
// 每当 new 一个 Promise 实例的时候，就会立即 执行这个 异步操作中的代码
// 也就是说，new 的时候，除了能够得到 一个 promise 实例之外，还会立即调用 我们为 Promise 构造函数传递的那个 function，执行这个 function 中的 异步操作代码；
/* var promise = new Promise(function () {
  fs.readFile('./files/2.txt', 'utf-8', (err, dataStr) => {
    if (err) throw err
    console.log(dataStr)
        //结果为222，因为2.text中内容就是222
  })
}) */
```
4. 
```
//不想创建时读文件，想实现当我们调用的时候再执行，就可以将Promise放入一个函数中去，不过要注意路径
// 初衷： 给路径，返回读取到的内容

//封装：
function getFileByPath(fpath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {

      if (err) return reject(err)
      resolve(dataStr)

    })
  })
}
//调用：
getFileByPath('./files/2.txt')
  .then(function (data) {
    console.log(data + '-------')
  }, function (err) {
    console.log(err.message)
  })
```
注意：
```
先读取文件1，在读取2，最后读取3
通过 .then 指定 回调函数的时候，成功的回调函数，必须传，但是，失败的回调，可以省略不传
在上一个 .then 中，返回一个新的 promise 实例，可以继续用下一个 .then 来处理
```
例1：当 我们有这样的需求： 哪怕前面的 Promise 执行失败了，但是，不要影响后续 promise 的正常执行，此时，我们可以单独为 每个 promise，通过 .then 指定一下失败的回调；但是注意：失败的回调中一定要有返回新的promise对象
```
/* getFileByPath('./files/11.txt')
  .then(function (data) {
    console.log(data)

    // 读取文件2
    return getFileByPath('./files/2.txt')
  }, function (err) {
    console.log('这是失败的结果：' + err.message)
    // return 一个 新的 Promise
    return getFileByPath('./files/2.txt')
  })
  .then(function (data) {
    console.log(data)

    return getFileByPath('./files/3.txt')
  })
  .then(function (data) {
    console.log(data)
  }).then(function (data) {
    console.log(data)
  }) */

// console.log('OKOKOK')

```
例2：有时候，我们有这样的需求，个上面的需求刚好相反：如果 后续的Promise 执行，依赖于 前面 Promise 执行的结果，如果前面的失败了，则后面的就没有继续执行下去的意义了，此时，我们想要实现，一旦有报错，则立即终止所有 Promise的执行；
```
getFileByPath('./files/1.txt')
  .then(function (data) {
    console.log(data)

    // 读取文件2
    return getFileByPath('./files/22.txt')
  })
  .then(function (data) {
    console.log(data)

    return getFileByPath('./files/3.txt')
  })
  .then(function (data) {
    console.log(data)
  })
  .catch(function (err) { 
    // catch 的作用： 如果前面有任何的 Promise 执行失败，则立即终止所有 promise 的执行，并 马上进入 catch 去处理 Promise中 抛出的异常；
    console.log('这是自己的处理方式：' + err.message)
  })
```
例3：演示Jquery中Promise
```
<input type="button" value="获取数据" id="btn">

  <script src="./node_modules/jquery/dist/jquery.min.js"></script>

  <script>
    $(function () {
      $('#btn').on('click', function () {
        $.ajax({
          url: './data.json',
          type: 'get',
          dataType: 'json'
        })
          .then(function (data) {
            console.log(data)
          })
      })
    });
  </script>
```

##vuex
1. 配置vuex的步骤
```
   1. 运行 cnpm i vuex -S 
   2. 导入包
   3. 注册vuex到vue中
   4. new Vuex.Store() 实例，得到一个 数据仓储对象
   5. 将 vuex 创建的 store 挂载到 VM 实例上， 只要挂载到了 vm 上，任何组件都能使用 store 来存取数据
```
例：
```
    // 入口文件
import Vue from 'vue'
    // 配置vuex的步骤
    // 1. 运行 cnpm i vuex -S 
    // 2. 导入包
import Vuex from 'vuex'
    // 3. 注册vuex到vue中
Vue.use(Vuex)
    // 4. new Vuex.Store() 实例，得到一个 数据仓储对象
var store = new Vuex.Store({
  state: {
        // 大家可以把 state 想象成 组件中的 data ,专门用来存储数据的
        // 如果在 组件中，想要访问，store 中的数据，只能通过 this.$store.state.*** 来访问
    count: 0
  },
  mutations: {
        // 注意： 如果要操作 store 中的 state 值，只能通过 调用 mutations 提供的方法，才能操作对应的数据，不推荐直接操作 state 中的数据，因为 万一导致了数据的紊乱，不能快速定位到错误的原因，因为，每个组件都可能有操作数据的方法；
    increment(state) {
      state.count++
    },
        // 注意： 如果组件想要调用 mutations 中的方法，只能使用 this.$store.commit('方法名')
        // 这种 调用 mutations 方法的格式，和 this.$emit('父组件中方法名')很相似
    subtract(state, obj) {
          // 注意： mutations 的 函数参数列表中，最多支持两个参数，其中，参数1： 是 state 状态； 参数2： 通过 commit 提交过来的参数；
      console.log(obj)
      state.count -= (obj.c + obj.d)
    }
  },
  getters: {
        // 注意：这里的 getters， 只负责 对外提供数据，不负责 修改数据，如果想要修改 state 中的数据，请 去找 mutations
    optCount: function (state) {
      return '当前最新的count值是：' + state.count
    }
        // 经过咱们回顾对比，发现 getters 中的方法， 和组件中的过滤器比较类似，因为 过滤器和 getters 都没有修改原数据， 都是把原数据做了一层包装，提供给了 调用者；
        // 其次， getters 也和 computed 比较像， 只要 state 中的数据发生变化了，那么，如果 getters 正好也引用了这个数据，那么 就会立即触发 getters 的重新求值；
  }
})
import App from './App.vue'

const vm = new Vue({
  el: '#app',
  render: c => c(App),
  store     // 5. 将 vuex 创建的 store 挂载到 VM 实例上， 只要挂载到了 vm 上，任何组件都能使用 store 来存取数据
})



调用：
<template>
  <div>
    <input type="button" value="减少" @click="remove">
    <input type="button" value="增加" @click="add">
    <br>
    <input type="text" v-model="$store.state.count">
  </div>
</template>
<script>
export default {
  data() {
    return {
        // count: 0
    };
  },
  methods: {
    add() {
        //this.$store.state.count++; 千万不要这么用，不符合 vuex 的设计理念
      this.$store.commit("increment");
    },
    remove() {
      this.$store.commit("subtract", { c: 3, d: 1 });
    }
  },
  computed:{
    fullname: {
      get(){},
      set(){}
    }
  }
};
</script>

<style lang="scss" scoped>

</style>

```

2. 总结：

  + state中的数据，不能直接修改，如果想要修改，必须通过 mutations
  + 如果组件想要直接 从 state 上获取数据： 需要 this.$store.state.xxx 
  + 如果组件，想要修改数据，必须使用 mutations 提供的方法,需要通过this.$store.commit('方法的名称'， 唯一的一个参数)
  + 如果store 中 state 上的数据， 在对外提供的时候，需要做一层包装，那么 ，推荐使用 getters, 如果需要使用 getters ,则用 this.$store.getters.xxx